---
title: ContextMenu
group: Basic
atomId: ContextMenu
---

# ContextMenu

Display a context menu that can be triggered by right-clicking or long-pressing, and can be operated with the keyboard.

## Code Example

<code src="./demos/index.tsx" center iframe title="Right click menu" description="Right click the screen"></code>

## API

| Property  | Type             | Description                                |
| --------- | ---------------- | ------------------------------------------ |
| container | `HTMLElement`    | The container element for the context menu |
| items     | `MenuItemType[]` | The menu items for the context menu        |
| label     | `string`         | The label for the context menu             |

### MenuItemType

The type of menu item, which can be a general menu item, sub-menu, or menu divider.

```ts
export type MenuItemType = GeneralItemType | SubMenuType | MenuDividerType;
```

### GeneralItemType

Type of general menu item.

| Property | Type                                                    | Description                                                |
| -------- | ------------------------------------------------------- | ---------------------------------------------------------- |
| key      | `string`                                                | The unique identifier of the menu item                     |
| label    | `string`                                                | The text label of the menu item                            |
| icon     | `ReactNode`                                             | The icon of the menu item                                  |
| onClick  | `() => void`                                            | The callback function for the click event of the menu item |
| danger   | `boolean`                                               | Whether it is a dangerous operation                        |
| disabled | `boolean`                                               | Whether it is disabled                                     |
| shortcut | `('meta' \| 'control' \| 'shift' \| 'alt' \| string)[]` | Keyboard shortcuts                                         |

### SubMenuType

Type of sub-menu.

| Property | Type             | Description                                                |
| -------- | ---------------- | ---------------------------------------------------------- |
| key      | `string`         | The unique identifier of the menu item                     |
| label    | `string`         | The text label of the menu item                            |
| icon     | `ReactNode`      | The icon of the menu item                                  |
| onClick  | `() => void`     | The callback function for the click event of the menu item |
| children | `MenuItemType[]` | The sub-menu items of the sub-menu                         |

### MenuDividerType

Type of menu divider.

| Property | Type      | Description                                      |
| -------- | --------- | ------------------------------------------------ |
| dashed   | `boolean` | Whether the style of the menu divider is dashed  |
| type     | `string`  | The type of the menu divider, fixed as 'divider' |
