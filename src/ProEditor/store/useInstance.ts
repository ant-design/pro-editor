import { useCallback, useMemo } from 'react';
import { Viewport } from 'reactflow';

import { useStoreApi } from './createStore';
import { PresenceEditor } from './initialState';
import { ProEditorStore } from './store';

export interface ProEditorInstance<Config = any, Props = any>
  extends Omit<
    ProEditorStore,
    // 移除所有 react 式的状态
    | 'props'
    | 'config'
    | 'interaction'
    | 'presenceEditor'
    | 'presenceAsset'
    // 不需要 on 方法
    | 'onCanvasError'
    | 'onPresenceEditorChange'
    | 'onPresenceAssetChange'
    | 'onConfigChange'
    | 'onInteractionChange'
    // 内部更新方法
    | 'syncOutSource'
    | 'internalSetState'
    | 'internalUpdateCanvasInteract'
    | 'internalUpdatePresenceEditor'
    | 'internalUpdatePresenceAsset'
    | 'internalUpdateConfig'
  > {
  // 提供 get 方法来拿最新值
  getPresenceEditor: () => PresenceEditor;
  getViewport: () => Viewport;

  getConfig: () => Config;
  setConfig: (config: Partial<Config>) => void;

  getProps: () => Props;
}

export const useInstance = <T>(): ProEditorInstance<T> => {
  const storeApi = useStoreApi();

  const {
    interaction,
    config,
    props,
    presenceEditor,
    presenceAsset,
    // on 方法
    onConfigChange,
    onInteractionChange,
    onPresenceAssetChange,
    onPresenceEditorChange,
    onCanvasError,
    // 内部更新方法
    syncOutSource,
    internalUpdatePresenceAsset,
    internalUpdateConfig,
    internalSetState,
    internalUpdatePresenceEditor,
    internalUpdateCanvasInteract,
    // 最终提供给 editor 实例的值
    ...editor
  } = storeApi.getState();

  const getViewport = useCallback(
    () => storeApi.getState().presenceEditor.viewport,
    [],
  );

  const getPresenceEditor = useCallback(
    () => storeApi.getState().presenceEditor,
    [],
  );
  const getConfig = useCallback(() => storeApi.getState().config, []);

  const setConfig = useCallback((config) => {
    internalUpdateConfig(config);
  }, []);

  const getProps = useCallback(() => storeApi.getState().props, []);

  return useMemo(
    () => ({
      ...editor,
      getViewport,
      getConfig,
      setConfig,
      getProps,
      getPresenceEditor,
    }),
    [editor],
  );
};
