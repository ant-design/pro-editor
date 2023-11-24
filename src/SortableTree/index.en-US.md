---
title: SortableTree
group: Sortable
atomId: SortableTree
demo:
  cols: 2
---

# SortableTree Sortable Tree

A sortable tree component that conforms to the data structure of Ant Design [Tree](https://ant.design/components/tree).

## When To Use

It can be used when editing tree-like data structures (adding, deleting, sorting).

## Demo

###

<code src="./demos/default.tsx" ></code> <code src="./demos/controlled.tsx" ></code>

<code src="./demos/renderContent.tsx" ></code> <code src="./demos/disableDrag.tsx" ></code> <code src="./demos/sortableRule.tsx" ></code>

## API

### Properties

| Name                | Type                                                                                                  | Description                                     |
| ------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| hideAdd             | `boolean`                                                                                             | Hide the default add button                     |
| hideRemove          | `boolean`                                                                                             | Hide the default remove button                  |
| disableDrag         | `boolean`                                                                                             | Disable dragging                                |
| indentationWidth    | `number`                                                                                              | Indentation width                               |
| onSelectedIdsChange | `(selectedIds: UniqueIdentifier[]) => void`                                                           | Callback for selected ID changes                |
| treeData            | `TreeData<T>`                                                                                         | Tree data                                       |
| defaultTreeData     | `TreeData<T>`                                                                                         | Default data                                    |
| onTreeDataChange    | `(treeData: TreeData<T>,event: TreeDataDispatchPayload) => void`                                      | Callback for data changes                       |
| renderContent       | `(node: FlattenNode<T>) => JSX.Element`                                                               | Render content                                  |
| renderExtra         | `(node: FlattenNode<T>) => JSX.Element`                                                               | Render extra items                              |
| ref                 | `MutableRefObject<SortableTreeInstance<T>>`                                                           | Expose methods externally                       |
| sortableRule        | `data: { activeNode: FlattenNode<T>; targetNode: FlattenNode<T>; projected: Projected; }) => boolean` | Function to control drag and drop sorting rules |

## TreeNode

Tree node

| Name      | Type               | Description                    |
| --------- | ------------------ | ------------------------------ |
| id        | `UniqueIdentifier` | Node ID                        |
| children  | `TreeNode<T>[]`    | List of child nodes            |
| collapsed | `boolean`          | Whether the group is collapsed |
| showExtra | `boolean`          | Whether to show extra area     |
| content   | `T`                | Node data                      |

## FlattenNode

Flattened node

| Name     | Type                         | Description                               |
| -------- | ---------------------------- | ----------------------------------------- |
| parentId | `UniqueIdentifier` \| `null` | Parent node ID, null if it is a root node |
| depth    | `number`                     | Node depth                                |
| index    | `number`                     | Node position among sibling nodes         |

## Projected

Placement target information

| Name     | Type                         | Description                                     |
| -------- | ---------------------------- | ----------------------------------------------- |
| depth    | `number`                     | Placement target depth                          |
| maxDepth | `number`                     | Maximum depth the target position can be placed |
| minDepth | `number`                     | Minimum depth the target position can be placed |
| parentId | `UniqueIdentifier` \| `null` | Parent node ID, null if it is a root node       |

## SortableTreeInstance

SortableTree instance object, type definition reference:

```typescript
export interface SortableTreeInstance<T = any> extends PublicSortableTreeStore {
  /**
   * Get the id of the currently active node
   * @returns The id of the currently active node
   */
  getActiveId: () => UniqueIdentifier;
  /**
   * Get an array of ids of the currently selected nodes
   * @returns An array of ids of the currently selected nodes
   */
  getSelectedIds: () => UniqueIdentifier[];
  /**
   * Get the current tree data
   * @returns The current tree data
   */
  getTreeData: () => TreeData<T>;
  /**
   * Get the current flattened tree data
   * @returns The current flattened tree data
   */
  getFlattenData: () => FlattenNode<T>[];
}
```

[//]: # '### 多选方案'
[//]: #

[//]: # "<code src=\"./demos/\_multiSelect.tsx\" ></code>"
