import type { UniqueIdentifier } from '@dnd-kit/core';
import type { MutableRefObject } from 'react';
import { useImperativeHandle } from 'react';
import { createStoreUpdater } from 'zustand-utils';

import {
  SortableTreeInstance,
  useSortableTree,
} from '../hooks/useSortableTree';
import type { ControlledState } from '../store';
import { useStoreApi } from '../store';

import type {
  FlattenNode,
  RenderNodeProps,
  TreeData,
  TreeNode,
} from '../types';

export interface StoreUpdaterProps<T = any> extends ControlledState {
  /**
   * 树的数据
   */
  treeData?: TreeData<T>;
  /**
   * 默认数据
   */
  defaultTreeData?: TreeData<T>;
  /**
   * 数据变更回调
   */
  onTreeDataChange?: (treeData: TreeData<T>) => void;
  /**
   * 渲染内容
   */
  renderContent?: RenderNodeProps<T>;
  /**
   * 渲染额外项
   */
  renderExtra?: RenderNodeProps<T>;
  /**
   * 对外部暴露方法
   */
  ref?: MutableRefObject<SortableTreeInstance<T>>;
  /**
   * 如果为 true，则会在 devtools 中显示 SortableTree 内部的数据结构
   * @internal
   */
  SHOW_STORE_IN_DEVTOOLS?: boolean;
}

/**
 * 供外部使用的 ref 方法
 */
export interface SortableTreeRef {
  flattenData?: FlattenNode[];
  selectedIds?: UniqueIdentifier[];
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

const StoreUpdater = ({
  defaultTreeData,
  treeData,
  onTreeDataChange,
  onSelectedIdsChange,
  renderContent,
  renderExtra,
  ref,
  hideRemove,
  hideAdd,
  indentationWidth,
}: StoreUpdaterProps) => {
  const storeApi = useStoreApi();

  const useStoreUpdater = createStoreUpdater<StoreUpdaterProps>(storeApi);

  useStoreUpdater('treeData', defaultTreeData, []);
  useStoreUpdater('treeData', treeData);
  useStoreUpdater('treeData', treeData);
  useStoreUpdater('renderContent', renderContent);
  useStoreUpdater('renderExtra', renderExtra);
  useStoreUpdater('onTreeDataChange', onTreeDataChange);

  useStoreUpdater('indentationWidth', indentationWidth);
  useStoreUpdater('hideAdd', hideAdd);
  useStoreUpdater('hideRemove', hideRemove);

  useStoreUpdater('onSelectedIdsChange', onSelectedIdsChange);

  // 将 store 传递到外部
  const instance = useSortableTree();
  useImperativeHandle(ref, () => instance);

  return null;
};

export default StoreUpdater;
