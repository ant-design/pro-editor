import { useMemoizedFn } from 'ahooks';
import { useMemo } from 'react';

import { dataFlattenSelector, useStoreApi } from '../store';
import { Store } from '../store/store';
import { FlattenNode, TreeData, TreeNode, UniqueIdentifier } from '../types';

/**
 * SortableTree 实例对象
 * @template T 节点数据类型
 */
export interface SortableTreeInstance<T = any>
  extends Omit<
    Store,
    // 移除所有 react 式的状态
    | 'activeId'
    | 'currentPosition'
    | 'selectedIds'
    | 'treeData'

    // 不需要 on 方法
    | 'onSelectedIdsChange'
    | 'onTreeDataChange'

    // 内部更新方法
    | 'dispatchTreeData'
    | 'handleDragCancel'
    | 'handleDragMove'
    | 'handleDragEnd'
    | 'handleDragOver'
    | 'handleDragStart'
  > {
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

export interface SortableTreeInstance<T = any>
  extends Omit<
    Store,
    // 移除所有 react 式的状态
    | 'activeId'
    | 'currentPosition'
    | 'selectedIds'
    | 'treeData'

    // 不需要 on 方法
    | 'onSelectedIdsChange'
    | 'onTreeDataChange'

    // 内部更新方法
    | 'dispatchTreeData'
    | 'handleDragCancel'
    | 'handleDragMove'
    | 'handleDragEnd'
    | 'handleDragOver'
    | 'handleDragStart'
  > {
  // 提供 get 方法来拿最新值
  getActiveId: () => UniqueIdentifier;
  getSelectedIds: () => UniqueIdentifier[];
  getTreeData: () => TreeData<T>;
  getFlattenData: () => FlattenNode<T>[];
  addNode: (node: TreeNode, index?: number) => void;
  removeNode: (id: UniqueIdentifier) => void;
  /**
   * 更新节点内容
   * @param id
   * @param content
   */
  updateNodeContent: (id: UniqueIdentifier, content: any) => void;
  /**
   * 切换节点的 extra 显示
   * @param id
   */
  toggleExtraVisible: (id: UniqueIdentifier) => void;
}

export const useSortableTree = <T>(): SortableTreeInstance<T> => {
  const storeApi = useStoreApi();

  const {
    activeId,
    treeData,
    selectedIds,
    // on 方法
    onSelectedIdsChange,
    onTreeDataChange,

    // 内部更新方法
    handleDragCancel,
    handleDragMove,
    handleDragOver,
    handleDragStart,
    handleDragEnd,
    dispatchTreeData,

    // 最终提供给 hooks 实例的值
    ...instance
  } = storeApi.getState();

  const getActiveId = useMemoizedFn(() => storeApi.getState().activeId);
  const getTreeData = useMemoizedFn(() => storeApi.getState().treeData);
  const getFlattenData = useMemoizedFn(() =>
    dataFlattenSelector(storeApi.getState()),
  );
  const getSelectedIds = useMemoizedFn(() => storeApi.getState().selectedIds);
  const addNode = useMemoizedFn((node: TreeNode, index: number) =>
    dispatchTreeData({ type: 'addNode', node, index }),
  );

  const removeNode = useMemoizedFn((id) => {
    dispatchTreeData({ type: 'removeNode', id });
  });
  const updateNodeContent = useMemoizedFn((id, content) => {
    dispatchTreeData({ type: 'updateNodeContent', content, id });
  });
  const toggleExtraVisible = useMemoizedFn((id) => {
    dispatchTreeData({ type: 'toggleExtraVisible', id });
  });

  return useMemo(
    () => ({
      ...instance,
      getActiveId,
      getTreeData,
      getFlattenData,
      getSelectedIds,
      addNode,
      removeNode,
      updateNodeContent,
      toggleExtraVisible,
    }),
    [instance],
  );
};
