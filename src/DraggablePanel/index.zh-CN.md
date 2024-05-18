---
title: DraggablePanel 可拖拽悬浮面板
atomId: DraggablePanel
group: 面板模块
---

# DraggablePanel 可拖拽悬浮面板

需要拉伸或者拖拽移动的面板时使用。

## 代码演示

<code src="./demos/basic.tsx"  compact="true" title="右侧面板固定"  description="默认右侧面板固定，左右拖动"></code>

<code src="./demos/left.tsx" title="左侧面板固定" description="左侧面板固定，左右拖动"></code>

<code src="./demos/bottom.tsx" title="底部面板固定" description="底部面板固定，上下拖动"></code>

<code src="./demos/top.tsx" title="顶部面板固定" description="顶部面板固定，上下拖动"></code>

<code src="./demos/controlFixed.tsx" title="面板展开受控" description="右侧面板固定，展开状态受控模式"></code>

<code src="./demos/float.tsx" compact="true" title="悬浮可拖拽面板" description="设置 `mode` 为 `float`"></code>

<code src="./demos/controlFloat.tsx" compact="true" title="悬浮受控模式" description="悬浮框位置受控"></code>

## API

| 属性名           | 类型                                       | 默认值       | 描述                                     |
| ---------------- | ------------------------------------------ | ------------ | ---------------------------------------- |
| mode             | `'fixed' \| 'float'`                       | `'fixed'`    | 面板的位置模式，使用固定模式或者浮动窗口 |
| placement        | `'right' \| 'left' \| 'top' \| 'bottom'`   | `'right'`    | 固定模式下面板的朝向，默认放置在右侧     |
| minWidth         | `number`                                   |              | 面板的最小宽度                           |
| minHeight        | `number`                                   |              | 面板的最小高度                           |
| maxWidth         | `number`                                   |              | 面板的最大宽度                           |
| maxHeight        | `number`                                   |              | 面板的最大高度                           |
| resize           | `RndProps['enableResizing']`               |              | 控制可缩放区域                           |
| size             | `Partial<Size>`                            |              | 面板尺寸                                 |
| onSizeChange     | `(delta: NumberSize, size?: Size) => void` |              | 面板尺寸变更回调                         |
| onSizeDragging   | `(delta: NumberSize, size?: Size) => void` |              | 面板尺寸拖拽过程中的回调                 |
| expandable       | `boolean`                                  | `true`       | 是否可展开                               |
| isExpand         | `boolean`                                  |              | 当前是否为展开状态                       |
| onExpandChange   | `(expand: boolean) => void`                |              | 展开状态变更回调                         |
| position         | `RndProps['position']`                     |              | 面板位置，受控模式                       |
| defaultSize      | `Partial<Size>`                            |              | 面板默认尺寸                             |
| defaultPosition  | `RndProps['position']`                     | `[100, 100]` | 面板默认位置，悬浮模式下有效             |
| onPositionChange | `(position: RndProps['position']) => void` |              | 面板位置变更回调                         |
| children         | `ReactNode`                                |              | 面板内容                                 |
