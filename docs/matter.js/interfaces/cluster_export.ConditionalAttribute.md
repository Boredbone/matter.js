[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / ConditionalAttribute

# Interface: ConditionalAttribute\<T, F\>

[cluster/export](../modules/cluster_export.md).ConditionalAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Hierarchy

- [`OptionalAttribute`](../modules/cluster_export.md#optionalattribute)\<`T`, `F`\>

  ↳ **`ConditionalAttribute`**

## Table of contents

### Properties

- [default](cluster_export.ConditionalAttribute.md#default)
- [fabricScoped](cluster_export.ConditionalAttribute.md#fabricscoped)
- [fixed](cluster_export.ConditionalAttribute.md#fixed)
- [id](cluster_export.ConditionalAttribute.md#id)
- [isConditional](cluster_export.ConditionalAttribute.md#isconditional)
- [mandatoryIf](cluster_export.ConditionalAttribute.md#mandatoryif)
- [omitChanges](cluster_export.ConditionalAttribute.md#omitchanges)
- [optional](cluster_export.ConditionalAttribute.md#optional)
- [optionalIf](cluster_export.ConditionalAttribute.md#optionalif)
- [persistent](cluster_export.ConditionalAttribute.md#persistent)
- [readAcl](cluster_export.ConditionalAttribute.md#readacl)
- [scene](cluster_export.ConditionalAttribute.md#scene)
- [schema](cluster_export.ConditionalAttribute.md#schema)
- [timed](cluster_export.ConditionalAttribute.md#timed)
- [unknown](cluster_export.ConditionalAttribute.md#unknown)
- [writable](cluster_export.ConditionalAttribute.md#writable)
- [writeAcl](cluster_export.ConditionalAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

OptionalAttribute.default

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:48](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/Cluster.ts#L48)

___

### fabricScoped

• **fabricScoped**: `boolean`

#### Inherited from

OptionalAttribute.fabricScoped

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:45](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/Cluster.ts#L45)

___

### fixed

• **fixed**: `boolean`

#### Inherited from

OptionalAttribute.fixed

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:44](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/Cluster.ts#L44)

___

### id

• **id**: [`AttributeId`](../modules/datatype_export.md#attributeid)

#### Inherited from

OptionalAttribute.id

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:36](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/Cluster.ts#L36)

___

### isConditional

• **isConditional**: ``true``

#### Overrides

OptionalAttribute.isConditional

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:60](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/Cluster.ts#L60)

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

OptionalAttribute.mandatoryIf

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:51](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/Cluster.ts#L51)

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

OptionalAttribute.omitChanges

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:46](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/Cluster.ts#L46)

___

### optional

• **optional**: ``true``

#### Inherited from

OptionalAttribute.optional

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:56](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/Cluster.ts#L56)

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

OptionalAttribute.optionalIf

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:50](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/Cluster.ts#L50)

___

### persistent

• **persistent**: `boolean`

#### Inherited from

OptionalAttribute.persistent

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:42](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/Cluster.ts#L42)

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

OptionalAttribute.readAcl

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:39](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/Cluster.ts#L39)

___

### scene

• **scene**: `boolean`

#### Inherited from

OptionalAttribute.scene

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:41](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/Cluster.ts#L41)

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`T`\>

#### Inherited from

OptionalAttribute.schema

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:37](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/Cluster.ts#L37)

___

### timed

• **timed**: `boolean`

#### Inherited from

OptionalAttribute.timed

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:43](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/Cluster.ts#L43)

___

### unknown

• **unknown**: `boolean`

#### Inherited from

OptionalAttribute.unknown

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:52](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/Cluster.ts#L52)

___

### writable

• **writable**: `boolean`

#### Inherited from

OptionalAttribute.writable

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:40](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/Cluster.ts#L40)

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

OptionalAttribute.writeAcl

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:47](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/Cluster.ts#L47)
