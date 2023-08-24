import { useMemoizedFn } from 'ahooks';
import { useStoreApi } from '../store';
import { UniqueIdentifier } from '../type/type';
/**
 * SortableList 实例对象
 * @template T 节点数据类型
 */
export interface SortableListInstance<T = any> {
  /**
   * 获取当前激活节点的 id
   * @returns 当前激活节点的 id
   */
  getActiveId: () => UniqueIdentifier;
  /**
   * 获取当前树的数据
   * @returns 当前树的数据
   */
  getValue: () => T[];
  /**
   * 添加项
   * @param item 数据
   * @param index 列表索引
   * @returns
   */
  addItem: (item?: T, index?: number) => void;
  /**
   * 删除项
   * @param index 列表索引
   * @returns
   */
  removeItem: (index: number) => void;
  /**
   * 更新项
   * @param item 更新数据
   * @param index 列表索引
   * @returns
   */
  updateItem: (item: T, index: number) => void;
}

export const useSortableList = <T>(): SortableListInstance<T> => {
  const storeApi = useStoreApi();

  const getActiveId = useMemoizedFn(() => storeApi.getState().activeId);
  const getValue = useMemoizedFn(() => storeApi.getState().value);
  const addItem = (item?: T, index?: number) =>
    storeApi.getState().dispatchListData({ type: 'addItem', item, index });
  const removeItem = (index: number) =>
    storeApi.getState().dispatchListData({ type: 'removeItem', index });
  const updateItem = (item: T, index: number) =>
    storeApi.getState().dispatchListData({ type: 'updateItem', item, index });

  return {
    getActiveId,
    getValue,
    addItem,
    removeItem,
    updateItem,
  };
};
