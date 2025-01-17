[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](../modules/model.md) / AttributeModel

# Class: AttributeModel

[model](../modules/model.md).AttributeModel

Each ValueElement has a corresponding implementation that derives from
this class.

## Hierarchy

- [`ValueModel`](model.ValueModel.md)

  ↳ **`AttributeModel`**

## Implements

- [`AttributeElement`](../modules/model.md#attributeelement)

## Table of contents

### Constructors

- [constructor](model.AttributeModel.md#constructor)

### Properties

- [byteSize](model.AttributeModel.md#bytesize)
- [default](model.AttributeModel.md#default)
- [description](model.AttributeModel.md#description)
- [details](model.AttributeModel.md#details)
- [errors](model.AttributeModel.md#errors)
- [global](model.AttributeModel.md#global)
- [id](model.AttributeModel.md#id)
- [isType](model.AttributeModel.md#istype)
- [isTypeScope](model.AttributeModel.md#istypescope)
- [metatype](model.AttributeModel.md#metatype)
- [name](model.AttributeModel.md#name)
- [tag](model.AttributeModel.md#tag)
- [type](model.AttributeModel.md#type)
- [xref](model.AttributeModel.md#xref)
- [Tag](model.AttributeModel.md#tag-1)
- [constructors](model.AttributeModel.md#constructors)

### Accessors

- [access](model.AttributeModel.md#access)
- [allowedBaseTags](model.AttributeModel.md#allowedbasetags)
- [base](model.AttributeModel.md#base)
- [children](model.AttributeModel.md#children)
- [conformance](model.AttributeModel.md#conformance)
- [constraint](model.AttributeModel.md#constraint)
- [definingModel](model.AttributeModel.md#definingmodel)
- [deprecated](model.AttributeModel.md#deprecated)
- [directMetatype](model.AttributeModel.md#directmetatype)
- [disallowed](model.AttributeModel.md#disallowed)
- [effectiveAccess](model.AttributeModel.md#effectiveaccess)
- [effectiveConformance](model.AttributeModel.md#effectiveconformance)
- [effectiveConstraint](model.AttributeModel.md#effectiveconstraint)
- [effectiveDefault](model.AttributeModel.md#effectivedefault)
- [effectiveId](model.AttributeModel.md#effectiveid)
- [effectiveMetatype](model.AttributeModel.md#effectivemetatype)
- [effectiveQuality](model.AttributeModel.md#effectivequality)
- [effectiveType](model.AttributeModel.md#effectivetype)
- [effectiveXref](model.AttributeModel.md#effectivexref)
- [elements](model.AttributeModel.md#elements)
- [fabricScoped](model.AttributeModel.md#fabricscoped)
- [fixed](model.AttributeModel.md#fixed)
- [globalBase](model.AttributeModel.md#globalbase)
- [key](model.AttributeModel.md#key)
- [listEntry](model.AttributeModel.md#listentry)
- [mandatory](model.AttributeModel.md#mandatory)
- [members](model.AttributeModel.md#members)
- [metabase](model.AttributeModel.md#metabase)
- [nullable](model.AttributeModel.md#nullable)
- [overridesShadow](model.AttributeModel.md#overridesshadow)
- [parent](model.AttributeModel.md#parent)
- [path](model.AttributeModel.md#path)
- [primitiveBase](model.AttributeModel.md#primitivebase)
- [quality](model.AttributeModel.md#quality)
- [shadow](model.AttributeModel.md#shadow)
- [valid](model.AttributeModel.md#valid)
- [validationAspects](model.AttributeModel.md#validationaspects)
- [writable](model.AttributeModel.md#writable)

### Methods

- [add](model.AttributeModel.md#add)
- [all](model.AttributeModel.md#all)
- [bitDefinition](model.AttributeModel.md#bitdefinition)
- [error](model.AttributeModel.md#error)
- [get](model.AttributeModel.md#get)
- [instanceOf](model.AttributeModel.md#instanceof)
- [is](model.AttributeModel.md#is)
- [member](model.AttributeModel.md#member)
- [owner](model.AttributeModel.md#owner)
- [references](model.AttributeModel.md#references)
- [toJSON](model.AttributeModel.md#tojson)
- [valueOf](model.AttributeModel.md#valueof)
- [visit](model.AttributeModel.md#visit)
- [create](model.AttributeModel.md#create)

## Constructors

### constructor

• **new AttributeModel**(`definition`): [`AttributeModel`](model.AttributeModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](../modules/model.AttributeElement.md#properties) |

#### Returns

[`AttributeModel`](model.AttributeModel.md)

#### Overrides

[ValueModel](model.ValueModel.md).[constructor](model.ValueModel.md#constructor)

#### Defined in

[packages/matter.js/src/model/models/AttributeModel.ts:28](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/AttributeModel.ts#L28)

## Properties

### byteSize

• `Optional` **byteSize**: [`Size`](../modules/model.ValueElement.md#size)

#### Implementation of

AttributeElement.byteSize

#### Inherited from

[ValueModel](model.ValueModel.md).[byteSize](model.ValueModel.md#bytesize)

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:30](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L30)

___

### default

• `Optional` **default**: [`FieldValue`](../modules/model.md#fieldvalue)

#### Implementation of

AttributeElement.default

#### Inherited from

[ValueModel](model.ValueModel.md).[default](model.ValueModel.md#default)

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:31](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L31)

___

### description

• `Optional` **description**: `string`

#### Implementation of

AttributeElement.description

#### Inherited from

[ValueModel](model.ValueModel.md).[description](model.ValueModel.md#description)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:26](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L26)

___

### details

• `Optional` **details**: `string`

#### Implementation of

AttributeElement.details

#### Inherited from

[ValueModel](model.ValueModel.md).[details](model.ValueModel.md#details)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:27](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L27)

___

### errors

• `Optional` **errors**: [`DefinitionError`](../modules/model.md#definitionerror)[]

#### Inherited from

[ValueModel](model.ValueModel.md).[errors](model.ValueModel.md#errors)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:29](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L29)

___

### global

• `Optional` **global**: `boolean`

Flag set on elements loaded from Globals.

#### Implementation of

AttributeElement.global

#### Inherited from

[ValueModel](model.ValueModel.md).[global](model.ValueModel.md#global)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:34](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L34)

___

### id

• **id**: `number`

#### Implementation of

AttributeElement.id

#### Overrides

[ValueModel](model.ValueModel.md).[id](model.ValueModel.md#id)

#### Defined in

[packages/matter.js/src/model/models/AttributeModel.ts:14](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/AttributeModel.ts#L14)

___

### isType

• `Optional` **isType**: `boolean` = `true`

Indicates that an element defines a datatype.

#### Inherited from

[ValueModel](model.ValueModel.md).[isType](model.ValueModel.md#istype)

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:33](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L33)

___

### isTypeScope

• `Optional` **isTypeScope**: `boolean`

Indicates that an element may have type definitions as children.

#### Inherited from

[ValueModel](model.ValueModel.md).[isTypeScope](model.ValueModel.md#istypescope)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:39](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L39)

___

### metatype

• `Optional` **metatype**: [`Metatype`](../enums/model.Metatype-1.md)

#### Inherited from

[ValueModel](model.ValueModel.md).[metatype](model.ValueModel.md#metatype)

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:32](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L32)

___

### name

• **name**: `string`

#### Implementation of

AttributeElement.name

#### Inherited from

[ValueModel](model.ValueModel.md).[name](model.ValueModel.md#name)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:24](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L24)

___

### tag

• **tag**: [`Attribute`](../enums/model.ElementTag.md#attribute) = `AttributeElement.Tag`

#### Implementation of

AttributeElement.tag

#### Overrides

[ValueModel](model.ValueModel.md).[tag](model.ValueModel.md#tag)

#### Defined in

[packages/matter.js/src/model/models/AttributeModel.ts:13](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/AttributeModel.ts#L13)

___

### type

• `Optional` **type**: `string`

#### Implementation of

AttributeElement.type

#### Inherited from

[ValueModel](model.ValueModel.md).[type](model.ValueModel.md#type)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:25](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L25)

___

### xref

• `Optional` **xref**: [`CrossReference`](model.Model.CrossReference.md)

#### Implementation of

AttributeElement.xref

#### Inherited from

[ValueModel](model.ValueModel.md).[xref](model.ValueModel.md#xref)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:28](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L28)

___

### Tag

▪ `Static` **Tag**: [`ElementTag`](../enums/model.ElementTag.md) = `AttributeElement.Tag`

#### Defined in

[packages/matter.js/src/model/models/AttributeModel.ts:36](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/AttributeModel.ts#L36)

___

### constructors

▪ `Static` **constructors**: `Object`

Factory support.  Populated by derivatives upon definition.

#### Index signature

▪ [type: `string`]: (`definition`: `any`) => [`Model`](model.Model-1.md)

#### Inherited from

[ValueModel](model.ValueModel.md).[constructors](model.ValueModel.md#constructors)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:192](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L192)

## Accessors

### access

• `get` **access**(): [`Access`](model.Access-1.md)

#### Returns

[`Access`](model.Access-1.md)

#### Implementation of

AttributeElement.access

#### Inherited from

ValueModel.access

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:63](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L63)

• `set` **access**(`definition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Access`](model.Access-1.md) \| [`Definition`](../modules/model.Access.md#definition) |

#### Returns

`void`

#### Implementation of

AttributeElement.access

#### Inherited from

ValueModel.access

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:66](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L66)

___

### allowedBaseTags

• `get` **allowedBaseTags**(): [`ElementTag`](../enums/model.ElementTag.md)[]

ValueModels may derive from models of the same type or from generic
Datatype models.

#### Returns

[`ElementTag`](../enums/model.ElementTag.md)[]

#### Inherited from

ValueModel.allowedBaseTags

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:180](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L180)

___

### base

• `get` **base**(): `undefined` \| [`ValueModel`](model.ValueModel.md)

ValueModels may only derive from ValueModels.

#### Returns

`undefined` \| [`ValueModel`](model.ValueModel.md)

#### Inherited from

ValueModel.base

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:172](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L172)

___

### children

• `get` **children**(): [`DatatypeModel`](model.DatatypeModel.md)[]

Children of models are always models.

#### Returns

[`DatatypeModel`](model.DatatypeModel.md)[]

#### Implementation of

AttributeElement.children

#### Inherited from

ValueModel.children

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:35](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L35)

• `set` **children**(`children`): `void`

Children can be added as models or elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | ([`DatatypeElement`](../modules/model.md#datatypeelement) \| [`DatatypeModel`](model.DatatypeModel.md))[] |

#### Returns

`void`

#### Implementation of

AttributeElement.children

#### Inherited from

ValueModel.children

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:39](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L39)

___

### conformance

• `get` **conformance**(): [`Conformance`](model.Conformance-1.md)

#### Returns

[`Conformance`](model.Conformance-1.md)

#### Implementation of

AttributeElement.conformance

#### Inherited from

ValueModel.conformance

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:53](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L53)

• `set` **conformance**(`definition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Conformance`](model.Conformance-1.md) \| [`Definition`](../modules/model.Conformance.md#definition) |

#### Returns

`void`

#### Implementation of

AttributeElement.conformance

#### Inherited from

ValueModel.conformance

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:56](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L56)

___

### constraint

• `get` **constraint**(): [`Constraint`](model.Constraint-1.md)

#### Returns

[`Constraint`](model.Constraint-1.md)

#### Implementation of

AttributeElement.constraint

#### Inherited from

ValueModel.constraint

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:43](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L43)

• `set` **constraint**(`definition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Constraint`](model.Constraint-1.md) \| [`Definition`](../modules/model.Constraint.md#definition) |

#### Returns

`void`

#### Implementation of

AttributeElement.constraint

#### Inherited from

ValueModel.constraint

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:46](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L46)

___

### definingModel

• `get` **definingModel**(): `undefined` \| [`ValueModel`](model.ValueModel.md)

Get the first derived ancestor with children, if any.

#### Returns

`undefined` \| [`ValueModel`](model.ValueModel.md)

#### Inherited from

ValueModel.definingModel

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:158](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L158)

___

### deprecated

• `get` **deprecated**(): `boolean`

Is this model deprecated?

#### Returns

`boolean`

#### Inherited from

ValueModel.deprecated

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:220](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L220)

___

### directMetatype

• `get` **directMetatype**(): `undefined` \| [`Metatype`](../enums/model.Metatype-1.md)

The metatype for this model's type, ignoring inheritance.

#### Returns

`undefined` \| [`Metatype`](../enums/model.Metatype-1.md)

#### Inherited from

ValueModel.directMetatype

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:149](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L149)

___

### disallowed

• `get` **disallowed**(): `boolean`

Is this model disallowed?

#### Returns

`boolean`

#### Inherited from

ValueModel.disallowed

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:227](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L227)

___

### effectiveAccess

• `get` **effectiveAccess**(): [`Access`](model.Access-1.md)

#### Returns

[`Access`](model.Access-1.md)

#### Inherited from

ValueModel.effectiveAccess

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:69](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L69)

___

### effectiveConformance

• `get` **effectiveConformance**(): [`Conformance`](model.Conformance-1.md)

#### Returns

[`Conformance`](model.Conformance-1.md)

#### Inherited from

ValueModel.effectiveConformance

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:59](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L59)

___

### effectiveConstraint

• `get` **effectiveConstraint**(): [`Constraint`](model.Constraint-1.md)

#### Returns

[`Constraint`](model.Constraint-1.md)

#### Inherited from

ValueModel.effectiveConstraint

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:49](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L49)

___

### effectiveDefault

• `get` **effectiveDefault**(): `any`

The value to use as a default.  The "default" field has a manually
supplied value but this property decodes the default and/or generates
a default from subfields.

#### Returns

`any`

#### Inherited from

ValueModel.effectiveDefault

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:142](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L142)

___

### effectiveId

• `get` **effectiveId**(): `undefined` \| `number`

Allows subclasses to pull a working ID from an alternate source.

#### Returns

`undefined` \| `number`

#### Inherited from

ValueModel.effectiveId

#### Defined in

[packages/matter.js/src/model/models/Model.ts:112](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L112)

___

### effectiveMetatype

• `get` **effectiveMetatype**(): `undefined` \| [`Metatype`](../enums/model.Metatype-1.md)

The working metatype for this object.

#### Returns

`undefined` \| [`Metatype`](../enums/model.Metatype-1.md)

#### Inherited from

ValueModel.effectiveMetatype

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:130](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L130)

___

### effectiveQuality

• `get` **effectiveQuality**(): [`Quality`](model.Quality-1.md)

#### Returns

[`Quality`](model.Quality-1.md)

#### Inherited from

ValueModel.effectiveQuality

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:79](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L79)

___

### effectiveType

• `get` **effectiveType**(): `undefined` \| `string`

The "effective type" may be inferred from context.

#### Returns

`undefined` \| `string`

#### Inherited from

ValueModel.effectiveType

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:119](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L119)

___

### effectiveXref

• `get` **effectiveXref**(): `undefined` \| [`CrossReference`](model.Model.CrossReference.md)

A local or parent xref.

#### Returns

`undefined` \| [`CrossReference`](model.Model.CrossReference.md)

#### Inherited from

ValueModel.effectiveXref

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

ValueModel.elements

#### Defined in

[packages/matter.js/src/model/models/Model.ts:102](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L102)

___

### fabricScoped

• `get` **fabricScoped**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/model/models/AttributeModel.ts:20](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/AttributeModel.ts#L20)

___

### fixed

• `get` **fixed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/model/models/AttributeModel.ts:24](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/AttributeModel.ts#L24)

___

### globalBase

• `get` **globalBase**(): `undefined` \| [`Model`](model.Model-1.md)

Get the first global base type.  This may have semantic meaning more
specific than the base primitive type.

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Inherited from

ValueModel.globalBase

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

ValueModel.key

#### Defined in

[packages/matter.js/src/model/models/Model.ts:120](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L120)

___

### listEntry

• `get` **listEntry**(): `undefined` \| [`DatatypeModel`](model.DatatypeModel.md)

Get the entry type for lists, if any.

#### Returns

`undefined` \| [`DatatypeModel`](model.DatatypeModel.md)

#### Inherited from

ValueModel.listEntry

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:165](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L165)

___

### mandatory

• `get` **mandatory**(): `boolean`

Is this model mandatory?  This supports a limited subset of conformance
and is only appropriate for field conformance.

#### Returns

`boolean`

#### Inherited from

ValueModel.mandatory

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:242](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L242)

___

### members

• `get` **members**(): [`DatatypeModel`](model.DatatypeModel.md)[]

Retrieve all datatype members.

#### Returns

[`DatatypeModel`](model.DatatypeModel.md)[]

#### Inherited from

ValueModel.members

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:190](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L190)

___

### metabase

• `get` **metabase**(): `undefined` \| [`ValueModel`](model.ValueModel.md)

Metatype is only present on global types with specific semantic meaning.
This model is significant because it gives us information about how to
manipulate the data.  This accessor retrieves this model.

#### Returns

`undefined` \| [`ValueModel`](model.ValueModel.md)

#### Inherited from

ValueModel.metabase

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:88](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L88)

___

### nullable

• `get` **nullable**(): `boolean`

Can this model be omitted?

#### Returns

`boolean`

#### Inherited from

ValueModel.nullable

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:234](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L234)

___

### overridesShadow

• `get` **overridesShadow**(): `undefined` \| ``true``

Determine whether this element overrides key properties of its shadow.

#### Returns

`undefined` \| ``true``

#### Inherited from

ValueModel.overridesShadow

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:263](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L263)

___

### parent

• `get` **parent**(): `undefined` \| [`Model`](model.Model-1.md)

The structural parent.  This is the model for the element that contains
this element's definition.

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Inherited from

ValueModel.parent

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

ValueModel.parent

#### Defined in

[packages/matter.js/src/model/models/Model.ts:75](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L75)

___

### path

• `get` **path**(): `string`

The full path ("." delimited) in the Matter tree.

#### Returns

`string`

#### Inherited from

ValueModel.path

#### Defined in

[packages/matter.js/src/model/models/Model.ts:59](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L59)

___

### primitiveBase

• `get` **primitiveBase**(): `undefined` \| [`ValueModel`](model.ValueModel.md)

Get the primitive type for this value model.  This is an integer type
for enums and bitmaps.  Otherwise it's the metabase.

#### Returns

`undefined` \| [`ValueModel`](model.ValueModel.md)

#### Inherited from

ValueModel.primitiveBase

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:96](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L96)

___

### quality

• `get` **quality**(): [`Quality`](model.Quality-1.md)

#### Returns

[`Quality`](model.Quality-1.md)

#### Implementation of

AttributeElement.quality

#### Inherited from

ValueModel.quality

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:73](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L73)

• `set` **quality**(`definition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Quality`](model.Quality-1.md) \| [`Definition`](../modules/model.Quality.md#definition) |

#### Returns

`void`

#### Implementation of

AttributeElement.quality

#### Inherited from

ValueModel.quality

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:76](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L76)

___

### shadow

• `get` **shadow**(): `undefined` \| [`Model`](model.Model-1.md)

Get shadow model, if any.  A "shadow" is an element in my parent's
inheritance hierarchy that I override.

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Inherited from

ValueModel.shadow

#### Defined in

[packages/matter.js/src/model/models/Model.ts:215](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L215)

___

### valid

• `get` **valid**(): `boolean`

Did validation find errors?

#### Returns

`boolean`

#### Inherited from

ValueModel.valid

#### Defined in

[packages/matter.js/src/model/models/Model.ts:52](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L52)

___

### validationAspects

• `get` **validationAspects**(): [`Aspect`](model.Aspect.md)\<`any`\>[]

Collect constraints and conformance for this type and all base types.

#### Returns

[`Aspect`](model.Aspect.md)\<`any`\>[]

#### Inherited from

ValueModel.validationAspects

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:197](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L197)

___

### writable

• `get` **writable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/model/models/AttributeModel.ts:16](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/AttributeModel.ts#L16)

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

[ValueModel](model.ValueModel.md).[add](model.ValueModel.md#add)

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

[ValueModel](model.ValueModel.md).[all](model.ValueModel.md#all)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:268](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L268)

___

### bitDefinition

▸ **bitDefinition**(`bit`): `undefined` \| [`DatatypeModel`](model.DatatypeModel.md)

Search the inheritance chain for a bitmap field defining a specific bit.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bit` | `number` |

#### Returns

`undefined` \| [`DatatypeModel`](model.DatatypeModel.md)

#### Inherited from

[ValueModel](model.ValueModel.md).[bitDefinition](model.ValueModel.md#bitdefinition)

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:289](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L289)

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

[ValueModel](model.ValueModel.md).[error](model.ValueModel.md#error)

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

[ValueModel](model.ValueModel.md).[get](model.ValueModel.md#get)

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

[ValueModel](model.ValueModel.md).[instanceOf](model.ValueModel.md#instanceof)

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

[ValueModel](model.ValueModel.md).[is](model.ValueModel.md#is)

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

[ValueModel](model.ValueModel.md).[member](model.ValueModel.md#member)

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

[ValueModel](model.ValueModel.md).[owner](model.ValueModel.md#owner)

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

[ValueModel](model.ValueModel.md).[references](model.ValueModel.md#references)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:356](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L356)

___

### toJSON

▸ **toJSON**(): [`AnyElement`](../modules/model.md#anyelement)

Convert model to JSON.

#### Returns

[`AnyElement`](../modules/model.md#anyelement)

#### Inherited from

[ValueModel](model.ValueModel.md).[toJSON](model.ValueModel.md#tojson)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:319](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L319)

___

### valueOf

▸ **valueOf**(): [`AnyElement`](../modules/model.md#anyelement)

Convert to non-class structure.

#### Returns

[`AnyElement`](../modules/model.md#anyelement)

#### Inherited from

[ValueModel](model.ValueModel.md).[valueOf](model.ValueModel.md#valueof)

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:293](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/ValueModel.ts#L293)

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

[ValueModel](model.ValueModel.md).[visit](model.ValueModel.md#visit)

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

[ValueModel](model.ValueModel.md).[create](model.ValueModel.md#create)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:251](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/model/models/Model.ts#L251)
