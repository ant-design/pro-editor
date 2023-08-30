import type { DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import isEqual from 'lodash.isequal';
import type { StateCreator } from 'zustand/vanilla';
import type { SortableListState } from '../type';
import { SortableListDispatchPayload } from '../type';
import { getIndexOfActiveItem } from '../utils';
import { initialState } from './initialState';
import { listDataReducer } from './listDataReducer';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Action {
  handleDragStart: (event: DragStartEvent) => void;
  handleDragEnd: (event: DragEndEvent) => void;
  handleDragCancel: () => void;
  dispatchListData: (payload: SortableListDispatchPayload) => void;
}

export type Store = SortableListState & Action;

const vanillaStore: StateCreator<Store, [['zustand/devtools', never]]> = (set, get) => ({
  ...initialState,
  handleDragStart: ({ active: { id: activeId } }) => {
    if (!activeId) {
      return;
    }
    set({ activeId });
  },
  handleDragEnd: ({ over, active }) => {
    const { dispatchListData, value, getId } = get();
    if (over) {
      dispatchListData({
        type: 'moveItem',
        activeIndex: getIndexOfActiveItem(value, getId, active.id),

        overIndex: getIndexOfActiveItem(value, getId, over.id),
      });
    }
    set({ activeId: null });
  },
  handleDragCancel: () => {
    set({ activeId: null });
  },
  // ===== 更新 listData 方法 ======= //
  dispatchListData: (payload) => {
    const { value, onChange, getId } = get();
    const data = listDataReducer(value, getId, payload);
    if (data) {
      if (isEqual(value, data)) return;
      set({ value: data });
      if (onChange) onChange(data, payload);
    }
  },
});

export default vanillaStore;
