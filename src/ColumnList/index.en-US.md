---
title: ColumnList
group: Sortable
order: 3
demo:
  cols: 2
---

# ColumnList Column Editing List

## When to use

Generate a simple sorting list based on `schema`.

## Code Demo

<code src="./demos/normal.tsx" ></code>
<code src="./demos/column.tsx" ></code>
<code src="./demos/controlled.tsx" ></code>
<code src="./demos/actions.tsx" ></code>
<code src="./demos/creatorButtonProps.tsx" ></code>
<code src="./demos/customCreate.tsx" ></code>
<code src="./demos/empty.tsx" ></code>

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
| placeholder  | `string`                          | Input box prompt text                                                                                  |
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
