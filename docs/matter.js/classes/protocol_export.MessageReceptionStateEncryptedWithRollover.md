[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/export](../modules/protocol_export.md) / MessageReceptionStateEncryptedWithRollover

# Class: MessageReceptionStateEncryptedWithRollover

[protocol/export](../modules/protocol_export.md).MessageReceptionStateEncryptedWithRollover

Implements a message reception state for encrypted messages with rollover.
A message counter with rollover is a free running message counter that monotonically increases, but rolls
over to zero when it exceeds the maximum value of the counter (32-bits). If the difference is below 2^31 then it is
considered a rollover and not a smaller value

## Hierarchy

- [`MessageReceptionStateEncryptedWithoutRollover`](protocol_export.MessageReceptionStateEncryptedWithoutRollover.md)

  ↳ **`MessageReceptionStateEncryptedWithRollover`**

## Table of contents

### Constructors

- [constructor](protocol_export.MessageReceptionStateEncryptedWithRollover.md#constructor)

### Properties

- [maximumMessageCounter](protocol_export.MessageReceptionStateEncryptedWithRollover.md#maximummessagecounter)

### Methods

- [calculateDiff](protocol_export.MessageReceptionStateEncryptedWithRollover.md#calculatediff)
- [updateMessageCounter](protocol_export.MessageReceptionStateEncryptedWithRollover.md#updatemessagecounter)

## Constructors

### constructor

• **new MessageReceptionStateEncryptedWithRollover**(`messageCounter?`): [`MessageReceptionStateEncryptedWithRollover`](protocol_export.MessageReceptionStateEncryptedWithRollover.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageCounter?` | `number` |

#### Returns

[`MessageReceptionStateEncryptedWithRollover`](protocol_export.MessageReceptionStateEncryptedWithRollover.md)

#### Inherited from

[MessageReceptionStateEncryptedWithoutRollover](protocol_export.MessageReceptionStateEncryptedWithoutRollover.md).[constructor](protocol_export.MessageReceptionStateEncryptedWithoutRollover.md#constructor)

#### Defined in

[packages/matter.js/src/protocol/MessageReceptionState.ts:29](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/protocol/MessageReceptionState.ts#L29)

## Properties

### maximumMessageCounter

• `Protected` **maximumMessageCounter**: `undefined` \| `number`

#### Inherited from

[MessageReceptionStateEncryptedWithoutRollover](protocol_export.MessageReceptionStateEncryptedWithoutRollover.md).[maximumMessageCounter](protocol_export.MessageReceptionStateEncryptedWithoutRollover.md#maximummessagecounter)

#### Defined in

[packages/matter.js/src/protocol/MessageReceptionState.ts:26](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/protocol/MessageReceptionState.ts#L26)

## Methods

### calculateDiff

▸ **calculateDiff**(`messageCounter`): `number`

Calculate plain diff without rollover.
This method is mainly overridden for other counter types and follow the following semantic
Return number is:
* negative if the new message counter is smaller than the current maximum. Smaller values within the Window size
  are check separately within the window. Other smaller values are considered DUPLICATE
* positive if the new message counter is larger than the current maximum and are always NEW

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageCounter` | `number` |

#### Returns

`number`

#### Overrides

[MessageReceptionStateEncryptedWithoutRollover](protocol_export.MessageReceptionStateEncryptedWithoutRollover.md).[calculateDiff](protocol_export.MessageReceptionStateEncryptedWithoutRollover.md#calculatediff)

#### Defined in

[packages/matter.js/src/protocol/MessageReceptionState.ts:142](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/protocol/MessageReceptionState.ts#L142)

___

### updateMessageCounter

▸ **updateMessageCounter**(`messageCounter`): `void`

Returns true if the message counter is a duplicate.

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageCounter` | `number` |

#### Returns

`void`

#### Inherited from

[MessageReceptionStateEncryptedWithoutRollover](protocol_export.MessageReceptionStateEncryptedWithoutRollover.md).[updateMessageCounter](protocol_export.MessageReceptionStateEncryptedWithoutRollover.md#updatemessagecounter)

#### Defined in

[packages/matter.js/src/protocol/MessageReceptionState.ts:106](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/protocol/MessageReceptionState.ts#L106)
