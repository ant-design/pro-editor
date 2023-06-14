import { CreateAssetStore, createUseAssetStore } from '@ant-design/pro-editor';

export interface ButtonConfig {
  content: {
    icon: string;
    text: string;
  };
}
export interface ButtonStore extends ButtonConfig {
  setText: (text: string) => void;
}

const createStore: CreateAssetStore<ButtonStore> = (set, get) => ({
  content: {
    text: '123',
    icon: '',
  },

  setText: (text) => {
    const { content } = get();
    set({ content: { ...content, text } });
  },
});

const { useStore } = createUseAssetStore<ButtonStore>();

export { createStore, useStore };
