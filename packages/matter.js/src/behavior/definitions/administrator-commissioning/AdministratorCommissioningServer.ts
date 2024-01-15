/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../../MatterDevice.js";
import { AdministratorCommissioning } from "../../../cluster/definitions/AdministratorCommissioningCluster.js";
import { InternalError } from "../../../common/MatterError.js";
import { Part } from "../../../endpoint/Part.js";
import { Logger } from "../../../log/Logger.js";
import { StatusCode, StatusResponseError } from "../../../protocol/interaction/StatusCode.js";
import { PaseServer } from "../../../session/pase/PaseServer.js";
import { Time, Timer } from "../../../time/Time.js";
import { AdministratorCommissioningBehavior } from "./AdministratorCommissioningBehavior.js";
import {
    OpenBasicCommissioningWindowRequest,
    OpenCommissioningWindowRequest,
} from "./AdministratorCommissioningInterface.js";

const logger = Logger.get("AdministratorCommissioningServer");

export const MAXIMUM_COMMISSIONING_TIMEOUT_S = 15 * 60; // 900 seconds/15 minutes
export const MINIMUM_COMMISSIONING_TIMEOUT_S = 3 * 60; // 180 seconds/3 minutes

/**
 * This is the default server implementation of AdministratorCommissioningBehavior.
 *
 * This implementation includes all features of AdministratorCommissioning.Cluster. You should use
 * AdministratorCommissioningServer.with to specialize the class for the features your implementation supports.
 */
export class AdministratorCommissioningServer extends AdministratorCommissioningBehavior {
    declare internal: AdministratorCommissioningServer.Internal;
    declare state: AdministratorCommissioningServer.State;

    override initialize() {
        this.internal.part = this.part;
    }

    /**
     * This method opens an Enhanced Commissioning Window (A dynamic passcode is used which was provided by the caller).
     */
    override async openCommissioningWindow({
        pakePasscodeVerifier,
        discriminator,
        iterations,
        salt,
        commissioningTimeout,
    }: OpenCommissioningWindowRequest) {
        const device = this.session?.getContext();

        this.#assertCommissioningWindowRequirements(commissioningTimeout, device);

        this.#initializeCommissioningWindow(
            commissioningTimeout,
            AdministratorCommissioning.CommissioningWindowStatus.EnhancedWindowOpen,
        );

