---
title: Quick Start
group:
  title: Quick Start
  order: 1
nav:
  title: Document
  order: 1
---

# Quick Start

ProEditor is positioned as an editor UI framework, aiming to provide rich and easy-to-use basic components and atomic capabilities for the "editing" scenario.

## Installation

```bash
# @ant-design/pro-editor is based on antd and antd-style, and needs to be installed in the project
$ npm install antd antd-style -S
$ npm install @ant-design/pro-editor -S
```

### Using Components

ProEditor provides a series of components optimized for the "editing" scenario, including but not limited to "SortableList", "SortableTree", "DraggablePanel", "Highlight", "ContextMenu", etc. For the complete component documentation, please refer to: [Basic Components](/components/action-icon)

Below is a typical array object editing scenario. Our provided ColumnList can help developers quickly implement a high-quality array editing component.

<code src="./demos/ColumnList/index.tsx" ></code>

### Component Assembler

ProEditor was initially positioned as a visual configuration framework for components. Therefore, ProEditor provides a series of containers and atomic components for visual component assembly, helping developers quickly implement a visual configuration component.

See: [ProEditor Assembler Container](/pro-editor)

### 🚧 Using Atomic Capabilities

> Working in Progress

ProEditor will provide various atomic capabilities required for editing scenarios, including but not limited to "undo/redo", "real-time collaboration", "keyboard shortcuts", "selection capabilities", etc.

This part of the capability is still under rapid development, so stay tuned.

## Integration with Frameworks

### Integration with Umi

In the development scenario of the middle and back office, Umi is a very good choice. Integrating ProEditor with Umi is very easy. After installation, you can use it directly.

### Integration with Next.js

[Next.js](https://nextjs.org/) is a very popular development framework in the community. Integrating ProEditor with Next.js is also very easy.

Since Next.js is a CSR/SSR isomorphic React framework, and ProEditor only provides esm modules by default, after installation, you need to add relevant dependencies to `transpilePackages` in `next.config.(m)js`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Convert pure esm modules to node-compatible modules
  transpilePackages: ['@ant-design/pro-editor'], // leva is a ProEditor dependency module
};
```

Then you can use it just like any other component.

## Engineering Capabilities

### On-Demand Loading

ProEditor supports tree shaking based on ES modules by default. Simply import `import { ActionIcon } from '@ant-design/pro-editor`; to achieve on-demand loading.

### TypeScript

ProEditor is developed using TypeScript, so it provides complete type definitions.
