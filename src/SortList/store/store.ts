import type { DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import isEqual from 'lodash.isequal';
import type { StateCreator } from 'zustand/vanilla';
import type { State } from './initialState';
import { initialState } from './initialState';
import { listDataReducer } from './listDataReducer';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Action {
  handleDragStart: (event: DragStartEvent) => void;
  handleDragEnd: (event: DragEndEvent) => void;
  handleDragCancel: () => void;
  dispatchListData: (payload: any) => void;
  getActiveIndex: () => number;
}

export type Store = State & Action;

const vanillaStore: StateCreator<Store, [['zustand/devtools', never]]> = (
  set,
  get,
) => ({
  ...initialState,
  handleDragStart: ({ active: { id: activeId } }) => {
    if (!activeId) {
      return;
    }
    set({ activeId });
  },
  handleDragEnd: ({ over, active }) => {
    const { dispatchListData } = get();
    if (over) {
      dispatchListData({
        type: 'moveItem',
        activeId: active.id,
        targetId: over.id,
      });
    }
    set({ activeId: null });
  },
  handleDragCancel: () => {
    set({ activeId: null });
  },
  // ===== 更新 listData 方法 ======= //
  dispatchListData: (payload) => {
    const { value, onChange, keyManager } = get();
    const { data, manager } = listDataReducer(value, keyManager, payload) || {};
    if (data) {
      if (isEqual(value, data)) return;
      set({ value: data });
      if (onChange) onChange(data);
    }
    if (manager) {
      set({ keyManager: manager });
    }
  },

  getActiveIndex: () => {
    const { keyManager, activeId } = get();
    const activeIndex = activeId ? keyManager.keys.indexOf(activeId) : -1;
    return activeIndex;
  },
});

export default vanillaStore;
