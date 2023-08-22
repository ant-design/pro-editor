import isEqual from 'fast-deep-equal';
import { createWithEqualityFn } from 'zustand/traditional';

import { CreateAssetStore } from './createAssetStore';

/**
 * 创建测试用的 AssetStore，请不要在生产环境使用
 * @param createStore
 */
export const createTestAssetStore = <T>(createStore: CreateAssetStore<T>) => {
  const useEditorStore = createWithEqualityFn<{
    config: T;
    setConfig: (config: T) => void;
    getConfig: () => T;
  }>(
    (set, get) => ({
      config: null,
      setConfig: (config) => {
        set({ config: { ...get().config, ...config } });
      },
      getConfig: () => {
        return get().config;
      },
    }),
    isEqual,
  );

  const useAssetStore = createWithEqualityFn<T>(createStore, isEqual);
  const { getConfig, setConfig } = useEditorStore.getState();

  const init = () => {
    useAssetStore.setState({ getConfig, setConfig } as any);

    useEditorStore.subscribe(({ config }) => {
      useAssetStore.setState(config);
    });
  };

  return { useAssetStore, init, useEditorStore };
};
