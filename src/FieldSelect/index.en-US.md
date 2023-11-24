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

## API

> Other attributes refer to antd `Select` component.

| Property | Description | Type                             | Default |
| :------- | :---------- | :------------------------------- | :------ |
| options  | Options     | Refer to `FieldSelectOptionType` | -       |
| onChange | Callback    | (value: string) => void          | -       |
| value    | Value       | string                           | -       |

### FieldSelectOptionType Option Type

| Property    | Description       | Type                            | Default |
| :---------- | :---------------- | :------------------------------ | :------ |
| type        | Field type        | Refer to field type enumeration | -       |
| label       | Field name        | `React.ReactNode`               | -       |
| description | Field description | `React.ReactNode`               | -       |
| value       | Field identifier  | string                          | -       |
