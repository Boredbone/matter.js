
import { LevelControl } from "../cluster/definitions/LevelControlCluster.js";
import { OnOff } from "../cluster/definitions/OnOffCluster.js";
import { FanControl } from "../cluster/definitions/FanControlCluster.js";
import { Thermostat } from "../cluster/definitions/ThermostatCluster.js";
import { AttributeInitialValues } from "../cluster/server/ClusterServerTypes.js";

import { createDefaultLevelControlClusterServer } from "../cluster/server/LevelControlServer.js";
import { createDefaultOnOffClusterServer } from "../cluster/server/OnOffServer.js";
import { createDefaultFanControlClusterServer } from "../cluster/server/FanControlServer.js";
import { createDefaultThermostatClusterServer } from "../cluster/server/ThermostatServer.js";
import { ClusterId } from "../datatype/ClusterId.js";
import { extendPublicHandlerMethods } from "../util/NamedHandler.js";
import { DeviceTypeDefinition, DeviceTypes } from "./DeviceTypes.js";
import { EndpointOptions } from "./Endpoint.js";
import { OnOffBaseDevice, getClusterInitialAttributeValues } from "./OnOffDevices.js";

type ThermostatBaseDeviceCommands = {
}

export class ThermostatBaseDevice
    extends extendPublicHandlerMethods<typeof OnOffBaseDevice, ThermostatBaseDeviceCommands>(
    OnOffBaseDevice,
) {
    constructor(
        definition: DeviceTypeDefinition,
        attributeInitialValues?: { [key: ClusterId]: AttributeInitialValues<any> },
        options: EndpointOptions = {},
    ) {
        super(definition, attributeInitialValues, options);
    }

    protected override addDeviceClusters(
        attributeInitialValues?: { [key: ClusterId]: AttributeInitialValues<any> },
        excludeList: ClusterId[] = [],
    ) {
        super.addDeviceClusters(attributeInitialValues, [...excludeList, OnOff.Cluster.id, LevelControl.Cluster.id, FanControl.Cluster.id, Thermostat.Cluster.id]);
        if (!excludeList.includes(OnOff.Cluster.id)) {
            this.addClusterServer(
                createDefaultOnOffClusterServer(
                    this.commandHandler,
                    getClusterInitialAttributeValues(
                        attributeInitialValues,
                        OnOff.Cluster,
                    ),
                    false,
                ),
            );
        }
        if (!excludeList.includes(LevelControl.Cluster.id)) {
            this.addClusterServer(
                createDefaultLevelControlClusterServer(
                    this.commandHandler,
                    getClusterInitialAttributeValues(
                        attributeInitialValues,
                        LevelControl.Cluster.with(LevelControl.Feature.OnOff),
                    ),
                ),
            );
        }
        if (!excludeList.includes(FanControl.Cluster.id)) {
            this.addClusterServer(
                createDefaultFanControlClusterServer(
                    this.commandHandler,
                    getClusterInitialAttributeValues(
                        attributeInitialValues,
                        FanControl.Cluster,
                    ),
                ),
            );
        }
        if (!excludeList.includes(Thermostat.Cluster.id)) {
            this.addClusterServer(
                createDefaultThermostatClusterServer(
                    this.commandHandler,
                    getClusterInitialAttributeValues(
                        attributeInitialValues,
                        Thermostat.Cluster.with(Thermostat.Feature.Heating, Thermostat.Feature.Cooling),
                    ),
                ),
            );
        }
    }

    async setLocalTemperature(temperature: number) {
        this.getClusterServer(Thermostat.Cluster)?.setLocalTemperatureAttribute(temperature);
    }
    async setSystemMode(systemMode: Thermostat.SystemMode) {
        this.getClusterServer(Thermostat.Cluster)?.setSystemModeAttribute(systemMode);
    }
    addSystemModeListener(listener: (newValue: Thermostat.SystemMode | null, oldValue: Thermostat.SystemMode | null) => void) {
        this.getClusterServer(Thermostat.Cluster)?.subscribeSystemModeAttribute(listener);
    }
    addOccupiedCoolingSetpointListener(listener: (newValue: number | null, oldValue: number | null) => void) {
        this.getClusterServer(Thermostat.Complete)?.subscribeOccupiedCoolingSetpointAttribute(listener);
    }
    addOccupiedHeatingSetpointListener(listener: (newValue: number | null, oldValue: number | null) => void) {
        this.getClusterServer(Thermostat.Complete)?.subscribeOccupiedHeatingSetpointAttribute(listener);
    }
}

export class ThermostatDevice extends ThermostatBaseDevice {
    constructor(
        onOffAttributeInitialValues?: AttributeInitialValues<typeof OnOff.Cluster.attributes>,
        levelControlAttributeInitialValues?: AttributeInitialValues<typeof LevelControl.Cluster.attributes>,
        fanControlAttributeInitialValues?: AttributeInitialValues<typeof FanControl.Cluster.attributes>,
        thermostatAttributeInitialValues?: AttributeInitialValues<typeof Thermostat.Cluster.attributes>,
        options: EndpointOptions = {},
    ) {
        const initialAttributeValues: { [key: ClusterId]: AttributeInitialValues<any> } = {};
        if (onOffAttributeInitialValues !== undefined) {
            initialAttributeValues[OnOff.Cluster.id] = onOffAttributeInitialValues;
        }
        if (levelControlAttributeInitialValues !== undefined) {
            initialAttributeValues[LevelControl.Cluster.id] = levelControlAttributeInitialValues;
        }
        if (fanControlAttributeInitialValues !== undefined) {
            initialAttributeValues[FanControl.Cluster.id] = fanControlAttributeInitialValues;
        }
        if (thermostatAttributeInitialValues !== undefined) {
            initialAttributeValues[Thermostat.Cluster.id] = thermostatAttributeInitialValues;
        }
        super(DeviceTypes.THERMOSTAT, initialAttributeValues, options);
    }
}

