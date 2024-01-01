/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Descriptor } from "../../../cluster/definitions/DescriptorCluster.js";
import { ClusterId } from "../../../datatype/ClusterId.js";
import { EndpointNumber } from "../../../datatype/EndpointNumber.js";
import { Part } from "../../../endpoint/Part.js";
import { Time, Timer } from "../../../time/Time.js";
import { TypeFromSchema } from "../../../tlv/TlvSchema.js";
import { isDeepEqual } from "../../../util/DeepEqual.js";
import { IndexBehavior } from "../index/IndexBehavior.js";
import { StructuralChangeType } from "../lifecycle/StructuralChangeType.js";
import { PartsBehavior } from "../parts/PartsBehavior.js";
import { DescriptorBehavior } from "./DescriptorBehavior.js";

/**
 * This is the default server implementation of DescriptorBehavior.
 */
export class DescriptorServer extends DescriptorBehavior {
    declare internal: DescriptorServer.Internal;

    override initialize() {
        this.part.lifecycle.events.structure$Change.on(
            (type, part) => this.#applyChange(type, part)
        );

        if (!this.state.deviceTypeList?.length) {
            const partType = this.part.type;
            this.state.deviceTypeList = [
                {
                    deviceType: partType.deviceType,
                    revision: partType.deviceRevision,
                },
            ];
        }
    }

    override destroy() {
        if (this.internal.updateTimer) {
            this.internal.updateTimer.stop();
        }
    }

    /**
     * Extend device type metadata.  This is a shortcut for deduped insert
     * into the deviceTypeList cluster attribute.
     */
    addDeviceTypes(...deviceTypes: DescriptorServer.DeviceType[]) {
        const list = this.state.deviceTypeList;
        nextInput: for (const newDeviceType of deviceTypes) {
            for (const existingDeviceType of this.state.deviceTypeList) {
                if (isDeepEqual(newDeviceType, existingDeviceType)) {
                    continue nextInput;
                }
            }
            list.push(newDeviceType);
        }
        this.state.deviceTypeList = list;
    }

    /**
     * Process a structure change event and trigger state updates if necessary.
     */
    #applyChange(type: StructuralChangeType, part: Part) {
        switch (type) {
            case StructuralChangeType.PartAdded:
            case StructuralChangeType.PartDeleted:
            case StructuralChangeType.NumberAssigned:
                if (part === this.part) {
                    return;
                }
                this.internal.updatePartsList = true;
                break;

            case StructuralChangeType.ServersChanged:
                if (part !== this.part) {
                    return;
                }
                this.internal.updateServerList = true;
                break;

            default:
                return;
        }

        if (this.internal.updateTimer !== undefined) {
            this.internal.updateTimer = Time.getTimer(0, () => this.#update);
        }
    }

    /**
     * Apply updates.  We use an immediate timer to coalesce changes.
     */
    #update() {
        delete this.internal.updateTimer;
        
        if (this.internal.updatePartsList) {
            this.state.partsList = this.#partsList;
            this.internal.updatePartsList = false;
        }

        if (this.internal.updateServerList) {
            this.state.serverList = this.#serverList;
            this.internal.updateServerList = false;
        }
    }

    /**
     * Computed current parts list.
     */
    get #partsList() {
        const part = this.part;

        // The presence of IndexBehavior indicates a flat namespace as
        // required by Matter standard for root and aggregator endpoints
        if (part.behaviors.isActive(IndexBehavior)) {
            const index = part.agent.get(IndexBehavior);
            return Object.keys(index.state.partsByNumber).map(Number.parseInt) as EndpointNumber[];
        }

        // If IndexBehavior is not present then just list direct
        // descendants
        if (part.behaviors.isActive(PartsBehavior)) {
            return [ ...part.parts ].map(part => part.number) as EndpointNumber[];
        }

        return [];
    }

    /**
     * Computed current server list.
     */
    get #serverList() {
        const list = new Array<ClusterId>;
        for (const type of Object.values(this.part.behaviors.supported)) {
            const clusterId = (type as { cluster?: { id?: ClusterId }}).cluster?.id;
            if (clusterId) {
                list.push(clusterId);
            }
        }
        return list;
    }
}

export namespace DescriptorServer {
    export class Internal {
        updateTimer?: Timer = undefined;
        updatePartsList = false;
        updateServerList = false;
    }

    export type DeviceType = TypeFromSchema<typeof Descriptor.TlvDeviceTypeStruct>;
}
