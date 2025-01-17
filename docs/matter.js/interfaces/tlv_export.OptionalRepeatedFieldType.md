[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv/export](../modules/tlv_export.md) / OptionalRepeatedFieldType

# Interface: OptionalRepeatedFieldType\<T\>

[tlv/export](../modules/tlv_export.md).OptionalRepeatedFieldType

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`T`\>

  ↳ **`OptionalRepeatedFieldType`**

## Table of contents

### Properties

- [fallback](tlv_export.OptionalRepeatedFieldType.md#fallback)
- [id](tlv_export.OptionalRepeatedFieldType.md#id)
- [maxLength](tlv_export.OptionalRepeatedFieldType.md#maxlength)
- [optional](tlv_export.OptionalRepeatedFieldType.md#optional)
- [repeated](tlv_export.OptionalRepeatedFieldType.md#repeated)
- [schema](tlv_export.OptionalRepeatedFieldType.md#schema)

## Properties

### fallback

• `Optional` **fallback**: `T`

#### Inherited from

[OptionalFieldType](tlv_export.OptionalFieldType.md).[fallback](tlv_export.OptionalFieldType.md#fallback)

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:21](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/tlv/TlvObject.ts#L21)

___

### id

• **id**: `number`

#### Inherited from

[OptionalFieldType](tlv_export.OptionalFieldType.md).[id](tlv_export.OptionalFieldType.md#id)

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:17](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/tlv/TlvObject.ts#L17)

___

### maxLength

• `Optional` **maxLength**: `number`

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:36](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/tlv/TlvObject.ts#L36)

___

### optional

• **optional**: ``true``

#### Inherited from

[OptionalFieldType](tlv_export.OptionalFieldType.md).[optional](tlv_export.OptionalFieldType.md#optional)

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:31](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/tlv/TlvObject.ts#L31)

___

### repeated

• **repeated**: ``true``

#### Overrides

[OptionalFieldType](tlv_export.OptionalFieldType.md).[repeated](tlv_export.OptionalFieldType.md#repeated)

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:35](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/tlv/TlvObject.ts#L35)

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`T`\>

#### Inherited from

[OptionalFieldType](tlv_export.OptionalFieldType.md).[schema](tlv_export.OptionalFieldType.md#schema)

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:18](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/tlv/TlvObject.ts#L18)
