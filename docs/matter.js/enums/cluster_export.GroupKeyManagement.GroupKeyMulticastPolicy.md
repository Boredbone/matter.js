[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [GroupKeyManagement](../modules/cluster_export.GroupKeyManagement.md) / GroupKeyMulticastPolicy

# Enumeration: GroupKeyMulticastPolicy

[cluster/export](../modules/cluster_export.md).[GroupKeyManagement](../modules/cluster_export.GroupKeyManagement.md).GroupKeyMulticastPolicy

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.2.6.2

## Table of contents

### Enumeration Members

- [AllNodes](cluster_export.GroupKeyManagement.GroupKeyMulticastPolicy.md#allnodes)
- [PerGroupId](cluster_export.GroupKeyManagement.GroupKeyMulticastPolicy.md#pergroupid)

## Enumeration Members

### AllNodes

• **AllNodes** = ``1``

Indicates not filtering of multicast messages

The 16-bit Group Identifier of the Multicast Address shall be 0xFFFF.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.2.6.2.2

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:117](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L117)

___

### PerGroupId

• **PerGroupId** = ``0``

Indicates filtering of multicast messages for a specific Group ID

The 16-bit Group Identifier of the Multicast Address shall be the Group ID of the group.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.2.6.2.1

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:108](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L108)
