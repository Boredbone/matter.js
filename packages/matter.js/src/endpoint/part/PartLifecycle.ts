/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Part } from "../Part.js";
import { Observable } from "../../util/Observable.js";
import type { Node } from "../../node/Node.js";
import { ImplementationError } from "../../common/MatterError.js";
import { LifecycleStatus } from "../../common/Lifecycle.js";

/**
 * State related to a {@link Part}'s lifecycle.
 */
export class PartLifecycle {
    #part: Part;
    #isInstalled = false;
    #isReady = false;
    #hasId = false;
    #hasNumber = false;
    #installed = new Observable<[]>();
    #ready = new Observable<[]>();
    #destroyed = new Observable<[]>();
    #changed = new Observable<[type: PartLifecycle.Change, part: Part]>();
    #queuedUpdates?: Array<PartLifecycle.Change>;

    /**
     * Emitted when a part is installed into an initialized owner.
     */
    get installed() {
        return this.#installed;
    }

    /**
     * Emitted when a part is fully initialized (excepting children).
     */
    get ready() {
        return this.#ready;
    }

    /**
     * Emitted when the part is destroyed.
     */
    get destroyed() {
        return this.#destroyed;
    }

    /**
     * Bubbling event indicating changes to part structure.
     */
    get changed() {
        return this.#changed;
    }

    /**
     * Is the {@link Part} installed in a {@link Node}?
     */
    get isInstalled() {
        return this.#isInstalled;
    }

    /**
     * Is the {@link Part} fully initialized (excepting children)?
     */
    get isReady() {
        return this.#isReady;
    }

    /**
     * Does the part have an ID?
     */
    get hasId() {
        return this.#hasId;
    }

    /**
     * Does the part have an endpoint number?
     */
    get hasNumber() {
        return this.#hasNumber;
    }

    constructor(part: Part) {
        this.#part = part;
    }

    /**
     * Reset the {@link Part}.  After reset the part is reverted to uninstalled state.
     */
    async reset() {
        this.#isReady = this.#isInstalled = false;
        this.#part.construction.setStatus(LifecycleStatus.Inactive);
    }

    /**
     * Inform the Lifecycle of a change in lifecycle.
     */
    change(type: PartLifecycle.Change) {
        // Update state
        switch (type) {
            case PartLifecycle.Change.Installed:
                // Sanity checks
                if (!this.#part.owner) {
                    throw new ImplementationError("Part reports as installed but has no owner assigned");
                }

                this.#isInstalled = true;
                break;

            case PartLifecycle.Change.Ready:
                // Sanity checks
                if (!this.#part.owner) {
                    throw new ImplementationError("Part reports as ready but has no owner assigned");
                }
                if (!this.#hasId) {
                    throw new ImplementationError("Part reports as ready but has no ID assigned");
                }
                if (!this.#hasNumber) {
                    throw new ImplementationError("Part reports as ready but has no number assigned");
                }
                this.#isReady = true;
                break;

            case PartLifecycle.Change.IdAssigned:
                this.#hasId = true;
                break;

            case PartLifecycle.Change.NumberAssigned:
                this.#hasNumber = true;
                break;
        }

        // We want events to trigger in correct order but some of them cascade.
        // So if we're currently emitting, enqueue
        if (this.#queuedUpdates) {
            this.#queuedUpdates?.push(type);
            return;
        }

        // Emit events
        this.#queuedUpdates = [ type ];
        try {
            while (this.#queuedUpdates.length) {
                const type = this.#queuedUpdates[0];
                this.#queuedUpdates.shift();

                // Emit change event
                this.changed.emit(type, this.#part);

                // Emit part-specific events
                const observable = (this as unknown as Record<string, Observable>)[type];
                if (observable) {
                    observable.emit();
                }

                this.#queuedUpdates.shift();
            }
        } finally {
            this.#queuedUpdates = undefined;
        }
    }
}

export namespace PartLifecycle {
    export enum Change {
        Installed = "installed",
        Ready = "ready",
        Destroyed = "destroyed",
        ServersChanged = "servers-changed",
        ClientsChanged = "clients-changed",
        IdAssigned = "id-assigned",
        NumberAssigned = "number-assigned",
    }
}
