---
title: DraggablePanel
atomId: DraggablePanel
group: Panel
---

# DraggablePanel Draggable Floating Panel

Used for panels that need to be stretched or dragged and moved.

## Code Demo

<code src="./demos/basic.tsx"  compact="true" title="Fixed Panel on the Right"  description="By default, the panel on the right is fixed and can be dragged left and right"></code>

<code src="./demos/left.tsx" title="Fixed Panel on the Left" description="The panel on the left is fixed and can be dragged left and right"></code>

<code src="./demos/bottom.tsx" title="Fixed Panel at the Bottom" description="The panel at the bottom is fixed and can be dragged up and down"></code>

<code src="./demos/top.tsx" title="Fixed Panel at the Top" description="The panel at the top is fixed and can be dragged up and down"></code>

<code src="./demos/controlFixed.tsx" title="Fixed Panel expandable controlled" description="The panel  is fixed and expand can be controlled"></code>

<code src="./demos/float.tsx" compact="true" title="Floating Draggable Panel" description="Set `mode` to `float`"></code>

<code src="./demos/controlFloat.tsx" compact="true" title="Floating Controlled Mode" description="The position of the floating panel is controlled"></code>

## API

| Property         | Type                                       | Default      | Description                                                                   |
| ---------------- | ------------------------------------------ | ------------ | ----------------------------------------------------------------------------- |
| mode             | `'fixed' \| 'float'`                       | `'fixed'`    | The position mode of the panel, using fixed mode or floating window           |
| placement        | `'right' \| 'left' \| 'top' \| 'bottom'`   | `'right'`    | The orientation of the panel in fixed mode, default placement is on the right |
| minWidth         | `number`                                   |              | Minimum width of the panel                                                    |
| minHeight        | `number`                                   |              | Minimum height of the panel                                                   |
| maxWidth         | `number`                                   |              | Maximum width of the panel                                                    |
| maxHeight        | `number`                                   |              | Maximum height of the panel                                                   |
| resize           | `RndProps['enableResizing']`               |              | Control the resizable area                                                    |
| size             | `Partial<Size>`                            |              | Panel size                                                                    |
| onSizeChange     | `(delta: NumberSize, size?: Size) => void` |              | Callback for panel size change                                                |
| onSizeDragging   | `(delta: NumberSize, size?: Size) => void` |              | Callback during panel size dragging                                           |
| expandable       | `boolean`                                  | `true`       | Whether it can be expanded                                                    |
| isExpand         | `boolean`                                  |              | Whether it is currently in the expanded state                                 |
| onExpandChange   | `(expand: boolean) => void`                |              | Callback for expand state change                                              |
| position         | `RndProps['position']`                     |              | Panel position in controlled mode                                             |
| defaultSize      | `Partial<Size>`                            |              | Default panel size                                                            |
| defaultPosition  | `RndProps['position']`                     | `[100, 100]` | Default panel position, valid in floating mode                                |
| onPositionChange | `(position: RndProps['position']) => void` |              | Callback for panel position change                                            |
| children         | `ReactNode`                                |              | Panel content                                                                 |
