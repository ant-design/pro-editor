import { useMemoizedFn } from 'ahooks';
import { useMemo } from 'react';
import { Viewport } from 'reactflow';

import { AwarenessEditor, PublicProEditorStore, useStoreApi } from '../store';

export interface ProEditorInstance<Config = any, Props = any> extends PublicProEditorStore {
  // 提供 get 方法来拿最新值
  getEditorAwareness: () => AwarenessEditor;
  getViewport: () => Viewport;
  getConfig: () => Config;
  getProps: () => Props;
}

export const useProEditor = <T>(): ProEditorInstance<T> => {
  const storeApi = useStoreApi();

  const { deselectCanvas, updateConfig, exportConfig, resetConfig } = storeApi.getState();

  const getViewport = useMemoizedFn(() => storeApi.getState().editorAwareness.viewport);
  const getEditorAwareness = useMemoizedFn(() => storeApi.getState().editorAwareness);
  const getConfig = useMemoizedFn(() => storeApi.getState().config);
  const getProps = useMemoizedFn(() => storeApi.getState().props);

  return useMemo(
    () => ({
      updateConfig,
      deselectCanvas,
      exportConfig,
      resetConfig,
      getViewport,
      getConfig,
      getProps,
      getEditorAwareness,
    }),
    [updateConfig, deselectCanvas, exportConfig],
  );
};
