---
title: ColumnList 列编辑列表
atomId: ColumnList
group: 可排序组件
order: 3
---

# ColumnList 列编辑列表

## 何时使用

根据 `schema` 自动生成简单的排序列表。

## 何时使用

简单排序表单场景。

## 代码演示

### 基本使用

<code src="./demos/normal.tsx" ></code>

### 字段列表

<code src="./demos/column.tsx" ></code>

### 组件受控

<code src="./demos/controlled.tsx" ></code>

### 操作项

<code src="./demos/actions.tsx" ></code>

### 自定义初始数据项

<code src="./demos/custom.tsx" ></code>

### 空数据

<code src="./demos/empty.tsx" ></code>

## API

提供封装的 `columns` 配置，其他属性参考 `SortableList`

| 属性名  | 类型              | 描述     |
| ------- | ----------------- | -------- |
| columns | `ColumnItem<T>[]` | 列配置项 |

### ColumnItem

列配置项

| 属性名       | 类型                              | 描述                                                                               |
| ------------ | --------------------------------- | ---------------------------------------------------------------------------------- |
| title        | `React.ReactNode`                 | 列标题                                                                             |
| type         | `'select' \| 'input' \| 'custom'` | 字段类型，默认为 'input'。可选值：'select' 下拉框，'input' 输入框，'custom' 自定义 |
| options      | `ColumnItemOption[]`              | 下拉框选项                                                                         |
| placeholder  | `string`                          | 输入框提示文本                                                                     |
| initialValue | `T`                               | 初始值                                                                             |
| dataIndex    | `string`                          | 字段引用                                                                           |
| key          | `string`                          | 唯一键值                                                                           |
| render       | `FC<ColumnCustomRenderProps<T>>`  | 自定义渲染函数                                                                     |
| width        | `number` \| `string`              | 列宽度                                                                             |
| multiple     | `boolean`                         | 是否允许多选                                                                       |

### ColumnItemOption

下拉框选项

| 属性名 | 类型                 | 描述     |
| ------ | -------------------- | -------- |
| label  | `string`             | 标签文本 |
| value  | `string` \| `number` | 值       |

### ColumnCustomRenderProps

列表项自定义渲染属性

| 属性名   | 类型                   | 描述           |
| -------- | ---------------------- | -------------- |
| item     | `T`                    | 当前项数据     |
| value    | `any`                  | 当前值         |
| onChange | `(value: any) => void` | 值变化回调函数 |
| column   | `ColumnItem<T>`        | 对应列信息     |
| style    | `CSSProperties`        | 样式           |
| index    | `number`               | 索引           |
