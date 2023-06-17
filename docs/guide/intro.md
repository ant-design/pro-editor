---
title: 快速开始
#group: 基础框架

nav:
  title: 文档
  order: 1
---

# 快速开始

ProEditor 是 TechUI Studio 系列装配器的底座框架，期望为「编辑」场景提供丰富、易用的基础组件与原子能力。

## 安装

```bash
npm install @ant-design/pro-editor -S
```

### 使用组件

ProEditor 提供了一系列针对「编辑」场景优化的组件，包括但不限于 「SortableList」、「SortableTree」、「DraggablePanel」、「Highlight」、「ContextMenu」等。完整的组件文档详见： [基础组件](/components/action-icon)

以下则是一个典型的数组对象编辑场景，我们提供的 ColumnList 可以帮助开发者以很低的成本快速实现一个高质量的数组编辑组件。

<code src="./demos/ColumnList/index.tsx" ></code>

### 🚧 使用原子化能力

> Working in Progress

ProEditor 将会提供编辑场景需要的各类原子化能力，包括但不限于「撤销重做」、「多人协同」、「键盘快捷键」、「选择能力」。

当前该部分能力仍处于高速开发中，敬请期待。

### 组件装配器

ProEditor 最初的定位是作为组件的可视化配置框架。因此在 ProEditor 中提供了一系列便于可视化组件装配的容器与原子组件，帮助开发者快速实现一个可视化配置的组件。

## 工程化能力

### 按需加载

ProEditor 默认支持基于 ES modules 的 tree shaking，直接引入 `import { ActionIcon } from '@ant-design/pro-editor`; 就会有按需加载的效果。

### TypeScript

ProEditor 使用 TypeScript 进行开发，因此提供了完整的类型定义。
