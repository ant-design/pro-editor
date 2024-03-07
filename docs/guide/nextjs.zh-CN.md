---
title: NextJs
group:
  title: 框架使用
  order: 5
---

## 与 Next.js 集成

[Next.js](https://nextjs.org/) 是社区中非常流行的研发框架，ProEditor 与 Next.js 的集成非常容易。

```bash
npx create-next-app@latest
```

### 依赖安装

```bash
npm install @ant-design/pro-editor --save
or
pnpm install @ant-design/pro-editor
```

由于 Next.js 是一个 CSR、SSR 同构的 React 框架，而 ProChat 默认只提供 esm 模块，因此在安装后，需要在 `next.config.(m)js` 中 `transpilePackages` 中加入相关依赖：

> 在最新版本 NextJS 14 AppRoute 中可以不需要配置了

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // 将纯 esm 模块转为 node 兼容模块
  transpilePackages: ['@ant-design/pro-editor'],
};
```

### 使用

以 `SortableList` 组件为例，如果是默认脚手架创建出来的项目中，直接在 `page.js|tsx` 中写下如下代码就可以看到了。

```js
'use client';
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
