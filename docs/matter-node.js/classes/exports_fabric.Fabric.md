[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/fabric](../modules/exports_fabric.md) / Fabric

# Class: Fabric

[exports/fabric](../modules/exports_fabric.md).Fabric

## Table of contents

### Constructors

- [constructor](exports_fabric.Fabric.md#constructor)

### Properties

- [caseAuthenticatedTags](exports_fabric.Fabric.md#caseauthenticatedtags)
- [fabricId](exports_fabric.Fabric.md#fabricid)
- [fabricIndex](exports_fabric.Fabric.md#fabricindex)
- [identityProtectionKey](exports_fabric.Fabric.md#identityprotectionkey)
- [intermediateCACert](exports_fabric.Fabric.md#intermediatecacert)
- [keyPair](exports_fabric.Fabric.md#keypair)
- [label](exports_fabric.Fabric.md#label)
- [nodeId](exports_fabric.Fabric.md#nodeid)
- [operationalCert](exports_fabric.Fabric.md#operationalcert)
- [operationalId](exports_fabric.Fabric.md#operationalid)
- [operationalIdentityProtectionKey](exports_fabric.Fabric.md#operationalidentityprotectionkey)
- [persistCallback](exports_fabric.Fabric.md#persistcallback)
- [removeCallbacks](exports_fabric.Fabric.md#removecallbacks)
- [rootCert](exports_fabric.Fabric.md#rootcert)
- [rootNodeId](exports_fabric.Fabric.md#rootnodeid)
- [rootPublicKey](exports_fabric.Fabric.md#rootpublickey)
- [rootVendorId](exports_fabric.Fabric.md#rootvendorid)
- [scopedClusterData](exports_fabric.Fabric.md#scopedclusterdata)
- [sessions](exports_fabric.Fabric.md#sessions)

### Methods

- [addRemoveCallback](exports_fabric.Fabric.md#addremovecallback)
- [addSession](exports_fabric.Fabric.md#addsession)
- [deleteRemoveCallback](exports_fabric.Fabric.md#deleteremovecallback)
- [deleteScopedClusterData](exports_fabric.Fabric.md#deletescopedclusterdata)
- [deleteScopedClusterDataValue](exports_fabric.Fabric.md#deletescopedclusterdatavalue)
- [getDestinationId](exports_fabric.Fabric.md#getdestinationid)
- [getExternalInformation](exports_fabric.Fabric.md#getexternalinformation)
- [getPublicKey](exports_fabric.Fabric.md#getpublickey)
- [getScopedClusterDataKeys](exports_fabric.Fabric.md#getscopedclusterdatakeys)
- [getScopedClusterDataValue](exports_fabric.Fabric.md#getscopedclusterdatavalue)
- [hasScopedClusterDataValue](exports_fabric.Fabric.md#hasscopedclusterdatavalue)
- [matchesFabricIdAndRootPublicKey](exports_fabric.Fabric.md#matchesfabricidandrootpublickey)
- [persist](exports_fabric.Fabric.md#persist)
- [remove](exports_fabric.Fabric.md#remove)
- [removeSession](exports_fabric.Fabric.md#removesession)
- [setLabel](exports_fabric.Fabric.md#setlabel)
- [setPersistCallback](exports_fabric.Fabric.md#setpersistcallback)
- [setScopedClusterDataValue](exports_fabric.Fabric.md#setscopedclusterdatavalue)
- [sign](exports_fabric.Fabric.md#sign)
- [toStorageObject](exports_fabric.Fabric.md#tostorageobject)
- [verifyCredentials](exports_fabric.Fabric.md#verifycredentials)
- [createFromStorageObject](exports_fabric.Fabric.md#createfromstorageobject)

## Constructors

### constructor

• **new Fabric**(`fabricIndex`, `fabricId`, `nodeId`, `rootNodeId`, `operationalId`, `rootPublicKey`, `keyPair`, `rootVendorId`, `rootCert`, `identityProtectionKey`, `operationalIdentityProtectionKey`, `intermediateCACert`, `operationalCert`, `label`, `caseAuthenticatedTags?`, `scopedClusterData?`): [`Fabric`](exports_fabric.Fabric.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/exports_datatype.md#fabricindex) |
| `fabricId` | [`FabricId`](../modules/exports_datatype.md#fabricid) |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `rootNodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `operationalId` | `Uint8Array` |
| `rootPublicKey` | `Uint8Array` |
| `keyPair` | [`Key`](../modules/crypto_export.md#key) |
| `rootVendorId` | [`VendorId`](../modules/exports_datatype.md#vendorid) |
| `rootCert` | `Uint8Array` |
| `identityProtectionKey` | `Uint8Array` |
| `operationalIdentityProtectionKey` | `Uint8Array` |
| `intermediateCACert` | `undefined` \| `Uint8Array` |
| `operationalCert` | `Uint8Array` |
| `label` | `string` |
| `caseAuthenticatedTags?` | [`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag)[] |
| `scopedClusterData?` | `Map`\<`number`, `Map`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\>\> |

#### Returns

[`Fabric`](exports_fabric.Fabric.md)

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:54

## Properties

### caseAuthenticatedTags

• `Readonly` **caseAuthenticatedTags**: [`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag)[]

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:49

___

### fabricId

• `Readonly` **fabricId**: [`FabricId`](../modules/exports_datatype.md#fabricid)

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:36

___

### fabricIndex

• `Readonly` **fabricIndex**: [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:35

___

### identityProtectionKey

• `Readonly` **identityProtectionKey**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:44

___

### intermediateCACert

• `Readonly` **intermediateCACert**: `undefined` \| `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:46

___

### keyPair

• `Private` `Readonly` **keyPair**: `any`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:41

___

### label

• **label**: `string`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:48

___

### nodeId

• `Readonly` **nodeId**: [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:37

___

### operationalCert

• `Readonly` **operationalCert**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:47

___

### operationalId

• `Readonly` **operationalId**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:39

___

### operationalIdentityProtectionKey

• `Readonly` **operationalIdentityProtectionKey**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:45

___

### persistCallback

• `Private` **persistCallback**: `any`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:53

___

### removeCallbacks

• `Private` **removeCallbacks**: `any`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:52

___

### rootCert

• `Readonly` **rootCert**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:43

___

### rootNodeId

• `Readonly` **rootNodeId**: [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:38

___

### rootPublicKey

• `Readonly` **rootPublicKey**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:40

___

### rootVendorId

• `Readonly` **rootVendorId**: [`VendorId`](../modules/exports_datatype.md#vendorid)

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:42

___

### scopedClusterData

• `Private` `Readonly` **scopedClusterData**: `any`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:51

___

### sessions

• `Private` `Readonly` **sessions**: `any`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:50

## Methods

### addRemoveCallback

▸ **addRemoveCallback**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:65

___

### addSession

▸ **addSession**(`session`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`SecureSession`](exports_session.SecureSession.md)\<`any`\> |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:63

___

### deleteRemoveCallback

▸ **deleteRemoveCallback**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:66

___

### deleteScopedClusterData

▸ **deleteScopedClusterData**(`cluster`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/exports_cluster.md#cluster)\<`any`, `any`, `any`, `any`, `any`\> |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:74

___

### deleteScopedClusterDataValue

▸ **deleteScopedClusterDataValue**(`cluster`, `clusterDataKey`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/exports_cluster.md#cluster)\<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:72

___

### getDestinationId

▸ **getDestinationId**(`nodeId`, `random`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `random` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:62

___

### getExternalInformation

▸ **getExternalInformation**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fabricId` | [`FabricId`](../modules/exports_datatype.md#fabricid) |
| `fabricIndex` | [`FabricIndex`](../modules/exports_datatype.md#fabricindex) |
| `label` | `string` |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `rootNodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `rootVendorId` | [`VendorId`](../modules/exports_datatype.md#vendorid) |

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:76

___

### getPublicKey

▸ **getPublicKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:58

___

### getScopedClusterDataKeys

▸ **getScopedClusterDataKeys**(`cluster`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/exports_cluster.md#cluster)\<`any`, `any`, `any`, `any`, `any`\> |

#### Returns

`string`[]

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:75

___

### getScopedClusterDataValue

▸ **getScopedClusterDataValue**\<`T`\>(`cluster`, `clusterDataKey`): `undefined` \| `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/exports_cluster.md#cluster)\<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |

#### Returns

`undefined` \| `T`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:70

___

### hasScopedClusterDataValue

▸ **hasScopedClusterDataValue**(`cluster`, `clusterDataKey`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/exports_cluster.md#cluster)\<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |

#### Returns

`any`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:73

___

### matchesFabricIdAndRootPublicKey

▸ **matchesFabricIdAndRootPublicKey**(`fabricId`, `rootPublicKey`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricId` | [`FabricId`](../modules/exports_datatype.md#fabricid) |
| `rootPublicKey` | `Uint8Array` |

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:61

___

### persist

▸ **persist**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:69

___

### remove

▸ **remove**(`currentSessionId?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `currentSessionId?` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:68

___

### removeSession

▸ **removeSession**(`session`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`SecureSession`](exports_session.SecureSession.md)\<`any`\> |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:64

___

### setLabel

▸ **setLabel**(`label`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:57

___

### setPersistCallback

▸ **setPersistCallback**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:67

___

### setScopedClusterDataValue

▸ **setScopedClusterDataValue**\<`T`\>(`cluster`, `clusterDataKey`, `value`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/exports_cluster.md#cluster)\<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |
| `value` | `T` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:71

___

### sign

▸ **sign**(`data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:59

___

### toStorageObject

▸ **toStorageObject**(): [`FabricJsonObject`](../modules/exports_fabric.md#fabricjsonobject)

#### Returns

[`FabricJsonObject`](../modules/exports_fabric.md#fabricjsonobject)

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:55

___

### verifyCredentials

▸ **verifyCredentials**(`_operationalCert`, `_intermediateCACert`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_operationalCert` | `Uint8Array` |
| `_intermediateCACert` | `undefined` \| `Uint8Array` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:60

___

### createFromStorageObject

▸ **createFromStorageObject**(`fabricObject`): [`Fabric`](exports_fabric.Fabric.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricObject` | [`FabricJsonObject`](../modules/exports_fabric.md#fabricjsonobject) |

#### Returns

[`Fabric`](exports_fabric.Fabric.md)

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:56
