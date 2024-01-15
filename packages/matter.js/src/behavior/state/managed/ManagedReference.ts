/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Val } from "./Val.js";

type Container = Record<string | number, Val>;

/**
 * ManagedReference manages a reference to a container property of another
 * reference.
 *
 * The ManagedReference detects when the value changes and clones the container
 * if it is the original copy.
 *
 * This serves the following purposes:
 *
 *   - We can change properties in a container (an array or object) without
 *     modifying the original container
 *
 *   - When nested, this effect bubbles so we make copies at all levels in the
 *     hierarchy as necessary
 *
 *   - Preserves metadata regarding the state of the value
 *
 * Change detection happens automatically if the value is replaced.  If a
 * subvalue is replaced, the logic replacing the subvalue must update "changed"
 * manually before replacing the subvalue.  For managed structures this is
 * handled by a separate ManagedReference.
 *
 * @param parent a reference to the container we reference
 * @param index the key we reference
 * @param assertWriteOk enforces ACLs and read-only
 * @param clone clones the container prior to write; undefined if not transactional
 *
 * @returns a reference to the property
 */
export function ManagedReference(
    parent: Val.Reference<Val.Collection>,
    index: string | number,
    assertWriteOk: (value: Val) => void,
    clone?: (container: Val) => Val,
) {
    const original = (parent.value as Container)[index];
    let value = original;

    const reference: Val.Reference = {
        owner: parent,

        get value() {
            // Authorization is unnecessary here because the reference would
            // not exist if access is unauthorized
            return value;
        },

        set value(newValue: Val) {
            if (value === newValue) {
                return;
            }

            // Authorization and validation
            assertWriteOk(newValue);

            // Set the value directly before change() so change() doesn't
            // create a useless clone
            replaceValue(newValue);

            // Now use change to complete the update
            this.change(() => ((parent.value as Container)[index] = newValue));
        },

        get original() {
            return original;
        },

        change(mutator: () => void) {
            parent.change(() => {
                // In transactions, clone the value if we haven't done so yet
                if (clone && value === original) {
                    const newValue = clone(value);
                    (parent.value as Container)[index] = newValue;
                    replaceValue(newValue);
                }

                // Apply changes
                mutator();
            });
        },

        refresh() {
            replaceValue((parent.value as Container)[index]);
        },

        async notify() {
            if (original === value) {
                return;
            }
            await parent.notify(typeof index === "string" ? index : undefined, original, value);
        },
    };

    return reference;

    function replaceValue(newValue: Val) {
        value = newValue;

        const subrefs = reference.subreferences;
        if (subrefs) {
            for (const key in subrefs) {
                subrefs[key].refresh();
            }
        }
    }
}
