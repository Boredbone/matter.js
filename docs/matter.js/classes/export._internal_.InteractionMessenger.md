[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [\<internal\>](../modules/export._internal_.md) / InteractionMessenger

# Class: InteractionMessenger\<ContextT\>

[export](../modules/export.md).[\<internal\>](../modules/export._internal_.md).InteractionMessenger

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Hierarchy

- **`InteractionMessenger`**

  ↳ [`InteractionServerMessenger`](protocol_interaction_export.InteractionServerMessenger.md)

  ↳ [`IncomingInteractionClientMessenger`](protocol_interaction_export.IncomingInteractionClientMessenger.md)

## Table of contents

### Constructors

- [constructor](export._internal_.InteractionMessenger.md#constructor)

### Properties

- [exchange](export._internal_.InteractionMessenger.md#exchange)

### Methods

- [close](export._internal_.InteractionMessenger.md#close)
- [getExchangeChannelName](export._internal_.InteractionMessenger.md#getexchangechannelname)
- [nextMessage](export._internal_.InteractionMessenger.md#nextmessage)
- [send](export._internal_.InteractionMessenger.md#send)
- [sendStatus](export._internal_.InteractionMessenger.md#sendstatus)
- [throwIfErrorStatusMessage](export._internal_.InteractionMessenger.md#throwiferrorstatusmessage)
- [waitForSuccess](export._internal_.InteractionMessenger.md#waitforsuccess)

## Constructors

### constructor

• **new InteractionMessenger**\<`ContextT`\>(`exchange`): [`InteractionMessenger`](export._internal_.InteractionMessenger.md)\<`ContextT`\>

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol_export.MessageExchange.md)\<`ContextT`\> |

#### Returns

[`InteractionMessenger`](export._internal_.InteractionMessenger.md)\<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:81](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L81)

## Properties

### exchange

• `Protected` **exchange**: [`MessageExchange`](protocol_export.MessageExchange.md)\<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:81](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L81)

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:111](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L111)

___

### getExchangeChannelName

▸ **getExchangeChannelName**(): `string`

#### Returns

`string`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:126](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L126)

___

### nextMessage

▸ **nextMessage**(`expectedMessageType?`): `Promise`\<[`Message`](../interfaces/codec_export.Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expectedMessageType?` | `number` |

#### Returns

`Promise`\<[`Message`](../interfaces/codec_export.Message.md)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:99](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L99)

___

### send

▸ **send**(`messageType`, `payload`, `options?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageType` | `number` |
| `payload` | `Uint8Array` |
| `options?` | [`ExchangeSendOptions`](../modules/protocol_export.md#exchangesendoptions) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:83](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L83)

___

### sendStatus

▸ **sendStatus**(`status`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`StatusCode`](../enums/protocol_interaction_export.StatusCode.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:87](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L87)

___

### throwIfErrorStatusMessage

▸ **throwIfErrorStatusMessage**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/codec_export.Message.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:115](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L115)

___

### waitForSuccess

▸ **waitForSuccess**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:94](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L94)
