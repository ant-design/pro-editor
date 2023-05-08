import type { UseBoundStore } from 'zustand/react';

import { FC, ReactNode } from 'react';
import type { CanvasInteractRule } from '../../InteractContainer';
import type { CodeEmitter } from './code';
import type { AssetModels } from './model';
import { DataProvider } from './render';

export type CanvasRule = CanvasInteractRule;

export interface ComponentAssetUIParams {
  /**
   * 组件预览器
   * @required
   */
  Component: FC;
  /**
   * 组件的画布交互规则
   */
  rules?: CanvasRule[];
  /**
   * 组件的配置面板
   */
  ConfigPanel?: FC;
  /**
   * 在画布中展示的 Starter 组件
   */
  CanvasStarter?: FC;
  /**
   * 设计师的控制器面板
   */
  DesignController?: FC;
  /**
   * 前端开发的控制器面板
   */
  DevelopController?: FC;

  DataProvider?: DataProvider;
  /**
   * 判断是否进入引导模式
   */
  isStarterMode?: (store: any) => boolean;
  /**
   * 错误边界
   */
  ErrorBoundary?: FC<{ children: ReactNode }>;
}

export interface ComponentAssetParams<Config, Props = any> {
  /**
   * 资产 id
   */
  id?: string;

  /**
   * 资产元数据的 ui 配置
   */
  ui: ComponentAssetUIParams;
  /**
   * 初始化的默认值
   */
  defaultConfig?: Partial<Config>;
  /**
   * 是否显示 devtools
   */
  showDevtools?: boolean;

  createStore: (params?: any) => UseBoundStore<any>;
  /**
   * 组件的业务数据模型
   * @param config
   */
  models: AssetModels<Config>;
  /**
   * 代码生成器
   * @param config
   */
  codeEmitter: CodeEmitter<Config, Props>;
}
