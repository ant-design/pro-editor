import isEqual from 'fast-deep-equal';
import { memo, useEffect } from 'react';
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

  const setState = (state, action: any) => (assetStoreApi.setState as any)(state, false, action);

  useEffect(() => {
    setState(instance, { type: '⏬ 注入 editor 方法', payload: Object.keys(instance) });
  }, []);

  // 将计算后的默认值传给面板
  // 用等式做一次优化，不然每次都会重新计算
  const defaultConfig = useStore(
    (s) =>
      s.componentAsset.defaultConfig || configSelector(s.componentAsset.getDefaultConfig(s.mode)),
    isEqual,
  );

  const proEditorStoreApi = useStoreApi();

  const syncState = (state) => setState(state, { type: '🔄 从 Editor 同步状态', payload: state });

  // 用 defaultConfig 更新一次config
  useEffect(() => {
    const state = { config: defaultConfig };
    proEditorStoreApi.setState(state);
    proEditorStoreApi.getState().yjsDoc.updateHistoryData(state);

    setConfig(config, syncState);
  }, []);

  // 将 proEditorStore 的 config 自动同步到  assetStore
  useEffect(() => {
    const assetConfig = configSelector(assetStoreApi.getState());
    if (isEqual(assetConfig, config)) return;

    setConfig(config, syncState);
  }, [config]);

  return null;
});

export default AssetStoreUpdater;
