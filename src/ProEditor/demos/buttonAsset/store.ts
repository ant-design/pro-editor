import { CreateAssetStore, createUseAssetStore } from '@ant-design/pro-editor';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ButtonStore {}

const createStore: CreateAssetStore<ButtonStore> = () => ({});

const { useStore } = createUseAssetStore<ButtonStore>();

export { createStore, useStore };
