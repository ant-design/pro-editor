---
title: FieldIcon 字段图标
group: 基础组件
---

# FieldIcon 字段图标

为不同的字段类型配置字段图标。

## 何时使用

字段选择的图标获取。

## 代码演示

### 字段图标列表

<code src="./demos/basic.tsx" ></code>

## API

| 参数 | 说明     | 类型             | 默认值 |
| :--- | :------- | :--------------- | :----- |
| type | 字段类型 | 参考字段类型枚举 | -      |

### APIFieldType 字段类型枚举

`@alipay/studio-oneapi-sdk` 中导出了 API 字段类型的枚举，你可以这样使用：

```tsx | pure
import { APIFieldType } from '@alipay/studio-oneapi-sdk';

<FieldIcon type={APIFieldType.any} />;
```

| 类型           | 字段说明     |
| :------------- | :----------- |
| `integer`      | 整数         |
| `number`       | 数字         |
| `bool`         | 布尔值       |
| `string`       | 字符串       |
| `integerArray` | 整数数组     |
| `numberArray`  | 数字数组     |
| `stringArray`  | 字符串数组   |
| `boolArray`    | 布尔值数组   |
| `any`          | 任意类型     |
| `anyArray`     | 任意类型数组 |
| `object`       | 对象         |
| `objectArray`  | 对象数组     |
| `array`        | 数组         |
