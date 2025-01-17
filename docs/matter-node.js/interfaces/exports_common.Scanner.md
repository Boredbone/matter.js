[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/common](../modules/exports_common.md) / Scanner

# Interface: Scanner

[exports/common](../modules/exports_common.md).Scanner

## Implemented by

- [`MdnsScanner`](../classes/exports_mdns.MdnsScanner.md)

## Table of contents

### Methods

- [cancelCommissionableDeviceDiscovery](exports_common.Scanner.md#cancelcommissionabledevicediscovery)
- [close](exports_common.Scanner.md#close)
- [findCommissionableDevices](exports_common.Scanner.md#findcommissionabledevices)
- [findCommissionableDevicesContinuously](exports_common.Scanner.md#findcommissionabledevicescontinuously)
- [findOperationalDevice](exports_common.Scanner.md#findoperationaldevice)
- [getDiscoveredCommissionableDevices](exports_common.Scanner.md#getdiscoveredcommissionabledevices)
- [getDiscoveredOperationalDevices](exports_common.Scanner.md#getdiscoveredoperationaldevices)

## Methods

### cancelCommissionableDeviceDiscovery

▸ **cancelCommissionableDeviceDiscovery**(`identifier`): `void`

Cancel a running discovery of commissionable devices. The waiter promises are resolved as if the timeout would
be over.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/exports_common.md#commissionabledeviceidentifiers) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/common/Scanner.d.ts:94

___

### close

▸ **close**(): `void`

Close the scanner server and free resources.

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/common/Scanner.d.ts:96

___

### findCommissionableDevices

▸ **findCommissionableDevices**(`identifier`, `timeoutSeconds?`, `ignoreExistingRecords?`): `Promise`\<[`CommissionableDevice`](../modules/exports_common.md#commissionabledevice)[]\>

Send DNS-SD queries to discover commissionable devices by a provided identifier (e.g. discriminator,
vendorId, etc.) and returns as soon as minimum one was found or the timeout is over.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/exports_common.md#commissionabledeviceidentifiers) |
| `timeoutSeconds?` | `number` |
| `ignoreExistingRecords?` | `boolean` |

#### Returns

`Promise`\<[`CommissionableDevice`](../modules/exports_common.md#commissionabledevice)[]\>

#### Defined in

packages/matter.js/dist/esm/common/Scanner.d.ts:81

___

### findCommissionableDevicesContinuously

▸ **findCommissionableDevicesContinuously**(`identifier`, `callback`, `timeoutSeconds?`): `Promise`\<[`CommissionableDevice`](../modules/exports_common.md#commissionabledevice)[]\>

Send DNS-SD queries to discover commissionable devices by a provided identifier (e.g. discriminator,
vendorId, etc.) and returns after the timeout is over. For each new discovered device the provided callback is
called when it is discovered.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/exports_common.md#commissionabledeviceidentifiers) |
| `callback` | (`device`: [`CommissionableDevice`](../modules/exports_common.md#commissionabledevice)) => `void` |
| `timeoutSeconds?` | `number` |

#### Returns

`Promise`\<[`CommissionableDevice`](../modules/exports_common.md#commissionabledevice)[]\>

#### Defined in

packages/matter.js/dist/esm/common/Scanner.d.ts:87

___

### findOperationalDevice

▸ **findOperationalDevice**(`fabric`, `nodeId`, `timeoutSeconds?`, `ignoreExistingRecords?`): `Promise`\<[`ServerAddressIp`](../modules/exports_common.md#serveraddressip)[]\>

Send DNS-SD queries to discover the current addresses of an operational paired device by its operational ID
and return them.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../classes/exports_fabric.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `timeoutSeconds?` | `number` |
| `ignoreExistingRecords?` | `boolean` |

#### Returns

`Promise`\<[`ServerAddressIp`](../modules/exports_common.md#serveraddressip)[]\>

#### Defined in

packages/matter.js/dist/esm/common/Scanner.d.ts:71

___

### getDiscoveredCommissionableDevices

▸ **getDiscoveredCommissionableDevices**(`identifier`): [`CommissionableDevice`](../modules/exports_common.md#commissionabledevice)[]

Return already discovered commissionable devices and return them. Does not send out new DNS-SD queries.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/exports_common.md#commissionabledeviceidentifiers) |

#### Returns

[`CommissionableDevice`](../modules/exports_common.md#commissionabledevice)[]

#### Defined in

packages/matter.js/dist/esm/common/Scanner.d.ts:89

___

### getDiscoveredOperationalDevices

▸ **getDiscoveredOperationalDevices**(`fabric`, `nodeId`): [`ServerAddressIp`](../modules/exports_common.md#serveraddressip)[]

Return already discovered addresses of an operational paired device and return them. Does not send out new
DNS-SD queries.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../classes/exports_fabric.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |

#### Returns

[`ServerAddressIp`](../modules/exports_common.md#serveraddressip)[]

#### Defined in

packages/matter.js/dist/esm/common/Scanner.d.ts:76
