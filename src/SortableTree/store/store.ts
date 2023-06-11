import type { StateCreator } from 'zustand/vanilla';

import type { State } from './initialState';
import { initialState } from './initialState';
import { TreeDataPublicAction, TreeDataSliceAction, crudSlice } from './slices/crudSlice';
import { DndAction, dndSlice } from './slices/dndSlice';
import {
  SelectionPublicAction,
  SelectionSliceAction,
  selectionSlice,
} from './slices/selectionSlice';

export type InternalSortableTreeStore = State &
  TreeDataSliceAction &
  DndAction &
  SelectionSliceAction;

// 对外暴露的实例中的方法
export type PublicSortableTreeStore = TreeDataPublicAction & SelectionPublicAction;

const vanillaStore: StateCreator<InternalSortableTreeStore, [['zustand/devtools', never]]> = (
  ...params
) => ({
  ...initialState,
  ...dndSlice(...params),
  ...selectionSlice(...params),
  ...crudSlice(...params),
});

export default vanillaStore;
