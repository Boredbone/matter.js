[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / MdnsScanner

# Class: MdnsScanner

[\<internal\>](../modules/internal_.md).MdnsScanner

This class implements the Scanner interface for a MDNS scanner via UDP messages in a IP based network.
It sends out queries to discover various types of Matter device types and listens for announcements.

## Implements

- [`Scanner`](../interfaces/internal_.Scanner.md)

## Table of contents

### Constructors

- [constructor](internal_.MdnsScanner.md#constructor)

### Properties

- [activeAnnounceQueries](internal_.MdnsScanner.md#activeannouncequeries)
- [buildCommissionableQueryIdentifier](internal_.MdnsScanner.md#buildcommissionablequeryidentifier)
- [closing](internal_.MdnsScanner.md#closing)
- [commissionableDeviceRecords](internal_.MdnsScanner.md#commissionabledevicerecords)
- [createOperationalMatterQName](internal_.MdnsScanner.md#createoperationalmatterqname)
- [enableIpv4](internal_.MdnsScanner.md#enableipv4)
- [expire](internal_.MdnsScanner.md#expire)
- [extractInstanceId](internal_.MdnsScanner.md#extractinstanceid)
- [findCommissionableQueryIdentifier](internal_.MdnsScanner.md#findcommissionablequeryidentifier)
- [finishWaiter](internal_.MdnsScanner.md#finishwaiter)
- [getActiveQueryEarlierAnswers](internal_.MdnsScanner.md#getactivequeryearlieranswers)
- [getCommissionableDeviceRecords](internal_.MdnsScanner.md#getcommissionabledevicerecords)
- [getCommissionableQueryRecords](internal_.MdnsScanner.md#getcommissionablequeryrecords)
- [getOperationalDeviceRecords](internal_.MdnsScanner.md#getoperationaldevicerecords)
- [handleCommissionableRecords](internal_.MdnsScanner.md#handlecommissionablerecords)
- [handleDnsMessage](internal_.MdnsScanner.md#handlednsmessage)
- [handleIpRecords](internal_.MdnsScanner.md#handleiprecords)
- [handleOperationalSrvRecord](internal_.MdnsScanner.md#handleoperationalsrvrecord)
- [hasWaiter](internal_.MdnsScanner.md#haswaiter)
- [multicastServer](internal_.MdnsScanner.md#multicastserver)
- [nextAnnounceIntervalSeconds](internal_.MdnsScanner.md#nextannounceintervalseconds)
- [operationalDeviceRecords](internal_.MdnsScanner.md#operationaldevicerecords)
- [parseCommissionableTxtRecord](internal_.MdnsScanner.md#parsecommissionabletxtrecord)
- [periodicTimer](internal_.MdnsScanner.md#periodictimer)
- [queryTimer](internal_.MdnsScanner.md#querytimer)
- [recordWaiters](internal_.MdnsScanner.md#recordwaiters)
- [registerWaiterPromise](internal_.MdnsScanner.md#registerwaiterpromise)
- [removeQuery](internal_.MdnsScanner.md#removequery)
- [sendQueries](internal_.MdnsScanner.md#sendqueries)
- [setQueryRecords](internal_.MdnsScanner.md#setqueryrecords)
- [sortServerEntries](internal_.MdnsScanner.md#sortserverentries)

### Methods

- [cancelCommissionableDeviceDiscovery](internal_.MdnsScanner.md#cancelcommissionabledevicediscovery)
- [cancelOperationalDeviceDiscovery](internal_.MdnsScanner.md#canceloperationaldevicediscovery)
- [close](internal_.MdnsScanner.md#close)
- [findCommissionableDevices](internal_.MdnsScanner.md#findcommissionabledevices)
- [findCommissionableDevicesContinuously](internal_.MdnsScanner.md#findcommissionabledevicescontinuously)
- [findOperationalDevice](internal_.MdnsScanner.md#findoperationaldevice)
- [getDiscoveredCommissionableDevices](internal_.MdnsScanner.md#getdiscoveredcommissionabledevices)
- [getDiscoveredOperationalDevices](internal_.MdnsScanner.md#getdiscoveredoperationaldevices)
- [create](internal_.MdnsScanner.md#create)

## Constructors

### constructor

• **new MdnsScanner**(`multicastServer`, `enableIpv4?`): [`MdnsScanner`](internal_.MdnsScanner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `multicastServer` | [`UdpMulticastServer`](internal_.UdpMulticastServer.md) |
| `enableIpv4?` | `boolean` |

#### Returns

[`MdnsScanner`](internal_.MdnsScanner.md)

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:30

## Properties

### activeAnnounceQueries

• `Private` `Readonly` **activeAnnounceQueries**: `any`

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:22

___

### buildCommissionableQueryIdentifier

• `Private` **buildCommissionableQueryIdentifier**: `any`

Builds an identifier string for commissionable queries based on the given identifier object.
Some identifiers are identical to the official DNS-SD identifiers, others are custom.

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:90

___

### closing

• `Private` **closing**: `any`

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:29

___

### commissionableDeviceRecords

• `Private` `Readonly` **commissionableDeviceRecords**: `any`

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:26

___

### createOperationalMatterQName

• `Private` **createOperationalMatterQName**: `any`

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:72

___

### enableIpv4

• `Private` `Optional` `Readonly` **enableIpv4**: `any`

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:17

___

### expire

• `Private` **expire**: `any`

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:146

___

### extractInstanceId

• `Private` **extractInstanceId**: `any`

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:91

___

### findCommissionableQueryIdentifier

• `Private` **findCommissionableQueryIdentifier**: `any`

Check all options for a query identifier and return the most relevant one with an active query

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:95

___

### finishWaiter

• `Private` **finishWaiter**: `any`

Remove a waiter promise for a specific queryId and stop the connected timer. If required also resolve the
promise.

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:69

___

### getActiveQueryEarlierAnswers

• `Private` **getActiveQueryEarlierAnswers**: `any`

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:44

___

### getCommissionableDeviceRecords

• `Private` **getCommissionableDeviceRecords**: `any`

Returns the metadata and list of all target addresses (IP/port) discovered for a queried commissionable device
record.

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:85

___

### getCommissionableQueryRecords

• `Private` **getCommissionableQueryRecords**: `any`

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:96

___

### getOperationalDeviceRecords

• `Private` **getOperationalDeviceRecords**: `any`

Returns the list of all targets (IP/port) discovered for a queried operational device record.

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:53

___

### handleCommissionableRecords

• `Private` **handleCommissionableRecords**: `any`

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:144

___

### handleDnsMessage

• `Private` **handleDnsMessage**: `any`

Main method to handle all incoming DNS messages.
It will parse the message and check if it contains relevant discovery records.

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:141

___

### handleIpRecords

• `Private` **handleIpRecords**: `any`

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:142

___

### handleOperationalSrvRecord

• `Private` **handleOperationalSrvRecord**: `any`

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:143

___

### hasWaiter

• `Private` **hasWaiter**: `any`

Returns weather a waiter promise is registered for a specific queryId.

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:71

___

### multicastServer

• `Private` `Readonly` **multicastServer**: `any`

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:16

___

### nextAnnounceIntervalSeconds

• `Private` **nextAnnounceIntervalSeconds**: `any`

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:24

___

### operationalDeviceRecords

• `Private` `Readonly` **operationalDeviceRecords**: `any`

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:25

___

### parseCommissionableTxtRecord

• `Private` **parseCommissionableTxtRecord**: `any`

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:145

___

### periodicTimer

• `Private` `Readonly` **periodicTimer**: `any`

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:28

___

### queryTimer

• `Private` `Optional` **queryTimer**: `any`

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:23

___

### recordWaiters

• `Private` `Readonly` **recordWaiters**: `any`

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:27

___

### registerWaiterPromise

• `Private` **registerWaiterPromise**: `any`

Registers a deferred promise for a specific queryId together with a timeout and return the promise.
The promise will be resolved when the timer runs out latest.

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:64

___

### removeQuery

• `Private` **removeQuery**: `any`

Remove a query from the list of active queries because discovery has finished or timed out and stop sending it
out. If it was the last query announcing will stop completely.

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:49

___

### sendQueries

• `Private` **sendQueries**: `any`

Sends out one DNS-SD query for all collected announce records and start a timer for the next query with doubled
interval, maximum 60min, as per MDNS specs. The already known answers are tried to be sent in the query as long
as they fit into a maximum 1500 byte long packet (as defined in MDNS specs), else they are split into more
packets and the query is sent as Truncated query.

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:38

___

### setQueryRecords

• `Private` **setQueryRecords**: `any`

Set new DnsQuery records to the list of active queries to discover devices in the network and start sending them
out. When entry already exists the query is overwritten and answers are always added.

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:43

___

### sortServerEntries

• `Private` **sortServerEntries**: `any`

Sort the list of found IP/ports and make sure link-local IPv6 addresses come first, IPv6 next and IPv4 last.

**`Param`**

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:59

## Methods

### cancelCommissionableDeviceDiscovery

▸ **cancelCommissionableDeviceDiscovery**(`identifier`): `void`

Cancel a running discovery of commissionable devices. The waiter promises are resolved as if the timeout would
be over.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/internal_.md#commissionabledeviceidentifiers) |

#### Returns

`void`

#### Implementation of

[Scanner](../interfaces/internal_.Scanner.md).[cancelCommissionableDeviceDiscovery](../interfaces/internal_.Scanner.md#cancelcommissionabledevicediscovery)

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:79

___

### cancelOperationalDeviceDiscovery

▸ **cancelOperationalDeviceDiscovery**(`fabric`, `nodeId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](internal_.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:78

___

### close

▸ **close**(): `Promise`\<`void`\>

Close all connects, end all timers and resolve all pending promises.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Scanner](../interfaces/internal_.Scanner.md).[close](../interfaces/internal_.Scanner.md#close)

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:136

___

### findCommissionableDevices

▸ **findCommissionableDevices**(`identifier`, `timeoutSeconds?`, `ignoreExistingRecords?`): `Promise`\<[`CommissionableDevice`](../modules/internal_.md#commissionabledevice)[]\>

Discovers commissionable devices based on a defined identifier for maximal given timeout, but returns the
first found entries. If already a discovered device matches in the cache the response is returned directly and
no query is triggered. If no record exists a query is sent out and the promise gets fulfilled as soon as at least
one device is found. If no device is discovered in the defined timeframe an empty array is returned. When the
promise got fulfilled no more queries are send out, but more device entries might be added when discovered later.
These can be requested by the getCommissionableDevices method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/internal_.md#commissionabledeviceidentifiers) |
| `timeoutSeconds?` | `number` |
| `ignoreExistingRecords?` | `boolean` |

#### Returns

`Promise`\<[`CommissionableDevice`](../modules/internal_.md#commissionabledevice)[]\>

#### Implementation of

[Scanner](../interfaces/internal_.Scanner.md).[findCommissionableDevices](../interfaces/internal_.Scanner.md#findcommissionabledevices)

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:105

___

### findCommissionableDevicesContinuously

▸ **findCommissionableDevicesContinuously**(`identifier`, `callback`, `timeoutSeconds?`): `Promise`\<[`CommissionableDevice`](../modules/internal_.md#commissionabledevice)[]\>

Discovers commissionable devices based on a defined identifier and returns the first found entries. If already a

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/internal_.md#commissionabledeviceidentifiers) |
| `callback` | (`device`: [`CommissionableDevice`](../modules/internal_.md#commissionabledevice)) => `void` |
| `timeoutSeconds?` | `number` |

#### Returns

`Promise`\<[`CommissionableDevice`](../modules/internal_.md#commissionabledevice)[]\>

#### Implementation of

[Scanner](../interfaces/internal_.Scanner.md).[findCommissionableDevicesContinuously](../interfaces/internal_.Scanner.md#findcommissionabledevicescontinuously)

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:112

___

### findOperationalDevice

▸ **findOperationalDevice**(`«destructured»`, `nodeId`, `timeoutSeconds?`, `ignoreExistingRecords?`): `Promise`\<[`ServerAddressIp`](../modules/internal_.md#serveraddressip)[]\>

Method to find an operational device (already commissioned) and return a promise with the list of discovered
IP/ports or an empty array if not found.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Fabric`](internal_.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `timeoutSeconds?` | `number` |
| `ignoreExistingRecords?` | `boolean` |

#### Returns

`Promise`\<[`ServerAddressIp`](../modules/internal_.md#serveraddressip)[]\>

#### Implementation of

[Scanner](../interfaces/internal_.Scanner.md).[findOperationalDevice](../interfaces/internal_.Scanner.md#findoperationaldevice)

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:77

___

### getDiscoveredCommissionableDevices

▸ **getDiscoveredCommissionableDevices**(`identifier`): \{ `CM`: `number` ; `D`: `number` ; `DN?`: `string` ; `DT?`: `number` ; `P?`: `number` ; `PH?`: `number` ; `PI?`: `string` ; `RI?`: `string` ; `SAI?`: `number` ; `SD`: `number` ; `SII?`: `number` ; `T?`: `number` ; `V?`: `number` ; `VP?`: `string` ; `addresses`: [`ServerAddressIp`](../modules/internal_.md#serveraddressip)[] ; `deviceIdentifier`: `string` ; `expires`: `undefined` ; `instanceId`: `string`  }[]

Return already discovered commissionable devices and return them. Does not send out new DNS-SD queries.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/internal_.md#commissionabledeviceidentifiers) |

#### Returns

\{ `CM`: `number` ; `D`: `number` ; `DN?`: `string` ; `DT?`: `number` ; `P?`: `number` ; `PH?`: `number` ; `PI?`: `string` ; `RI?`: `string` ; `SAI?`: `number` ; `SD`: `number` ; `SII?`: `number` ; `T?`: `number` ; `V?`: `number` ; `VP?`: `string` ; `addresses`: [`ServerAddressIp`](../modules/internal_.md#serveraddressip)[] ; `deviceIdentifier`: `string` ; `expires`: `undefined` ; `instanceId`: `string`  }[]

#### Implementation of

[Scanner](../interfaces/internal_.Scanner.md).[getDiscoveredCommissionableDevices](../interfaces/internal_.Scanner.md#getdiscoveredcommissionabledevices)

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:113

___

### getDiscoveredOperationalDevices

▸ **getDiscoveredOperationalDevices**(`«destructured»`, `nodeId`): [`ServerAddressIp`](../modules/internal_.md#serveraddressip)[]

Return already discovered addresses of an operational paired device and return them. Does not send out new
DNS-SD queries.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Fabric`](internal_.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |

#### Returns

[`ServerAddressIp`](../modules/internal_.md#serveraddressip)[]

#### Implementation of

[Scanner](../interfaces/internal_.Scanner.md).[getDiscoveredOperationalDevices](../interfaces/internal_.Scanner.md#getdiscoveredoperationaldevices)

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:80

___

### create

▸ **create**(`options?`): `Promise`\<[`MdnsScanner`](internal_.MdnsScanner.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.enableIpv4?` | `boolean` |
| `options.netInterface?` | `string` |

#### Returns

`Promise`\<[`MdnsScanner`](internal_.MdnsScanner.md)\>

#### Defined in

matter.js/dist/esm/mdns/MdnsScanner.d.ts:18
