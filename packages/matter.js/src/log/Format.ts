/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError, InternalError } from "../common/MatterError.js";
import { ByteArray } from "../util/ByteArray.js";
import { Diagnostic } from "./Diagnostic.js";
import { Level } from "./Level.js";

/**
 * Get a formatter for the specified format.
 */
export function Format(format: string) {
    if (format === undefined) {
        format = Format.ANSI;
    }

    switch (format) {
        case Format.PLAIN:
            return plainLogFormatter;

        case Format.ANSI:
            return ansiLogFormatter;

        case Format.HTML:
            return htmlLogFormatter;
            
        default:
            throw new ImplementationError(`Unsupported log format "${format}"`);
    }
}

/**
 * Log stylization support.
 */
export namespace Format {
    export type Type = typeof PLAIN | typeof ANSI | typeof HTML;

    /** Generate text only */
    export const PLAIN = "plain";

    /** Format log messages using ANSI escape codes */
    export const ANSI = "ansi";

    /** Format log messages using HTML tags */
    export const HTML = "html";

    export const plain = plainLogFormatter;
    export const ansi = ansiLogFormatter;
    export const html = htmlLogFormatter;
}

export type Producer = () => string;

interface Formatter {
    text(text: string): string;
    indent(producer: Producer): string;
    break(): string;
    key(text: string): string;
    value(producer: Producer): string;
    emphasize(producer: Producer): string;
}

/**
 * Create a small utility shared by plain and ansi formats.
 */
function plaintextCreator() {
    let broke = false;
    let indents = 0;

    return {
        text(value: string) {
            if (broke) {
                broke = false;
                return `\n${''.padStart(indents * 4)}${value}`;
            }
            return value;
        },

        break() {
            broke = true;
            return "";
        },

        indent(producer: () => string) {
            indents++;
            const result = producer();
            indents--;
            return result;
        },
    }
}

function plainLogFormatter(now: Date, level: Level, facility: string, prefix: string, values: any[]) {
    const creator = plaintextCreator();

    const formattedValues = renderDiagnostic(values, {
        text: text => creator.text(text),
        indent: producer => creator.indent(producer),
        break: () => creator.break(),
        key: text => creator.text(`${text}: `),
        value: producer => producer(),
        emphasize: producer => creator.text(`*${producer()}*`),
    });

    return `${formatTime(now)} ${Level[level]} ${facility} ${prefix}${formattedValues}`;
}

const ANSI_CODES = {
    reset: 0,
    bold: 1,
    dim: 2,
    red: 31,
    green: 32,
    yellow: 33,
    white: 37,
    default: 39,
    blue: 34,
    gray: 90,
}

type AnsiCode = "normal" | keyof typeof ANSI_CODES;

function ansiEscape(...codes: AnsiCode[]) {
    const numbers = [];
    for (const code of codes) {
        if (code === "normal") {
            continue;
        }
        const number = ANSI_CODES[code];
        if (number === undefined) {
            throw new InternalError(`Invalid ANSI code ${code}`);
        }
        numbers.push(number);
    }
    if (!numbers.length) {
        return "";
    }
    return `\u001b[${numbers.join(";")}m`;
}

interface Style {
    color?: "default" | keyof typeof ANSI_CODES;
    dim?: boolean;
    bold?: boolean;
}

const Styles = {
    default: { color: "default" },
    prefix: { color: "gray" },
    facility: { color: "gray", bold: true },
    debug: { color: "default", dim: true },
    info: { color: "default" },
    notice: { color: "green" },
    warn: { color: "yellow" },
    error: { color: "red" },
    fatal: { color: "red", bold: true },
    key: { color: "blue" },
    value: { color: "default", dim: true },
    emphasized: { bold: true },
    ballotCheck: { color: "green" },
    ballotCross: { color: "red" },
} as const satisfies Record<string, Style>;

type StyleName = keyof typeof Styles;

