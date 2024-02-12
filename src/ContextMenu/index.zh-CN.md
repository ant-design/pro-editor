---
group: 基础组件
atomId: ContextMenu
title: ContextMenu 情景菜单
---

# ContextMenu 情景菜单

展示情景菜单，右击或者长按触发，可以使用键盘操作选单。

## 代码演示

<code src="./demos/index.tsx" center iframe title="右键菜单" description="右键点击屏幕"></code>

## API

| 属性名    | 类型             | 描述               |
| --------- | ---------------- | ------------------ |
| container | `HTMLElement`    | 右键菜单的容器元素 |
| items     | `MenuItemType[]` | 右键菜单的菜单项   |
| label     | `string`         | 右键菜单的标签     |

### MenuItemType

菜单项的类型，可以是普通菜单项、子菜单、菜单分割线。

```ts
export type MenuItemType = GeneralItemType | SubMenuType | MenuDividerType;
```

### GeneralItemType

普通菜单项类型。

| 属性名   | 类型                                                    | 描述                     |
| -------- | ------------------------------------------------------- | ------------------------ |
| key      | `string`                                                | 菜单项的唯一标识         |
| label    | `string`                                                | 菜单项的文本标签         |
| icon     | `ReactNode`                                             | 菜单项的图标             |
| onClick  | `() => void`                                            | 菜单项的点击事件回调函数 |
| danger   | `boolean`                                               | 是否为危险操作           |
| disabled | `boolean`                                               | 是否禁用                 |
| shortcut | `('meta' \| 'control' \| 'shift' \| 'alt' \| string)[]` | 快捷键                   |

### SubMenuType

子菜单类型。

| 属性名   | 类型             | 描述                     |
| -------- | ---------------- | ------------------------ |
| key      | `string`         | 菜单项的唯一标识         |
| label    | `string`         | 菜单项的文本标签         |
| icon     | `ReactNode`      | 菜单项的图标             |
| onClick  | `() => void`     | 菜单项的点击事件回调函数 |
| children | `MenuItemType[]` | 子菜单的子菜单项         |

### MenuDividerType

菜单分割线类型。

| 属性名 | 类型      | 描述                               |
| ------ | --------- | ---------------------------------- |
| dashed | `boolean` | 菜单分割线的样式是否为虚线         |
| type   | `string`  | 菜单分割线的类型，固定为 'divider' |
