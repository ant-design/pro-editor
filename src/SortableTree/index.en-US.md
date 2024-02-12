---
title: SortableTree
group: Sortable
atomId: SortableTree
demo:
  cols: 2
---

# SortableTree Sortable Tree

A sortable tree component that conforms to the data structure of Ant Design [Tree](https://ant.design/components/tree).

## Code Example

<code src="./demos/default.tsx" ></code><code src="./demos/controlled.tsx" ></code><code src="./demos/renderContent.tsx" ></code><code src="./demos/disableDrag.tsx" ></code><code src="./demos/sortableRule.tsx" ></code><code src="./demos/virtual.tsx" ></code>

## API

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
| virtual             | `VirtualConfig` \| `false`                                                                            | Virtual scroll configuration, default is false  |

## VirtualConfig

Virtual scroll configuration

| Name       | Type                        | Description                                            |
| ---------- | --------------------------- | ------------------------------------------------------ |
| height     | `number`                    | Height of the virtual scroll container, required       |
| width      | `number`\| `string`         | Width of the virtual scroll container, default is 100% |
| itemHeight | `(index: number) => number` | Item height, default is 36                             |

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
| index    | `number`                     | Position of the node among sibling nodes  |

## Projected

Placement target information

| Name     | Type                         | Description                               |
| -------- | ---------------------------- | ----------------------------------------- |
| depth    | `number`                     | Depth of the placement target             |
| maxDepth | `number`                     | Maximum depth the target can be placed    |
| minDepth | `number`                     | Minimum depth the target can be placed    |
| parentId | `UniqueIdentifier` \| `null` | Parent node ID, null if it is a root node |

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
   * Get the flattened data of the current tree
   * @returns The flattened data of the current tree
   */
  getFlattenData: () => FlattenNode<T>[];
}
```
