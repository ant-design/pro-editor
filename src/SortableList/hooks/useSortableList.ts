import { useMemoizedFn } from 'ahooks';
import { useStoreApi } from '../store';
import { UniqueIdentifier } from '../type';
/**
 * SortableList 实例对象
 * @template T 节点数据类型
 */
export interface SortableListInstance {
  /**
   * 获取当前激活节点的 id
   * @returns 当前激活节点的 id
   */
  getActiveId: () => UniqueIdentifier;
  /**
   * 根据索引获取 id
   * @param index
   * @returns
   */
  getIdByIndex: (index: number) => UniqueIdentifier;
  /**
   * 获取当前列表的数据
   * @returns 当前列表的数据
   */
  getValue: () => any[];
  /**
   * 添加项
   * @param item 数据
   * @param index 列表索引
   * @returns
   */
  addItem: (item?: any, index?: number) => void;
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
  updateItem: (item: any, index: number) => void;
}

export const useSortableList = (): SortableListInstance => {
  const storeApi = useStoreApi();

  const getActiveId = useMemoizedFn(() => storeApi.getState().activeId);
  const getIdByIndex = useMemoizedFn((index?: number) => {
    const { keyManager } = storeApi.getState();
    const indexId = keyManager[index] || null;
    return indexId;
  });
  const getValue = useMemoizedFn(() => storeApi.getState().value);
  const addItem = (item?: any, index?: number) =>
    storeApi.getState().dispatchListData({ type: 'addItem', item, index });
  const removeItem = (index: number) =>
    storeApi.getState().dispatchListData({ type: 'removeItem', index });
  const updateItem = (item: Partial<any>, index: number) =>
    storeApi.getState().dispatchListData({ type: 'updateItem', item, index });

  return {
    getActiveId,
    getValue,
    addItem,
    removeItem,
    getIdByIndex,
    updateItem,
  };
};
