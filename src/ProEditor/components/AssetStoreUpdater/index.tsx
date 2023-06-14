import isEqual from 'fast-deep-equal';
import { memo, useEffect } from 'react';
import { createStoreUpdater } from 'zustand-utils';
import { shallow } from 'zustand/shallow';

import { useProEditor } from '../../hooks/useProEditor';
import { useStore, useStoreApi } from '../../store';

const AssetStoreUpdater = memo(() => {
  const instance = useProEditor();

  const [useAssetStoreApi, useAssetStore, configSelector] = useStore(
    (s) => [
      s.componentAsset.componentStoreApi,
      s.componentAsset.componentStore,
      s.componentAsset.configSelector,
    ],
    shallow,
  );
  const assetStoreApi = useAssetStoreApi();

  // 将 instance 的方法全部同步到 assetStore
  useEffect(() => {
    assetStoreApi.setState({ ...instance });
  }, []);

  // 将计算后的默认值传给面板
  // 用等式做一次优化，不然每次都会重新计算
  const defaultConfig = useStore((s) => s.componentAsset.getDefaultConfig(s.mode), isEqual);

  const proEditorStoreApi = useStoreApi();
  const useStoreUpdater = createStoreUpdater(proEditorStoreApi);
  // 用 defaultConfig 更新一次config
  useStoreUpdater('config', defaultConfig, []);

  // 将 assetStore 的 config 自动同步到 proEditorStore
  const assetConfig = useAssetStore(configSelector, isEqual);
  useEffect(() => {
    if (typeof assetConfig === 'undefined') return;
    if (isEqual(assetConfig, proEditorStoreApi.getState().config)) return;

    proEditorStoreApi.setState({ config: assetConfig });
  }, [assetConfig]);

  return null;
});

export default AssetStoreUpdater;
