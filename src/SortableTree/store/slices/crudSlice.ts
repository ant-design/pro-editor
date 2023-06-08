import isEqual from 'fast-deep-equal';
import { StateCreator } from 'zustand/vanilla';

import { TreeData, TreeNode, UniqueIdentifier } from '../../types';
import { InternalSortableTreeStore } from '../store';
import { TreeDataDispatchPayload, treeDataReducer } from '../treeDataReducer';

export interface TreeDataPublicAction {
  dispatchTreeData: (payload: TreeDataDispatchPayload) => void;
  /**
   * 添加节点到指定位置
   * @param node 要添加的节点
   * @param index 要添加到的位置，默认为末尾
   */
  addNode: (node: TreeNode, index?: number) => void;
  /**
   * 移除指定 id 的节点
   * @param id 要移除的节点 id
   */
  removeNode: (id: UniqueIdentifier) => void;
  /**
   * 更新指定 id 节点的内容
   * @param id 要更新的节点 id
   * @param content 节点的新内容
   */
  updateNodeContent: (id: UniqueIdentifier, content: any) => void;
  /**
   * 切换指定 id 节点的 extra 显示状态
   * @param id 要切换的节点 id
   */
  toggleExtraVisible: (id: UniqueIdentifier) => void;
}

export interface TreeDataSliceAction extends TreeDataPublicAction {
  internalUpdateTreeData: (treeData: TreeData, payload: TreeDataDispatchPayload) => void;
}

export const crudSlice: StateCreator<
  InternalSortableTreeStore,
  [['zustand/devtools', never]],
  [],
  TreeDataSliceAction
> = (set, get) => ({
  internalUpdateTreeData: (treeData, payload) => {
    const { onTreeDataChange, treeData: prevTreeData } = get();

    if (isEqual(treeData, prevTreeData)) return;

    set({ treeData });

    onTreeDataChange?.(treeData, payload);
  },
  dispatchTreeData: (payload) => {
    const { internalUpdateTreeData, treeData } = get();
    const nextTreeData = treeDataReducer(treeData, payload);

    internalUpdateTreeData(nextTreeData, payload);
  },
  addNode: (node: TreeNode, index: number) => {
    get().dispatchTreeData({ type: 'addNode', node, index });
  },
  removeNode: (id) => {
    get().dispatchTreeData({ type: 'removeNode', id });
  },
  updateNodeContent: (id, content) => {
    get().dispatchTreeData({ type: 'updateNodeContent', content, id });
  },
  toggleExtraVisible: (id) => {
    get().dispatchTreeData({ type: 'toggleExtraVisible', id });
  },
});
