---
title: ActionGroup
atomId: ActionGroup
group: Basic
nav:
  title: Components
  order: 2
demo:
  cols: 2
---

# ActionGroup Tool Panel

## When To Use

When you need a general panel to carry a series of global tools such as "full screen, redo, undo, delete", you can use it.

## Code Demo

<code src="./demos/basic.tsx" ></code> <code src="./demos/config.tsx" title='Configuration Usage' description= "Render the entire content by configuring `items`, and you can render a separator by declaring type as divider in items"></code> <code src="./demos/dropMenu.tsx" title="Dropdown" description="Render a dropdown content at the end by configuring `dropdownMenu`"></code> <code src="./demos/type.tsx" title="Mode Configuration"></code> <code src="./demos/custom.tsx" title='Customization' description= "Customize the rendering of special operational content using `render`"></code> <code src="./demos/withPanel.tsx" iframe title="Usage in Floating Panel" description="Combine with DraggablePanel to make the entire panel float and draggable"></code>

## API

| Property            | Type                                                                            | Description                                                                             |
| ------------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| className           | `string`                                                                        | Custom classname                                                                        |
| style               | `React.CSSProperties`                                                           | Custom style                                                                            |
| items               | `[]<ActionIconItem>`                                                            | Configuration for generating buttons                                                    |
| dropdownMenu        | `[]<ActionGroupItem>`                                                           | Configuration for generating dropdown menu content                                      |
| dropdownProps       | `[]<ActionGroupItem \| { type: 'divider' }>`                                    | Custom props for dropdownMenu, supports setting for all antd dropdown Props except Menu |
| dropdownMenuTrigger | `React.ReactNode`                                                               | Custom trigger Dom for dropdownMenu, default is DashOutlined Icon                       |
| render              | `(defalutDom: React.ReactNode, config: Array<ButtonConfig>) => React.ReactNode` | Method for rendering custom capabilities                                                |
| onFullScreenClick   | `() => void`                                                                    | Callback for full screen button click                                                   |
| onUndoClick         | `() => void`                                                                    | Callback for undo button click                                                          |
| onRedoClick         | `() => void`                                                                    | Callback for redo button click                                                          |
| onDeleteClick       | `() => void`                                                                    | Callback for delete button click                                                        |
| type                | `'ghost' \| 'block' \| 'pure'`                                                  | Overall style                                                                           |
| direction           | `'row' \| 'column'`                                                             | Direction of icon arrangement                                                           |
| size                | `'default' \| 'large' \| number`                                                | Icon size                                                                               |

### ActionGroupItem

| Property | Type                  | Description                                 |
| -------- | --------------------- | ------------------------------------------- |
| icon     | `React.ReactNode`     | Displayed icon                              |
| style    | `React.CSSProperties` | Individual style for each configured button |
| key      | `key`                 | Unique key for each button                  |
| onClick  | `() => void`          | Callback for button click event             |
| label    | `string`              | Text for displaying the button              |
