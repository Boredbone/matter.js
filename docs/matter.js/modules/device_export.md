[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / device/export

# Module: device/export

## Table of contents

### Enumerations

- [DeviceClasses](../enums/device_export.DeviceClasses.md)
- [NodeStateInformation](../enums/device_export.NodeStateInformation.md)

### Classes

- [Aggregator](../classes/device_export.Aggregator.md)
- [ComposedDevice](../classes/device_export.ComposedDevice.md)
- [Device](../classes/device_export.Device.md)
- [DimmableLightDevice](../classes/device_export.DimmableLightDevice.md)
- [DimmablePluginUnitDevice](../classes/device_export.DimmablePluginUnitDevice.md)
- [Endpoint](../classes/device_export.Endpoint.md)
- [OnOffBaseDevice](../classes/device_export.OnOffBaseDevice.md)
- [OnOffLightDevice](../classes/device_export.OnOffLightDevice.md)
- [OnOffPluginUnitDevice](../classes/device_export.OnOffPluginUnitDevice.md)
- [PairedDevice](../classes/device_export.PairedDevice.md)
- [PairedNode](../classes/device_export.PairedNode.md)
- [RootEndpoint](../classes/device_export.RootEndpoint.md)

### Interfaces

- [DeviceTypeDefinition](../interfaces/device_export.DeviceTypeDefinition.md)
- [EndpointOptions](../interfaces/device_export.EndpointOptions.md)

### Type Aliases

- [CommissioningControllerNodeOptions](device_export.md#commissioningcontrollernodeoptions)
- [EndpointLoggingOptions](device_export.md#endpointloggingoptions)

### Variables

- [DeviceTypes](device_export.md#devicetypes)

### Functions

- [DeviceTypeDefinition](device_export.md#devicetypedefinition)
- [UnknownDeviceType](device_export.md#unknowndevicetype)
- [WrapCommandHandler](device_export.md#wrapcommandhandler)
- [getClusterInitialAttributeValues](device_export.md#getclusterinitialattributevalues)
- [getDeviceTypeDefinitionByCode](device_export.md#getdevicetypedefinitionbycode)
- [logEndpoint](device_export.md#logendpoint)

## Type Aliases

### CommissioningControllerNodeOptions

Ƭ **CommissioningControllerNodeOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributeChangedCallback?` | (`nodeId`: [`NodeId`](datatype_export.md#nodeid), `data`: [`DecodedAttributeReportValue`](protocol_interaction_export.md#decodedattributereportvalue)\<`any`\>) => `void` | Optional additional callback method which is called for each Attribute change reported by the device. Use this if subscribing to all relevant attributes is too much effort. |
| `autoSubscribe?` | `boolean` | Unless set to false all events and attributes are subscribed and value changes are reflected in the ClusterClient instances. With this reading attributes values is mostly looked up in the locally cached data. Additionally more features like reaction on shutdown event or endpoint structure changes (for bridges) are done internally automatically. |
| `eventTriggeredCallback?` | (`nodeId`: [`NodeId`](datatype_export.md#nodeid), `data`: [`DecodedEventReportValue`](protocol_interaction_export.md#decodedeventreportvalue)\<`any`\>) => `void` | Optional additional callback method which is called for each Event reported by the device. Use this if subscribing to all relevant events is too much effort. |
| `stateInformationCallback?` | (`nodeId`: [`NodeId`](datatype_export.md#nodeid), `state`: [`NodeStateInformation`](../enums/device_export.NodeStateInformation.md)) => `void` | Optional callback method which is called when the state of the node changes. This can be used to detect when the node goes offline or comes back online. |
| `subscribeMaxIntervalCeilingSeconds?` | `number` | Maximum subscription interval when values are changed. This is also used as a keepalive mechanism to validate that the device is still available. Default it is set to 30s. |
| `subscribeMinIntervalFloorSeconds?` | `number` | Minimum subscription interval when values are changed. Default it is set to 0s. |

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:91](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/device/PairedNode.ts#L91)

___

### EndpointLoggingOptions

Ƭ **EndpointLoggingOptions**: `Object`

Options for logging endpoint structure. The default is that anything is logged beside "Non Supported" attributes and
events on ClusterClients. The Filter methods can be used to filter out specific endpoints or clusters if wanted.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clusterClientFilter?` | (`endpoint`: [`Endpoint`](../classes/device_export.Endpoint.md), `cluster`: [`ClusterClientObj`](cluster_export.md#clusterclientobj)\<`any`, `any`, `any`, `any`\>) => `boolean` |
| `clusterServerFilter?` | (`endpoint`: [`Endpoint`](../classes/device_export.Endpoint.md), `cluster`: [`ClusterServerObj`](cluster_export.md#clusterserverobj)\<`any`, `any`\>) => `boolean` |
| `endpointFilter?` | (`endpoint`: [`Endpoint`](../classes/device_export.Endpoint.md)) => `boolean` |
| `logAttributeObjectValues?` | `boolean` |
| `logAttributePrimitiveValues?` | `boolean` |
| `logChildEndpoints?` | `boolean` |
| `logClusterAttributes?` | `boolean` |
| `logClusterClients?` | `boolean` |
| `logClusterCommands?` | `boolean` |
| `logClusterEvents?` | `boolean` |
| `logClusterGlobalAttributes?` | `boolean` |
| `logClusterServers?` | `boolean` |
| `logNotSupportedClusterAttributes?` | `boolean` |
| `logNotSupportedClusterCommands?` | `boolean` |
| `logNotSupportedClusterEvents?` | `boolean` |

#### Defined in

[packages/matter.js/src/device/EndpointStructureLogger.ts:23](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/device/EndpointStructureLogger.ts#L23)

## Variables

### DeviceTypes

• `Const` **DeviceTypes**: `Object`

#### Index signature

▪ [key: `string`]: [`DeviceTypeDefinition`](device_export.md#devicetypedefinition)

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:113](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/device/DeviceTypes.ts#L113)

## Functions

### DeviceTypeDefinition

▸ **DeviceTypeDefinition**(`«destructured»`): [`DeviceTypeDefinition`](device_export.md#devicetypedefinition)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `code` | `number` |
| › `deviceClass` | [`DeviceClasses`](../enums/device_export.DeviceClasses.md) |
| › `name` | `string` |
| › `optionalClientClusters?` | [`ClusterId`](datatype_export.md#clusterid)[] |
| › `optionalServerClusters?` | [`ClusterId`](datatype_export.md#clusterid)[] |
| › `requiredClientClusters?` | [`ClusterId`](datatype_export.md#clusterid)[] |
| › `requiredServerClusters?` | [`ClusterId`](datatype_export.md#clusterid)[] |
| › `revision` | `number` |
| › `superSet?` | `string` |
| › `unknown?` | `boolean` |

#### Returns

[`DeviceTypeDefinition`](device_export.md#devicetypedefinition)

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:78](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/device/DeviceTypes.ts#L78)

___

### UnknownDeviceType

▸ **UnknownDeviceType**(`code`): [`DeviceTypeDefinition`](device_export.md#devicetypedefinition)

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `number` |

#### Returns

[`DeviceTypeDefinition`](device_export.md#devicetypedefinition)

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:974](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/device/DeviceTypes.ts#L974)

___

### WrapCommandHandler

▸ **WrapCommandHandler**\<`C`\>(`handler`, `commandHandler?`): [`ClusterServerHandlers`](cluster_export.md#clusterserverhandlers)\<`C`\>

Utility function to wrap externally registered command handlers into the internal command handler and make sure
the custom ones are used if defined

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Cluster`](cluster_export.md#cluster)\<`any`, `any`, `any`, `any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | [`ClusterServerHandlers`](cluster_export.md#clusterserverhandlers)\<`C`\> | Internal handlers instance to wrap the external handler into |
| `commandHandler?` | [`NamedHandler`](../classes/util_export.NamedHandler.md)\<`any`\> | Command handler instance with the registered handlers |

#### Returns

[`ClusterServerHandlers`](cluster_export.md#clusterserverhandlers)\<`C`\>

#### Defined in

[packages/matter.js/src/device/Device.ts:29](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/device/Device.ts#L29)

___

### getClusterInitialAttributeValues

▸ **getClusterInitialAttributeValues**\<`F`, `SF`, `A`, `C`, `E`\>(`attributeInitialValues`, `cluster`): [`AttributeInitialValues`](cluster_export.md#attributeinitialvalues)\<`A`\> \| `undefined`

Utility function to get the initial attribute values for a cluster out of an object with initial attribute values
for multiple clusters

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributeInitialValues` | `undefined` \| \{ `[key: ClusterId]`: [`AttributeInitialValues`](cluster_export.md#attributeinitialvalues)\<`any`\>;  } | Object with initial attribute values for automatically added clusters |
| `cluster` | [`Cluster`](cluster_export.md#cluster)\<`F`, `SF`, `A`, `C`, `E`\> | Cluster to get the initial attribute values for |

#### Returns

[`AttributeInitialValues`](cluster_export.md#attributeinitialvalues)\<`A`\> \| `undefined`

#### Defined in

[packages/matter.js/src/device/OnOffDevices.ts:36](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/device/OnOffDevices.ts#L36)

___

### getDeviceTypeDefinitionByCode

▸ **getDeviceTypeDefinitionByCode**(`code`): [`DeviceTypeDefinition`](device_export.md#devicetypedefinition) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `number` |

#### Returns

[`DeviceTypeDefinition`](device_export.md#devicetypedefinition) \| `undefined`

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:983](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/device/DeviceTypes.ts#L983)

___

### logEndpoint

▸ **logEndpoint**(`endpoint`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](../classes/device_export.Endpoint.md) |
| `options` | [`EndpointLoggingOptions`](device_export.md#endpointloggingoptions) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/device/EndpointStructureLogger.ts:235](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/device/EndpointStructureLogger.ts#L235)
