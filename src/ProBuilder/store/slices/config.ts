import isEqual from 'fast-deep-equal';
import merge from 'lodash.merge';
import { StateCreator } from 'zustand';

import { ComponentAsset } from '@/ComponentAsset';

import { DocWithHistoryManager } from '../../utils/yjs';
import { InternalProBuilderStore } from '../createStore';

// ======== state ======== //

interface EditorOnChangePayload<Config> {
  config: Config;
  props: any;
  isEmpty: boolean;
}

export type OnConfigChange<Config> = (payload: EditorOnChangePayload<Config>) => void;

export interface ConfigPublicState<Config = any> {
  /** 所有组件资产 */
  componentAsset?: ComponentAsset<Config>;

  /** 编辑器的配置属性 */
  config?: Config;
  /**
   * 编辑器的配置属性变化时的回调函数
   * @param config - 编辑器的配置属性
   */
  onConfigChange?: OnConfigChange<Config>;
}

export interface ConfigSliceState extends ConfigPublicState {
  /** 组件的 props */
  props?: any;
  yjsDoc: DocWithHistoryManager<{ config: any }>;
}

// ======== action ======== //

export interface ActionPayload {
  type: string;
  payload: any;
}

export interface ActionOptions {
  recordHistory?: boolean;
  replace?: boolean;
  trigger?: string;
  type?: string;
  name?: string;
}

/**
 * 公共配置操作接口
 */
export interface ConfigPublicAction {
  /**
   * 导出配置
   */
  exportConfig: () => void;
  /**
   * 重置配置
   */
  resetConfig: () => void;
  /**
   * 更新配置
   * @template T - 配置对象类型
   * @param {Partial<T>} config - 需要更新的配置对象
   * @param {ActionOptions} [options] - 配置项
   */
  setConfig: <T>(config: Partial<T>, options?: ActionOptions) => void;
}

export interface ConfigSlice extends ConfigPublicAction, ConfigSliceState {
  /**
   * 内部更新配置
   **/
  internalUpdateConfig: <T>(config: Partial<T>, payload?: ActionPayload, replace?: boolean) => void;
}

export const configSlice: StateCreator<
  InternalProBuilderStore,
  [['zustand/devtools', never]],
  [],
  ConfigSlice
> = (set, get) => {
  const initialConfigState: ConfigSliceState = {
    // 资产
    componentAsset: null,

    // 文件配置属性
    config: null,
    onConfigChange: null,
    props: {},
    yjsDoc: new DocWithHistoryManager<{ config: any }>(),
  };

  return {
    ...initialConfigState,

    resetConfig: () => {
      set({ config: initialConfigState.config, props: initialConfigState.props });
    },
    /**
     * 内部修改 config 方法
     * 传给 ProTableStore 进行 config 同步
     */
    internalUpdateConfig: (config, payload, replace) => {
      const { onConfigChange, componentAsset } = get();

      const nextConfig = replace ? config : { ...get().config, ...config };

      set({ config: nextConfig }, false, payload);

      onConfigChange?.({
        config: nextConfig,
        props: componentAsset?.generateProps(nextConfig),
        isEmpty: componentAsset?.isStarterMode(nextConfig),
      });
    },

    exportConfig: () => {
      const eleLink = document.createElement('a');
      eleLink.download = 'pro-edior-config.json';
      eleLink.style.display = 'none';
      const blob = new Blob([JSON.stringify(get().config)]);
      eleLink.href = URL.createObjectURL(blob);
      document.body.appendChild(eleLink);
      eleLink.click();
      document.body.removeChild(eleLink);
    },

    setConfig: (config, options = {}) => {
      if (isEqual(config, get().config)) return;

      const { replace, recordHistory, name, type, trigger } = options;

      get().internalUpdateConfig(
        config,
        {
          type: `setConfig/${trigger || 'unknown'}`,
          payload: { config, options },
        },
        replace,
      );

      const useAction = merge({}, { recordHistory: true }, { recordHistory, name, type });

      if (useAction.recordHistory) {
        get().yjsDoc.recordHistoryData({ config }, { ...useAction, timestamp: Date.now() });
      }
    },
  };
};
