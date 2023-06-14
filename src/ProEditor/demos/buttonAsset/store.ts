import { CreateAssetStore, createUseAssetStore } from '@ant-design/pro-editor';

import { ButtonConfig } from './models';

export interface ButtonStore {
  content: ButtonConfig;
  updateContent: (content: Partial<ButtonConfig>, replace?: boolean) => void;
}

const createStore: CreateAssetStore<ButtonStore> = (set, get) => ({
  content: {
    children: '默认按钮',
  },

  updateContent: (content, replace) => {
    const config = replace ? (content as ButtonConfig) : { ...get().content, ...content };
    set({ content: config });
  },
});

const { useStore } = createUseAssetStore<ButtonStore>();

export { createStore, useStore };
