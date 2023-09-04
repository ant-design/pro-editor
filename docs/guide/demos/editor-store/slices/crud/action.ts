import { StateCreator } from 'zustand';
import { EditorStore } from '../../store';

export interface CrudSlice {
  increment: () => void;
  updateText: (text: string) => void;
}

export const createCrudSlice: StateCreator<
  EditorStore,
  [['zustand/devtools', never]],
  [],
  CrudSlice
> = (set) => ({
  increment: () =>
    set((state) => ({
      ...state,
      count: state.count + 1,
    })),
  updateText: (text) => set((state) => ({ ...state, text })),
});
