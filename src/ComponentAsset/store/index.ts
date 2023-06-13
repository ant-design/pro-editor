import { StateCreator, StoreApi, create } from 'zustand';
import { UseContextStore, createContext, optionalDevtools } from 'zustand-utils';
import { DevtoolsOptions } from 'zustand/middleware';

import { PublicProEditorStore } from '@/ProEditor/store';

export interface AssetStoreOptions<T = any> {
  initialState: T;
  devtools?: false | DevtoolsOptions;
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
    const devtoolsOptions = options?.devtools;
    const devtools = optionalDevtools(!!devtoolsOptions);

    const initialState = options?.initialState || {};

    return create<T>()(
      devtools(
        (...params) => ({ ...createStore(...params), ...initialState }),
        !devtoolsOptions ? {} : devtoolsOptions,
      ),
    );
  };

  return { Provider, createStore: store };
};

type WithoutCallSignature<T> = {
  [K in keyof T]: T[K];
};

export const createUseAssetStore = <T>(): {
  useStore: UseContextStore<StoreApi<T>>;
  useStoreApi: () => WithoutCallSignature<StoreApi<T>>;
} => ({ useStore, useStoreApi });
