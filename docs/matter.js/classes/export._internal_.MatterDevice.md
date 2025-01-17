[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [\<internal\>](../modules/export._internal_.md) / MatterDevice

# Class: MatterDevice

[export](../modules/export.md).[\<internal\>](../modules/export._internal_.md).MatterDevice

## Table of contents

### Constructors

- [constructor](export._internal_.MatterDevice.md#constructor)

### Properties

- [activeCommissioningEndCallback](export._internal_.MatterDevice.md#activecommissioningendcallback)
- [activeCommissioningMode](export._internal_.MatterDevice.md#activecommissioningmode)
- [announceInterval](export._internal_.MatterDevice.md#announceinterval)
- [announcementStartedTime](export._internal_.MatterDevice.md#announcementstartedtime)
- [broadcasters](export._internal_.MatterDevice.md#broadcasters)
- [channelManager](export._internal_.MatterDevice.md#channelmanager)
- [commissioningChangedCallback](export._internal_.MatterDevice.md#commissioningchangedcallback)
- [deviceName](export._internal_.MatterDevice.md#devicename)
- [deviceType](export._internal_.MatterDevice.md#devicetype)
- [discriminator](export._internal_.MatterDevice.md#discriminator)
- [exchangeManager](export._internal_.MatterDevice.md#exchangemanager)
- [fabricManager](export._internal_.MatterDevice.md#fabricmanager)
- [failSafeContext](export._internal_.MatterDevice.md#failsafecontext)
- [initialPasscode](export._internal_.MatterDevice.md#initialpasscode)
- [isClosing](export._internal_.MatterDevice.md#isclosing)
- [productId](export._internal_.MatterDevice.md#productid)
- [scanners](export._internal_.MatterDevice.md#scanners)
- [secureChannelProtocol](export._internal_.MatterDevice.md#securechannelprotocol)
- [sessionChangedCallback](export._internal_.MatterDevice.md#sessionchangedcallback)
- [sessionManager](export._internal_.MatterDevice.md#sessionmanager)
- [storage](export._internal_.MatterDevice.md#storage)
- [transportInterfaces](export._internal_.MatterDevice.md#transportinterfaces)
- [vendorId](export._internal_.MatterDevice.md#vendorid)

### Methods

- [addBroadcaster](export._internal_.MatterDevice.md#addbroadcaster)
- [addFabric](export._internal_.MatterDevice.md#addfabric)
- [addProtocolHandler](export._internal_.MatterDevice.md#addprotocolhandler)
- [addScanner](export._internal_.MatterDevice.md#addscanner)
- [addTransportInterface](export._internal_.MatterDevice.md#addtransportinterface)
- [allowBasicCommissioning](export._internal_.MatterDevice.md#allowbasiccommissioning)
- [allowEnhancedCommissioning](export._internal_.MatterDevice.md#allowenhancedcommissioning)
- [announce](export._internal_.MatterDevice.md#announce)
- [announceAsCommissionable](export._internal_.MatterDevice.md#announceascommissionable)
- [armFailSafe](export._internal_.MatterDevice.md#armfailsafe)
- [assertFailSafeArmed](export._internal_.MatterDevice.md#assertfailsafearmed)
- [completeCommission](export._internal_.MatterDevice.md#completecommission)
- [createSecureSession](export._internal_.MatterDevice.md#createsecuresession)
- [endCommissioning](export._internal_.MatterDevice.md#endcommissioning)
- [existsOpenPaseSession](export._internal_.MatterDevice.md#existsopenpasesession)
- [failSafeExpired](export._internal_.MatterDevice.md#failsafeexpired)
- [findDevice](export._internal_.MatterDevice.md#finddevice)
- [findFabricFromDestinationId](export._internal_.MatterDevice.md#findfabricfromdestinationid)
- [findResumptionRecordById](export._internal_.MatterDevice.md#findresumptionrecordbyid)
- [getActiveSessionInformation](export._internal_.MatterDevice.md#getactivesessioninformation)
- [getFabricByIndex](export._internal_.MatterDevice.md#getfabricbyindex)
- [getFabrics](export._internal_.MatterDevice.md#getfabrics)
- [getFailSafeContext](export._internal_.MatterDevice.md#getfailsafecontext)
- [getNextAvailableSessionId](export._internal_.MatterDevice.md#getnextavailablesessionid)
- [getNextFabricIndex](export._internal_.MatterDevice.md#getnextfabricindex)
- [hasBroadcaster](export._internal_.MatterDevice.md#hasbroadcaster)
- [hasProtocolHandler](export._internal_.MatterDevice.md#hasprotocolhandler)
- [initiateExchange](export._internal_.MatterDevice.md#initiateexchange)
- [isCommissioned](export._internal_.MatterDevice.md#iscommissioned)
- [isFailsafeArmed](export._internal_.MatterDevice.md#isfailsafearmed)
- [removePaseSession](export._internal_.MatterDevice.md#removepasesession)
- [saveResumptionRecord](export._internal_.MatterDevice.md#saveresumptionrecord)
- [sendCommissionableAnnouncement](export._internal_.MatterDevice.md#sendcommissionableannouncement)
- [sendFabricAnnouncements](export._internal_.MatterDevice.md#sendfabricannouncements)
- [start](export._internal_.MatterDevice.md#start)
- [startAnnouncement](export._internal_.MatterDevice.md#startannouncement)
- [stop](export._internal_.MatterDevice.md#stop)
- [updateFabric](export._internal_.MatterDevice.md#updatefabric)

## Constructors

### constructor

• **new MatterDevice**(`deviceName`, `deviceType`, `vendorId`, `productId`, `discriminator`, `initialPasscode`, `storage`, `commissioningChangedCallback`, `sessionChangedCallback`): [`MatterDevice`](export._internal_.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceName` | `string` |
| `deviceType` | [`DeviceTypeId`](../modules/datatype_export.md#devicetypeid) |
| `vendorId` | [`VendorId`](../modules/datatype_export.md#vendorid) |
| `productId` | `number` |
| `discriminator` | `number` |
| `initialPasscode` | `number` |
| `storage` | [`StorageContext`](storage_export.StorageContext.md) |
| `commissioningChangedCallback` | (`fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex)) => `void` |
| `sessionChangedCallback` | (`fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex)) => `void` |

#### Returns

[`MatterDevice`](export._internal_.MatterDevice.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:70](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L70)

## Properties

### activeCommissioningEndCallback

• `Private` `Optional` **activeCommissioningEndCallback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:64](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L64)

___

### activeCommissioningMode

• `Private` **activeCommissioningMode**: [`CommissioningWindowStatus`](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md) = `AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:63](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L63)

___

### announceInterval

• `Private` **announceInterval**: [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:65](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L65)

___

### announcementStartedTime

• `Private` **announcementStartedTime**: ``null`` \| `number` = `null`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:66](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L66)

___

### broadcasters

• `Private` `Readonly` **broadcasters**: [`InstanceBroadcaster`](../interfaces/common_export.InstanceBroadcaster.md)[]

#### Defined in

[packages/matter.js/src/MatterDevice.ts:56](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L56)

___

### channelManager

• `Private` `Readonly` **channelManager**: [`ChannelManager`](protocol_export.ChannelManager.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:60](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L60)

___

### commissioningChangedCallback

• `Private` `Readonly` **commissioningChangedCallback**: (`fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex)) => `void`

#### Type declaration

▸ (`fabricIndex`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/datatype_export.md#fabricindex) |

##### Returns

`void`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:78](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L78)

___

### deviceName

• `Private` `Readonly` **deviceName**: `string`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:71](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L71)

___

### deviceType

• `Private` `Readonly` **deviceType**: [`DeviceTypeId`](../modules/datatype_export.md#devicetypeid)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:72](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L72)

___

### discriminator

• `Private` `Readonly` **discriminator**: `number`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:75](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L75)

___

### exchangeManager

• `Private` `Readonly` **exchangeManager**: [`ExchangeManager`](protocol_export.ExchangeManager.md)\<[`MatterDevice`](export._internal_.MatterDevice.md)\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:61](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L61)

___

### fabricManager

• `Private` `Readonly` **fabricManager**: [`FabricManager`](fabric_export.FabricManager.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:58](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L58)

___

### failSafeContext

• `Private` `Optional` **failSafeContext**: [`FailSafeManager`](common_export.FailSafeManager.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:68](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L68)

___

### initialPasscode

• `Private` `Readonly` **initialPasscode**: `number`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:76](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L76)

___

### isClosing

• `Private` **isClosing**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:67](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L67)

___

### productId

• `Private` `Readonly` **productId**: `number`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:74](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L74)

___

### scanners

• `Private` `Readonly` **scanners**: [`Scanner`](../interfaces/common_export.Scanner.md)[]

#### Defined in

[packages/matter.js/src/MatterDevice.ts:55](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L55)

___

### secureChannelProtocol

• `Private` `Readonly` **secureChannelProtocol**: [`SecureChannelProtocol`](protocol_securechannel_export.SecureChannelProtocol.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:62](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L62)

___

### sessionChangedCallback

• `Private` `Readonly` **sessionChangedCallback**: (`fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex)) => `void`

#### Type declaration

▸ (`fabricIndex`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/datatype_export.md#fabricindex) |

##### Returns

`void`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:79](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L79)

___

### sessionManager

• `Private` `Readonly` **sessionManager**: [`SessionManager`](session_export.SessionManager.md)\<`this`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:59](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L59)

___

### storage

• `Private` `Readonly` **storage**: [`StorageContext`](storage_export.StorageContext.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:77](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L77)

___

### transportInterfaces

• `Private` `Readonly` **transportInterfaces**: ([`TransportInterface`](../interfaces/common_export.TransportInterface.md) \| [`NetInterface`](../interfaces/net_export.NetInterface.md))[]

#### Defined in

[packages/matter.js/src/MatterDevice.ts:57](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L57)

___

### vendorId

• `Private` `Readonly` **vendorId**: [`VendorId`](../modules/datatype_export.md#vendorid)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:73](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L73)

## Methods

### addBroadcaster

▸ **addBroadcaster**(`broadcaster`): [`MatterDevice`](export._internal_.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `broadcaster` | [`InstanceBroadcaster`](../interfaces/common_export.InstanceBroadcaster.md) |

#### Returns

[`MatterDevice`](export._internal_.MatterDevice.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:106](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L106)

___

### addFabric

▸ **addFabric**(`fabric`): `Promise`\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |

#### Returns

`Promise`\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:286](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L286)

___

### addProtocolHandler

▸ **addProtocolHandler**(`protocol`): [`MatterDevice`](export._internal_.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `protocol` | [`ProtocolHandler`](../interfaces/protocol_export.ProtocolHandler.md)\<[`MatterDevice`](export._internal_.MatterDevice.md)\> |

#### Returns

[`MatterDevice`](export._internal_.MatterDevice.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:121](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L121)

___

### addScanner

▸ **addScanner**(`scanner`): [`MatterDevice`](export._internal_.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Scanner`](../interfaces/common_export.Scanner.md) |

#### Returns

[`MatterDevice`](export._internal_.MatterDevice.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:97](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L97)

___

### addTransportInterface

▸ **addTransportInterface**(`netInterface`): [`MatterDevice`](export._internal_.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface` | [`TransportInterface`](../interfaces/common_export.TransportInterface.md) |

#### Returns

[`MatterDevice`](export._internal_.MatterDevice.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:111](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L111)

___

### allowBasicCommissioning

▸ **allowBasicCommissioning**(`commissioningEndCallback?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `commissioningEndCallback?` | () => `void` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:511](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L511)

___

### allowEnhancedCommissioning

▸ **allowEnhancedCommissioning**(`discriminator`, `paseServer`, `commissioningEndCallback`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `discriminator` | `number` |
| `paseServer` | [`PaseServer`](session_export.PaseServer.md) |
| `commissioningEndCallback` | () => `void` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:492](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L492)

___

### announce

▸ **announce**(`announceOnce?`): `Promise`\<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `announceOnce` | `boolean` | `false` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:140](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L140)

___

### announceAsCommissionable

▸ **announceAsCommissionable**(`mode`, `activeCommissioningEndCallback?`, `discriminator?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`CommissioningWindowStatus`](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md) |
| `activeCommissioningEndCallback?` | () => `void` |
| `discriminator?` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:185](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L185)

___

### armFailSafe

▸ **armFailSafe**(`expiryLengthSeconds`, `maxCumulativeFailsafeSeconds`, `associatedFabric`, `endpoint`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expiryLengthSeconds` | `number` |
| `maxCumulativeFailsafeSeconds` | `number` |
| `associatedFabric` | `undefined` \| [`Fabric`](fabric_export.Fabric.md) |
| `endpoint` | [`Endpoint`](device_export.Endpoint.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:423](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L423)

___

### assertFailSafeArmed

▸ **assertFailSafeArmed**(`message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:333](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L333)

___

### completeCommission

▸ **completeCommission**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:466](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L466)

___

### createSecureSession

▸ **createSecureSession**(`args`): `Promise`\<[`SecureSession`](session_export.SecureSession.md)\<[`MatterDevice`](export._internal_.MatterDevice.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.activeRetransmissionTimeoutMs?` | `number` |
| `args.fabric` | `undefined` \| [`Fabric`](fabric_export.Fabric.md) |
| `args.idleRetransmissionTimeoutMs?` | `number` |
| `args.isInitiator` | `boolean` |
| `args.isResumption` | `boolean` |
| `args.peerNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `args.peerSessionId` | `number` |
| `args.salt` | `Uint8Array` |
| `args.sessionId` | `number` |
| `args.sharedSecret` | `Uint8Array` |

#### Returns

`Promise`\<[`SecureSession`](session_export.SecureSession.md)\<[`MatterDevice`](export._internal_.MatterDevice.md)\>\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:229](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L229)

___

### endCommissioning

▸ **endCommissioning**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:531](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L531)

___

### existsOpenPaseSession

▸ **existsOpenPaseSession**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:554](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L554)

___

### failSafeExpired

▸ **failSafeExpired**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:341](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L341)

___

### findDevice

▸ **findDevice**(`fabric`, `nodeId`, `timeOutSeconds?`): `Promise`\<`undefined` \| \{ `channel`: [`Channel`](../interfaces/common_export.Channel.md)\<`Uint8Array`\> ; `session`: [`Session`](../interfaces/session_export.Session.md)\<[`MatterDevice`](export._internal_.MatterDevice.md)\>  }\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) | `undefined` |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) | `undefined` |
| `timeOutSeconds` | `number` | `5` |

#### Returns

`Promise`\<`undefined` \| \{ `channel`: [`Channel`](../interfaces/common_export.Channel.md)\<`Uint8Array`\> ; `session`: [`Session`](../interfaces/session_export.Session.md)\<[`MatterDevice`](export._internal_.MatterDevice.md)\>  }\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:558](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L558)

___

### findFabricFromDestinationId

▸ **findFabricFromDestinationId**(`destinationId`, `peerRandom`): [`Fabric`](fabric_export.Fabric.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `destinationId` | `Uint8Array` |
| `peerRandom` | `Uint8Array` |

#### Returns

[`Fabric`](fabric_export.Fabric.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:272](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L272)

___

### findResumptionRecordById

▸ **findResumptionRecordById**(`resumptionId`): `undefined` \| [`ResumptionRecord`](../interfaces/session_export.ResumptionRecord.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionId` | `Uint8Array` |

#### Returns

`undefined` \| [`ResumptionRecord`](../interfaces/session_export.ResumptionRecord.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:318](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L318)

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): \{ `fabric`: `undefined` \| \{ `fabricId`: [`FabricId`](../modules/datatype_export.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/datatype_export.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `secure`: `boolean`  }[]

#### Returns

\{ `fabric`: `undefined` \| \{ `fabricId`: [`FabricId`](../modules/datatype_export.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/datatype_export.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `secure`: `boolean`  }[]

#### Defined in

[packages/matter.js/src/MatterDevice.ts:594](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L594)

___

### getFabricByIndex

▸ **getFabricByIndex**(`fabricIndex`): `undefined` \| [`Fabric`](fabric_export.Fabric.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/datatype_export.md#fabricindex) |

#### Returns

`undefined` \| [`Fabric`](fabric_export.Fabric.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:310](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L310)

___

### getFabrics

▸ **getFabrics**(): [`Fabric`](fabric_export.Fabric.md)[]

#### Returns

[`Fabric`](fabric_export.Fabric.md)[]

#### Defined in

[packages/matter.js/src/MatterDevice.ts:462](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L462)

___

### getFailSafeContext

▸ **getFailSafeContext**(): [`FailSafeManager`](common_export.FailSafeManager.md)

#### Returns

[`FailSafeManager`](common_export.FailSafeManager.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:457](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L457)

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:225](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L225)

___

### getNextFabricIndex

▸ **getNextFabricIndex**(): [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Returns

[`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:282](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L282)

___

### hasBroadcaster

▸ **hasBroadcaster**(`broadcaster`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `broadcaster` | [`InstanceBroadcaster`](../interfaces/common_export.InstanceBroadcaster.md) |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:102](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L102)

___

### hasProtocolHandler

▸ **hasProtocolHandler**(`protocolId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `protocolId` | `number` |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:117](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L117)

___

### initiateExchange

▸ **initiateExchange**(`fabric`, `nodeId`, `protocolId`): [`MessageExchange`](protocol_export.MessageExchange.md)\<[`MatterDevice`](export._internal_.MatterDevice.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `protocolId` | `number` |

#### Returns

[`MessageExchange`](protocol_export.MessageExchange.md)\<[`MatterDevice`](export._internal_.MatterDevice.md)\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:314](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L314)

___

### isCommissioned

▸ **isCommissioned**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:488](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L488)

___

### isFailsafeArmed

▸ **isFailsafeArmed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:453](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L453)

___

### removePaseSession

▸ **removePaseSession**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:326](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L326)

___

### saveResumptionRecord

▸ **saveResumptionRecord**(`resumptionRecord`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionRecord` | [`ResumptionRecord`](../interfaces/session_export.ResumptionRecord.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:322](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L322)

___

### sendCommissionableAnnouncement

▸ **sendCommissionableAnnouncement**(`mode`, `discriminator?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`CommissioningWindowStatus`](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md) |
| `discriminator?` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:206](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L206)

___

### sendFabricAnnouncements

▸ **sendFabricAnnouncements**(`fabrics`, `expireCommissioningAnnouncement?`): `Promise`\<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fabrics` | [`Fabric`](fabric_export.Fabric.md)[] | `undefined` |
| `expireCommissioningAnnouncement` | `boolean` | `false` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:303](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L303)

___

### start

▸ **start**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:126](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L126)

___

### startAnnouncement

▸ **startAnnouncement**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:130](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L130)

___

### stop

▸ **stop**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:576](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L576)

___

### updateFabric

▸ **updateFabric**(`fabric`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:276](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterDevice.ts#L276)
