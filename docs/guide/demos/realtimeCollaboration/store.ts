import { Doc } from 'yjs';
import type { StoreApi } from 'zustand';
import { create } from 'zustand';
import { createContext } from 'zustand-utils';

import { yjsMiddleware } from '@ant-design/pro-editor';

interface Store {
  count: number;
  text: string;
  increment: () => void;
  updateText: (text: string) => void;
}

export const doc = new Doc();

export const createStore = () =>
  create<Store>(
    yjsMiddleware<Store>(doc, 'shared', (set) => ({
      count: 0,
      text: '',
      users: [],
      increment: () =>
        set((state) => ({
          ...state,
          count: state.count + 1,
        })),
      updateText: (text) => set((state) => ({ ...state, text })),
    })),
  );

export const { useStore, Provider } = createContext<StoreApi<Store>>();
