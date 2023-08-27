import { SortableListState } from '../type';

export const initialState: SortableListState = {
  activeId: null,
  value: [],
  hideRemove: false,
  onChange: undefined,
  renderItem: undefined,
  actions: [],
  getItemStyles: () => ({}),
};
