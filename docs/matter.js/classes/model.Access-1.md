[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](../modules/model.md) / Access

# Class: Access

[model](../modules/model.md).Access

An operational representation of "access" as defined by the Matter
specification.

"Access" controls the operations a remote party may perform on a data field
or cluster element.

## Hierarchy

- [`Aspect`](model.Aspect.md)\<[`Definition`](../modules/model.Access.md#definition)\>

  ↳ **`Access`**

## Implements

- [`Ast`](../modules/model.Access.md#ast)

## Table of contents

### Constructors

- [constructor](model.Access-1.md#constructor)

### Properties

- [definition](model.Access-1.md#definition)
- [errors](model.Access-1.md#errors)
- [fabric](model.Access-1.md#fabric)
- [readPriv](model.Access-1.md#readpriv)
- [rw](model.Access-1.md#rw)
- [timed](model.Access-1.md#timed)
- [writePriv](model.Access-1.md#writepriv)

### Accessors

- [empty](model.Access-1.md#empty)
- [readable](model.Access-1.md#readable)
- [valid](model.Access-1.md#valid)
- [writable](model.Access-1.md#writable)

### Methods

- [equals](model.Access-1.md#equals)
- [error](model.Access-1.md#error)
- [extend](model.Access-1.md#extend)
- [set](model.Access-1.md#set)
- [toString](model.Access-1.md#tostring)
- [valueOf](model.Access-1.md#valueof)
- [parse](model.Access-1.md#parse)

## Constructors

### constructor

• **new Access**(`definition`): [`Access`](model.Access-1.md)

Initialize from an Access.Definition or the access control DSL defined
by the Matter Specification.

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Definition`](../modules/model.Access.md#definition) |

#### Returns

[`Access`](model.Access-1.md)

#### Overrides

[Aspect](model.Aspect.md).[constructor](model.Aspect.md#constructor)

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:41](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/aspects/Access.ts#L41)

## Properties

### definition

• **definition**: [`Definition`](../modules/model.Access.md#definition)

#### Inherited from

[Aspect](model.Aspect.md).[definition](model.Aspect.md#definition)

#### Defined in

[packages/matter.js/src/model/aspects/Aspect.ts:17](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/aspects/Aspect.ts#L17)

___

### errors

• `Optional` **errors**: [`DefinitionError`](../modules/model.md#definitionerror)[]

#### Inherited from

[Aspect](model.Aspect.md).[errors](model.Aspect.md#errors)

#### Defined in

[packages/matter.js/src/model/aspects/Aspect.ts:18](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/aspects/Aspect.ts#L18)

___

### fabric

• `Optional` **fabric**: [`Fabric`](../enums/model.Access.Fabric.md)

#### Implementation of

Access.Ast.fabric

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:20](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/aspects/Access.ts#L20)

___

### readPriv

• `Optional` **readPriv**: [`Privilege`](../enums/model.Access.Privilege.md)

#### Implementation of

Access.Ast.readPriv

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:18](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/aspects/Access.ts#L18)

___

### rw

• `Optional` **rw**: [`Rw`](../enums/model.Access.Rw.md)

#### Implementation of

Access.Ast.rw

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:17](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/aspects/Access.ts#L17)

___

### timed

• `Optional` **timed**: `boolean`

#### Implementation of

Access.Ast.timed

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:21](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/aspects/Access.ts#L21)

___

### writePriv

• `Optional` **writePriv**: [`Privilege`](../enums/model.Access.Privilege.md)

#### Implementation of

Access.Ast.writePriv

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:19](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/aspects/Access.ts#L19)

## Accessors

### empty

• `get` **empty**(): `boolean`

#### Returns

`boolean`

#### Overrides

Aspect.empty

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:31](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/aspects/Access.ts#L31)

___

### readable

• `get` **readable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:23](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/aspects/Access.ts#L23)

___

### valid

• `get` **valid**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Aspect.valid

#### Defined in

[packages/matter.js/src/model/aspects/Aspect.ts:20](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/aspects/Aspect.ts#L20)

___

### writable

• `get` **writable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:27](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/aspects/Access.ts#L27)

## Methods

### equals

▸ **equals**(`other`): `boolean`

Test for logical equivalence.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `any` |

#### Returns

`boolean`

#### Inherited from

[Aspect](model.Aspect.md).[equals](model.Aspect.md#equals)

#### Defined in

[packages/matter.js/src/model/aspects/Aspect.ts:40](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/aspects/Aspect.ts#L40)

___

### error

▸ **error**(`code`, `message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `message` | `string` |

#### Returns

`void`

#### Inherited from

[Aspect](model.Aspect.md).[error](model.Aspect.md#error)

#### Defined in

[packages/matter.js/src/model/aspects/Aspect.ts:54](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/aspects/Aspect.ts#L54)

___

### extend

▸ **extend**(`other`): [`Aspect`](model.Aspect.md)\<[`Definition`](../modules/model.Access.md#definition)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Definition`](../modules/model.Access.md#definition) |

#### Returns

[`Aspect`](model.Aspect.md)\<[`Definition`](../modules/model.Access.md#definition)\>

#### Inherited from

[Aspect](model.Aspect.md).[extend](model.Aspect.md#extend)

#### Defined in

[packages/matter.js/src/model/aspects/Aspect.ts:65](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/aspects/Aspect.ts#L65)

___

### set

▸ **set**(`flags`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | [`Flags`](../modules/model.Access.md#flags) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:167](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/aspects/Access.ts#L167)

___

### toString

▸ **toString**(): `string`

Displays access using the standard Matter syntax.

#### Returns

`string`

#### Overrides

[Aspect](model.Aspect.md).[toString](model.Aspect.md#tostring)

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:135](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/aspects/Access.ts#L135)

___

### valueOf

▸ **valueOf**(): `string`

#### Returns

`string`

#### Inherited from

[Aspect](model.Aspect.md).[valueOf](model.Aspect.md#valueof)

#### Defined in

[packages/matter.js/src/model/aspects/Aspect.ts:47](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/aspects/Aspect.ts#L47)

___

### parse

▸ **parse**(`access`, `definition`): [`Flags`](../modules/model.Access.md#flags)

Parses standard Matter access syntax into an AccessFlag set.  Extremely
lenient.

#### Parameters

| Name | Type |
| :------ | :------ |
| `access` | [`Access`](model.Access-1.md) |
| `definition` | `string` |

#### Returns

[`Flags`](../modules/model.Access.md#flags)

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:57](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/aspects/Access.ts#L57)
