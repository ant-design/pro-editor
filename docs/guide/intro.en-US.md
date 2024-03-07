---
title: Quick Start
group:
  title: Getting Started Quickly
  order: 1
nav:
  title: Documentation
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

ProEditor provides a series of components optimized for the "editing" scenario, including but not limited to "SortableList", "SortableTree", "DraggablePanel", "Highlight", "ContextMenu", and more. For complete component documentation, please refer to: [Basic Components](/components/action-icon)

Below is a typical array object editing scenario. Our provided ColumnList can help developers quickly implement a high-quality array editing component.

<code src="./demos/ColumnList/index.tsx" ></code>

### Component Assembler

Initially, ProEditor was positioned as a visual configuration framework for components. Therefore, ProEditor provides a series of containers and atomic components for visual component assembly, helping developers quickly implement a visual configuration component.

See: [ProEditor Assembler Container](/pro-editor)

## Engineering Capabilities

### On-Demand Loading

ProEditor supports tree shaking based on ES modules by default. Directly importing `import { ActionIcon } from '@ant-design/pro-editor';` will achieve on-demand loading.

### TypeScript

ProEditor is developed using TypeScript, thus providing complete type definitions.
