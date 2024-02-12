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

<code src="./demos/Basic.tsx" title="Basic Usage" description="Supports default list rendering"></code><code src="./demos/controlled.tsx"  title="Controlled Mode"
description="onChange will return the changed data"></code><code src="./demos/hideRemove.tsx"  title="Hide Remove Button"
description="You can set the `hideRemove` attribute to hide the default remove button"></code><code src="./demos/handle.tsx" title="Hide Drag Button"
description="You can set the `handle` attribute to control the visibility of the drag button"></code><code src="./demos/getItemStyles.tsx"  title="Custom Styles"
description="You can customize the style of each item through `getItemStyles`"></code><code src="./demos/renderItem.tsx"  title="Custom Sortable Item"
description="You can customize each sortable item through `renderItem`, which provides greater flexibility than `renderContent`"></code><code src="./demos/renderContent.tsx"  title="Custom List Item Content"
description="Provides `renderContent` for users to customize the content of list items other than drag and drop operations."></code><code src="./demos/creatorButtonProps.tsx"  title="Create Button"
description="You can customize the create button, with the record being the created data, through `creatorButtonProps`"></code><code src="./demos/ref.tsx" title="Get Instance using `ref`"
description="Provides the traditional `ref` method to associate with the component instance, enabling custom functionality such as rendering the add button to the top right of the component."></code><code src="./demos/useSortableList.tsx"  title="useSortableList"
description="Use the `useSortableList()` hook in the Item subcomponent to get the current component instance"></code><code src="./demos/provider.tsx"  title="Provider"
description="To allow users to get the component instance through the `useSortableList()` hook in a higher context, we provide `SortableListProvider` for users to control the scope of the Provider."></code><code src="./demos/empty.tsx"  title="Empty State"
description="Displays an empty state when the list has no values."></code>

## API

### Basic Component Properties

| Property           | Type                                                             | Description                                                             |
| ------------------ | ---------------------------------------------------------------- | ----------------------------------------------------------------------- |
| value              | `T[]`                                                            | Value                                                                   |
| initialValues      | `T[]`                                                            | Initial value                                                           |
| onChange           | `(value: T[], event: ListDataDispatchPayload) => void`           | Value change                                                            |
| renderContent      | `(item: T, index: number) => ReactNode`                          | Custom sortable list item content                                       |
| renderItem         | `(item: T, options) => ReactNode`                                | Custom sortable list item                                               |
| renderHeader       | `() => ReactNode`                                                | Custom render header                                                    |
| renderEmpty        | `() => ReactNode`                                                | Custom render empty state                                               |
| getItemStyle       | `(status: GetItemStylesArgs) => ReactNode`                       | Custom container style                                                  |
| ref                | `ForwardedRef<SortableListRef<T>>`                               | Expose methods externally                                               |
| hideRemove         | `boolean`                                                        | Whether to hide the remove button, default is false                     |
| handle             | `boolean`                                                        | Whether to show the drag button, default is true                        |
| creatorButtonProps | `CreatorButtonProps\|false`                                      | Properties related to creating objects                                  |
| actions            | `(item: T, index: number) => ReactNode[]` \| `React.ReactNode[]` | Other operations for rendering in addition to the list's own operations |

### CreatorButtonProps Create Button Properties

| Property          | Type                   | Description                                                                                                    |
| ----------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------- |
| position          | `'bottom'\|'top'`      | Button position, default is at the bottom                                                                      |
| record            | `(index: number) => T` | Logic for generating initial values                                                                            |
| creatorButtonText | `string`               | Button text for adding a new row                                                                               |
| style             | CSSProperties          | Button style settings, can be used to set whether the button is displayed, such as `style: { display: 'none'}` |

### GetItemStylesArgs

`getItemStyle` is used to customize the container style of sortable items, and its method is defined as follows:

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
   * Index of the item being dragged over
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

The `renderItem` method is used to define list items with greater flexibility, including drag and drop, delete, add, list item content, and other parts. Its exposed parameters are as follows:

```tsx | pure
export type RenderItem<T> = (
  item: T,
  options: {
    /**
     * Whether it is the dragged out item
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
     * Current item's passed-in style
     */
    style: CSSProperties | undefined;
    /**
     * Current item's transform animation
     */
    transform: any;
    /**
     * Current item's transition animation
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
   * Newly added node
   */
  item: T;
  /**
   * Position of the new node, defaults to the last if not passed
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
