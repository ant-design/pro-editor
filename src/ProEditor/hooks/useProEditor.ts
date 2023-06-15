import { useMemoizedFn } from 'ahooks';
import { useMemo } from 'react';
import { Viewport } from 'reactflow';

import { AwarenessPublicAction } from '@/ProEditor/store/slices/awareness';
import { CanvasPublicAction } from '@/ProEditor/store/slices/canvas';
import { ConfigPublicAction } from '@/ProEditor/store/slices/config';
import { ConfigPanelPublicAction } from '@/ProEditor/store/slices/configPanel';
import { GeneralPublicAction } from '@/ProEditor/store/slices/general';
import { AwarenessEditor, useStoreApi } from '../store';

/**
 * ProEditor 实例对象
 * @template Config - 配置信息的类型
 * @template Props - 组件属性的类型
 */
export interface ProEditorInstance<Config = any, Props = any>
  extends CanvasPublicAction,
    ConfigPanelPublicAction,
    ConfigPublicAction,
    GeneralPublicAction,
    AwarenessPublicAction {
  /**
   * 获取编辑器的 Awareness 对象
   * @returns {AwarenessEditor} - 编辑器的 Awareness 对象
   */
  getEditorAwareness: () => AwarenessEditor;
  /**
   * 获取当前视口信息
   * @returns {Viewport} - 当前视口信息
   */
  getViewport: () => Viewport;
  /**
   * 获取配置信息
   * @returns {Config} - 配置信息
   */
  getConfig: () => Config;
  /**
   * 获取组件属性
   * @returns {Props} - 组件属性
   */
  getProps: () => Props;
}

export const useProEditor = <T>(): ProEditorInstance<T> => {
  const storeApi = useStoreApi();

  const {
    deselectCanvas,
    undoStack,
    redoStack,
    setConfig,
    exportConfig,
    setViewport,
    resetConfig,
    undo,
    redo,
    setCanvasInteraction,
    togglePanelExpand,
  } = storeApi.getState();

  const getViewport = useMemoizedFn(() => storeApi.getState().editorAwareness.viewport);
  const getEditorAwareness = useMemoizedFn(() => storeApi.getState().editorAwareness);
  const getConfig = useMemoizedFn(() => storeApi.getState().config);
  const getProps = useMemoizedFn(() => storeApi.getState().props);
  const getCanvasInteraction = useMemoizedFn(() => storeApi.getState().interaction);

  return useMemo(
    () => ({
      getConfig,
      setConfig,
      exportConfig,
      resetConfig,

      getViewport,
      setViewport,

      getCanvasInteraction,
      setCanvasInteraction,
      deselectCanvas,

      undo,
      redo,
      undoStack,
      redoStack,

      getProps,
      getEditorAwareness,

      togglePanelExpand,
    }),
    [],
  );
};
