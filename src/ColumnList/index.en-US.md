---
title: ColumnList
atomId: ColumnList
group: Sortable
demo:
  cols: 2
---

# ColumnList Column Editing List

Generate a simple sorting list based on `schema`.

## Code Demo

<code src="./demos/normal.tsx"  title="Basic Usage"
description="Render the sorting form by configuring `columns`"></code><code src="./demos/creatorButtonPropsFalse.tsx" title="Disable Adding Capability"
description="You can disable the adding functionality, including the add row button, adding by pressing Enter, and adding in an empty state, by setting `creatorButtonProps={false}`"></code><code src="./demos/column.tsx"  title="Custom Form"
description="Currently supports three types of form: `input`, `select`, and `custom`"></code><code src="./demos/controlled.tsx"  title="Controlled Mode"
description="The form can be controlled by `value`"></code><code src="./demos/actions.tsx" title="Custom Actions"
description="Customize the action column through the `actions` property"></code><code src="./demos/creatorButtonProps.tsx"  title="Custom Initialization"
description="Customize the initialization logic through `creatorButtonProps`"></code><code src="./demos/customCreate.tsx"  title="Custom Creation Logic"
description="You can set the `style` attribute to hide the default add button, and then customize the creation button"></code><code src="./demos/empty.tsx" title="Empty State"
description="When the form value is empty, an empty state will be rendered"></code>

## API

Provides encapsulated `columns` configuration, other attributes refer to `SortableList`

| Property | Type           | Description                |
| -------- | -------------- | -------------------------- |
| columns  | `ColumnItem[]` | Column configuration items |

### ColumnItem

Column configuration items

| Property     | Type                              | Description                                                                                            |
| ------------ | --------------------------------- | ------------------------------------------------------------------------------------------------------ |
| title        | `React.ReactNode`                 | Column title                                                                                           |
| type         | `'select' \| 'input' \| 'custom'` | Field type, default is 'input'. Optional values: 'select' dropdown, 'input' input box, 'custom' custom |
| options      | `ColumnItemOption[]`              | Dropdown options                                                                                       |
| placeholder  | `string`                          | Input box placeholder text                                                                             |
| initialValue | `T`                               | Initial value                                                                                          |
| dataIndex    | `string`                          | Field reference                                                                                        |
| key          | `string`                          | Unique key                                                                                             |
| render       | `FC<ColumnCustomRenderProps<T>>`  | Custom rendering function                                                                              |
| width        | `number` \| `string`              | Column width                                                                                           |
| multiple     | `boolean`                         | Whether to allow multiple selection                                                                    |

### ColumnItemOption

Dropdown options

| Property | Type                 | Description |
| -------- | -------------------- | ----------- |
| label    | `string`             | Label text  |
| value    | `string` \| `number` | Value       |

### ColumnCustomRenderProps

Custom rendering properties for list items

| Property | Type                   | Description                      |
| -------- | ---------------------- | -------------------------------- |
| item     | `any`                  | Current item data                |
| value    | `any`                  | Current value                    |
| onChange | `(value: any) => void` | Value change callback function   |
| column   | `ColumnItem<T>`        | Corresponding column information |
| style    | `CSSProperties`        | Style                            |
| index    | `number`               | Index                            |
