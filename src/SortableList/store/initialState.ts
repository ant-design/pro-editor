import { SortableListState } from '../type';

export const initialState: SortableListState = {
  activeId: null,
  value: [],
  keyManager: [],
  hideRemove: false,
  handle: true,
  onChange: undefined,
  renderItem: undefined,
  actions: [],
  getItemStyles: () => ({}),
};
