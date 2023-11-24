---
title: FieldIcon
group: Basic
---

# FieldIcon Field Icon

Configure field icons for different field types.

## When To Use

Obtain icons for field selection.

## Code Example

### Field Icon List

<code src="./demos/basic.tsx" ></code>

## API

| Parameter | Description | Type                                | Default |
| :-------- | :---------- | :---------------------------------- | :------ |
| type      | Field type  | Reference to field type enumeration | -       |

### APIFieldType Field Type Enumeration

| Type           | Field Description |
| :------------- | :---------------- |
| `integer`      | Integer           |
| `number`       | Number            |
| `bool`         | Boolean           |
| `string`       | String            |
| `integerArray` | Integer Array     |
| `numberArray`  | Number Array      |
| `stringArray`  | String Array      |
| `boolArray`    | Boolean Array     |
| `any`          | Any type          |
| `anyArray`     | Any type Array    |
| `object`       | Object            |
| `objectArray`  | Object Array      |
| `array`        | Array             |
