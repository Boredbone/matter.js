[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / WritableAttribute

# Interface: WritableAttribute\<T, F\>

[exports/cluster](../modules/exports_cluster.md).WritableAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

## Hierarchy

- [`Attribute`](../modules/exports_cluster.md#attribute)\<`T`, `F`\>

  ↳ **`WritableAttribute`**

## Table of contents

### Properties

- [default](exports_cluster.WritableAttribute.md#default)
- [fabricScoped](exports_cluster.WritableAttribute.md#fabricscoped)
- [fixed](exports_cluster.WritableAttribute.md#fixed)
- [id](exports_cluster.WritableAttribute.md#id)
- [isConditional](exports_cluster.WritableAttribute.md#isconditional)
- [mandatoryIf](exports_cluster.WritableAttribute.md#mandatoryif)
- [omitChanges](exports_cluster.WritableAttribute.md#omitchanges)
- [optional](exports_cluster.WritableAttribute.md#optional)
- [optionalIf](exports_cluster.WritableAttribute.md#optionalif)
- [persistent](exports_cluster.WritableAttribute.md#persistent)
- [readAcl](exports_cluster.WritableAttribute.md#readacl)
- [scene](exports_cluster.WritableAttribute.md#scene)
- [schema](exports_cluster.WritableAttribute.md#schema)
- [timed](exports_cluster.WritableAttribute.md#timed)
- [unknown](exports_cluster.WritableAttribute.md#unknown)
- [writable](exports_cluster.WritableAttribute.md#writable)
- [writeAcl](exports_cluster.WritableAttribute.md#writeacl)

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

• **unknown**: `boolean`

#### Inherited from

Attribute.unknown

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:42

___

### writable

• **writable**: ``true``

#### Overrides

Attribute.writable

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:51

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

Attribute.writeAcl

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:37
