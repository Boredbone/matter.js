/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MdnsBroadcaster } from "./mdns/MdnsBroadcaster.js";
import { MdnsScanner } from "./mdns/MdnsScanner.js";

/**
 * Abstract base class that represents a node in the matter ecosystem.
 */
export abstract class MatterNode {
    abstract close(): Promise<void>;

    abstract getPort(): number | undefined;

    abstract initialize(ipv4Disabled: boolean): void;

    abstract start(): Promise<void>;

    abstract setMdnsBroadcaster(mdnsBroadcaster: MdnsBroadcaster): void;

    abstract setMdnsScanner(mdnsScanner: MdnsScanner): void;
}
