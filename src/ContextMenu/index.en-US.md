---
title: ContextMenu
group: Basic
---

# ContextMenu Context Menu

## When to use

This component is used to display context menus, which can be triggered by right-clicking or long-pressing and can be operated using the keyboard.

## Code Demo

### Basic Usage

<code src="./demos/index.tsx" center iframe></code>

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
