---
title: LevaPanel
atomId: LevaPanel
group: Panel
---

# LevaPanel Property Panel

## When to use

Based on [Leva](https://leva.pmnd.rs/), it generates a panel module according to JsonSchema.

## Code Example

### Basic Usage

<code src="./demos/button.tsx" compact></code>

## API

| Property     | Type                                                 | Description                             |
| ------------ | ---------------------------------------------------- | --------------------------------------- |
| schema       | `JSONSchema\<T\>`                                    | JSON Schema configuration               |
| defaultValue | `T \| undefined`                                     | Default value for the form              |
| value        | `T \| undefined`                                     | Current value of the form               |
| onChange     | `(changedValue: Partial\<T\>, fullValue: T) => void` | Callback function for form value change |
| title        | `ReactNode`                                          | Title                                   |

## JSONSchema

| Property    | Type                                                | Description                                                                |
| ----------- | --------------------------------------------------- | -------------------------------------------------------------------------- |
| type        | `'string'` \| `'boolean'` \| `'number'` \| `object` | Type of form                                                               |
| title       | `string`                                            | Form label                                                                 |
| default     | `any`                                               | Default value for the form                                                 |
| enum        | `string[]`                                          | Option values                                                              |
| enumNames   | `string[]`                                          | Option description values, used in conjunction with `enum`                 |
| enumOptions | `{label: string, value: string}[]`                  | Option description list, with the same function as `enums` and `enumNames` |
| properties  | `object`                                            | Property configuration, used when type is `object`                         |

Example `schema` reference:

```json
/**
 * Button Schema
 */
export const buttonSchema: JSONSchema<ButtonConfig> = {
  type: 'object',
  properties: {
    children: {
      type: 'string',
      title: 'Button Text',
    },
    type: {
      type: 'string',
      title: 'Type',
      default: 'default',
      enum: ['primary', 'default', 'dashed', 'link', 'text'],
      enumNames: ['Primary', 'Default', 'Dashed', 'Link', 'Text'],
    },
    danger: {
      type: 'boolean',
      title: 'Dangerous State',
      default: false,
    },
    icon: {
      type: 'string',
      title: 'Icon',
      default: '',
    },
    size: {
      title: 'Size',
      type: 'string',
      enum: ['large', 'middle', 'small'],
      enumNames: ['Large', 'Middle', 'Small'],
      default: 'middle',
    },
    shape: {
      title: 'Shape',
      type: 'string',
      enumOptions: [
        {
          label: 'Default',
        },
        {
          label: 'Circular',
          value: 'circle',
        },
        {
          label: 'Capsule',
          value: 'round',
        },
      ],
    },
    loading: {
      type: 'boolean',
      title: 'Loading',
      default: false,
    },
    disabled: {
      type: 'boolean',
      title: 'Disabled',
      default: false,
    },
    ghost: {
      type: 'boolean',
      title: 'Ghost Button',
      default: false,
    },
  },
};

```