        await device.allowEnhancedCommissioning(
            discriminator,
            PaseServer.fromVerificationValue(pakePasscodeVerifier, { iterations, salt }),
            async () => {
                this.session.getAssociatedFabric().deleteRemoveCallback(this.internal.fabricRemoveHandler);
                this.#endCommissioning();
            },
        );
    }

    /** This method opens a Basic Commissioning Window. The default passcode is used. */
    // TODO - fix ClusterBehavior.for so this is hidden as it only applies when basic feature is enabled
     async openBasicCommissioningWindow(

        { commissioningTimeout }: OpenBasicCommissioningWindowRequest,
    ) {
        const device = this.session.getContext();

        this.#assertCommissioningWindowRequirements(commissioningTimeout, device);

        this.#initializeCommissioningWindow(
            commissioningTimeout,
            AdministratorCommissioning.CommissioningWindowStatus.BasicWindowOpen,
        );

        await device.allowBasicCommissioning(async () => {
            this.session.getAssociatedFabric().deleteRemoveCallback(this.internal.fabricRemoveHandler);
            this.#endCommissioning();
        });
    }

    /** This method is used to revoke a commissioning window. */
    override async revokeCommissioning() {
        if (this.internal.commissioningWindowTimeout === undefined) {
            throw new StatusResponseError(
                "No commissioning window is opened that could be revoked.",
                StatusCode.Failure,
                AdministratorCommissioning.StatusCode.WindowNotOpen,
            );
        }
        logger.debug("Revoking commissioning window.");
        await this.#closeCommissioningWindow();
    }

    /**
     * Called whenever a Commissioning/Announcement Window is opened by this cluster. This method starts the timer and
     * adjusts the needed attributes.
     */
    #initializeCommissioningWindow(
        commissioningTimeout: number,
        windowStatus: AdministratorCommissioning.CommissioningWindowStatus,
    ) {
        if (this.internal.commissioningWindowTimeout !== undefined) {
            // Should never happen, but let's make sure
            throw new InternalError("Commissioning window already initialized.");
        }
        logger.debug(
            `Commissioning window timer started for ${commissioningTimeout} seconds for ${this.context.session?.name}.`,
        );
        this.internal.commissioningWindowTimeout = Time.getTimer(
            "Commissioning timeout",
            commissioningTimeout * 1000,
            async () => await this.#closeCommissioningWindow(),
        ).start();

        this.asAdmin(() => {
            this.state.windowStatus = windowStatus;
            this.state.adminFabricIndex = this.session.getAssociatedFabric().fabricIndex;
            this.state.adminVendorId = this.session.getAssociatedFabric().rootVendorId;
        });

        this.session.getAssociatedFabric().addRemoveCallback(this.internal.fabricRemoveHandler);
    }

    /**
     * This method validates if a commissioning window can be opened and throws various exceptions in case of failures.
     */
    #assertCommissioningWindowRequirements(commissioningTimeout: number, device: MatterDevice) {
        if (this.internal.commissioningWindowTimeout !== undefined) {
            throw new StatusResponseError(
                "A commissioning window is already opened.",
                StatusCode.Failure,
                AdministratorCommissioning.StatusCode.Busy,
            );
        }

        if (commissioningTimeout > MAXIMUM_COMMISSIONING_TIMEOUT_S) {
            throw new StatusResponseError(
                `Commissioning timeout must not exceed ${MAXIMUM_COMMISSIONING_TIMEOUT_S} seconds.`,
                StatusCode.InvalidCommand,
            );
        }
        if (commissioningTimeout < MINIMUM_COMMISSIONING_TIMEOUT_S) {
            throw new StatusResponseError(
                `Commissioning timeout must not be lower then ${MINIMUM_COMMISSIONING_TIMEOUT_S} seconds.`,
                StatusCode.InvalidCommand,
            );
        }

        if (device.isFailsafeArmed()) {
            throw new StatusResponseError(
                "Failsafe timer armed, assume commissioning in progress.",
                StatusCode.Failure,
                AdministratorCommissioning.StatusCode.Busy,
            );
        }
    }

    /**
     * This method is used internally when the commissioning window timer expires or the commissioning was completed.
     */
    #endCommissioning() {
        logger.debug("End commissioning window.");
        if (this.internal.commissioningWindowTimeout !== undefined) {
            this.internal.commissioningWindowTimeout.stop();
            this.internal.commissioningWindowTimeout = undefined;
        }

        this.asAdmin(() => {
            this.state.windowStatus = AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen;
            this.state.adminFabricIndex = null;
            this.state.adminVendorId = null;
        });
    }

    /** This method is used to close a commissioning window. */
    async #closeCommissioningWindow() {
        this.#endCommissioning();
        await this.session.getContext().endCommissioning();
    }

    /** Cleanup resources and stop the timer when the behavior is destroyed. */
    override [Symbol.asyncDispose]() {
        if (this.internal.commissioningWindowTimeout !== undefined) {
            this.internal.commissioningWindowTimeout.stop();
            this.internal.commissioningWindowTimeout = undefined;
        }
    }
}

export namespace AdministratorCommissioningServer {
    export class Internal {
        part?: Part;
        commissioningWindowTimeout?: Timer;
        fabricRemoveHandler = async () => {
            if (!this.part) {
                throw new InternalError("AdministratorCommissioningServer part not initialized");
            }

            this.part.agent.get(AdministratorCommissioningServer).state.adminFabricIndex = null;
        };
    }

    export class State extends AdministratorCommissioningBehavior.State {
        // Spec doesn't declare a default here so set manually
        windowStatus = AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen;
    }
}
