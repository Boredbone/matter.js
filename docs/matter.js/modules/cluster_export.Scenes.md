[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / Scenes

# Namespace: Scenes

[cluster/export](cluster_export.md).Scenes

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.Scenes.Feature.md)

### Type Aliases

- [Extension](cluster_export.Scenes.md#extension)

### Variables

- [Base](cluster_export.Scenes.md#base)
- [Cluster](cluster_export.Scenes.md#cluster)
- [Mode](cluster_export.Scenes.md#mode)
- [NameSupport](cluster_export.Scenes.md#namesupport)
- [TlvAddSceneRequest](cluster_export.Scenes.md#tlvaddscenerequest)
- [TlvAddSceneResponse](cluster_export.Scenes.md#tlvaddsceneresponse)
- [TlvAttributeValuePair](cluster_export.Scenes.md#tlvattributevaluepair)
- [TlvCopySceneRequest](cluster_export.Scenes.md#tlvcopyscenerequest)
- [TlvCopySceneResponse](cluster_export.Scenes.md#tlvcopysceneresponse)
- [TlvExtensionFieldSet](cluster_export.Scenes.md#tlvextensionfieldset)
- [TlvGetSceneMembershipRequest](cluster_export.Scenes.md#tlvgetscenemembershiprequest)
- [TlvGetSceneMembershipResponse](cluster_export.Scenes.md#tlvgetscenemembershipresponse)
- [TlvRecallSceneRequest](cluster_export.Scenes.md#tlvrecallscenerequest)
- [TlvRemoveAllScenesRequest](cluster_export.Scenes.md#tlvremoveallscenesrequest)
- [TlvRemoveAllScenesResponse](cluster_export.Scenes.md#tlvremoveallscenesresponse)
- [TlvRemoveSceneRequest](cluster_export.Scenes.md#tlvremovescenerequest)
- [TlvRemoveSceneResponse](cluster_export.Scenes.md#tlvremovesceneresponse)
- [TlvStoreSceneRequest](cluster_export.Scenes.md#tlvstorescenerequest)
- [TlvStoreSceneResponse](cluster_export.Scenes.md#tlvstoresceneresponse)
- [TlvViewSceneRequest](cluster_export.Scenes.md#tlvviewscenerequest)
- [TlvViewSceneResponse](cluster_export.Scenes.md#tlvviewsceneresponse)

## Type Aliases

### Extension

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](cluster_export.Scenes.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:557](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L557)

## Variables

### Base

• `Const` **Base**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `currentGroup`: [`Attribute`](cluster_export.md#attribute)\<[`GroupId`](datatype_export.md#groupid), `any`\> ; `currentScene`: [`Attribute`](cluster_export.md#attribute)\<`number`, `any`\> ; `lastConfiguredBy`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<``null`` \| [`NodeId`](datatype_export.md#nodeid), `any`\> ; `nameSupport`: [`Attribute`](cluster_export.md#attribute)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `nameSupport`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `sceneCount`: [`Attribute`](cluster_export.md#attribute)\<`number`, `any`\> ; `sceneValid`: [`Attribute`](cluster_export.md#attribute)\<`boolean`, `any`\>  } ; `commands`: \{ `addScene`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `extensionFieldSets`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sceneName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `copyScene`: [`OptionalCommand`](cluster_export.md#optionalcommand)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupIdentifierFrom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `groupIdentifierTo`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `copyAllScenes`: [`BitFlag`](schema_export.md#bitflag-1) ; `reserved`: [`BitField`](schema_export.md#bitfield-1)  }\>\> ; `sceneIdentifierFrom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sceneIdentifierTo`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupIdentifierFrom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneIdentifierFrom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `enhancedAddScene`: [`OptionalCommand`](cluster_export.md#optionalcommand)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `extensionFieldSets`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sceneName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `enhancedViewScene`: [`OptionalCommand`](cluster_export.md#optionalcommand)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `extensionFieldSets`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sceneName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>, `any`\> ; `getSceneMembership`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `capacity`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneList`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`[]\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `recallScene`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `number`\>  }\>, `void`, `any`\> ; `removeAllScenes`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `removeScene`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `storeScene`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `viewScene`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `extensionFieldSets`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sceneName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>, `any`\>  } ; `features`: \{ `sceneNames`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``5`` = 0x5; `name`: ``"Scenes"`` = "Scenes"; `revision`: ``4`` = 4 }\>

These elements and properties are present in all Scenes clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:338](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L338)

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`Merge`](util_export.md#merge)\<[`Merge`](util_export.md#merge)\<\{ `currentGroup`: [`Attribute`](cluster_export.md#attribute)\<[`GroupId`](datatype_export.md#groupid), `any`\> ; `currentScene`: [`Attribute`](cluster_export.md#attribute)\<`number`, `any`\> ; `lastConfiguredBy`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<``null`` \| [`NodeId`](datatype_export.md#nodeid), `any`\> ; `nameSupport`: [`Attribute`](cluster_export.md#attribute)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `nameSupport`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `sceneCount`: [`Attribute`](cluster_export.md#attribute)\<`number`, `any`\> ; `sceneValid`: [`Attribute`](cluster_export.md#attribute)\<`boolean`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)\<\{ `sceneNames`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes-1)\<\{ `sceneNames`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `commands`: \{ `addScene`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `extensionFieldSets`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sceneName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `copyScene`: [`OptionalCommand`](cluster_export.md#optionalcommand)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupIdentifierFrom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `groupIdentifierTo`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `copyAllScenes`: [`BitFlag`](schema_export.md#bitflag-1) ; `reserved`: [`BitField`](schema_export.md#bitfield-1)  }\>\> ; `sceneIdentifierFrom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sceneIdentifierTo`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupIdentifierFrom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneIdentifierFrom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `enhancedAddScene`: [`OptionalCommand`](cluster_export.md#optionalcommand)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `extensionFieldSets`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sceneName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `enhancedViewScene`: [`OptionalCommand`](cluster_export.md#optionalcommand)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `extensionFieldSets`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sceneName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>, `any`\> ; `getSceneMembership`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `capacity`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneList`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`[]\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `recallScene`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `number`\>  }\>, `void`, `any`\> ; `removeAllScenes`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `removeScene`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `storeScene`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `viewScene`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `extensionFieldSets`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sceneName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>, `any`\>  } ; `events`: {} ; `features`: \{ `sceneNames`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: [`Branded`](util_export.md#branded)\<``5`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\>, ``"ClusterId"``\> ; `name`: ``"Scenes"`` ; `revision`: ``4`` ; `supportedFeatures`: \{ `sceneNames`: ``true`` = true } ; `unknown`: ``false``  } & `Omit`\<\{ `attributes`: [`Merge`](util_export.md#merge)\<\{ `currentGroup`: [`Attribute`](cluster_export.md#attribute)\<[`GroupId`](datatype_export.md#groupid), `any`\> ; `currentScene`: [`Attribute`](cluster_export.md#attribute)\<`number`, `any`\> ; `lastConfiguredBy`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<``null`` \| [`NodeId`](datatype_export.md#nodeid), `any`\> ; `nameSupport`: [`Attribute`](cluster_export.md#attribute)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `nameSupport`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `sceneCount`: [`Attribute`](cluster_export.md#attribute)\<`number`, `any`\> ; `sceneValid`: [`Attribute`](cluster_export.md#attribute)\<`boolean`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)\<\{ `sceneNames`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `commands`: \{ `addScene`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `extensionFieldSets`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sceneName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `copyScene`: [`OptionalCommand`](cluster_export.md#optionalcommand)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupIdentifierFrom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `groupIdentifierTo`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `copyAllScenes`: [`BitFlag`](schema_export.md#bitflag-1) ; `reserved`: [`BitField`](schema_export.md#bitfield-1)  }\>\> ; `sceneIdentifierFrom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sceneIdentifierTo`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupIdentifierFrom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneIdentifierFrom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `enhancedAddScene`: [`OptionalCommand`](cluster_export.md#optionalcommand)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `extensionFieldSets`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sceneName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `enhancedViewScene`: [`OptionalCommand`](cluster_export.md#optionalcommand)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `extensionFieldSets`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sceneName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>, `any`\> ; `getSceneMembership`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `capacity`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneList`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`[]\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `recallScene`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `number`\>  }\>, `void`, `any`\> ; `removeAllScenes`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `removeScene`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `storeScene`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `viewScene`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `extensionFieldSets`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sceneName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>, `any`\>  } ; `events`: {} ; `features`: \{ `sceneNames`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``5`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\> ; `name`: ``"Scenes"`` ; `revision`: ``4`` ; `supportedFeatures`: \{ `sceneNames`: ``true`` = true } ; `unknown`: ``false``  }, ``"attributes"``\> & \{ `with`: \<T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.Scenes.md#extension)\<[`BitFlags`](schema_export.md#bitflags)\<\{ `sceneNames`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\> = extender }

Scenes

The Scenes cluster provides attributes and commands for setting up and recalling scenes. Each scene corresponds
to a set of stored values of specified attributes for one or more clusters on the same end point as the Scenes
cluster.

In most cases scenes are associated with a particular group identifier. Scenes may also exist without a group,
in which case the value 0 replaces the group identifier. Note that extra care is required in these cases to
avoid a scene identifier collision, and that commands related to scenes without a group may only be unicast,
i.e., they may not be multicast or broadcast.

In a network supporting fabrics, scenes are scoped to the accessing fabric. When storing scene information,
implementations need to take care of this.

NOTE Support for Scenes cluster is provisional.

ScenesCluster supports optional features that you can enable with the ScenesCluster.with() factory method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:536](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L536)

___

### Mode

• `Const` **Mode**: `Object`

The value of Scenes.mode

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.9.11.1

#### Type declaration

| Name | Type |
| :------ | :------ |
| `copyAllScenes` | [`BitFlag`](schema_export.md#bitflag-1) |
| `reserved` | [`BitField`](schema_export.md#bitfield-1) |

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:231](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L231)

___

### NameSupport

• `Const` **NameSupport**: `Object`

The value of the Scenes nameSupport attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.7.5

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `nameSupport` | [`BitFlag`](schema_export.md#bitflag-1) | The ability to store a name for a scene. |

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:39](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L39)

___

### TlvAddSceneRequest

• `Const` **TlvAddSceneRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `extensionFieldSets`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sceneName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the Scenes addScene command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.9.2

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:88](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L88)

___

### TlvAddSceneResponse

• `Const` **TlvAddSceneResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.9.12

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:99](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L99)

___

### TlvAttributeValuePair

• `Const` **TlvAttributeValuePair**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\>  }\>

This data type indicates a combination of an identifier and the value of an attribute.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.6.1

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:51](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L51)

___

### TlvCopySceneRequest

• `Const` **TlvCopySceneRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupIdentifierFrom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `groupIdentifierTo`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `copyAllScenes`: [`BitFlag`](schema_export.md#bitflag-1) ; `reserved`: [`BitField`](schema_export.md#bitfield-1)  }\>\> ; `sceneIdentifierFrom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sceneIdentifierTo`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the Scenes copyScene command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.9.11

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:238](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L238)

___

### TlvCopySceneResponse

• `Const` **TlvCopySceneResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupIdentifierFrom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneIdentifierFrom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>

The CopySceneResponse command allows a server to respond to a CopyScene command.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.9.20

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:293](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L293)

___

### TlvExtensionFieldSet

• `Const` **TlvExtensionFieldSet**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `attributeValueList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\>  }\>

This data type indicates for a given cluster a set of attributes and their values. Only attributes which have
the "S" designation in the Quality column of the cluster specification shall be used in the AttributeValueList
field.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.6.2

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:78](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L78)

___

### TlvGetSceneMembershipRequest

• `Const` **TlvGetSceneMembershipRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\>  }\>

Input to the Scenes getSceneMembership command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.9.8

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:190](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L190)

___

### TlvGetSceneMembershipResponse

• `Const` **TlvGetSceneMembershipResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `capacity`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneList`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`[]\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>

The fields of the get scene membership response command have the following semantics:

The Capacity field shall contain the remaining capacity of the Scene Table of the server (for all groups). The
following values apply:

  • 0 - No further scenes may be added.

  • 0 < Capacity < 0xfe - Capacity holds the number of scenes that may be added.

  • 0xfe - At least 1 further scene may be added (exact number is unknown).

  • null - It is unknown if any further scenes may be added.

The Status field shall contain SUCCESS or ILLEGAL_COMMAND (the endpoint is not a member of the group) as
appropriate.

The GroupID field shall be set to the corresponding field of the received GetSceneMembership command.

If the status is not SUCCESS then the SceneList field shall be omitted, else the SceneList field shall contain
the identifiers of all the scenes in the Scene Table with the corresponding Group ID.

Zigbee: If the total number of scenes associated with this Group ID will cause the maximum payload length of a
frame to be exceeded, then the SceneList field shall contain only as many scenes as will fit.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.9.17

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:219](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L219)

___

### TlvRecallSceneRequest

• `Const` **TlvRecallSceneRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `number`\>  }\>

Input to the Scenes recallScene command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.9.7

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:179](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L179)

___

### TlvRemoveAllScenesRequest

• `Const` **TlvRemoveAllScenesRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\>  }\>

Input to the Scenes removeAllScenes command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.9.5

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:148](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L148)

___

### TlvRemoveAllScenesResponse

• `Const` **TlvRemoveAllScenesResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.9.15

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:153](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L153)

___

### TlvRemoveSceneRequest

• `Const` **TlvRemoveSceneRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the Scenes removeScene command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.9.4

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:129](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L129)

___

### TlvRemoveSceneResponse

• `Const` **TlvRemoveSceneResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.9.14

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:137](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L137)

___

### TlvStoreSceneRequest

• `Const` **TlvStoreSceneRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the Scenes storeScene command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.9.6

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:163](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L163)

___

### TlvStoreSceneResponse

• `Const` **TlvStoreSceneResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.9.16

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:168](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L168)

___

### TlvViewSceneRequest

• `Const` **TlvViewSceneRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the Scenes viewScene command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.9.3

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:110](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L110)

___

### TlvViewSceneResponse

• `Const` **TlvViewSceneResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `extensionFieldSets`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sceneName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.9.13

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:115](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L115)
