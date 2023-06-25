import type { MutableRefObject } from 'react';
import { useImperativeHandle } from 'react';
import { createStoreUpdater } from 'zustand-utils';

import { SortableTreeInstance, useSortableTree } from '../hooks/useSortableTree';
import type { ControlledState, OnTreeDataChange } from '../store';
import { useStoreApi } from '../store';

import type { RenderNodeProps, TreeData } from '../types';

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
  onTreeDataChange?: OnTreeDataChange<T>;
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
  disableDrag,
}: StoreUpdaterProps) => {
  const storeApi = useStoreApi();

  const useStoreUpdater = createStoreUpdater<StoreUpdaterProps>(storeApi);

  useStoreUpdater('treeData', defaultTreeData, []);
  useStoreUpdater('treeData', treeData);
  useStoreUpdater('renderContent', renderContent);
  useStoreUpdater('renderExtra', renderExtra);
  useStoreUpdater('onTreeDataChange', onTreeDataChange);

  useStoreUpdater('indentationWidth', indentationWidth);
  useStoreUpdater('hideAdd', hideAdd);
  useStoreUpdater('hideRemove', hideRemove);
  useStoreUpdater('disableDrag', disableDrag);

  useStoreUpdater('onSelectedIdsChange', onSelectedIdsChange);

  // 将 store 传递到外部
  const instance = useSortableTree();
  useImperativeHandle(ref, () => instance);

  return null;
};

export default StoreUpdater;
