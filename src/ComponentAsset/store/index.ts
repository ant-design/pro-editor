import { StateCreator, StoreApi, create } from 'zustand';
import { UseContextStore, createContext, optionalDevtools } from 'zustand-utils';
import { DevtoolsOptions } from 'zustand/middleware';

import { PublicProEditorStore } from '@/ProEditor/store';
import { ReactNode } from 'react';

export interface AssetStoreOptions<T = any> {
  devtools?: boolean | DevtoolsOptions;
  getConfig?: (state: any) => T;
  setConfig?: (config: T, set) => void;
}

export type CreateAssetStore<T> = StateCreator<
  T & PublicProEditorStore,
  [['zustand/devtools', never]],
  [],
  T
>;

const { Provider, useStore, useStoreApi } = createContext<StoreApi<any>>();

export const createAssetStore = <T>(
  createStore: StateCreator<T>,
  options?: AssetStoreOptions<T>,
) => {
  const store = () => {
    const devtoolsOptions =
      options?.devtools === false
        ? {}
        : options?.devtools === true
        ? { name: 'ProEditor-AssetStore' }
        : options?.devtools;

    const devtools = optionalDevtools(!(options?.devtools === false));

    return create<T>()(devtools(createStore, devtoolsOptions));
  };

  return { Provider, createStore: store, useStoreApi };
};

export type WithoutCallSignature<T> = {
  [K in keyof T]: T[K];
};

export const createUseAssetStore = <T>(): {
  useStore: UseContextStore<StoreApi<T & PublicProEditorStore>>;
  useStoreApi: () => WithoutCallSignature<StoreApi<T & PublicProEditorStore>>;
  AssetProvider: ({
    createStore,
    children,
  }: {
    createStore: () => StoreApi<T>;
    children: any;
  }) => ReactNode;
} => ({ useStore, useStoreApi, AssetProvider: Provider });
