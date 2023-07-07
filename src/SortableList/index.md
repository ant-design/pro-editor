---
title: SortableList 可排序列表
atomId: SortableList
group:
  title: 可排序组件
  order: 1
demo:
  cols: 2
---

# SortableList 可排序列表

## 何时使用

简单排序表单场景。

## 基础使用

<code src="./demos/Basic.tsx" ></code>
<code src="./demos/controlled.tsx" ></code>
<code src="./demos/empty.tsx" ></code>

## 自定义样式

<code src="./demos/compact.tsx" ></code>
<code src="./demos/header.tsx" ></code>
<code src="./demos/renderContent.tsx" ></code>
<code src="./demos/actions.tsx" ></code>

### 自定义创建按钮

提供 `creatorButtonProps` 属性方便配置自定义创建按钮的文案和初始化生成逻辑:

- 无数据时添加一列按钮会成为空状态引导项，可以用 `showInEmpty` 配置项控制显示隐藏。
- 有数据时添加一列按钮默认显示在列表下方，可以用 `showInList` 配置项控制显示隐藏。

<code src="./demos/custom.tsx" ></code>

## 程序化控制

使用 `ref` 或者 `useSortableList()` hook 均可获取组件实例，进而自行控制状态变更。

<code src="./demos/ref.tsx" ></code>
<code src="./demos/useSortableList.tsx" ></code>

### Provider

为了方便用户在更高的上下文中通过 `useSortableList()` hook 获得组件实例，我们提供了 `SortableListProvider` 由用户控制 Provider 的作用范围。

<code src="./demos/provider.tsx" ></code>

## API

### Basic 组件属性

| 属性名             | 类型                                                             | 描述                               |
| ------------------ | ---------------------------------------------------------------- | ---------------------------------- |
| value              | `T[]`                                                            | 值                                 |
| initialValues      | `T[]`                                                            | 初始值                             |
| onChange           | `(value: T[], event: ListDataDispatchPayload) => void`           | 值变化                             |
| renderContent      | `(item: T, index: number) => ReactNode`                          | 渲染内容区域                       |
| actions            | `(item: T, index: number) => ReactNode[]` \| `React.ReactNode[]` | 除列表自带操作之外的其他操作自渲染 |
| renderHeader       | `() => React.ReactNode`                                          | 渲染头部区域                       |
| ref                | `ForwardedRef<SortableListRef<T>>`                               | 对外部暴露方法                     |
| creatorButtonProps | CreatorButtonProps                                               | 新建对象相关属性                   |
| compact            | `boolean`                                                        | 紧凑模式, 默认为 false             |
| hideRemove         | `boolean`                                                        | 是否隐藏删除按钮，默认为 false     |

### CreatorButtonProps 创建按钮属性

| 属性名            | 类型                                     | 描述                       |
| ----------------- | ---------------------------------------- | -------------------------- |
| showInList        | `boolean`                                | 列表有值时是否展示添加按钮 |
| showInEmpty       | `boolean`                                | 空数据时是否展示添加按钮   |
| record            | `(index: number) => Record<string, any>` | 生成初始值逻辑             |
| creatorButtonText | `string`                                 | 新增一行按钮文案           |

### 自定义样式

可以使用 `getItemStyle` 来调整样式，该方法的签名为：

```typescript
interface GetItemStylesArgs {
  index: number;
  isDragging: boolean;
  id: string;
  isSorting: boolean;
  overIndex: number;
  isDragOverlay: boolean;
}

type GetItemStyles = (status: GetItemStylesArgs) => React.CSSProperties;
```

基于相应参数，可以自由控制列项的样式

<code src="./demos/CustomStyle.tsx"></code>

### SortableListDispatchPayload

组件通过 `onChange` 以及 `ForwardRef` 的方式暴露底层事件，你可以细粒度地控制列表的增删改查，移动，以及根据事件细粒度控制后续的行为链路。

```ts
// 新增节点
interface AddItemAction {
  type: 'addItem';
  /**
   * 新增的节点
   */
  item: any;
  /**
   * 新增节点的位置，不传则默认在最后
   */
  index?: number;
}

// 移动节点
interface MoveItemAction {
  type: 'moveItem';
  /**
   * 当前节点的唯一标识符
   */
  activeId: string | number;
  /**
   * 目标节点的唯一标识符
   */
  targetId: string | number;
}

// 移除节点
interface RemoveItemAction {
  type: 'removeItem';
  /**
   * 要移除的节点的位置
   */
  index: number;
}

// 修改节点 content 内容
interface UpdateItemAction {
  type: 'updateItem';
  /**
   * 要修改的节点的位置
   */
  index: number;
  /**
   * 修改后的节点内容
   */
  item: any;
}
```
