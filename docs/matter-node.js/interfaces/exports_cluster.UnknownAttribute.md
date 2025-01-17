[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / UnknownAttribute

# Interface: UnknownAttribute\<T, F\>

[exports/cluster](../modules/exports_cluster.md).UnknownAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

## Hierarchy

- [`Attribute`](../modules/exports_cluster.md#attribute)\<`T`, `F`\>

  ↳ **`UnknownAttribute`**

## Table of contents

### Properties

- [default](exports_cluster.UnknownAttribute.md#default)
- [fabricScoped](exports_cluster.UnknownAttribute.md#fabricscoped)
- [fixed](exports_cluster.UnknownAttribute.md#fixed)
- [id](exports_cluster.UnknownAttribute.md#id)
- [isConditional](exports_cluster.UnknownAttribute.md#isconditional)
- [mandatoryIf](exports_cluster.UnknownAttribute.md#mandatoryif)
- [omitChanges](exports_cluster.UnknownAttribute.md#omitchanges)
- [optional](exports_cluster.UnknownAttribute.md#optional)
- [optionalIf](exports_cluster.UnknownAttribute.md#optionalif)
- [persistent](exports_cluster.UnknownAttribute.md#persistent)
- [readAcl](exports_cluster.UnknownAttribute.md#readacl)
- [scene](exports_cluster.UnknownAttribute.md#scene)
- [schema](exports_cluster.UnknownAttribute.md#schema)
- [timed](exports_cluster.UnknownAttribute.md#timed)
- [unknown](exports_cluster.UnknownAttribute.md#unknown)
- [writable](exports_cluster.UnknownAttribute.md#writable)
- [writeAcl](exports_cluster.UnknownAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

Attribute.default

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:38

___

### fabricScoped

• **fabricScoped**: `boolean`

#### Inherited from

Attribute.fabricScoped

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:35

___

### fixed

• **fixed**: `boolean`

#### Inherited from

Attribute.fixed

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:34

___

### id

• **id**: [`AttributeId`](../modules/exports_datatype.md#attributeid)

#### Inherited from

Attribute.id

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:26

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

Attribute.isConditional

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:39

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

Attribute.mandatoryIf

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:41

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

Attribute.omitChanges

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:36

___

### optional

• **optional**: `boolean`

#### Inherited from

Attribute.optional

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:28

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

Attribute.optionalIf

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:40

___

### persistent

• **persistent**: `boolean`

#### Inherited from

Attribute.persistent

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:32

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

Attribute.readAcl

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:29

___

### scene

• **scene**: `boolean`

#### Inherited from

Attribute.scene

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:31

___

### schema

• **schema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)\<`T`\>

#### Inherited from

Attribute.schema

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:27

___

### timed

• **timed**: `boolean`

#### Inherited from

Attribute.timed

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:33

___

### unknown

• **unknown**: ``true``

#### Overrides

Attribute.unknown

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:112

___

### writable

• **writable**: `boolean`

#### Inherited from

Attribute.writable

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:30

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

Attribute.writeAcl

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:37
