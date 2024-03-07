---
title: NextJs
group:
  title: Framework Usage
  order: 5
---

## Integration with Next.js

[Next.js](https://nextjs.org/) is a very popular development framework in the community, and integrating ProEditor with Next.js is very easy.

```bash
npx create-next-app@latest
```

### Dependency Installation

```bash
npm install @ant-design/pro-editor --save
or
pnpm install @ant-design/pro-editor
```

Since Next.js is a CSR/SSR isomorphic React framework, and ProChat only provides esm modules by default, after installation, you need to add relevant dependencies to `transpilePackages` in `next.config.(m)js`:

> In the latest version of NextJS 14 AppRoute, this configuration is no longer needed

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Convert pure esm modules to node-compatible modules
  transpilePackages: ['@ant-design/pro-editor'],
};
```

### Usage

Taking the `SortableList` component as an example, if it is a project created by the default scaffolding, you can simply write the following code in `page.js|tsx` to see it in action.

```js
'use client';
import type { ColumnItemList } from '@ant-design/pro-editor';
import { ColumnList } from '@ant-design/pro-editor';
import { useState } from 'react';

const tableColumnValueOptions = [
  // ... (omitted for brevity)
];

type SchemaItem = {
  title: string,
  valueType: string,
  dataIndex: string,
};

const INIT_VALUES = [
  // ... (omitted for brevity)
];

const columns: ColumnItemList<SchemaItem> = [
  // ... (omitted for brevity)
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
