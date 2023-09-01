import isEqual from 'fast-deep-equal';
import { ReactNode } from 'react';
import { StateCreator, StoreApi } from 'zustand';
import { UseContextStore, createContext, optionalDevtools } from 'zustand-utils';
import { DevtoolsOptions } from 'zustand/middleware';
import { createWithEqualityFn } from 'zustand/traditional';

import type { ProBuilderInstance } from '@/ProBuilder';

export interface AssetStoreOptions<T = any> {
  devtools?: boolean | DevtoolsOptions;
  getConfig?: (state: any) => T;
  setConfig?: (config: T, set) => void;
}

export type CreateAssetStore<T> = StateCreator<
  T & ProBuilderInstance,
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

    return createWithEqualityFn<T>()(devtools(createStore, devtoolsOptions), isEqual);
  };

  return { Provider, createStore: store, useStoreApi };
};

export type WithoutCallSignature<T> = {
  [K in keyof T]: T[K];
};

export const createUseAssetStore = <T>(): {
  useStore: UseContextStore<StoreApi<T & ProEditorInstance>>;
  useStoreApi: () => WithoutCallSignature<StoreApi<T & ProEditorInstance>>;
  AssetProvider: ({
    createStore,
    children,
  }: {
    createStore: () => StoreApi<T>;
    children: any;
  }) => ReactNode;
} => ({ useStore, useStoreApi, AssetProvider: Provider });
