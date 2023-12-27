---
title: FieldSelect 字段选择器
group: 基础组件
---

# FieldSelect 字段选择器

## 何时使用

扩展普通选择器，当要选择的是字段时，加上字段类型。

## 代码演示

### 普通使用

<code src="./demos/basic.tsx" ></code>

### 关闭自定义输入

你可以将 `showCustomField` 设置为 False 来关闭自定义输入的能力

<code src="./demos/custom.tsx" ></code>

## API

> 其他属性参考 antd `Select` 组件。

| 参数              | 说明          | 类型                        | 默认值  |
| :-------------- | :---------- | :------------------------ | :--- |
| options         | 选项值         | 参考`FieldSelectOptionType` | -    |
| onChange        | 回调          | (value: string) => void   | -    |
| value           | 值           | string                    | -    |
| showCustomField | 是否使用自定义输入能力 | boolean                   | true |

### FieldSelectOptionType 选项类型

| 参数          | 说明   | 类型                | 默认值 |
| :---------- | :--- | :---------------- | :-- |
| type        | 字段类型 | 参考字段类型枚举          | -   |
| label       | 字段名  | `React.ReactNode` | -   |
| description | 字段描述 | `React.ReactNode` | -   |
| value       | 字段标识 | string            | -   |
