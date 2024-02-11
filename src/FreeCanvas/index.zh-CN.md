---
title: FreeCanvas 自由画布
atomId: FreeCanvas
group: 面板模块
---

# FreeCanvas 自由画布

基于 `ReactFlow` 的自由画布封装

## 代码演示

<code src='./demos/basic.tsx' ></code>

## API

### 基础属性

| 属性名           | 类型                           | 描述                 |
| ---------------- | ------------------------------ | -------------------- |
| children         | `ReactNode`                    | 自由画布组件的子元素 |
| viewport         | `Viewport`                     | 视口的初始值         |
| defaultViewport  | `Viewport`                     | 视口的默认值         |
| control          | `boolean`                      | 是否显示控制面板     |
| onViewportChange | `(viewport: Viewport) => void` | 视口变化时的回调函数 |
| extraControlBtns | `React.ReactNode[]`            | 额外控制按钮         |

### Viewport

Viewport 对象表示一个视图的坐标系，包含以下属性：

| 属性 | 类型   | 描述                |
| ---- | ------ | ------------------- |
| x    | number | 视口左上角的 x 坐标 |
| y    | number | 视口左上角的 y 坐标 |
| zoom | number | 视口的缩放比例      |
