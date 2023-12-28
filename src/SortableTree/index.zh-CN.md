---
title: SortableTree 可排序树
group: 可排序组件
atomId: SortableTree
demo:
  cols: 2
---

# SortableTree 可排序树

符合 Ant Design [Tree](https://ant.design/components/tree) 数据结构的可排序树组件。

## 何时使用

需要做树型数据结构的编辑（增删、排序）时可以使用。

## Demo 演示

###

<code src="./demos/default.tsx" ></code> <code src="./demos/controlled.tsx" ></code>

<code src="./demos/renderContent.tsx" ></code> <code src="./demos/disableDrag.tsx" ></code> <code src="./demos/sortableRule.tsx" ></code>

## API

### 属性

| 名称                | 类型                                                                                                  | 描述                   |
| ------------------- | ----------------------------------------------------------------------------------------------------- | ---------------------- |
| hideAdd             | `boolean`                                                                                             | 隐藏默认的添加按钮     |
| hideRemove          | `boolean`                                                                                             | 隐藏默认的删除按钮     |
| disableDrag         | `boolean`                                                                                             | 禁用拖拽               |
| indentationWidth    | `number`                                                                                              | 缩进宽度               |
| onSelectedIdsChange | `(selectedIds: UniqueIdentifier[]) => void`                                                           | 选中 ID 变更回调       |
| treeData            | `TreeData<T>`                                                                                         | 树的数据               |
| defaultTreeData     | `TreeData<T>`                                                                                         | 默认数据               |
| onTreeDataChange    | `(treeData: TreeData<T>,event: TreeDataDispatchPayload) => void`                                      | 数据变更回调           |
| renderContent       | `(node: FlattenNode<T>) => JSX.Element`                                                               | 渲染内容               |
| renderExtra         | `(node: FlattenNode<T>) => JSX.Element`                                                               | 渲染额外项             |
| ref                 | `MutableRefObject<SortableTreeInstance<T>>`                                                           | 对外部暴露方法         |
| sortableRule        | `data: { activeNode: FlattenNode<T>; targetNode: FlattenNode<T>; projected: Projected; }) => boolean` | 控制拖动排序的规则函数 |

## TreeNode

树节点

| 名称      | 类型               | 描述             |
| --------- | ------------------ | ---------------- |
| id        | `UniqueIdentifier` | 节点 ID          |
| children  | `TreeNode<T>[]`    | 子节点列表       |
| collapsed | `boolean`          | 组是否折叠       |
| showExtra | `boolean`          | 是否显示额外区域 |
| content   | `T`                | 节点数据         |

## FlattenNode

展平的节点

| 名称     | 类型                         | 描述                             |
| -------- | ---------------------------- | -------------------------------- |
| parentId | `UniqueIdentifier` \| `null` | 父节点 ID，如果是根节点则为 null |
| depth    | `number`                     | 节点深度                         |
| index    | `number`                     | 节点在同级节点中的位置           |

## Projected

放置目标位置信息

| 名称     | 类型                         | 描述                             |
| -------- | ---------------------------- | -------------------------------- |
| depth    | `number`                     | 放置目标位置深度                 |
| maxDepth | `number`                     | 目标位置可放置最大深度           |
| minDepth | `number`                     | 目标位置可放置可放置最小深度     |
| parentId | `UniqueIdentifier` \| `null` | 父节点 ID，如果是根节点则为 null |

## SortableTreeInstance

SortableTree 实例对象，类型定义参考：

```typescript
export interface SortableTreeInstance<T = any> extends PublicSortableTreeStore {
  /**
   * 获取当前激活节点的 id
   * @returns 当前激活节点的 id
   */
  getActiveId: () => UniqueIdentifier;
  /**
   * 获取当前选中节点的 id 数组
   * @returns 当前选中节点的 id 数组
   */
  getSelectedIds: () => UniqueIdentifier[];
  /**
   * 获取当前树的数据
   * @returns 当前树的数据
   */
  getTreeData: () => TreeData<T>;
  /**
   * 获取当前树的扁平化数据
   * @returns 当前树的扁平化数据
   */
  getFlattenData: () => FlattenNode<T>[];
}
```
