import isEqual from 'fast-deep-equal';
import { produce } from 'immer';
import { memo, useCallback, useEffect } from 'react';
import { StoreApi } from 'zustand';
import { createStoreUpdater, storeApiSetState } from 'zustand-utils';
import { UseBoundStore } from 'zustand/react';
import { InjectInternalProEditor } from '../middleware/pro-editor/type';
import { useStoreApi } from '../store';

interface StoreUpdaterProps {
  store: UseBoundStore<StoreApi<any>>;
}
const StoreUpdater = memo<StoreUpdaterProps>(({ store }) => {
  const { proEditor } = store.getState();

  // =============== 前置校验 =============== //
  // 1. 包裹 proEditorMiddleware 2. 包裹 ProEditorProvider
  if (!proEditor) {
    throw Error('please wrapper your zustand store with proEditorMiddleware');
  }

  try {
    useStoreApi();
  } catch (e) {
    throw Error('Please wrap your App with <ProEditorProvider/>');
  }

  const storeApi = useStoreApi();
  const { yjsDoc, setConfig } = storeApi.getState();

  const configKey = proEditor.options.name;

  const getProEditorConfig = () => {
    return proEditor.options.partialize(store.getState());
  };

  const isEqualConfig = () => {
    const config = getProEditorConfig();
    return isEqual(config, storeApi.getState().config?.[configKey]);
  };

  // 将应用层的 store 注入 config
  const config = getProEditorConfig();

  const useStoreUpdater = createStoreUpdater(storeApi);

  useStoreUpdater('config', { [configKey]: config }, [config], (partialNewState) => {
    if (isEqualConfig()) return;

    storeApiSetState(storeApi, partialNewState, false, {
      type: `⤵️ syncData from ${configKey}`,
      payload: { config, name: configKey },
    });

    yjsDoc.updateHistoryData(partialNewState);
  });

  // TODO: 可以看下是否拆成独立的onRedoUndoChange
  useStoreUpdater(
    'onConfigChange',
    (value) => {
      const config = value.config[configKey];
      const prevConfig = getProEditorConfig();

      if (isEqual(prevConfig, config)) return;

      store.setState(
        config,
        false,
        // @ts-ignore
        { type: 'ProEditor/updateByRedoOrUndo', payload: config },
      );
    },
    [],
  );

  // =============== 注入与中间件联动的方法

  const updateConfig: typeof setConfig = useCallback((...args) => {
    if (isEqualConfig()) return;

    setConfig(...args);
  }, []);

  useEffect(() => {
    store.setState(
      produce((draft: InjectInternalProEditor) => {
        draft.proEditor.__INTERNAL_SET_CONFIG__NOT_USE_IT = updateConfig;
      }),
      false,
      // @ts-ignore
      'injectProEditor',
    );
  }, []);

  return null;
});

export default StoreUpdater;
