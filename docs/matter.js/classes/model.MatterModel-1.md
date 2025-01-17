[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](../modules/model.md) / MatterModel

# Class: MatterModel

[model](../modules/model.md).MatterModel

The root of a Matter model.

## Hierarchy

- [`Model`](model.Model-1.md)

  ↳ **`MatterModel`**

## Implements

- [`MatterElement`](../modules/model.md#matterelement)

## Table of contents

### Constructors

- [constructor](model.MatterModel-1.md#constructor)

### Properties

- [description](model.MatterModel-1.md#description)
- [details](model.MatterModel-1.md#details)
- [errors](model.MatterModel-1.md#errors)
- [global](model.MatterModel-1.md#global)
- [id](model.MatterModel-1.md#id)
- [isType](model.MatterModel-1.md#istype)
- [isTypeScope](model.MatterModel-1.md#istypescope)
- [name](model.MatterModel-1.md#name)
- [tag](model.MatterModel-1.md#tag)
- [type](model.MatterModel-1.md#type)
- [version](model.MatterModel-1.md#version)
- [xref](model.MatterModel-1.md#xref)
- [constructors](model.MatterModel-1.md#constructors)

### Accessors

- [allowedBaseTags](model.MatterModel-1.md#allowedbasetags)
- [attributes](model.MatterModel-1.md#attributes)
- [base](model.MatterModel-1.md#base)
- [children](model.MatterModel-1.md#children)
- [clusters](model.MatterModel-1.md#clusters)
- [datatypes](model.MatterModel-1.md#datatypes)
- [deviceTypes](model.MatterModel-1.md#devicetypes)
- [effectiveId](model.MatterModel-1.md#effectiveid)
- [effectiveType](model.MatterModel-1.md#effectivetype)
- [effectiveXref](model.MatterModel-1.md#effectivexref)
- [elements](model.MatterModel-1.md#elements)
- [fabrics](model.MatterModel-1.md#fabrics)
- [globalBase](model.MatterModel-1.md#globalbase)
- [key](model.MatterModel-1.md#key)
- [parent](model.MatterModel-1.md#parent)
- [path](model.MatterModel-1.md#path)
- [shadow](model.MatterModel-1.md#shadow)
- [valid](model.MatterModel-1.md#valid)

### Methods

- [add](model.MatterModel-1.md#add)
- [all](model.MatterModel-1.md#all)
- [error](model.MatterModel-1.md#error)
- [get](model.MatterModel-1.md#get)
- [instanceOf](model.MatterModel-1.md#instanceof)
- [is](model.MatterModel-1.md#is)
- [member](model.MatterModel-1.md#member)
- [owner](model.MatterModel-1.md#owner)
- [references](model.MatterModel-1.md#references)
- [toJSON](model.MatterModel-1.md#tojson)
- [valueOf](model.MatterModel-1.md#valueof)
- [visit](model.MatterModel-1.md#visit)
- [create](model.MatterModel-1.md#create)

## Constructors

### constructor

• **new MatterModel**(`definition?`, `globals?`): [`MatterModel`](model.MatterModel-1.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `definition` | [`Properties`](../modules/model.MatterElement.md#properties) | `Matter` |
| `globals` | ([`AttributeElement`](../modules/model.md#attributeelement) \| [`DatatypeElement`](../modules/model.md#datatypeelement))[] | `undefined` |

#### Returns

[`MatterModel`](model.MatterModel-1.md)

#### Overrides

[Model](model.Model-1.md).[constructor](model.Model-1.md#constructor)

#### Defined in

[packages/matter.js/src/model/models/MatterModel.ts:67](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/MatterModel.ts#L67)

## Properties

### description

• `Optional` **description**: `string`

#### Implementation of

MatterElement.description

#### Inherited from

[Model](model.Model-1.md).[description](model.Model-1.md#description)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:26](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L26)

___

### details

• `Optional` **details**: `string`

#### Implementation of

MatterElement.details

#### Inherited from

[Model](model.Model-1.md).[details](model.Model-1.md#details)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:27](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L27)

___

### errors

• `Optional` **errors**: [`DefinitionError`](../modules/model.md#definitionerror)[]

#### Inherited from

[Model](model.Model-1.md).[errors](model.Model-1.md#errors)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:29](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L29)

___

### global

• `Optional` **global**: `boolean`

Flag set on elements loaded from Globals.

#### Implementation of

MatterElement.global

#### Inherited from

[Model](model.Model-1.md).[global](model.Model-1.md#global)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:34](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L34)

___

### id

• `Optional` **id**: `number`

#### Implementation of

MatterElement.id

#### Inherited from

[Model](model.Model-1.md).[id](model.Model-1.md#id)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:23](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L23)

___

### isType

• `Optional` **isType**: `boolean`

Indicates that an element defines a datatype.

#### Inherited from

[Model](model.Model-1.md).[isType](model.Model-1.md#istype)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:44](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L44)

___

### isTypeScope

• **isTypeScope**: `boolean` = `true`

Indicates that an element may have type definitions as children.

#### Overrides

[Model](model.Model-1.md).[isTypeScope](model.Model-1.md#istypescope)

#### Defined in

[packages/matter.js/src/model/models/MatterModel.ts:21](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/MatterModel.ts#L21)

___

### name

• **name**: `string`

#### Implementation of

MatterElement.name

#### Inherited from

[Model](model.Model-1.md).[name](model.Model-1.md#name)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:24](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L24)

___

### tag

• **tag**: [`Matter`](../enums/model.ElementTag.md#matter) = `MatterElement.Tag`

#### Implementation of

MatterElement.tag

#### Overrides

[Model](model.Model-1.md).[tag](model.Model-1.md#tag)

#### Defined in

[packages/matter.js/src/model/models/MatterModel.ts:20](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/MatterModel.ts#L20)

___

### type

• `Optional` **type**: `string`

#### Implementation of

MatterElement.type

#### Inherited from

[Model](model.Model-1.md).[type](model.Model-1.md#type)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:25](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L25)

___

### version

• `Optional` **version**: `string`

#### Implementation of

MatterElement.version

#### Defined in

[packages/matter.js/src/model/models/MatterModel.ts:22](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/MatterModel.ts#L22)

___

### xref

• `Optional` **xref**: [`CrossReference`](model.Model.CrossReference.md)

#### Implementation of

MatterElement.xref

#### Inherited from

[Model](model.Model-1.md).[xref](model.Model-1.md#xref)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:28](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L28)

___

### constructors

▪ `Static` **constructors**: `Object`

Factory support.  Populated by derivatives upon definition.

#### Index signature

▪ [type: `string`]: (`definition`: `any`) => [`Model`](model.Model-1.md)

#### Inherited from

[Model](model.Model-1.md).[constructors](model.Model-1.md#constructors)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:192](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L192)

## Accessors

### allowedBaseTags

• `get` **allowedBaseTags**(): [`ElementTag`](../enums/model.ElementTag.md)[]

The set of tags from which this model may derive.

#### Returns

[`ElementTag`](../enums/model.ElementTag.md)[]

#### Inherited from

Model.allowedBaseTags

#### Defined in

[packages/matter.js/src/model/models/Model.ts:237](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L237)

___

### attributes

• `get` **attributes**(): [`AttributeModel`](model.AttributeModel.md)[]

Global attributes.

#### Returns

[`AttributeModel`](model.AttributeModel.md)[]

#### Defined in

[packages/matter.js/src/model/models/MatterModel.ts:48](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/MatterModel.ts#L48)

___

### base

• `get` **base**(): `undefined` \| [`Model`](model.Model-1.md)

Get a Model for my base type, if any.

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Inherited from

Model.base

#### Defined in

[packages/matter.js/src/model/models/Model.ts:207](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L207)

___

### children

• `get` **children**(): [`Child`](../modules/model.MatterModel.md#child)[]

Children of models are always models.

#### Returns

[`Child`](../modules/model.MatterModel.md#child)[]

#### Implementation of

MatterElement.children

#### Overrides

Model.children

#### Defined in

[packages/matter.js/src/model/models/MatterModel.ts:59](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/MatterModel.ts#L59)

• `set` **children**(`children`): `void`

Children can be added as models or elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | ([`Child`](../modules/model.MatterElement.md#child) \| [`Child`](../modules/model.MatterModel.md#child))[] |

#### Returns

`void`

#### Implementation of

MatterElement.children

#### Overrides

Model.children

#### Defined in

[packages/matter.js/src/model/models/MatterModel.ts:63](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/MatterModel.ts#L63)

___

### clusters

• `get` **clusters**(): [`ClusterModel`](model.ClusterModel-1.md)[]

Clusters.

#### Returns

[`ClusterModel`](model.ClusterModel-1.md)[]

#### Defined in

[packages/matter.js/src/model/models/MatterModel.ts:27](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/MatterModel.ts#L27)

___

### datatypes

• `get` **datatypes**(): [`DatatypeModel`](model.DatatypeModel.md)[]

Global datatypes.

#### Returns

[`DatatypeModel`](model.DatatypeModel.md)[]

#### Defined in

[packages/matter.js/src/model/models/MatterModel.ts:41](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/MatterModel.ts#L41)

___

### deviceTypes

• `get` **deviceTypes**(): [`DeviceTypeModel`](model.DeviceTypeModel.md)[]

Device types.

#### Returns

[`DeviceTypeModel`](model.DeviceTypeModel.md)[]

#### Defined in

[packages/matter.js/src/model/models/MatterModel.ts:34](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/MatterModel.ts#L34)

___

### effectiveId

• `get` **effectiveId**(): `undefined` \| `number`

Allows subclasses to pull a working ID from an alternate source.

#### Returns

`undefined` \| `number`

#### Inherited from

Model.effectiveId

#### Defined in

[packages/matter.js/src/model/models/Model.ts:112](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L112)

___

### effectiveType

• `get` **effectiveType**(): `undefined` \| `string`

In some circumstances the base type can be inferred.  This inference
happens here.

Does not recurse so only returns the direct base type.

#### Returns

`undefined` \| `string`

#### Inherited from

Model.effectiveType

#### Defined in

[packages/matter.js/src/model/models/Model.ts:200](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L200)

___

### effectiveXref

• `get` **effectiveXref**(): `undefined` \| [`CrossReference`](model.Model.CrossReference.md)

A local or parent xref.

#### Returns

`undefined` \| [`CrossReference`](model.Model.CrossReference.md)

#### Inherited from

Model.effectiveXref

#### Defined in

[packages/matter.js/src/model/models/Model.ts:230](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L230)

___

### elements

• `get` **elements**(): [`AnyElement`](../modules/model.md#anyelement)[]

Element view of children.  For TypeScript this allows children to be
added as elements.  For JavaScript this is identical to children().

#### Returns

[`AnyElement`](../modules/model.md#anyelement)[]

#### Inherited from

Model.elements

#### Defined in

[packages/matter.js/src/model/models/Model.ts:102](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L102)

___

### fabrics

• `get` **fabrics**(): [`FabricModel`](model.FabricModel.md)[]

Fabrics.

#### Returns

[`FabricModel`](model.FabricModel.md)[]

#### Defined in

[packages/matter.js/src/model/models/MatterModel.ts:55](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/MatterModel.ts#L55)

___

### globalBase

• `get` **globalBase**(): `undefined` \| [`Model`](model.Model-1.md)

Get the first global base type.  This may have semantic meaning more
specific than the base primitive type.

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Inherited from

Model.globalBase

#### Defined in

[packages/matter.js/src/model/models/Model.ts:223](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L223)

___

### key

• `get` **key**(): `undefined` \| `string`

Get a string that uniquely identifies this model.  This is normally
the effective ID but some models require a generated identifier.

#### Returns

`undefined` \| `string`

#### Inherited from

Model.key

#### Defined in

[packages/matter.js/src/model/models/Model.ts:120](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L120)

___

### parent

• `get` **parent**(): `undefined` \| [`Model`](model.Model-1.md)

The structural parent.  This is the model for the element that contains
this element's definition.

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Inherited from

Model.parent

#### Defined in

[packages/matter.js/src/model/models/Model.ts:71](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L71)

• `set` **parent**(`parent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `undefined` \| [`Model`](model.Model-1.md) |

#### Returns

`void`

#### Inherited from

Model.parent

#### Defined in

[packages/matter.js/src/model/models/Model.ts:75](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L75)

___

### path

• `get` **path**(): `string`

The full path ("." delimited) in the Matter tree.

#### Returns

`string`

#### Inherited from

Model.path

#### Defined in

[packages/matter.js/src/model/models/Model.ts:59](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L59)

___

### shadow

• `get` **shadow**(): `undefined` \| [`Model`](model.Model-1.md)

Get shadow model, if any.  A "shadow" is an element in my parent's
inheritance hierarchy that I override.

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Inherited from

Model.shadow

#### Defined in

[packages/matter.js/src/model/models/Model.ts:215](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L215)

___

### valid

• `get` **valid**(): `boolean`

Did validation find errors?

#### Returns

`boolean`

#### Inherited from

Model.valid

#### Defined in

[packages/matter.js/src/model/models/Model.ts:52](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L52)

## Methods

### add

▸ **add**(`...children`): `void`

Add a child.  children.push works too but only accepts models.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...children` | ([`AnyElement`](../modules/model.md#anyelement) \| [`Model`](model.Model-1.md))[] |

#### Returns

`void`

#### Inherited from

[Model](model.Model-1.md).[add](model.Model-1.md#add)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:244](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L244)

___

### all

▸ **all**\<`T`\>(`constructor`): `T`[]

Retrieve all models of a specific element type from local scope.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Model`](model.Model-1.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `constructor` | [`Constructor`](../modules/model.Model.md#constructor)\<`T`\> | model class or a predicate object |

#### Returns

`T`[]

#### Inherited from

[Model](model.Model-1.md).[all](model.Model-1.md#all)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:268](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L268)

___

### error

▸ **error**(`code`, `message`): `void`

Record a validation error for this model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `message` | `string` |

#### Returns

`void`

#### Inherited from

[Model](model.Model-1.md).[error](model.Model-1.md#error)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:303](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L303)

___

### get

▸ **get**\<`T`\>(`constructor`, `key`): `T`

Retrieve a specific model by ID or name.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Model`](model.Model-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | [`Constructor`](../modules/model.Model.md#constructor)\<`T`\> |
| `key` | `string` \| `number` |

#### Returns

`T`

#### Inherited from

[Model](model.Model-1.md).[get](model.Model-1.md#get)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:275](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L275)

___

### instanceOf

▸ **instanceOf**(`other`): `boolean`

Does this model derive from another?

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`AnyElement`](../modules/model.md#anyelement) \| [`Model`](model.Model-1.md) |

#### Returns

`boolean`

#### Inherited from

[Model](model.Model-1.md).[instanceOf](model.Model-1.md#instanceof)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:373](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L373)

___

### is

▸ **is**(`key`): `boolean`

Check identity of element by name or ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `undefined` \| [`ElementSelector`](../modules/export._internal_.ModelTraversal.md#elementselector) |

#### Returns

`boolean`

#### Inherited from

[Model](model.Model-1.md).[is](model.Model-1.md#is)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:291](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L291)

___

### member

▸ **member**(`key`, `allowedTags?`): `undefined` \| [`Model`](model.Model-1.md)

Search the inheritance chain for a child property.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ElementSelector`](../modules/export._internal_.ModelTraversal.md#elementselector) |
| `allowedTags` | [`ElementTag`](../enums/model.ElementTag.md)[] |

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Inherited from

[Model](model.Model-1.md).[member](model.Model-1.md#member)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:363](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L363)

___

### owner

▸ **owner**\<`T`\>(`constructor`): `undefined` \| `T`

Retrieve a model of a specific type from the ownership hierarchy.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Model`](model.Model-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | [`Constructor`](../modules/model.Model.md#constructor)\<`T`\> |

#### Returns

`undefined` \| `T`

#### Inherited from

[Model](model.Model-1.md).[owner](model.Model-1.md#owner)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:284](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L284)

___

### references

▸ **references**(`type`): [`Model`](model.Model-1.md)[]

Find all children that reference a specific type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Model`](model.Model-1.md) |

#### Returns

[`Model`](model.Model-1.md)[]

#### Inherited from

[Model](model.Model-1.md).[references](model.Model-1.md#references)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:356](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L356)

___

### toJSON

▸ **toJSON**(): [`AnyElement`](../modules/model.md#anyelement)

Convert model to JSON.

#### Returns

[`AnyElement`](../modules/model.md#anyelement)

#### Inherited from

[Model](model.Model-1.md).[toJSON](model.Model-1.md#tojson)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:319](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L319)

___

### valueOf

▸ **valueOf**(): [`AnyElement`](../modules/model.md#anyelement)

Convert to non-class structure.

#### Returns

[`AnyElement`](../modules/model.md#anyelement)

#### Inherited from

[Model](model.Model-1.md).[valueOf](model.Model-1.md#valueof)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:326](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L326)

___

### visit

▸ **visit**(`visitor`): `undefined` \| `boolean`

Apply a function to all tree elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `visitor` | (`model`: [`Model`](model.Model-1.md)) => `boolean` \| `void` |

#### Returns

`undefined` \| `boolean`

#### Inherited from

[Model](model.Model-1.md).[visit](model.Model-1.md#visit)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:349](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L349)

___

### create

▸ **create**(`definition`): [`Model`](model.Model-1.md)

Create a model for an element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`AnyElement`](../modules/model.md#anyelement) |

#### Returns

[`Model`](model.Model-1.md)

#### Inherited from

[Model](model.Model-1.md).[create](model.Model-1.md#create)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:251](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L251)
