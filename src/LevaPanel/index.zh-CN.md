---
title: LevaPanel 属性面板
atomId: LevaPanel
group:
  title: 面板模块
  order: 1
---

# LevaPanel 属性面板

## 何时使用

基于 [Leva](https://leva.pmnd.rs/) 根据 JsonSchema 生成面板模块。

## 代码演示

### 基本使用

<code src="./demos/button.tsx" compact></code>

## API

| 属性名          | 类型                                                   | 描述              |
| ------------ | ---------------------------------------------------- | --------------- |
| schema       | `JSONSchema\<T\>`                                    | JSON Schema 配置项 |
| defaultValue | `T \| undefined`                                     | 表单默认值           |
| value        | `T \| undefined`                                     | 表单当前值           |
| onChange     | `(changedValue: Partial\<T\>, fullValue: T) => void` | 表单值变化的回调函数      |
| title        | `ReactNode`                                          | 标题              |

## JSONSchema

| 属性名         | 类型                                                  | 描述                               |
| ----------- | --------------------------------------------------- | -------------------------------- |
| type        | `'string'` \| `'boolean'` \| `'number'` \| `object` | 表单类型                             |
| title       | `string`                                            | 表单标签                             |
| default     | `any`                                               | 表单默认值                            |
| enum        | `string[]`                                          | 选项值                              |
| enumNames   | `string[]`                                          | 选项描述值，配合 `enum` 使用               |
| enumOptions | `{label: string, value: string}[]`                  | 选项描述列表，与 `enums`和`enumNames`作用一致 |
| properties  | `object`                                            | 属性配置项，类型为 `object` 使用            |

示例 `schema`参考:

```json
/**
 * 按钮 Schema
 */
export const buttonSchema: JSONSchema<ButtonConfig> = {
  type: 'object',
  properties: {
    children: {
      type: 'string',
      title: '按钮文本',
    },
    type: {
      type: 'string',
      title: '类型',
      default: 'default',
      enum: ['primary', 'default', 'dashed', 'link', 'text'],
      enumNames: ['强调', '默认', '虚线', '链接', '文本'],
    },
    danger: {
      type: 'boolean',
      title: '危险态',
      default: false,
    },
    icon: {
      type: 'string',
      title: '图标',
      default: '',
    },
    size: {
      title: '大小',
      type: 'string',
      enum: ['large', 'middle', 'small'],
      enumNames: ['大', '中', '小'],
      default: 'middle',
    },
    shape: {
      title: '形状',
      type: 'string',
      enumOptions: [
        {
          label: '默认',
        },
        {
          label: '圆形',
          value: 'circle',
        },
        {
          label: '胶囊',
          value: 'round',
        },
      ],
    },
    loading: {
      type: 'boolean',
      title: '加载中',
      default: false,
    },
    disabled: {
      type: 'boolean',
      title: '禁用',
      default: false,
    },
    ghost: {
      type: 'boolean',
      title: '幽灵按钮',
      default: false,
    },
  },
};

```
