[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / ModeSelect

# Namespace: ModeSelect

[cluster/export](cluster_export.md).ModeSelect

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.ModeSelect.Feature.md)

### Type Aliases

- [Extension](cluster_export.ModeSelect.md#extension)

### Variables

- [Base](cluster_export.ModeSelect.md#base)
- [Cluster](cluster_export.ModeSelect.md#cluster)
- [Complete](cluster_export.ModeSelect.md#complete)
- [OnOffComponent](cluster_export.ModeSelect.md#onoffcomponent)
- [TlvChangeToModeRequest](cluster_export.ModeSelect.md#tlvchangetomoderequest)
- [TlvModeOptionStruct](cluster_export.ModeSelect.md#tlvmodeoptionstruct)
- [TlvSemanticTagStruct](cluster_export.ModeSelect.md#tlvsemantictagstruct)

## Type Aliases

### Extension

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](cluster_export.ModeSelect.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  } & `SF` extends \{ `onOff`: ``true``  } ? typeof [`OnOffComponent`](cluster_export.ModeSelect.md#onoffcomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:278](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L278)

## Variables

### Base

• `Const` **Base**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `currentMode`: [`Attribute`](cluster_export.md#attribute)\<`number`, `any`\> ; `description`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `mfgCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`VendorId`](datatype_export.md#vendorid)\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>[]\>  }\>[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `newMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `features`: \{ `onOff`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``80`` = 0x50; `name`: ``"ModeSelect"`` = "ModeSelect"; `revision`: ``1`` = 1 }\>

These elements and properties are present in all ModeSelect clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:120](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L120)

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`Merge`](util_export.md#merge)\<[`Merge`](util_export.md#merge)\<\{ `currentMode`: [`Attribute`](cluster_export.md#attribute)\<`number`, `any`\> ; `description`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `mfgCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`VendorId`](datatype_export.md#vendorid)\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>[]\>  }\>[], `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)\<\{ `onOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes-1)\<\{ `onOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `commands`: \{ `changeToMode`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `newMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `events`: {} ; `features`: \{ `onOff`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: [`Branded`](util_export.md#branded)\<``80`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\>, ``"ClusterId"``\> ; `name`: ``"ModeSelect"`` ; `revision`: ``1`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `currentMode`: [`Attribute`](cluster_export.md#attribute)\<`number`, `any`\> ; `description`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `mfgCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`VendorId`](datatype_export.md#vendorid)\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>[]\>  }\>[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `newMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `features`: \{ `onOff`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``80`` = 0x50; `name`: ``"ModeSelect"`` = "ModeSelect"; `revision`: ``1`` = 1 }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.ModeSelect.md#extension)\<[`BitFlags`](schema_export.md#bitflags)\<\{ `onOff`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\> = extender }

Mode Select

This cluster provides an interface for controlling a characteristic of a device that can be set to one of
several predefined values. For example, the light pattern of a disco ball, the mode of a massage chair, or the
wash cycle of a laundry machine.

The server allows the client to set a mode on the server. A mode is one of a list of options that may be
presented by a client for a user choice, or understood by the client, via the semantic tags on the mode.

A semantic tag is either a standard tag within a standard category namespace, or a manufacturer specific tag,
within the namespace of the vendor ID of the manufacturer. If there is no semantic tag, the mode is anonymous,
and the selection is made by the user solely based on the Label string.

Each cluster ID that indicates this specification shall define a distinct purpose for the cluster instance. For
example: A LightBlinking cluster ID supports blinking modes for a light (and is described that way).

An anonymous mode shall support the derived cluster purpose. A manufacturer specific semantic tag shall support
the derived cluster purpose. An anonymous mode shall NOT replace the meaning of a standard semantic tag, when
one exists, for the cluster purpose.

ModeSelectCluster supports optional features that you can enable with the ModeSelectCluster.with() factory
method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.8

#### Defined in

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:256](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L256)

___

### Complete

• `Const` **Complete**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.md#attribute)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.md#attribute)\<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](cluster_export.md#attribute)\<`number`, `never`\> ; `currentMode`: [`Attribute`](cluster_export.md#attribute)\<`number`, `any`\> ; `description`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<`string`, `any`\> ; `eventList`: [`Attribute`](cluster_export.md#attribute)\<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.md#attribute)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `onOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.md#attribute)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `onMode`: [`WritableAttribute`](cluster_export.md#writableattribute)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `onOff`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `standardNamespace`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `mfgCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`VendorId`](datatype_export.md#vendorid)\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>[]\>  }\>[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `newMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } = Cluster.commands; `features`: \{ `onOff`: [`BitFlag`](schema_export.md#bitflag-1)  } = Cluster.features; `id`: ``80`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\> = Cluster.id; `name`: ``"ModeSelect"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

This cluster supports all ModeSelect features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:290](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L290)

___

### OnOffComponent

• `Const` **OnOffComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `onMode`: [`WritableAttribute`](cluster_export.md#writableattribute)\<``null`` \| `number`, `any`\>  }  }\>

A ModeSelectCluster supports these elements if it supports feature OnOff.

#### Defined in

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:215](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L215)

___

### TlvChangeToModeRequest

• `Const` **TlvChangeToModeRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `newMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the ModeSelect changeToMode command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.8.6.1

#### Defined in

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:101](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L101)

___

### TlvModeOptionStruct

• `Const` **TlvModeOptionStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `mfgCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`VendorId`](datatype_export.md#vendorid)\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>[]\>  }\>

This is a struct representing a possible mode of the server.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.8.8.1

#### Defined in

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:60](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L60)

___

### TlvSemanticTagStruct

• `Const` **TlvSemanticTagStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `mfgCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`VendorId`](datatype_export.md#vendorid)\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

A Semantic Tag is meant to be interpreted by the client for the purpose the cluster serves.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.8.8.2

#### Defined in

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:33](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L33)
