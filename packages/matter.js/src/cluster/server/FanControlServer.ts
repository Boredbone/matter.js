
import { WrapCommandHandler } from "../../device/Device.js";
import { NamedHandler } from "../../util/NamedHandler.js";
import { FanControl } from "../definitions/FanControlCluster.js";
import { ClusterServer } from "./ClusterServer.js";
import { AttributeInitialValues, ClusterServerHandlers } from "./ClusterServerTypes.js";

export const FanControlClusterDefaultHandler: () => ClusterServerHandlers<typeof FanControl.Complete> = () => ({
});

export const createDefaultFanControlClusterServer = (
    commandHandler?: NamedHandler<any>,
    attributeInitialValues?: AttributeInitialValues<typeof FanControl.Complete.attributes>,
) => {
    const cluster = FanControl.Cluster;
    return ClusterServer(
        cluster,
        attributeInitialValues ?? {
            fanMode: FanControl.FanMode.Auto,
            fanModeSequence: FanControl.FanModeSequence.OffLowMedHighAuto,
            percentSetting: 100,
            speedSetting: 100,
            rockSupport: { rockLeftRight: true, rockRound: true, rockUpDown: true },
            rockSetting: { rockLeftRight: false, rockRound: false, rockUpDown: false },
            windSupport: { sleepWind: true, naturalWind: true },
            windSetting: { sleepWind: false, naturalWind: false },
            percentCurrent: 50,
            speedCurrent: 50,
            speedMax: 100,
        },
        WrapCommandHandler(FanControlClusterDefaultHandler(), commandHandler),
    );
};
