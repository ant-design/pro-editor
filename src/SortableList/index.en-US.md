---
title: SortableList
atomId: SortableList
group:
  title: Sortable
  order: 1
demo:
  cols: 2
---

# SortableList Sortable List

## When to use

Provide basic underlying encapsulation for sortable list scenarios, which can be further customized on top of it, refer to `ColumnList`.

## How to use

<code src="./demos/Basic.tsx" ></code>
<code src="./demos/controlled.tsx" ></code>
<code src="./demos/getItemStyles.tsx" ></code>
<code src="./demos/renderItem.tsx" ></code>
<code src="./demos/renderContent.tsx" ></code>
<code src="./demos/creatorButtonProps.tsx" ></code>
<code src="./demos/ref.tsx" ></code>
<code src="./demos/useSortableList.tsx" ></code>
<code src="./demos/provider.tsx" ></code>
<code src="./demos/empty.tsx" ></code>

## API

### Basic Component Properties

| Property           | Type                                                             | Description                                                      |
| ------------------ | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| value              | `T[]`                                                            | Value                                                            |
| initialValues      | `T[]`                                                            | Initial value                                                    |
| onChange           | `(value: T[], event: ListDataDispatchPayload) => void`           | Value change                                                     |
| renderContent      | `(item: T, index: number) => ReactNode`                          | Customizable sortable list item content                          |
| renderItem         | `(item: T, options) => ReactNode`                                | Customizable sortable list item                                  |
| getItemStyle       | `(status: GetItemStylesArgs) => ReactNode`                       | Custom container style                                           |
| ref                | `ForwardedRef<SortableListRef<T>>`                               | Expose methods externally                                        |
| hideRemove         | `boolean`                                                        | Whether to hide the delete button, default is false              |
| creatorButtonProps | `CreatorButtonProps\|false`                                      | New object related properties                                    |
| actions            | `(item: T, index: number) => ReactNode[]` \| `React.ReactNode[]` | Other operations self-rendered besides the list's own operations |

### CreatorButtonProps Properties

| Property          | Type                   | Description                               |
| ----------------- | ---------------------- | ----------------------------------------- |
| position          | `'bottom'\|'top'`      | Button position, default is at the bottom |
| record            | `(index: number) => T` | Generate initial value logic              |
| creatorButtonText | `string`               | Add a row button text                     |

### GetItemStylesArgs

`getItemStyle` is used to customize the container style of sortable items, and its method is defined as follows:

```typescript | pure
interface GetItemStylesArgs {
  /**
   * Current list item index
   */
  index: number;
  /**
   * Whether it is being dragged
   */
  isDragging: boolean;
  /**
   * Current list item ID
   */
  id: UniqueIdentifier;
  /**
   * Whether it is being sorted
   */
  isSorting: boolean;
  /**
   * Index of the dragged-over list item
   */
  overIndex: number;
  /**
   * Whether it is the dragged-over list item
   */
  isDragOverlay: boolean;
}

type GetItemStyles = (status: GetItemStylesArgs) => React.CSSProperties;
```

### RenderItem Parameters

The `renderItem` method is used to define list items with greater freedom, including dragging, deleting, adding, and list item content, and its parameters are exposed as follows:

```tsx | pure
export type RenderItem<T> = (
  item: T,
  options: {
    /**
     * Whether it is the dragged-over list item
     */
    dragOverlay: boolean;
    /**
     * Whether it is being dragged
     */
    dragging: boolean;
    /**
     * Whether it is being sorted
     */
    sorting: boolean;
    /**
     * Current list item index
     */
    index: number | undefined;
    /**
     * fade animation
     */
    fadeIn: boolean;
    /**
     * Drag item listener
     */
    listeners: DraggableSyntheticListeners;
    /**
     * ref
     */
    ref: Ref<HTMLElement>;
    /**
     * Current list item passed-in style
     */
    style: CSSProperties | undefined;
    /**
     * Current list item transform animation
     */
    transform: any;
    /**
     * Current list item transition animation
     */
    transition: any;
  },
) => ReactElement;
```

### SortableListDispatchPayload

The component exposes underlying events through `onChange` and `ForwardRef`, allowing you to finely control the list's CRUD, movement, and subsequent behavior chains based on events.

```ts | pure
// Add node
interface AddItemAction {
  type: 'addItem';
  /**
   * Newly added node
   */
  item: T;
  /**
   * Position of the newly added node, default is at the end
   */
  index?: number;
}

// Move node
interface MoveItemAction {
  type: 'moveItem';
  /**
   * Current node index
   */
  activeIndex: number;
  /**
   * Target node index
   */
  overIndex: number;
}

// Remove node
interface RemoveItemAction {
  type: 'removeItem';
  /**
   * Position of the node to be removed
   */
  index: number;
}

// Modify node content
interface UpdateItemAction {
  type: 'updateItem';
  /**
   * Position of the node to be modified
   */
  index: number;
  /**
   * Modified node content
   */
  item: Partial<T>;
}
```
