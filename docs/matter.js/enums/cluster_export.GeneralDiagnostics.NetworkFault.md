[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [GeneralDiagnostics](../modules/cluster_export.GeneralDiagnostics.md) / NetworkFault

# Enumeration: NetworkFault

[cluster/export](../modules/cluster_export.md).[GeneralDiagnostics](../modules/cluster_export.GeneralDiagnostics.md).NetworkFault

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.11.4.3

## Table of contents

### Enumeration Members

- [ConnectionFailed](cluster_export.GeneralDiagnostics.NetworkFault.md#connectionfailed)
- [HardwareFailure](cluster_export.GeneralDiagnostics.NetworkFault.md#hardwarefailure)
- [NetworkJammed](cluster_export.GeneralDiagnostics.NetworkFault.md#networkjammed)
- [Unspecified](cluster_export.GeneralDiagnostics.NetworkFault.md#unspecified)

## Enumeration Members

### ConnectionFailed

• **ConnectionFailed** = ``3``

The Node has encountered a network fault as a result of a failure to establish a connection.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:295](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L295)

___

### HardwareFailure

• **HardwareFailure** = ``1``

The Node has encountered a network fault as a result of a hardware failure.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:285](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L285)

___

### NetworkJammed

• **NetworkJammed** = ``2``

The Node has encountered a network fault as a result of a jammed network.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:290](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L290)

___

### Unspecified

• **Unspecified** = ``0``

The Node has encountered an unspecified fault.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:280](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L280)
