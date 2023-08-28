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

针对可排序列表场景提供基础底层封装，可在其上进行进一步自定义，参考 `ColumnList`。

## 基础使用

<code src="./demos/Basic.tsx" ></code>
<code src="./demos/controlled.tsx" ></code>
<code src="./demos/getItemStyles.tsx" ></code>
<code src="./demos/renderItem.tsx" ></code>
<code src="./demos/renderContent.tsx" ></code>
<code src="./demos/creatorButtonProps.tsx" ></code>

## 程序化控制

使用 `ref` 或者 `useSortableList()` hook 均可获取组件实例，进而自行控制状态变更。

<code src="./demos/ref.tsx" ></code>
<code src="./demos/useSortableList.tsx" ></code>

### Provider

为了方便用户在更高的上下文中通过 `useSortableList()` hook 获得组件实例，我们提供了 `SortableListProvider` 由用户控制 Provider 的作用范围。

<code src="./demos/provider.tsx" ></code>

## API

### Basic 组件属性

| 属性名        | 类型                                                             | 描述                               |
| ------------- | ---------------------------------------------------------------- | ---------------------------------- |
| value         | `T[]`                                                            | 值                                 |
| initialValues | `T[]`                                                            | 初始值                             |
| onChange      | `(value: T[], event: ListDataDispatchPayload) => void`           | 值变化                             |
| renderContent | `(item: T, index: number) => ReactNode`                          | 自定义可排序列表项内容             |
| renderItem    | `(item: T, options) => ReactNode`                                | 自定义可排序列表项                 |
| getItemStyle  | `(status: GetItemStylesArgs) => ReactNode`                       | 自定义容器样式                     |
| ref           | `ForwardedRef<SortableListRef<T>>`                               | 对外部暴露方法                     |
| hideRemove    | `boolean`                                                        | 是否隐藏删除按钮，默认为 false     |
| actions       | `(item: T, index: number) => ReactNode[]` \| `React.ReactNode[]` | 除列表自带操作之外的其他操作自渲染 |

### GetItemStylesArgs

`getItemStyle` 用于自定义可排序项的容器样式，其方法定义如下:

```typescript
interface GetItemStylesArgs {
  /**
   * 当前列表项索引
   */
  index: number;
  /**
   * 是否在拖拽中
   */
  isDragging: boolean;
  /**
   * 当前列表项 ID
   */
  id: UniqueIdentifier;
  /**
   * 是否在排序中
   */
  isSorting: boolean;
  /**
   * 拖拽覆盖的列表项索引
   */
  overIndex: number;
  /**
   * 是否是拖拽中的列表项
   */
  isDragOverlay: boolean;
}

type GetItemStyles = (status: GetItemStylesArgs) => React.CSSProperties;
```

### RenderItem 参数

`renderItem` 方法用于更大自由度地定义列表项，包括拖拽，删除，添加，列表项内容等部分，其参数暴露如下：

```typescript
export type RenderItem<T = SortableItem> = (
  item: T,
  options: {
    /**
     * 是否是被拖出的列表项
     */
    dragOverlay: boolean;
    /**
     * 是否在拖拽中
     */
    dragging: boolean;
    /**
     * 是否在排序中
     */
    sorting: boolean;
    /**
     * 当前列表项索引
     */
    index: number | undefined;
    /**
     * fade 动画
     */
    fadeIn: boolean;
    /**
     * 拖拽项监听器
     */
    listeners: DraggableSyntheticListeners;
    /**
     * ref
     */
    ref: Ref<HTMLElement>;
    /**
     * 当面列表项传入样式
     */
    style: CSSProperties | undefined;
    /**
     * 当面列表项 transform 动画
     */
    transform: any;
    /**
     * 当面列表项 transition 动画
     */
    transition: any;
  },
) => ReactElement;
```

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
