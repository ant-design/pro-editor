---
title: Umi
group:
  title: 框架使用
  order: 5
---

## 与 Umi 集成

在中后台的研发场景， [umi](https://umijs.org/) 是一个非常不错的选择。`ProEditor` 与 `umi` 的集成非常容易。安装后直接使用即可。

```bash
npx create-umi@latest
or
yarn create umi
pnpm dlx create-umi@latest
```

### 依赖安装

创建好后

```bash
npm install @ant-design/pro-editor --save
or
pnpm install @ant-design/pro-editor
```

### 使用

```js
import type { ColumnItemList } from '@ant-design/pro-editor';
import { ColumnList } from '@ant-design/pro-editor';
import { useState } from 'react';

const tableColumnValueOptions = [
  { label: 'index', value: 'index' },
  { label: 'indexBorder', value: 'indexBorder' },
  { label: 'digit', value: 'digit' },
  { label: 'password', value: 'password' },
  { label: 'money', value: 'money' },
  { label: 'text', value: 'text' },
  { label: 'textarea', value: 'textarea' },
  { label: 'date', value: 'date' },
  { label: 'option', value: 'option' },
  { label: 'dateTime', value: 'dateTime' },
  { label: 'dateWeek', value: 'dateWeek' },
  { label: 'dateMonth', value: 'dateMonth' },
  { label: 'dateQuarter', value: 'dateQuarter' },
  { label: 'dateYear', value: 'dateYear' },
  { label: 'dateRange', value: 'dateRange' },
  { label: 'dateTimeRange', value: 'dateTimeRange' },
  { label: 'time', value: 'time' },
  { label: 'timeRange', value: 'timeRange' },
  { label: 'select', value: 'select' },
  { label: 'checkbox', value: 'checkbox' },
  { label: 'rate', value: 'rate' },
  { label: 'radio', value: 'radio' },
  { label: 'radioButton', value: 'radioButton' },
  { label: 'progress', value: 'progress' },
  { label: 'percent', value: 'percent' },
  { label: 'second', value: 'second' },
  { label: 'avatar', value: 'avatar' },
  { label: 'code', value: 'code' },
  { label: 'switch', value: 'switch' },
  { label: 'fromNow', value: 'fromNow' },
  { label: 'image', value: 'image' },
  { label: 'jsonCode', value: 'jsonCode' },
  { label: 'color', value: 'color' },
];

type SchemaItem = {
  title: string,
  valueType: string,
  dataIndex: string,
};

const INIT_VALUES = [
  { title: 'Index', valueType: 'indexBorder', dataIndex: 'index' },
  {
    title: 'Enterprise',
    valueType: 'text',
    dataIndex: 'name',
  },
  { title: 'Company', valueType: 'text', dataIndex: 'authCompany' },
];

const columns: ColumnItemList<SchemaItem> = [
  {
    title: 'Title',
    dataIndex: 'title',
    type: 'input',
  },
  {
    title: 'ValueType',
    dataIndex: 'valueType',
    type: 'select',
    options: tableColumnValueOptions,
  },
  {
    title: 'DataIndex',
    dataIndex: 'dataIndex',
    type: 'select',
  },
];

export default () => {
  const [value, setValue] = useState(INIT_VALUES);

  return (
    <ColumnList
      columns={columns}
      value={value}
      onChange={(values) => {
        setValue(values);
        console.log('onChange', values);
      }}
    />
  );
};
```
