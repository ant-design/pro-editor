import { yjsMiddleware } from '@ant-design/pro-editor';
import isEqual from 'fast-deep-equal';
import { Doc } from 'yjs';
import type { StoreApi } from 'zustand';
import { createContext } from 'zustand-utils';
import { createWithEqualityFn } from 'zustand/traditional';

interface Store {
  count: number;
  text: string;
  increment: () => void;
  updateText: (text: string) => void;
}

export const doc = new Doc();

export const createStore = () =>
  createWithEqualityFn<Store>(
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
    isEqual,
  );

export const { useStore, Provider } = createContext<StoreApi<Store>>();
