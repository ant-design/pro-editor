import hash from 'object-hash';
import { SortableItem, SortableListState } from '../type';

export const initialState: SortableListState = {
  activeId: null,
  value: [],
  keyManager: [],
  hideRemove: false,
  onChange: undefined,
  renderItem: undefined,
  actions: [],
  // 默认从 id 中取，如果没有 id 则使用 hash 生成，无法保证唯一性
  getId: (item: SortableItem, index: number) => {
    return item?.id || `${hash(item)}-${index}`;
  },
  getItemStyles: () => ({}),
};
