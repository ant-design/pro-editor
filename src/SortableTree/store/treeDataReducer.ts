import type { UniqueIdentifier } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { produce } from 'immer';
import merge from 'lodash.merge';
import type { Projected, TreeData } from '../types';
import { buildTree, flattenTree, removeNode, setProperty } from '../utils/treeNode';

import type { FlattenNode } from '../types';

// 新增节点
interface AddNodeAction {
  type: 'addNode';
  node: Partial<FlattenNode>;
  index?: number;
}

// 移动节点
interface MoveNodeAction {
  type: 'moveNode';
  /**
   * 当前节点id
   */
  activeId: UniqueIdentifier;
  /**
   * 目标节点id
   */
  targetId: UniqueIdentifier;
  projected: Projected;
}

// 移除节点
interface RemoveNodeAction {
  type: 'removeNode';
  id: UniqueIdentifier;
}

// 修改节点content内容
interface UpdateNodeContentAction<T = any> {
  type: 'updateNodeContent';
  id: UniqueIdentifier;
  content: T;
}

// 切换节点折叠状态
interface ToggleCollapseAction {
  type: 'toggleCollapse';
  id: UniqueIdentifier;
}
// 切换节点额外区域的显示状态
interface ToggleExtraVisibleAction {
  type: 'toggleExtraVisible';
  id: UniqueIdentifier;
}

/**
 * 暴露给外部更新 TreeNode 的方法
 */
export type TreeNodeDispatchPayload = Omit<UpdateNodeContentAction, 'id'>;

/**
 * 内部的更新方法
 */
export type TreeDataDispatchPayload =
  | ToggleCollapseAction
  | ToggleExtraVisibleAction
  | MoveNodeAction
  | AddNodeAction
  | RemoveNodeAction
  | UpdateNodeContentAction;

export const treeDataReducer = (treeData: TreeData, payload: TreeDataDispatchPayload): TreeData => {
  switch (payload.type) {
    case 'toggleCollapse':
      return setProperty(treeData, payload.id, 'collapsed', (value) => {
        return !value;
      });

    case 'toggleExtraVisible':
      return setProperty(treeData, payload.id, 'showExtra', (value) => {
        return !value;
      });

    case 'moveNode':
      return produce(treeData, (draft) => {
        const { activeId, projected, targetId } = payload;

        const clonedItems: FlattenNode[] = flattenTree(draft);
        const overIndex = clonedItems.findIndex(({ id }) => id === targetId);
        const activeIndex = clonedItems.findIndex(({ id }) => id === activeId);
        const activeTreeItem = clonedItems[activeIndex];

        clonedItems[activeIndex] = {
          ...activeTreeItem,
          depth: projected.depth,
          parentId: projected.parentId,
        };

        const sortedItems = arrayMove(clonedItems, activeIndex, overIndex);

        return buildTree(sortedItems);
      });

    case 'removeNode':
      return removeNode(treeData, payload.id);

    case 'addNode':
      return produce(treeData, (draft) => {
        if (!payload.index) {
          draft.push({ id: payload.node.id, children: [], ...payload.node });
        }
      });

    case 'updateNodeContent':
      return setProperty(treeData, payload.id, 'content', (preValue) => {
        return merge(preValue, payload.content);
      });
  }
};
