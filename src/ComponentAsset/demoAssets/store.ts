import type { StoreApi } from 'zustand';
import { create } from 'zustand';
import { createContext } from 'zustand-utils';

export interface ButtonConfig {
  content: {
    icon: string;
    text: string;
  };
}
export interface ButtonStore extends ButtonConfig {
  setText: (text: string) => void;
}

const createStore = () =>
  create<ButtonStore>((set, get) => ({
    content: {
      text: '123',
      icon: '',
    },

    setText: (text) => {
      const { content } = get();
      set({ content: { ...content, text } });
    },
  }));

const { Provider, useStore } = createContext<StoreApi<ButtonStore>>();

export { Provider, createStore, useStore };