function ansiLogFormatter(now: Date, level: Level, facility: string, nestPrefix: string, values: any[]) {
    const primary = Level[level].toLowerCase() as StyleName;
    const creator = plaintextCreator();
    const currentStyle: Style = {
        color: "default",
        dim: false,
        bold: false,
    };
    let styles: (StyleName)[] = [ primary ];

    const prefix = style(
        "prefix",
        `${formatTime(now)} ${Level[level].padEnd(6)}`,
    );

    facility = style(
        "facility",
        facility.length > 20
            ? `${facility.slice(0, 10)}~${facility.slice(facility.length - 9)}`
            : facility.padEnd(20),
    );

    if (nestPrefix) {
        nestPrefix = style("prefix", nestPrefix);
    }

    let message = renderDiagnostic(
        values,
        {
            text: text => creator.text(style(styles[styles.length - 1], text)),

            indent: producer => creator.indent(producer),

            break: () => {
                // After the first line revert to default styling
                if (styles[0] === primary) {
                    styles[0] = "default";
                }

                return creator.break();
            },

            key: text => creator.text(style("key", `${text}: `)),

            value: producer => {
                styles.push("value");
                const result = producer();
                styles.pop();
                return result;
            },

            emphasize: producer => {
                styles.push("emphasized");
                const result = producer();
                styles.pop();
                return result;
            },
        }
    );

    return `${prefix} ${facility} ${nestPrefix}${message}${ansiEscape("reset")}`;

    // Convert a style name into a set of escape codes to transition state
    function escapes(styleName: StyleName) {
        const style = Styles[styleName] as Style;
        if (style === undefined) {
            throw new InternalError(`Invalid ANSI style "${styleName}"`);
        }

        const targetDim = !!style.dim;
        const targetBold = !!style.bold;
        let targetColor = style.color;

        // Compute target color from style stack if not explicit
        if (!targetColor) {
            for (let i = styles.length; i > 0; i--) {
                const color = (Styles[styles[i - 1]] as Style).color;
                if (color) {
                    targetColor = color;
                    break;
                }
            }
        }

        let codes = Array<AnsiCode>();

        if ((!targetDim && currentStyle.dim) || (!targetBold && currentStyle.bold)) {
            // Don't think we can reset dim/bold without full reset
            codes.push("reset");
            currentStyle.dim = false;
            currentStyle.bold = false;
            currentStyle.color = "default";
        }

        if (targetDim !== currentStyle.dim) {
            codes.push("dim");
            currentStyle.dim = true;
        }

        if (targetBold !== currentStyle.bold) {
            codes.push("bold");
            currentStyle.bold = true;
        }

        if (targetColor && targetColor !== currentStyle.color) {
            codes.push(targetColor);
            currentStyle.color = targetColor;
        }

        return ansiEscape(...codes);
    }

    // Apply style codes.  Maintains color state (via escapes) so values must
    // be rendered sequentially as they appear
    function style(style: StyleName, text: string) {
        if (text === "") {
            return text;
        }
        const segments = text.match(/([^✓✔✗✘]+|[✓✔✗✘])/g);
        if (segments === null) {
            throw new InternalError("ANSI text processing regex failure")
        }
        return segments.map(segment => {
            let esc;
            switch (segment) {
                case "✓":
                case "✔":
                    esc = escapes("ballotCheck");
                    break;

                case "✗":
                case "✘":
                    esc = escapes("ballotCross");
                    break;

                default:
                    esc = escapes(style);
                    break;
            }
            return `${esc}${segment}`
        }).join("");
    }
}

function htmlSpan(type: string, inner: string) {
    return `<span class="matter-log-${type}">${inner}</span>`;
}

function htmlLogFormatter(now: Date, level: Level, facility: string, prefix: string, values: any[]) {
    function escape(text: string) {
        return text
            .toString()
            .replace(/</g, "&amp")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }

    const formattedValues = renderDiagnostic(
        values,
        {
            text: escape,
            break: () => "<br/>",
            indent: producer => htmlSpan("indent", producer()),
            key: text => htmlSpan("key", `${escape(text)}:`) + " ",
            value: producer => htmlSpan("value", producer()),
            emphasize: producer => `<em>${producer()}</em>`,
        },
    );

    const np = prefix.replace(/ /g, "&nbsp;");

    return htmlSpan(
        `line ${Level[level].toLowerCase()}`,
        `${htmlSpan("time", formatTime(now))} ${htmlSpan("level", Level[level])} ${htmlSpan(
            "facility",
            facility,
        )} ${np}${formattedValues}`,
    );
}

/**
 * Render a value based on its JS type.
 */
