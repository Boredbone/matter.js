[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / Scanner

# Interface: Scanner

[\<internal\>](../modules/internal_.md).Scanner

## Implemented by

- [`BleScanner`](../classes/BleScanner.md)
- [`MdnsScanner`](../classes/internal_.MdnsScanner.md)

## Table of contents

### Methods

- [cancelCommissionableDeviceDiscovery](internal_.Scanner.md#cancelcommissionabledevicediscovery)
- [close](internal_.Scanner.md#close)
- [findCommissionableDevices](internal_.Scanner.md#findcommissionabledevices)
- [findCommissionableDevicesContinuously](internal_.Scanner.md#findcommissionabledevicescontinuously)
- [findOperationalDevice](internal_.Scanner.md#findoperationaldevice)
- [getDiscoveredCommissionableDevices](internal_.Scanner.md#getdiscoveredcommissionabledevices)
- [getDiscoveredOperationalDevices](internal_.Scanner.md#getdiscoveredoperationaldevices)

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

#### Defined in

matter.js/dist/esm/common/Scanner.d.ts:94

___

### close

▸ **close**(): `void`

Close the scanner server and free resources.

#### Returns

`void`

#### Defined in

matter.js/dist/esm/common/Scanner.d.ts:96

___

### findCommissionableDevices

▸ **findCommissionableDevices**(`identifier`, `timeoutSeconds?`, `ignoreExistingRecords?`): `Promise`\<[`CommissionableDevice`](../modules/internal_.md#commissionabledevice)[]\>

Send DNS-SD queries to discover commissionable devices by a provided identifier (e.g. discriminator,
vendorId, etc.) and returns as soon as minimum one was found or the timeout is over.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/internal_.md#commissionabledeviceidentifiers) |
| `timeoutSeconds?` | `number` |
| `ignoreExistingRecords?` | `boolean` |

#### Returns

`Promise`\<[`CommissionableDevice`](../modules/internal_.md#commissionabledevice)[]\>

#### Defined in

matter.js/dist/esm/common/Scanner.d.ts:81

___

### findCommissionableDevicesContinuously

▸ **findCommissionableDevicesContinuously**(`identifier`, `callback`, `timeoutSeconds?`): `Promise`\<[`CommissionableDevice`](../modules/internal_.md#commissionabledevice)[]\>

Send DNS-SD queries to discover commissionable devices by a provided identifier (e.g. discriminator,
vendorId, etc.) and returns after the timeout is over. For each new discovered device the provided callback is
called when it is discovered.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/internal_.md#commissionabledeviceidentifiers) |
| `callback` | (`device`: [`CommissionableDevice`](../modules/internal_.md#commissionabledevice)) => `void` |
| `timeoutSeconds?` | `number` |

#### Returns

`Promise`\<[`CommissionableDevice`](../modules/internal_.md#commissionabledevice)[]\>

#### Defined in

matter.js/dist/esm/common/Scanner.d.ts:87

___

### findOperationalDevice

▸ **findOperationalDevice**(`fabric`, `nodeId`, `timeoutSeconds?`, `ignoreExistingRecords?`): `Promise`\<[`ServerAddressIp`](../modules/internal_.md#serveraddressip)[]\>

Send DNS-SD queries to discover the current addresses of an operational paired device by its operational ID
and return them.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../classes/internal_.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `timeoutSeconds?` | `number` |
| `ignoreExistingRecords?` | `boolean` |

#### Returns

`Promise`\<[`ServerAddressIp`](../modules/internal_.md#serveraddressip)[]\>

#### Defined in

matter.js/dist/esm/common/Scanner.d.ts:71

___

### getDiscoveredCommissionableDevices

▸ **getDiscoveredCommissionableDevices**(`identifier`): [`CommissionableDevice`](../modules/internal_.md#commissionabledevice)[]

Return already discovered commissionable devices and return them. Does not send out new DNS-SD queries.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/internal_.md#commissionabledeviceidentifiers) |

#### Returns

[`CommissionableDevice`](../modules/internal_.md#commissionabledevice)[]

#### Defined in

matter.js/dist/esm/common/Scanner.d.ts:89

___

### getDiscoveredOperationalDevices

▸ **getDiscoveredOperationalDevices**(`fabric`, `nodeId`): [`ServerAddressIp`](../modules/internal_.md#serveraddressip)[]

Return already discovered addresses of an operational paired device and return them. Does not send out new
DNS-SD queries.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../classes/internal_.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |

#### Returns

[`ServerAddressIp`](../modules/internal_.md#serveraddressip)[]

#### Defined in

matter.js/dist/esm/common/Scanner.d.ts:76
