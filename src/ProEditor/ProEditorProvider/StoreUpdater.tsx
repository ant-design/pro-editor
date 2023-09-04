import isEqual from 'fast-deep-equal';
import { produce } from 'immer';
import { memo, useCallback, useEffect } from 'react';
import { StoreApi } from 'zustand';
import { createStoreUpdater, storeApiSetState } from 'zustand-utils';
import { UseBoundStore } from 'zustand/react';
import { useStoreApi } from '../store';

interface StoreUpdaterProps {
  store: UseBoundStore<StoreApi<any>>;
}
const StoreUpdater = memo<StoreUpdaterProps>(({ store }) => {
  const { proEditor } = store.getState();

  // 前置校验： 1. 包裹 proEditorMiddleware 2. 包裹 ProEditorProvider
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

  useStoreUpdater('config', { [configKey]: config }, [], (partialNewState) => {
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

      store.setState(config, false, { type: 'ProEditor/updateByRedoOrUndo', payload: config });
    },
    [],
  );

  const updateConfig: typeof setConfig = useCallback((...args) => {
    if (isEqualConfig()) return;

    setConfig(...args);
  }, []);

  // 将 ProEditor 中的 undo、redo 等方法注入到 store 中
  useEffect(() => {
    store.setState(
      produce((draft) => {
        draft.proEditor.__INTERNAL_SET_CONFIG__NOT_USE_IT = updateConfig;
      }),
      false,
      'injectProEditor',
    );
  }, []);

  return null;
});

export default StoreUpdater;
