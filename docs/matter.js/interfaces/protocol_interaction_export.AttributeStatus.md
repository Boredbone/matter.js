[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction/export](../modules/protocol_interaction_export.md) / AttributeStatus

# Interface: AttributeStatus

[protocol/interaction/export](../modules/protocol_interaction_export.md).AttributeStatus

## Table of contents

### Properties

- [path](protocol_interaction_export.AttributeStatus.md#path)
- [status](protocol_interaction_export.AttributeStatus.md#status)

## Properties

### path

• **path**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributeId?` | [`AttributeId`](../modules/datatype_export.md#attributeid) |
| `clusterId?` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `endpointId?` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `nodeId?` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:54](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L54)

___

### status

• **status**: [`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:60](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L60)
