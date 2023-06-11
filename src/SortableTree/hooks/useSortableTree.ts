import { useMemoizedFn } from 'ahooks';
import { useMemo } from 'react';

import { dataFlattenSelector, useStoreApi } from '../store';
import { PublicSortableTreeStore } from '../store/store';
import { FlattenNode, TreeData, UniqueIdentifier } from '../types';

/**
 * SortableTree 实例对象
 * @template T 节点数据类型
 */
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

export const useSortableTree = <T>(): SortableTreeInstance<T> => {
  const storeApi = useStoreApi();

  const {
    // crud
    dispatchTreeData,
    removeNode,
    addNode,
    toggleNode,
    updateNodeContent,
    toggleExtraVisible,
    // selection
    deselectedAll,
    selectedNode,
  } = storeApi.getState();

  const getActiveId = useMemoizedFn(() => storeApi.getState().activeId);
  const getTreeData = useMemoizedFn(() => storeApi.getState().treeData);
  const getFlattenData = useMemoizedFn(() => dataFlattenSelector(storeApi.getState()));
  const getSelectedIds = useMemoizedFn(() => storeApi.getState().selectedIds);

  return useMemo(
    () => ({
      dispatchTreeData,
      toggleExtraVisible,
      removeNode,
      deselectedAll,
      addNode,
      selectedNode,
      toggleNode,
      updateNodeContent,
      getActiveId,
      getTreeData,
      getFlattenData,
      getSelectedIds,
    }),
    [],
  );
};
