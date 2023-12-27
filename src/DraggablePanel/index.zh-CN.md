---
title: DraggablePanel 可拖拽悬浮面板
atomId: DraggablePanel
group: 基础组件
---

# DraggablePanel 可拖拽悬浮面板

## 何时使用

需要拉伸或者拖拽移动的面板时使用。

## 固定面板

### 右侧面板（默认）

可左右缩放

<code src="./demos/basic.tsx"  compact="true" ></code>

### 左侧面板

<code src="./demos/left.tsx"></code>

### 底部面板

<code src="./demos/bottom.tsx"></code>

### 顶部面板

<code src="./demos/top.tsx"></code>

## 悬浮可拖拽面板

<code src="./demos/float.tsx" compact="true" ></code>

### 悬浮受控模式

<code src="./demos/controlFloat.tsx" compact="true"  ></code>

## API

| 属性名              | 类型                                         | 默认值          | 描述                   |
| ---------------- | ------------------------------------------ | ------------ | -------------------- |
| mode             | `'fixed' \| 'float'`                       | `'fixed'`    | 面板的位置模式，使用固定模式或者浮动窗口 |
| placement        | `'right' \| 'left' \| 'top' \| 'bottom'`   | `'right'`    | 固定模式下面板的朝向，默认放置在右侧   |
| minWidth         | `number`                                   |              | 面板的最小宽度              |
| minHeight        | `number`                                   |              | 面板的最小高度              |
| maxWidth         | `number`                                   |              | 面板的最大宽度              |
| maxHeight        | `number`                                   |              | 面板的最大高度              |
| resize           | `RndProps['enableResizing']`               |              | 控制可缩放区域              |
| size             | `Partial<Size>`                            |              | 面板尺寸                 |
| onSizeChange     | `(delta: NumberSize, size?: Size) => void` |              | 面板尺寸变更回调             |
| onSizeDragging   | `(delta: NumberSize, size?: Size) => void` |              | 面板尺寸拖拽过程中的回调         |
| expandable       | `boolean`                                  | `true`       | 是否可展开                |
| isExpand         | `boolean`                                  |              | 当前是否为展开状态            |
| onExpandChange   | `(expand: boolean) => void`                |              | 展开状态变更回调             |
| position         | `RndProps['position']`                     |              | 面板位置，受控模式            |
| defaultSize      | `Partial<Size>`                            |              | 面板默认尺寸               |
| defaultPosition  | `RndProps['position']`                     | `[100, 100]` | 面板默认位置，悬浮模式下有效       |
| onPositionChange | `(position: RndProps['position']) => void` |              | 面板位置变更回调             |
| children         | `ReactNode`                                |              | 面板内容                 |
