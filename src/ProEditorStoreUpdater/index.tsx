import { useStoreApi } from '@/ProEditor/store';
import isEqual from 'fast-deep-equal';
import { produce } from 'immer';
import { memo, useEffect } from 'react';
import { StoreApi } from 'zustand';
import { createStoreUpdater, storeApiSetState } from 'zustand-utils';
import { UseBoundStore } from 'zustand/react';

interface ProEditorStoreUpdaterProps {
  store: UseBoundStore<StoreApi<any>>;
}
const ProEditorStoreUpdater = memo<ProEditorStoreUpdaterProps>(({ store }) => {
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

  const useStoreUpdater = createStoreUpdater(storeApi);
  const { yjsDoc, setConfig } = storeApi.getState();

  const getProEditorConfig = () => {
    return proEditor.options.partialize(store.getState());
  };
  // 将应用层的 store 注入 config
  const config = getProEditorConfig();

  // 结合 yjs 进行变更
  useStoreUpdater('config', config, [], (partialNewState) => {
    if (isEqual(config, storeApi.getState().config)) return;

    storeApiSetState(storeApi, partialNewState, false, {
      type: `⤵️ syncData from ${proEditor.options.name}`,
      payload: config,
    });

    yjsDoc.updateHistoryData(partialNewState);
  });

  // TODO: 可以看下是否拆成独立的onRedoUndoChange
  useStoreUpdater(
    'onConfigChange',
    ({ config }) => {
      const prevConfig = getProEditorConfig();
      if (isEqual(prevConfig, config)) return;

      store.setState(config, false, { type: 'ProEditor/updateByRedoOrUndo', payload: config });
    },
    [],
  );

  // 将 ProEditor 中的 undo、redo 等方法注入到 store 中
  useEffect(() => {
    store.setState(
      produce((draft) => {
        draft.proEditor.__INTERNAL_SET_CONFIG__NOT_USE_IT = setConfig;
      }),
      false,
      'injectProEditor',
    );
  }, []);

  return null;
});

export default ProEditorStoreUpdater;
