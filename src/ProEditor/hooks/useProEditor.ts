import { useMemoizedFn } from 'ahooks';
import { useMemo } from 'react';

import { ConfigPublicAction } from '../store/slices/config';
import { GeneralPublicAction } from '../store/slices/general';

import { useStoreApi } from '../store';

/**
 * ProBuilder 实例对象
 * @template Config - 配置信息的类型
 * @template Props - 组件属性的类型
 */
export interface ProEditorInstance<Config = any, Props = any>
  extends ConfigPublicAction,
    GeneralPublicAction {
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
    undoStack,
    undoLength,
    redoLength,
    redoStack,
    setConfig,
    exportConfig,
    resetConfig,
    undo,
    redo,
  } = storeApi.getState();

  const getConfig = useMemoizedFn(() => storeApi.getState().config);
  const getProps = useMemoizedFn(() => storeApi.getState().props);

  return useMemo(
    () => ({
      getConfig,
      setConfig,
      exportConfig,
      resetConfig,

      undo,
      redo,
      undoStack,
      redoStack,
      undoLength,
      redoLength,

      getProps,
    }),
    [],
  );
};
