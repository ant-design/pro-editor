---
title: 快速开始
#group: 基础框架

nav:
  title: 文档
  order: 1
---

# 快速开始

ProEditor 定位轻量级编辑器 UI 框架，期望为「编辑」场景提供丰富、易用的基础组件与原子能力。

## 安装

```bash
# @ant-design/pro-editor 基于 antd 和 antd-style，需要在项目中安装
$ npm install antd antd-style -S
$ npm install @ant-design/pro-editor -S
```

### 使用组件

ProEditor 提供了一系列针对「编辑」场景优化的组件，包括但不限于 「SortableList」、「SortableTree」、「DraggablePanel」、「Highlight」、「ContextMenu」等。完整的组件文档详见： [基础组件](/components/action-icon)

以下则是一个典型的数组对象编辑场景，我们提供的 ColumnList 可以帮助开发者快速实现一个高质量的数组编辑组件。

<code src="./demos/ColumnList/index.tsx" ></code>

### 组件装配器

ProEditor 最初的定位是作为组件的可视化配置框架。因此在 ProEditor 中提供了一系列便于可视化组件装配的容器与原子组件，帮助开发者快速实现一个可视化配置的组件。

详见：[ProEditor 装配器容器](/pro-editor)

### 🚧 使用原子化能力

> Working in Progress

ProEditor 将会提供编辑场景需要的各类原子化能力，包括但不限于「撤销重做」、「实时协同」、「键盘快捷键」、「选择能力」等。

当前该部分能力仍处于高速开发中，敬请期待。

## 与框架集成

### 与 Umi 集成

在中后台的研发场景， umi 是一个非常不错的选择。ProEditor 与 umi 的集成非常容易。安装后直接使用即可。

### 与 Next.js 集成

[Next.js](https://nextjs.org/) 是社区中非常流行的研发框架。ProEditor 与 Next.js 的集成也非常容易。

由于 Next.js 是一个 CSR、SSR 同构的 React 框架，而 ProEditor 默认只提供 esm 模块，因此在安装后，需要在 `next.config.(m)js` 中 `transpilePackages` 中加入相关依赖：

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // 将纯 esm 模块转为 node 兼容模块
  transpilePackages: ['@ant-design/pro-editor', 'leva'], // leva 为 ProEditor 依赖模块
};
```

接下来和其他组件一样使用即可。

## 工程化能力

### 按需加载

ProEditor 默认支持基于 ES modules 的 tree shaking，直接引入 `import { ActionIcon } from '@ant-design/pro-editor`; 就会有按需加载的效果。

### TypeScript

ProEditor 使用 TypeScript 进行开发，因此提供了完整的类型定义。