function renderValue(
    value: unknown,
    formatter: Formatter,
): string {
    if (value === undefined) {
        return "undefined";
    }
    if (value === null) {
        return "null";
    }
    if (value instanceof ByteArray) {
        return formatter.text(value.toHex());
    }
    if (value instanceof Error) {
        return renderDiagnostic(Diagnostic.error(value), formatter);
    }
    if (typeof value === "object" && Symbol.iterator in value) {
        const list = sequenceToList(value as Iterable<unknown>);
        if (!list.length) {
            return "";
        }
        if (list.length > 1) {
            return renderList(list, formatter);
        }
        return list[0].map(e => renderDiagnostic(e, formatter)).join(" ");
    }

    const text = value.toString().trim();
    if (text.indexOf("\n") === -1) {
        return formatter.text(text);
    }
    
    return renderList(text.split("\n"), formatter);
}

function renderList(value: Iterable<unknown>, formatter: Formatter) {
    const parts = Array<string>();

    for (const v of value) {
        parts.push(renderDiagnostic(v, formatter));
        formatter.break();
    }

    return parts.join("");
}

function renderIndentedList(value: Iterable<unknown>, formatter: Formatter) {
    return formatter.indent(() => {
        return renderList(value, formatter);
    });
}

function renderDictionary(value: object, formatter: Formatter) {
    const entries = value instanceof Map ? value.entries() : Object.entries(value);

    const parts = [];
    for (const [k, v] of entries) {
        if (parts.length) {
            parts.push(" ");
        }
        parts.push(formatter.key(k));
        parts.push(formatter.value(() => renderDiagnostic(v, formatter)));
    }

    return parts.join("");
}

function valueFor(value: unknown) {
    if (typeof value !== "object" || value === null) {
        return value;
    }
    const proxied = (value as Diagnostic)[Diagnostic.value];
    if (proxied) {
        return valueFor(proxied);
    }
    return value;
}

function presentationFor(value: unknown) {
    if (typeof value !== "object" || value === null) {
        return;
    }
    if (Diagnostic.presentation in (value as Diagnostic)) {
        return (value as Diagnostic)[Diagnostic.presentation];
    }
    const proxied = (value as Diagnostic)[Diagnostic.value];
    if (proxied) {
        return presentationFor(proxied);
    }
}

/**
 * Render a value with presentation support
 */
function renderDiagnostic(value: unknown, formatter: Formatter): string {
    const presentation = presentationFor(value);
    value = valueFor(value);

    switch (presentation) {
        case undefined:
            return renderValue(value, formatter);

        case Diagnostic.Presentation.List:
            if (typeof (value as Iterable<unknown>)?.[Symbol.iterator] !== "function") {
                throw new ImplementationError("Diagnostic list is not iterable");
            }
            return renderIndentedList(value as Iterable<unknown>, formatter);

        case Diagnostic.Presentation.Emphasized:
            return formatter.emphasize(() => renderDiagnostic(value, formatter));

        case Diagnostic.Presentation.Dictionary:
            if (typeof value !== "object") {
                throw new ImplementationError("Diagnostic dictionary is not an object");
            }
            return renderDictionary(value as object, formatter);

        default:
            throw new ImplementationError(`Unsupported diagnostic presentation "${presentation}"`);
    }
}

/**
 * Group items in an iterable based on their presentation.  The result is then
 * appropriate for rendering as a list. 
 */
function sequenceToList(sequence: Iterable<unknown>) {
    let group: unknown[] | undefined;
    const list = Array<unknown[]>();
    for (const value of sequence) {
        if (presentationFor(value) === Diagnostic.Presentation.List) {
            group = undefined;
            list.push(value as unknown[]);
            continue;
        }
        if (!group) {
            list.push(group = [ value ]);
        } else {
            group.push(value);
        }
    }
    return list;
}

function formatTime(time: Date) {
    return `${time.getFullYear()}-${(time.getMonth() + 1).toString().padStart(2, "0")}-${time
        .getDate()
        .toString()
        .padStart(2, "0")} ${time.getHours().toString().padStart(2, "0")}:${time
        .getMinutes()
        .toString()
        .padStart(2, "0")}:${time.getSeconds().toString().padStart(2, "0")}.${time
        .getMilliseconds()
        .toString()
        .padStart(3, "0")}`;
}
