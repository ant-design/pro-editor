import { SortableListState } from '../type';

export const initialState: SortableListState = {
  activeId: null,
  value: [],
  keyManager: {
    keys: [],
    id: 1, // 自增
  },
  compact: false,
  hideRemove: false,
  onChange: undefined,
  renderHeader: undefined,
  renderContent: undefined,
  getItemStyles: () => ({}),
  actions: [],
};
