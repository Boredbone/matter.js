[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ThreadNetworkDiagnostics](../modules/cluster_export.ThreadNetworkDiagnostics.md) / NetworkFault

# Enumeration: NetworkFault

[cluster/export](../modules/cluster_export.md).[ThreadNetworkDiagnostics](../modules/cluster_export.ThreadNetworkDiagnostics.md).NetworkFault

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.13.5.1

## Table of contents

### Enumeration Members

- [HardwareFailure](cluster_export.ThreadNetworkDiagnostics.NetworkFault.md#hardwarefailure)
- [LinkDown](cluster_export.ThreadNetworkDiagnostics.NetworkFault.md#linkdown)
- [NetworkJammed](cluster_export.ThreadNetworkDiagnostics.NetworkFault.md#networkjammed)
- [Unspecified](cluster_export.ThreadNetworkDiagnostics.NetworkFault.md#unspecified)

## Enumeration Members

### HardwareFailure

• **HardwareFailure** = ``2``

Indicates there has been Thread hardware failure.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:388](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L388)

___

### LinkDown

• **LinkDown** = ``1``

Indicates the Thread link is down.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:383](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L383)

___

### NetworkJammed

• **NetworkJammed** = ``3``

Indicates the Thread network is jammed.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:393](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L393)

___

### Unspecified

• **Unspecified** = ``0``

Indicates an unspecified fault.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:378](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L378)
