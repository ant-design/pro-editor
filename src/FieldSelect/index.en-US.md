---
title: FieldSelect
group: Basic
---

# FieldSelect Field Selector

## When to use

Extend the common selector, when selecting a field, add the field type.

## Code Demo

### Basic Usage

<code src="./demos/basic.tsx" ></code>

### Turn off custom input

You can turn off the ability to customize input by setting `showCustomField` to False

<code src="./demos/custom.tsx" ></code>

## API

> Other attributes refer to antd `Select` component.

| Property        | Description                              | Type                             | Default |
| :-------------- | :--------------------------------------- | :------------------------------- | :------ |
| options         | Options                                  | Refer to `FieldSelectOptionType` | -       |
| onChange        | Callback                                 | (value: string) => void          | -       |
| value           | Value                                    | string                           | -       |
| showCustomField | Whether to use custom input capabilities | boolean                          | true    |

### FieldSelectOptionType Option Type

| Property    | Description       | Type                            | Default |
| :---------- | :---------------- | :------------------------------ | :------ |
| type        | Field type        | Refer to field type enumeration | -       |
| label       | Field name        | `React.ReactNode`               | -       |
| description | Field description | `React.ReactNode`               | -       |
| value       | Field identifier  | string                          | -       |
