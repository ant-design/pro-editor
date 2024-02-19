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

针对可排序列表场景提供基础底层封装，可在其上进行进一步自定义，我们还封装了 `ColumnList` 组件通过 `schema` 自动生成简单的排序列表。

## 代码演示

<code src="./demos/Basic.tsx" title="基本使用" description="默认支持列表渲染"></code>
<code src="./demos/controlled.tsx"  title="受控模式"
 description="onChange 会返回变更数据"></code>
<code src="./demos/hideRemove.tsx"  title="隐藏删除按钮"
 description="你可以设置 `hideRemove` 属性来隐藏默认的删除按钮"></code>
<code src="./demos/handle.tsx" title="隐藏拖拽按钮"
 description="你可以设置 `handle` 属性来控制拖拽按钮的显隐"></code>
<code src="./demos/getItemStyles.tsx"  title="自定义样式"
 description="通过 `getItemStyles` 可以自定义每个 item 的样式。"></code>
<code src="./demos/renderItem.tsx"  title="自定义排序项"
 description="通过 `renderItem` 可以自定义每个排序项，相比于 `renderContent` 提供的自由度更大"></code>
<code src="./demos/renderContent.tsx"  title="自定义列表项内容"
 description="提供 `renderContent` 由用户自定义除拖拽等操作外的列表项内容。"></code>
<code src="./demos/creatorButtonProps.tsx"  title="创建按钮"
 description="通过 `creatorButtonProps` 可以自定义创建按钮，record 为创建的数据"></code>
<code src="./demos/ref.tsx" title="使用 `ref` 获得实例"
 description="提供传统的 `ref` 方式关联组件实例，可实现自定义功能，如将添加按钮渲染到组件右上方。"></code>
<code src="./demos/useSortableList.tsx"  title="useSortableList"
 description="在 Item 子组件中使用 `useSortableList()` hook，可以获得当前组件实例"></code>
<code src="./demos/provider.tsx"  title="Provider"
description="为了方便用户在更高的上下文中通过 `useSortableList()` hook 获得组件实例，我们提供了 `SortableListProvider` 由用户控制 Provider 的作用范围。"></code>
<code src="./demos/empty.tsx"  title="空状态"
 description="当列表没有值时会展示空状态。"></code>

## API

### Basic 组件属性

| 属性名             | 类型                                                             | 描述                               |
| ------------------ | ---------------------------------------------------------------- | ---------------------------------- |
| value              | `T[]`                                                            | 值                                 |
| initialValues      | `T[]`                                                            | 初始值                             |
| onChange           | `(value: T[], event: ListDataDispatchPayload) => void`           | 值变化                             |
| renderContent      | `(item: T, index: number) => ReactNode`                          | 自定义可排序列表项内容             |
| renderItem         | `(item: T, options) => ReactNode`                                | 自定义可排序列表项                 |
| renderHeader       | `() => ReactNode`                                                | 自定义渲染表头                     |
| renderEmpty        | `() => ReactNode`                                                | 自定义渲染空状态                   |
| getItemStyle       | `(status: GetItemStylesArgs) => ReactNode`                       | 自定义容器样式                     |
| ref                | `ForwardedRef<SortableListRef<T>>`                               | 对外部暴露方法                     |
| hideRemove         | `boolean`                                                        | 是否隐藏删除按钮，默认为 false     |
| handle             | `boolean`                                                        | 是否显示拖拽按钮，默认为 true      |
| creatorButtonProps | `CreatorButtonProps\|false`                                      | 新建对象相关属性                   |
| actions            | `(item: T, index: number) => ReactNode[]` \| `React.ReactNode[]` | 除列表自带操作之外的其他操作自渲染 |

### CreatorButtonProps 创建按钮属性

| 属性名            | 类型                   | 描述                                                                 |
| ----------------- | ---------------------- | -------------------------------------------------------------------- |
| position          | `'bottom'\|'top'`      | 按钮位置，默认在下方                                                 |
| record            | `(index: number) => T` | 生成初始值逻辑                                                       |
| creatorButtonText | `string`               | 新增一行按钮文案                                                     |
| style             | CSSProperties          | 按钮的样式设置，可以设置按钮是否显示，如 `style: { display: 'none'}` |

### GetItemStylesArgs

`getItemStyle` 用于自定义可排序项的容器样式，其方法定义如下:

```typescript | pure
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

```tsx | pure
export type RenderItem<T> = (
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

```ts | pure
// 新增节点
interface AddItemAction {
  type: 'addItem';
  /**
   * 新增的节点
   */
  item: T;
  /**
   * 新增节点的位置，不传则默认在最后
   */
  index?: number;
}

// 移动节点
interface MoveItemAction {
  type: 'moveItem';
  /**
   * 当前节点索引
   */
  activeIndex: number;
  /**
   * 目标节点索引
   */
  overIndex: number;
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
  item: Partial<T>;
}
```
