---
title: DataFill 数据填充
atomId: DataFill
group: 面板模块
---

# DataFill 数据填充

## 何时使用

数据填充词典，需要快速获取 Mock 数据时使用。

## 代码演示

### 基础使用

<code src="./demos/basic" ></code>

## API

| 参数    | 说明     | 类型                                | 默认值 |
| :------ | :------- | :---------------------------------- | :----- |
| onClick | 点击回调 | `{payload: FilledPayload } => void` | -      |

### FilledPayload

| 参数   | 说明                                 | 类型           | 默认值 |
| :----- | :----------------------------------- | :------------- | :----- |
| key    | 选中数据类型的 key, 键值见 KeyMap    | `string`       | -      |
| filler | 过滤函数，返回对应数据类型的 Mock 值 | `() => string` | -      |

### KeyMap

```javascript
const FILL_KEY_MAP = {
  // 通用
  common: [
    // 人名
    'name',
    // 网址
    'website',
    // 邮件
    'mail',
  ] as const,
  // 编号
  identifier: [
    // 订单号
    'order',
    // 手机号
    'phone',
    // 座机
    'landline',
    // 身份证
    'idCard',
    // 银行卡
    'bankCard',
  ] as const,
  // 数据
  data: ['percent', 'money'] as const,
  /**
   * 时间
   */
  dateTime: ['date', 'dateTime', 'week', 'month', 'time', 'timestamp'] as const,
  // 地址
  address: [
    // 国家
    'country',
    // 省份
    'province',
    // 城市
    'city',
  ] as const,
};
```
