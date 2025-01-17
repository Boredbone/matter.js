[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / LocalizationConfiguration

# Namespace: LocalizationConfiguration

[cluster/export](cluster_export.md).LocalizationConfiguration

## Table of contents

### Variables

- [Cluster](cluster_export.LocalizationConfiguration.md#cluster)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `activeLocale`: [`WritableAttribute`](cluster_export.md#writableattribute)\<`string`, `any`\> ; `supportedLocales`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<`string`[], `any`\>  } ; `id`: ``43`` = 0x2b; `name`: ``"LocalizationConfiguration"`` = "LocalizationConfiguration"; `revision`: ``1`` = 1 }\>

Localization Configuration

Nodes should be expected to be deployed to any and all regions of the world. These global regions may have
differing common languages, units of measurements, and numerical formatting standards. As such, Nodes that
visually or audibly convey information need a mechanism by which they can be configured to use a user’s
preferred language, units, etc.

This cluster supports an interface to a Node. It provides attributes for determining and configuring
localization information that a Node shall utilize when conveying values to a user.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.3

#### Defined in

[packages/matter.js/src/cluster/definitions/LocalizationConfigurationCluster.ts:29](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/LocalizationConfigurationCluster.ts#L29)
