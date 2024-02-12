---
title: SortableList
atomId: SortableList
group:
  title: Sortable
demo:
  cols: 2
---

# SortableList Sortable List

Provides basic underlying encapsulation for sortable list scenarios, which can be further customized on top of it. We also encapsulate the `ColumnList` component to generate a simple sortable list through the `schema`.

## Code Demo

<code src="./demos/Basic.tsx" ></code> <code src="./demos/controlled.tsx" ></code> <code src="./demos/hideRemove.tsx" ></code> <code src="./demos/handle.tsx" ></code> <code src="./demos/getItemStyles.tsx" ></code> <code src="./demos/renderItem.tsx" ></code> <code src="./demos/renderContent.tsx" ></code> <code src="./demos/creatorButtonProps.tsx" ></code> <code src="./demos/ref.tsx" ></code> <code src="./demos/useSortableList.tsx" ></code> <code src="./demos/provider.tsx" ></code> <code src="./demos/empty.tsx" ></code>

## API

### Basic Component Properties

| Property           | Type                                                             | Description                                                           |
| ------------------ | ---------------------------------------------------------------- | --------------------------------------------------------------------- |
| value              | `T[]`                                                            | Value                                                                 |
| initialValues      | `T[]`                                                            | Initial value                                                         |
| onChange           | `(value: T[], event: ListDataDispatchPayload) => void`           | Value change                                                          |
| renderContent      | `(item: T, index: number) => ReactNode`                          | Customizable sortable list item content                               |
| renderItem         | `(item: T, options) => ReactNode`                                | Customizable sortable list item                                       |
| renderHeader       | `() => ReactNode`                                                | Custom render header                                                  |
| renderEmpty        | `() => ReactNode`                                                | Custom render empty state                                             |
| getItemStyle       | `(status: GetItemStylesArgs) => ReactNode`                       | Custom container style                                                |
| ref                | `ForwardedRef<SortableListRef<T>>`                               | Expose methods externally                                             |
| hideRemove         | `boolean`                                                        | Whether to hide the delete button, default is false                   |
| handle             | `boolean`                                                        | Whether to show the drag button, default is true                      |
| creatorButtonProps | `CreatorButtonProps\|false`                                      | New object related properties                                         |
| actions            | `(item: T, index: number) => ReactNode[]` \| `React.ReactNode[]` | Other operations for self-rendering besides the list's own operations |

### CreatorButtonProps Properties

| Property          | Type                   | Description                                                                                         |
| ----------------- | ---------------------- | --------------------------------------------------------------------------------------------------- |
| position          | `'bottom'\|'top'`      | Button position, default is at the bottom                                                           |
| record            | `(index: number) => T` | Logic for generating initial value                                                                  |
| creatorButtonText | `string`               | Button text for adding a new row                                                                    |
| style             | CSSProperties          | Button style settings, can set whether the button is displayed, such as `style: { display: 'none'}` |

### GetItemStylesArgs

`getItemStyle` is used to customize the container style of the sortable item, and its method is defined as follows:

```typescript | pure
interface GetItemStylesArgs {
  /**
   * Current item index
   */
  index: number;
  /**
   * Whether it is being dragged
   */
  isDragging: boolean;
  /**
   * Current item ID
   */
  id: UniqueIdentifier;
  /**
   * Whether it is being sorted
   */
  isSorting: boolean;
  /**
   * Index of the dragged-over item
   */
  overIndex: number;
  /**
   * Whether it is the item being dragged
   */
  isDragOverlay: boolean;
}

type GetItemStyles = (status: GetItemStylesArgs) => React.CSSProperties;
```

### RenderItem Parameters

The `renderItem` method is used to define the list item with greater freedom, including dragging, deleting, adding, and list item content. Its parameters are exposed as follows:

```tsx | pure
export type RenderItem<T> = (
  item: T,
  options: {
    /**
     * Whether it is the dragged-out item
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
     * Current item index
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
     * Style for the current item
     */
    style: CSSProperties | undefined;
    /**
     * Transform animation for the current item
     */
    transform: any;
    /**
     * Transition animation for the current item
     */
    transition: any;
  },
) => ReactElement;
```

### SortableListDispatchPayload

The component exposes underlying events through `onChange` and `ForwardRef`, allowing you to finely control the list's CRUD operations, movement, and subsequent behavior chains based on events.

```ts | pure
// Add node
interface AddItemAction {
  type: 'addItem';
  /**
   * Added node
   */
  item: T;
  /**
   * Position of the added node, default is at the end
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
