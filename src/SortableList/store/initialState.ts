import { SortableItem, SortableListState } from '../type';

export const initialState: SortableListState = {
  activeId: null,
  value: [],
  hideRemove: false,
  onChange: undefined,
  renderItem: undefined,
  actions: [],
  // 默认从 id 中取，如果没有 id 则取 index
  getId: (item: SortableItem, index: number) => {
    return item?.id || index;
  },
  getItemStyles: () => ({}),
};
