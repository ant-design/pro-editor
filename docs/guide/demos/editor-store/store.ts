import isEqual from 'fast-deep-equal';
import type { StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createWithEqualityFn } from 'zustand/traditional';

import { EditorStoreState, initialState } from './initalState';
import { CrudSlice, createCrudSlice } from './slices/crud';

export type EditorStore = EditorStoreState & CrudSlice;

const vanillaStore: StateCreator<EditorStore, [['zustand/devtools', never]]> = (...params) => ({
  ...initialState,
  ...createCrudSlice(...params),
});

export const createEditorStore = createWithEqualityFn<EditorStore>()(
  devtools(vanillaStore, { name: 'EditorStore' }),
  isEqual,
);
