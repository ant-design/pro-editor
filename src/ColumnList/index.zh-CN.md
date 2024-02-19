---
title: ColumnList 列编辑列表
atomId: ColumnList
group: 可排序组件
order: 3
demo:
  cols: 2
---

# ColumnList 列编辑列表

根据 `schema` 自动生成简单的排序列表。

## 代码演示

<code src="./demos/normal.tsx"  title="基础使用"
 description="通过配置 `columns` 渲染排序表单"></code>
<code src="./demos/creatorButtonPropsFalse.tsx" title="关闭添加能力"
 description="可通过 `creatorButtonProps={false}` 来关闭添加功能，包括添加一行按钮，回车添加以及空状态添加"></code>
<code src="./demos/column.tsx"  title="自定义表单"
description="目前支持 `input` 和 `select`, `custom` 三种表单类型."></code>
<code src="./demos/controlled.tsx"  title="受控模式"
description="表单可通过 `value` 受控"></code>
<code src="./demos/actions.tsx" title="自定义操作"
 description="可以通过 `actions` 属性自定义操作列"></code>
<code src="./demos/creatorButtonProps.tsx"  title="自定义初始化"
 description="可通过 `creatorButtonProps` 来自定义初始化逻辑"></code>
<code src="./demos/customCreate.tsx"  title="自定义创建逻辑"
 description="你可以设置 `style` 属性来隐藏默认添加按钮，然后自定义创建按钮"></code>
<code src="./demos/empty.tsx" title="空状态"
description="当表单值为空时，会渲染空状态"></code>

## API

提供封装的 `columns` 配置，其他属性参考 `SortableList`

| 属性名  | 类型           | 描述     |
| ------- | -------------- | -------- |
| columns | `ColumnItem[]` | 列配置项 |

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
| item     | `any`                  | 当前项数据     |
| value    | `any`                  | 当前值         |
| onChange | `(value: any) => void` | 值变化回调函数 |
| column   | `ColumnItem<T>`        | 对应列信息     |
| style    | `CSSProperties`        | 样式           |
| index    | `number`               | 索引           |
