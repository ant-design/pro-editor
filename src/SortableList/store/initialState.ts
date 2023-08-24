import { SortableListState } from '../type';

export const initialState: SortableListState = {
  activeId: null,
  value: [],
  compact: false,
  hideRemove: false,
  onChange: undefined,
  renderHeader: undefined,
  renderContent: undefined,
  getItemStyles: () => ({}),
  actions: [],
};
