/*eslint no-invalid-this: "error"*/
import { getDefaultValueFromSchema } from '@c2d2c/utils';
import { FC, ReactNode } from 'react';
import { StoreApi } from 'zustand';
import type { UseBoundStore } from 'zustand/react';

import type { EditorMode } from '../ProEditor';
import type { AssetModels, CanvasRule, CodeEmitter, ComponentAssetParams } from './types';
import { DataProvider, EmitterEnv } from './types';

import { createAssetStore, WithoutCallSignature } from './store';

export class ComponentAsset<Config = any, Props = any> {
  /**
   * 组件 ID
   */
  id: string;

  /**
   * 组件本身
   */
  Component: FC;
  /**
   * 组件配置面板
   */
  ConfigPanel: FC;
  /**
   * 组件画布启动器
   */
  CanvasStarter: FC;
  /**
   * 组件设计控制器
   */
  DesignController: FC;
  /**
   * 组件开发控制器
   */
  DevelopController: FC;

  AssetProvider: DataProvider;

  ErrorBoundary: FC<{ children: ReactNode }> = ({ children }) => <>{children}</>;

  rules: CanvasRule[];
  models: AssetModels<Config>;

  defaultConfig: Partial<Config>;
  componentStore: UseBoundStore<any>;
  componentStoreApi: () => WithoutCallSignature<StoreApi<any>>;
  configSelector: (s: Config) => Partial<Config>;
  setConfig: (config: Config, set) => void;
  codeEmitter: CodeEmitter<Config, Props>;

  isStarterMode: (store: any) => boolean = () => false;

  constructor(params: ComponentAssetParams<Config>) {
    this.id = params.id;

    // 传入数据模型
    this.models = params.models;

    // 传入外部的默认值
    if (params.defaultConfig) {
      this.defaultConfig = params.defaultConfig;
    }

    const { createStore, Provider, useStoreApi } = createAssetStore(
      params.createStore,
      params.storeOptions,
    );

    // 初始化 store
    this.componentStore = createStore();
    this.componentStoreApi = useStoreApi;
    this.AssetProvider = Provider;

    this.configSelector =
      params.storeOptions?.getConfig || ((s: Config) => JSON.parse(JSON.stringify(s)));
    this.setConfig = params.storeOptions?.setConfig || ((config: Config, set) => set(config));

    // 交互规则
    this.rules = params.ui.rules;

    // 传入面板模块和属性面板
    this.Component = params.ui.Component;
    this.ConfigPanel = params.ui.ConfigPanel;
    this.CanvasStarter = params.ui.CanvasStarter;
    this.DesignController = params.ui.DesignController;
    this.DevelopController = params.ui.DevelopController;

    if (params.ui.ErrorBoundary) {
      this.ErrorBoundary = params.ui.ErrorBoundary;
    }

    // 空状态判断器
    if (params.ui.isStarterMode) {
      this.isStarterMode = params.ui.isStarterMode;
    }

    // 初始化代码生成器
    this.codeEmitter = params.codeEmitter;
  }

  /**
   * 生成 props
   * @param config
   * @param type
   */
  generateProps = (
    config: Partial<Config>,
    type: EmitterEnv = EmitterEnv.Runtime,
  ): Partial<Props> => {
    const props = {};
    // 针对 config 中每一个配置项，用 emitter 进行数据转换
    Object.keys(config).forEach((key) => {
      // eslint-disable-next-line no-invalid-this
      this.models.forEach((model) => {
        // 针对 key 能匹配上的情况，做转换
        if (model.key === key) {
          const p = model.emitter(config, type);

          Object.assign(props, p);
        }
      });
    });

    return props;
  };

  /**
   * 代码生成器
   * @param config
   */
  generateCode(config: Config): string {
    if (!this.codeEmitter) {
      throw Error('暂未实现 generateCode 方法，请在初始化时传入 codeEmitter');
    }

    if (!config) return '暂无生成代码';

    const props = this.generateProps(config, EmitterEnv.Code);

    return this.codeEmitter(config, props as Props);
  }

  /**
   * 获取默认配置
   * @param mode
   */
  getDefaultConfig(mode?: EditorMode | string): Config {
    const config = {} as Config;

    this.models.forEach((model) => {
      if (model.schema) {
        const schema = model.schema(mode as EditorMode);

        const value = getDefaultValueFromSchema(schema as any);
        Object.assign(config, { [model.key]: value });
      }
    });

    return { ...config, ...this.defaultConfig };
  }

  registerConfigPanel(panel: FC) {
    this.ConfigPanel = panel;
  }
}
