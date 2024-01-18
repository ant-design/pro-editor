---
title: DraggablePanel
group: Basic
---

# Draggable Floating Panel

## When to use

Use when you need a panel that can be stretched or dragged.

## Fixed Panel

### Right Panel (Default)

Resizable from left to right

<code src="./demos/basic.tsx"  compact="true" ></code>

### Left Panel

<code src="./demos/left.tsx"></code>

### Bottom Panel

<code src="./demos/bottom.tsx"></code>

### Top Panel

<code src="./demos/top.tsx"></code>

## Floating Draggable Panel

<code src="./demos/float.tsx" compact="true" ></code>

### Floating Controlled Mode

<code src="./demos/controlFloat.tsx" compact="true"  ></code>

## API

| Property         | Type                                       | Default      | Description                                                                   |
| ---------------- | ------------------------------------------ | ------------ | ----------------------------------------------------------------------------- |
| mode             | `'fixed' \| 'float'`                       | `'fixed'`    | The position mode of the panel, using fixed mode or floating window           |
| placement        | `'right' \| 'left' \| 'top' \| 'bottom'`   | `'right'`    | The orientation of the panel in fixed mode, default placement is on the right |
| minWidth         | `number`                                   |              | The minimum width of the panel                                                |
| minHeight        | `number`                                   |              | The minimum height of the panel                                               |
| maxWidth         | `number`                                   |              | The maximum width of the panel                                                |
| maxHeight        | `number`                                   |              | The maximum height of the panel                                               |
| resize           | `RndProps['enableResizing']`               |              | Control the resizable area                                                    |
| size             | `Partial<Size>`                            |              | Panel size                                                                    |
| onSizeChange     | `(delta: NumberSize, size?: Size) => void` |              | Callback for panel size change                                                |
| onSizeDragging   | `(delta: NumberSize, size?: Size) => void` |              | Callback during panel size dragging                                           |
| expandable       | `boolean`                                  | `true`       | Whether it can be expanded                                                    |
| isExpand         | `boolean`                                  |              | Current expansion state                                                       |
| onExpandChange   | `(expand: boolean) => void`                |              | Callback for expansion state change                                           |
| position         | `RndProps['position']`                     |              | Panel position, controlled mode                                               |
| defaultSize      | `Partial<Size>`                            |              | Default panel size                                                            |
| defaultPosition  | `RndProps['position']`                     | `[100, 100]` | Default panel position, valid in floating mode                                |
| onPositionChange | `(position: RndProps['position']) => void` |              | Callback for panel position change                                            |
| children         | `ReactNode`                                |              | Panel content                                                                 |
