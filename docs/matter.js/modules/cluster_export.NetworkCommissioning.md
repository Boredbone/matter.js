[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / NetworkCommissioning

# Namespace: NetworkCommissioning

[cluster/export](cluster_export.md).NetworkCommissioning

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.NetworkCommissioning.Feature.md)
- [NetworkCommissioningStatus](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)
- [WiFiBand](../enums/cluster_export.NetworkCommissioning.WiFiBand.md)

### Type Aliases

- [Extension](cluster_export.NetworkCommissioning.md#extension)

### Variables

- [Base](cluster_export.NetworkCommissioning.md#base)
- [Cluster](cluster_export.NetworkCommissioning.md#cluster)
- [Complete](cluster_export.NetworkCommissioning.md#complete)
- [ThreadNetworkInterfaceComponent](cluster_export.NetworkCommissioning.md#threadnetworkinterfacecomponent)
- [TlvAddOrUpdateThreadNetworkRequest](cluster_export.NetworkCommissioning.md#tlvaddorupdatethreadnetworkrequest)
- [TlvAddOrUpdateWiFiNetworkRequest](cluster_export.NetworkCommissioning.md#tlvaddorupdatewifinetworkrequest)
- [TlvConnectNetworkRequest](cluster_export.NetworkCommissioning.md#tlvconnectnetworkrequest)
- [TlvConnectNetworkResponse](cluster_export.NetworkCommissioning.md#tlvconnectnetworkresponse)
- [TlvNetworkConfigResponse](cluster_export.NetworkCommissioning.md#tlvnetworkconfigresponse)
- [TlvNetworkInfoStruct](cluster_export.NetworkCommissioning.md#tlvnetworkinfostruct)
- [TlvRemoveNetworkRequest](cluster_export.NetworkCommissioning.md#tlvremovenetworkrequest)
- [TlvReorderNetworkRequest](cluster_export.NetworkCommissioning.md#tlvreordernetworkrequest)
- [TlvScanNetworksRequest](cluster_export.NetworkCommissioning.md#tlvscannetworksrequest)
- [TlvScanNetworksResponse](cluster_export.NetworkCommissioning.md#tlvscannetworksresponse)
- [TlvThreadInterfaceScanResultStruct](cluster_export.NetworkCommissioning.md#tlvthreadinterfacescanresultstruct)
- [TlvWiFiInterfaceScanResultStruct](cluster_export.NetworkCommissioning.md#tlvwifiinterfacescanresultstruct)
- [WiFiNetworkInterfaceComponent](cluster_export.NetworkCommissioning.md#wifinetworkinterfacecomponent)
- [WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent](cluster_export.NetworkCommissioning.md#wifinetworkinterfaceorthreadnetworkinterfacecomponent)
- [WiFiSecurityBitmap](cluster_export.NetworkCommissioning.md#wifisecuritybitmap)

## Type Aliases

### Extension

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](cluster_export.NetworkCommissioning.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  } & `SF` extends \{ `wiFiNetworkInterface`: ``true``  } \| \{ `threadNetworkInterface`: ``true``  } ? typeof [`WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent`](cluster_export.NetworkCommissioning.md#wifinetworkinterfaceorthreadnetworkinterfacecomponent) : {} & `SF` extends \{ `wiFiNetworkInterface`: ``true``  } ? typeof [`WiFiNetworkInterfaceComponent`](cluster_export.NetworkCommissioning.md#wifinetworkinterfacecomponent) : {} & `SF` extends \{ `threadNetworkInterface`: ``true``  } ? typeof [`ThreadNetworkInterfaceComponent`](cluster_export.NetworkCommissioning.md#threadnetworkinterfacecomponent) : {} & `SF` extends \{ `threadNetworkInterface`: ``true`` ; `wiFiNetworkInterface`: ``true``  } ? `never` : {} & `SF` extends \{ `ethernetNetworkInterface`: ``true`` ; `wiFiNetworkInterface`: ``true``  } ? `never` : {} & `SF` extends \{ `ethernetNetworkInterface`: ``true`` ; `threadNetworkInterface`: ``true``  } ? `never` : {} & `SF` extends \{ `ethernetNetworkInterface`: ``false`` ; `threadNetworkInterface`: ``false`` ; `wiFiNetworkInterface`: ``false``  } ? `never` : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:1121](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L1121)

## Variables

### Base

• `Const` **Base**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `interfaceEnabled`: [`WritableAttribute`](cluster_export.md#writableattribute)\<`boolean`, `any`\> ; `lastConnectErrorValue`: [`Attribute`](cluster_export.md#attribute)\<``null`` \| `number`, `any`\> ; `lastNetworkId`: [`Attribute`](cluster_export.md#attribute)\<``null`` \| `Uint8Array`, `any`\> ; `lastNetworkingStatus`: [`Attribute`](cluster_export.md#attribute)\<``null`` \| [`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md), `any`\> ; `maxNetworks`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<`number`, `any`\> ; `networks`: [`Attribute`](cluster_export.md#attribute)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `connected`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>[], `any`\>  } ; `features`: \{ `ethernetNetworkInterface`: [`BitFlag`](schema_export.md#bitflag-1) ; `threadNetworkInterface`: [`BitFlag`](schema_export.md#bitflag-1) ; `wiFiNetworkInterface`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``49`` = 0x31; `name`: ``"NetworkCommissioning"`` = "NetworkCommissioning"; `revision`: ``1`` = 1 }\>

These elements and properties are present in all NetworkCommissioning clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:593](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L593)

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`Merge`](util_export.md#merge)\<[`Merge`](util_export.md#merge)\<\{ `interfaceEnabled`: [`WritableAttribute`](cluster_export.md#writableattribute)\<`boolean`, `any`\> ; `lastConnectErrorValue`: [`Attribute`](cluster_export.md#attribute)\<``null`` \| `number`, `any`\> ; `lastNetworkId`: [`Attribute`](cluster_export.md#attribute)\<``null`` \| `Uint8Array`, `any`\> ; `lastNetworkingStatus`: [`Attribute`](cluster_export.md#attribute)\<``null`` \| [`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md), `any`\> ; `maxNetworks`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<`number`, `any`\> ; `networks`: [`Attribute`](cluster_export.md#attribute)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `connected`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>[], `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)\<\{ `ethernetNetworkInterface`: [`BitFlag`](schema_export.md#bitflag-1) ; `threadNetworkInterface`: [`BitFlag`](schema_export.md#bitflag-1) ; `wiFiNetworkInterface`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes-1)\<\{ `ethernetNetworkInterface`: [`BitFlag`](schema_export.md#bitflag-1) ; `threadNetworkInterface`: [`BitFlag`](schema_export.md#bitflag-1) ; `wiFiNetworkInterface`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `commands`: {} ; `events`: {} ; `features`: \{ `ethernetNetworkInterface`: [`BitFlag`](schema_export.md#bitflag-1) ; `threadNetworkInterface`: [`BitFlag`](schema_export.md#bitflag-1) ; `wiFiNetworkInterface`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: [`Branded`](util_export.md#branded)\<``49`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\>, ``"ClusterId"``\> ; `name`: ``"NetworkCommissioning"`` ; `revision`: ``1`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `interfaceEnabled`: [`WritableAttribute`](cluster_export.md#writableattribute)\<`boolean`, `any`\> ; `lastConnectErrorValue`: [`Attribute`](cluster_export.md#attribute)\<``null`` \| `number`, `any`\> ; `lastNetworkId`: [`Attribute`](cluster_export.md#attribute)\<``null`` \| `Uint8Array`, `any`\> ; `lastNetworkingStatus`: [`Attribute`](cluster_export.md#attribute)\<``null`` \| [`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md), `any`\> ; `maxNetworks`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<`number`, `any`\> ; `networks`: [`Attribute`](cluster_export.md#attribute)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `connected`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>[], `any`\>  } ; `features`: \{ `ethernetNetworkInterface`: [`BitFlag`](schema_export.md#bitflag-1) ; `threadNetworkInterface`: [`BitFlag`](schema_export.md#bitflag-1) ; `wiFiNetworkInterface`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``49`` = 0x31; `name`: ``"NetworkCommissioning"`` = "NetworkCommissioning"; `revision`: ``1`` = 1 }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.NetworkCommissioning.md#extension)\<[`BitFlags`](schema_export.md#bitflags)\<\{ `ethernetNetworkInterface`: [`BitFlag`](schema_export.md#bitflag-1) ; `threadNetworkInterface`: [`BitFlag`](schema_export.md#bitflag-1) ; `wiFiNetworkInterface`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\> = extender }

Network Commissioning

Network commissioning is part of the overall Node commissioning. The main goal of Network Commissioning Cluster
is to associate a Node with or manage a Node’s one or more network interfaces. These network interfaces can
include the following types.

  • Wi-Fi (IEEE 802.11-2020)

  • Ethernet (802.3)

  • Thread (802.15.4)

An instance of the Network Commissioning Cluster only applies to a single network interface instance present. An
interface, in this context, is a unique entity that can have an IPv6 address assigned to it and ingress and
egress IP packets.

NetworkCommissioningCluster supports optional features that you can enable with the
NetworkCommissioningCluster.with() factory method.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.8

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:1081](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L1081)

___

### Complete

• `Const` **Complete**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.md#attribute)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.md#attribute)\<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](cluster_export.md#attribute)\<`number`, `never`\> ; `connectMaxTimeSeconds`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `wiFiNetworkInterface`: `boolean` = true }, \{ `threadNetworkInterface`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `eventList`: [`Attribute`](cluster_export.md#attribute)\<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.md#attribute)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `ethernetNetworkInterface`: [`BitFlag`](schema_export.md#bitflag-1) ; `threadNetworkInterface`: [`BitFlag`](schema_export.md#bitflag-1) ; `wiFiNetworkInterface`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.md#attribute)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `interfaceEnabled`: [`WritableAttribute`](cluster_export.md#writableattribute)\<`boolean`, `any`\> ; `lastConnectErrorValue`: [`Attribute`](cluster_export.md#attribute)\<``null`` \| `number`, `any`\> ; `lastNetworkId`: [`Attribute`](cluster_export.md#attribute)\<``null`` \| `Uint8Array`, `any`\> ; `lastNetworkingStatus`: [`Attribute`](cluster_export.md#attribute)\<``null`` \| [`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md), `any`\> ; `maxNetworks`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<`number`, `any`\> ; `networks`: [`Attribute`](cluster_export.md#attribute)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `connected`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>[], `any`\> ; `scanMaxTimeSeconds`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `wiFiNetworkInterface`: `boolean` = true }, \{ `threadNetworkInterface`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `commands`: \{ `addOrUpdateThreadNetwork`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `operationalDataset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `threadNetworkInterface`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `addOrUpdateWiFiNetwork`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `credentials`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `ssid`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `wiFiNetworkInterface`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `connectNetwork`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `errorValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `wiFiNetworkInterface`: `boolean` = true }, \{ `threadNetworkInterface`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `removeNetwork`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `wiFiNetworkInterface`: `boolean` = true }, \{ `threadNetworkInterface`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `reorderNetwork`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `networkIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `wiFiNetworkInterface`: `boolean` = true }, \{ `threadNetworkInterface`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `scanNetworks`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `ssid`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\> ; `threadScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `channel`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `extendedAddress`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `extendedPanId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `lqi`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `panId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `rssi`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `version`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>[]\> ; `wiFiScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `bssid`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `channel`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `rssi`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `security`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `unencrypted`: [`BitFlag`](schema_export.md#bitflag-1) ; `wep`: [`BitFlag`](schema_export.md#bitflag-1) ; `wpa2Personal`: [`BitFlag`](schema_export.md#bitflag-1) ; `wpa3Personal`: [`BitFlag`](schema_export.md#bitflag-1) ; `wpaPersonal`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `ssid`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `wiFiBand`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`WiFiBand`](../enums/cluster_export.NetworkCommissioning.WiFiBand.md)\>  }\>[]\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `wiFiNetworkInterface`: `boolean` = true }, \{ `threadNetworkInterface`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `features`: \{ `ethernetNetworkInterface`: [`BitFlag`](schema_export.md#bitflag-1) ; `threadNetworkInterface`: [`BitFlag`](schema_export.md#bitflag-1) ; `wiFiNetworkInterface`: [`BitFlag`](schema_export.md#bitflag-1)  } = Cluster.features; `id`: ``49`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\> = Cluster.id; `name`: ``"NetworkCommissioning"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

This cluster supports all NetworkCommissioning features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:1141](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L1141)

___

### ThreadNetworkInterfaceComponent

• `Const` **ThreadNetworkInterfaceComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `commands`: \{ `addOrUpdateThreadNetwork`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `operationalDataset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\>  }  }\>

A NetworkCommissioningCluster supports these elements if it supports feature ThreadNetworkInterface.

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:1029](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L1029)

___

### TlvAddOrUpdateThreadNetworkRequest

• `Const` **TlvAddOrUpdateThreadNetworkRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `operationalDataset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>

Input to the NetworkCommissioning addOrUpdateThreadNetwork command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.8.7.4

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:545](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L545)

___

### TlvAddOrUpdateWiFiNetworkRequest

• `Const` **TlvAddOrUpdateWiFiNetworkRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `credentials`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `ssid`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>

Input to the NetworkCommissioning addOrUpdateWiFiNetwork command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.8.7.3

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:493](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L493)

___

### TlvConnectNetworkRequest

• `Const` **TlvConnectNetworkRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>

Input to the NetworkCommissioning connectNetwork command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.8.7.9

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:409](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L409)

___

### TlvConnectNetworkResponse

• `Const` **TlvConnectNetworkResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `errorValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>

Before generating a ConnectNetworkResponse, the server shall:

  • Set the LastNetworkingStatus attribute value to the NetworkingStatus matching the response.

  • Set the LastNetworkID attribute value to the NetworkID that was used in the ConnectNetwork command which
    caused the response to be generated.

  • Set the LastConnectErrorValue attribute value to the ErrorValue matching the response, including setting it
    to null if the ErrorValue is not applicable.

The NetworkingStatus field shall indicate the status of the last connection attempt, taking one of these values:

  • Success: Connection succeeded.

  • NetworkNotFound: No instance of an explicitly-provided network identifier was found during the attempt to
    join the network.

  • OutOfRange: Network identifier was invalid (e.g. empty, too long, etc).

  • NetworkIdNotFound: The network identifier was not found among the added network configurations in Networks
    attribute.

  • RegulatoryError: Could not connect to a network due to lack of regulatory configuration.

  • UnknownError: An internal error occurred during the operation.

  • Association errors (see also description of errors in Section 11.8.5.3, “NetworkCommissioningStatusEnum”):
    AuthFailure, UnsupportedSecurity, OtherConnectionFailure, IPV6Failed, IPBindFailed

See Section 11.8.7.2.2, “DebugText Field” for usage.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.8.7.10

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:448](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L448)

___

### TlvNetworkConfigResponse

• `Const` **TlvNetworkConfigResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>

This response command relates status information for some commands which require it as their response command.
See each individual cluster server command for the situations that may cause a NetworkingStatus different than
Success.

Before generating a NetworkConfigResponse, the server shall set the LastNetworkingStatus attribute value to the
NetworkingStatus matching the response.

Before generating a NetworkConfigResponse, the server shall set the LastNetworkID attribute value to the
NetworkID that was used in the command for which an invocation caused the response to be generated.

The NetworkingStatus field shall indicate the status of the last operation attempting to modify the Networks
attribute configuration, taking one of these values:

  • Success: Operation succeeded.

  • OutOfRange: Network identifier was invalid (e.g. empty, too long, etc).

  • BoundsExceeded: Adding this network configuration would exceed the limit defined by Section 11.8.6.1,
    “MaxNetworks Attribute”.

  • NetworkIdNotFound: The network identifier was expected to be found, but was not found among the added
    network configurations in Networks attribute.

  • UnknownError: An internal error occurred during the operation.

See Section 11.8.7.2.2, “DebugText Field” for usage.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.8.7.8

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:390](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L390)

___

### TlvNetworkInfoStruct

• `Const` **TlvNetworkInfoStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `connected`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>

NetworkInfoStruct struct describes an existing network configuration, as provided in the Networks attribute.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.8.5.4

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:26](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L26)

___

### TlvRemoveNetworkRequest

• `Const` **TlvRemoveNetworkRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>

Input to the NetworkCommissioning removeNetwork command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.8.7.7

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:355](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L355)

___

### TlvReorderNetworkRequest

• `Const` **TlvReorderNetworkRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `networkIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the NetworkCommissioning reorderNetwork command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.8.7.11

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:482](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L482)

___

### TlvScanNetworksRequest

• `Const` **TlvScanNetworksRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `ssid`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `Uint8Array`\>  }\>

Input to the NetworkCommissioning scanNetworks command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.8.7.1

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:140](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L140)

___

### TlvScanNetworksResponse

• `Const` **TlvScanNetworksResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\> ; `threadScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `channel`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `extendedAddress`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `extendedPanId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `lqi`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `panId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `rssi`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `version`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>[]\> ; `wiFiScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `bssid`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `channel`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `rssi`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `security`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `unencrypted`: [`BitFlag`](schema_export.md#bitflag-1) ; `wep`: [`BitFlag`](schema_export.md#bitflag-1) ; `wpa2Personal`: [`BitFlag`](schema_export.md#bitflag-1) ; `wpa3Personal`: [`BitFlag`](schema_export.md#bitflag-1) ; `wpaPersonal`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `ssid`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `wiFiBand`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`WiFiBand`](../enums/cluster_export.NetworkCommissioning.WiFiBand.md)\>  }\>[]\>  }\>

This command shall contain the status of the last ScanNetworks command, and the associated scan results if the
operation was successful.

Results are valid only if NetworkingStatus is Success.

Before generating a ScanNetworksResponse, the server shall set the LastNetworkingStatus attribute value to the
NetworkingStatus matching the response.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.8.7.2

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:287](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L287)

___

### TlvThreadInterfaceScanResultStruct

• `Const` **TlvThreadInterfaceScanResultStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `channel`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `extendedAddress`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `extendedPanId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `lqi`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `panId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `rssi`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `version`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>

ThreadInterfaceScanResultStruct represents a single Thread network scan result.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.8.5.6

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:258](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L258)

___

### TlvWiFiInterfaceScanResultStruct

• `Const` **TlvWiFiInterfaceScanResultStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `bssid`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `channel`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `rssi`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `security`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `unencrypted`: [`BitFlag`](schema_export.md#bitflag-1) ; `wep`: [`BitFlag`](schema_export.md#bitflag-1) ; `wpa2Personal`: [`BitFlag`](schema_export.md#bitflag-1) ; `wpa3Personal`: [`BitFlag`](schema_export.md#bitflag-1) ; `wpaPersonal`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `ssid`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `wiFiBand`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`WiFiBand`](../enums/cluster_export.NetworkCommissioning.WiFiBand.md)\>  }\>

WiFiInterfaceScanResultStruct represents a single Wi-Fi network scan result.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.8.5.5

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:231](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L231)

___

### WiFiNetworkInterfaceComponent

• `Const` **WiFiNetworkInterfaceComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `commands`: \{ `addOrUpdateWiFiNetwork`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `credentials`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `ssid`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\>  }  }\>

A NetworkCommissioningCluster supports these elements if it supports feature WiFiNetworkInterface.

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:997](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L997)

___

### WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent

• `Const` **WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `connectMaxTimeSeconds`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<`number`, `any`\> ; `scanMaxTimeSeconds`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<`number`, `any`\>  } ; `commands`: \{ `connectNetwork`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `errorValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> ; `removeNetwork`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> ; `reorderNetwork`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `networkIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> ; `scanNetworks`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `ssid`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\> ; `threadScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `channel`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `extendedAddress`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `extendedPanId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `lqi`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `panId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `rssi`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `version`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>[]\> ; `wiFiScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `bssid`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `channel`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `rssi`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `security`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `unencrypted`: [`BitFlag`](schema_export.md#bitflag-1) ; `wep`: [`BitFlag`](schema_export.md#bitflag-1) ; `wpa2Personal`: [`BitFlag`](schema_export.md#bitflag-1) ; `wpa3Personal`: [`BitFlag`](schema_export.md#bitflag-1) ; `wpaPersonal`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `ssid`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `wiFiBand`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`WiFiBand`](../enums/cluster_export.NetworkCommissioning.WiFiBand.md)\>  }\>[]\>  }\>, `any`\>  }  }\>

A NetworkCommissioningCluster supports these elements if it supports features WiFiNetworkInterface or
ThreadNetworkInterface.

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:750](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L750)

___

### WiFiSecurityBitmap

• `Const` **WiFiSecurityBitmap**: `Object`

WiFiSecurityBitmap encodes the supported Wi-Fi security types present in the Security field of the
WiFiInterfaceScanResultStruct.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.8.5.1

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `unencrypted` | [`BitFlag`](schema_export.md#bitflag-1) | Supports unencrypted Wi-Fi |
| `wep` | [`BitFlag`](schema_export.md#bitflag-1) | Supports Wi-Fi using WEP security |
| `wpa2Personal` | [`BitFlag`](schema_export.md#bitflag-1) | Supports Wi-Fi using WPA2-Personal security |
| `wpa3Personal` | [`BitFlag`](schema_export.md#bitflag-1) | Supports Wi-Fi using WPA3-Personal security |
| `wpaPersonal` | [`BitFlag`](schema_export.md#bitflag-1) | Supports Wi-Fi using WPA-Personal security |

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:166](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L166)
