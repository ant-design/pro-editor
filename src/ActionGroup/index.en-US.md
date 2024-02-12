---
title: ActionGroup
atomId: ActionGroup
group: Basic
demo:
  cols: 2
---

# ActionGroup

A general-purpose panel used to carry a series of global tools such as "full screen, redo, undo, delete".

## Code Demo

<code src="./demos/basic.tsx" title="Basic Usage" description="Render through configuring `items`"></code><code src="./demos/config.tsx" title='Config Usage' description= "Declare `type` as `divider` to render a separator"></code><code src="./demos/dropMenu.tsx" title="Dropdown" description="Render a dropdown content at the end through configuring `dropdownMenu`"></code><code src="./demos/type.tsx" title="Mode Configuration"></code><code src="./demos/custom.tsx" title='Custom' description= "Customize rendering of special operation content through `render`"></code><code src="./demos/withPanel.tsx" iframe title="Usage in Floating Panel" description="Can make the entire panel draggable and floatable in combination with `DraggablePanel`"></code>

## API

| Property            | Type                                                                            | Description                                                                                |
| ------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| className           | `string`                                                                        | Custom classname                                                                           |
| style               | `React.CSSProperties`                                                           | Custom style                                                                               |
| items               | `[]<ActionIconItem>`                                                            | Configuration for generating buttons                                                       |
| dropdownMenu        | `[]<ActionGroupItem>`                                                           | Configuration for generating dropdown menu content                                         |
| dropdownProps       | `[]<ActionGroupItem \| { type: 'divider' }>`                                    | Custom props set for dropdownMenu, supports setting of all antd dropdown props except Menu |
| dropdownMenuTrigger | `React.ReactNode`                                                               | Custom trigger Dom for dropdownMenu, default is the DashOutlined Icon                      |
| render              | `(defalutDom: React.ReactNode, config: Array<ButtonConfig>) => React.ReactNode` | Method for rendering custom capabilities                                                   |
| onFullScreenClick   | `() => void`                                                                    | Callback for full screen button click                                                      |
| onUndoClick         | `() => void`                                                                    | Callback for undo button click                                                             |
| onRedoClick         | `() => void`                                                                    | Callback for redo button click                                                             |
| onDeleteClick       | `() => void`                                                                    | Callback for delete button click                                                           |
| type                | `'ghost' \| 'block' \| 'pure'`                                                  | Overall style                                                                              |
| direction           | `'row' \| 'column'`                                                             | Direction of icon arrangement                                                              |
| size                | `'default' \| 'large' \| number`                                                | Icon size                                                                                  |

### ActionGroupItem

| Property | Type                  | Description                                 |
| -------- | --------------------- | ------------------------------------------- |
| icon     | `React.ReactNode`     | Displayed icon                              |
| style    | `React.CSSProperties` | Individual style for each configured button |
| key      | `key`                 | Unique key for each button                  |
| onClick  | `() => void`          | Callback for button click event             |
| label    | `string`              | Text for displaying the button              |
