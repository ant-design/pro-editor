import { StateCreator } from 'zustand';

import { ComponentAsset } from '@/ComponentAsset';

import { InternalProEditorStore } from '../createStore';

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
}

const initialConfigState: ConfigSliceState = {
  // 资产
  componentAsset: null,

  // 文件配置属性
  config: null,
  onConfigChange: null,
  props: {},
};

// ======== action ======== //

export interface ConfigPublicAction {
  /**
   * 导出配置
   */
  exportConfig: () => void;
  resetConfig: () => void;
  updateConfig: <T>(config: Partial<T>) => void;
}

export interface ConfigSlice extends ConfigPublicAction, ConfigSliceState {
  /**
   * 内部更新配置
   **/
  internalUpdateConfig: <T>(config: Partial<T>) => void;
}

export const configSlice: StateCreator<
  InternalProEditorStore,
  [['zustand/devtools', never]],
  [],
  ConfigSlice
> = (set, get) => ({
  ...initialConfigState,
  resetConfig: () => {
    set({ config: initialConfigState.config, props: initialConfigState.props });
  },
  /**
   * 内部修改 config 方法
   * 传给 ProTableStore 进行 config 同步
   */
  internalUpdateConfig: (config) => {
    const { onConfigChange, componentAsset } = get();

    const nextConfig = { ...get().config, ...config };

    set({ config: nextConfig }, false, '🕹内部更新：config');

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

  updateConfig: (config) => {
    get().internalUpdateConfig(config);
  },
});
