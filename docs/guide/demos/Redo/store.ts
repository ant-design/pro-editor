import { proEditorMiddleware, ProEditorOptions } from '@ant-design/pro-editor';
import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

interface Store {
  tabs: string;
  plus: () => void;
  plusWithoutHistory: () => void;
  data: number;
  switchTabs: (key: string) => void;
}

const createStore: StateCreator<Store, [['zustand/devtools', never], ['pro-editor', never]]> = (
  set,
  get,
) => ({
  tabs: '1',
  switchTabs: (key) => {
    set({ tabs: key });
  },
  plusWithoutHistory: () => {
    set((s) => ({ ...s, data: s.data + 2 }), false, {
      type: 'plusWithoutHistory',
      recordHistory: false,
    });
  },

  plus: () => {
    const nextData = get().data + 1;

    set({ data: nextData }, false, {
      type: 'plus',
      payload: nextData,
      name: '+1',
      recordHistory: true,
    });
  },
  data: 3,
});

interface ProEditorStore {
  data: number;
}

const storeName = 'redo-demo-app';

const proEditorOptions: ProEditorOptions<Store, ProEditorStore> = {
  name: storeName,
  partialize: (s) => ({ data: s.data }),
};

export const useStore = create<Store>()(
  devtools(proEditorMiddleware(createStore, proEditorOptions), { name: storeName }),
);
