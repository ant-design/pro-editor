import isEqual from 'fast-deep-equal';
import { memo, useEffect } from 'react';
import { storeApiSetState } from 'zustand-utils';
import { shallow } from 'zustand/shallow';

import { useProEditor } from '../../hooks/useProEditor';
import { useStore, useStoreApi } from '../../store';

const AssetStoreUpdater = memo(() => {
  const instance = useProEditor();

  const [useAssetStoreApi, configSelector, setConfig, config] = useStore(
    (s) => [
      s.componentAsset.componentStoreApi,
      s.componentAsset.configSelector,
      s.componentAsset.setConfig,
      s.config,
    ],
    shallow,
  );
  const assetStoreApi = useAssetStoreApi();

  useEffect(() => {
    storeApiSetState(assetStoreApi, instance, false, {
      type: '⏬ 注入 editor 方法',
      payload: Object.keys(instance),
    });
  }, []);

  // 将计算后的默认值传给面板
  // 用等式做一次优化，不然每次都会重新计算
  const defaultConfig = useStore((s) => {
    let config;
    if (s.componentAsset.defaultConfig) {
      config = s.componentAsset.defaultConfig;
    } else {
      if (s.componentAsset.configSelector) {
        config = s.componentAsset.configSelector(s.componentAsset.getDefaultConfig(s.mode));
      } else {
        config = s.componentAsset.getDefaultConfig(s.mode);
      }
    }

    return config;
  }, isEqual);

  const proEditorStoreApi = useStoreApi();

  // 用 defaultConfig 更新 config
  useEffect(() => {
    if (!!config) return;
    const state = { config: defaultConfig };
    storeApiSetState(proEditorStoreApi, state, false, {
      type: '⏬ 注入初始化 config',
      payload: state,
    });
    proEditorStoreApi.getState().yjsDoc.updateHistoryData(state);

    setConfig(defaultConfig, (state) => {
      storeApiSetState(assetStoreApi, state, false, { type: '🔄 初始化状态', payload: state });
    });
  }, [defaultConfig]);

  // 将 proEditorStore 的 config 自动同步到  assetStore
  useEffect(() => {
    if (!!config) {
      const assetConfig = configSelector(assetStoreApi.getState());
      if (isEqual(assetConfig, config)) return;

      setConfig(config, (state) => {
        storeApiSetState(assetStoreApi, state, false, {
          type: '🔄 同步 Editor 状态',
          payload: state,
        });
      });
    }
  }, [config]);

  return null;
});

export default AssetStoreUpdater;
