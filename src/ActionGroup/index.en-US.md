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

<code src="./demos/basic.tsx" ></code> <code src="./demos/config.tsx" ></code> <code src="./demos/dropMenu.tsx" ></code> <code src="./demos/type.tsx" ></code> <code src="./demos/custom.tsx" ></code> <code src="./demos/withPanel.tsx" iframe></code>

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
