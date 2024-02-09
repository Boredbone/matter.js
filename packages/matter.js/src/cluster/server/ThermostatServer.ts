
import { WrapCommandHandler } from "../../device/Device.js";
import { NamedHandler } from "../../util/NamedHandler.js";
import { Thermostat } from "../definitions/ThermostatCluster.js";
import { ClusterServer } from "./ClusterServer.js";
import { AttributeInitialValues, ClusterServerHandlers } from "./ClusterServerTypes.js";

export const ThermostatClusterDefaultHandler: () => ClusterServerHandlers<typeof Thermostat.Complete> = () => ({
    setpointRaiseLower: async ({ }) => { },
});

export const createDefaultThermostatClusterServer = (
    commandHandler?: NamedHandler<any>,
    attributeInitialValues?: AttributeInitialValues<typeof Thermostat.Complete.attributes>,
    isController = true,
) => {

    const cluster = isController ? Thermostat.Cluster.with(Thermostat.Feature.Heating, Thermostat.Feature.Cooling) : Thermostat.Cluster;
    return ClusterServer(
        cluster,
        attributeInitialValues ?? {
            localTemperature: 2500,
            minHeatSetpointLimit: 700,
            maxHeatSetpointLimit: 3000,
            minCoolSetpointLimit: 1600,
            maxCoolSetpointLimit: 3000,
            occupiedCoolingSetpoint: 2000,
            occupiedHeatingSetpoint: 2600,
            minSetpointDeadBand: 1,
            controlSequenceOfOperation: Thermostat.ControlSequenceOfOperation.CoolingAndHeating,
            systemMode: Thermostat.SystemMode.Off,
            thermostatRunningMode: Thermostat.ThermostatRunningMode.Off,
        },
        WrapCommandHandler(ThermostatClusterDefaultHandler(), commandHandler),
    );
};