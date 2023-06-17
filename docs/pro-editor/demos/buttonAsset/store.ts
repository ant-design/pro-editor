import { CreateAssetStore, createUseAssetStore } from '@/index';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ButtonStore {}

const createStore: CreateAssetStore<ButtonStore> = () => ({});

const { useStore } = createUseAssetStore<ButtonStore>();

export { createStore, useStore };
