---
title: SortableList 可排序列表
group:
  title: 可排序组件
  order: 1
---

# SortableList 可排序列表

根据 `schema` 自动生成简单的排序表单。

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

## API

> SortableList 组件由 antd FormList 选择器组件封装而来。

### SortableList

| 参数               | 说明                                                     | 类型                                                                     | 默认值 | 版本 |
| :----------------- | :------------------------------------------------------- | :----------------------------------------------------------------------- | :----- | :--- |
| initialValues      | 初始选择项                                               | `Column[]`                                                               | []     | -    |
| value              | 指定当前选择项                                           | `Column[]`                                                               | []     | -    |
| onChange           | 值变化时的回调                                           | `(value) => void`                                                        | -      | -    |
| fields             | 列表字段值                                               | `Field[]`                                                                | -      | -    |
| creatorButtonProps | 新建按钮相关属性                                         | 见下方 `新建按钮相关属性` \| `false`                                     | -      | -    |
| actions            | 自定义操作按钮，强烈建议使用 `ActionIcon` 与组件保持一致 | `((field: T, index: number) => React.ReactNode[]) \| React.ReactNode[];` | []     | -    |

### 新建按钮相关属性

| 参数              | 说明           | 类型                        | 默认值     | 版本 |
| :---------------- | :------------- | :-------------------------- | :--------- | :--- |
| record            | 初始化对象     | `object` \| `(index) => {}` | -          | -    |
| creatorButtonText | 初始化按钮文案 | string                      | `添加一列` | -    |

### Column 表格栏的配置值

| 参数         | 说明                                   | 类型               | 默认值 | 版本 |
| :----------- | :------------------------------------- | :----------------- | :----- | :--- |
| title        | 字段标题                               | string             | -      | -    |
| type         | 字段类型                               | 'input'\|'select'  | -      | -    |
| dataIndex    | 字段索引                               | string             | -      | -    |
| options      | 字段选项配置，类型为`select`时需要提供 | `[{label, value}]` | []     | -    |
| placeholder  | 字段提示                               | string             | -      | -    |
| initialValue | 字段初始值                             | string             | -      | -    |
