import type { EmitterEnv } from '@ant-design/pro-editor';
import type { EditorMode } from '../../ProBuilder';
import type { JSONSchema } from '../types';

export type FuncAssetSchema<C> = (mode?: EditorMode) => JSONSchema<C>;

/**
 * 资产配置模型
 */
export interface AssetConfigModel<Config = any, Props = any, State = any> {
  /**
   * ConfigModel 的名称
   */
  key: string;
  /**
   * 配置 Schema，用于展示生成 config
   */
  schema?: FuncAssetSchema<Config>;
  /**
   * 解析器 从 props 转换为 config
   * @param props
   */
  parser?: (props: Partial<Props>) => Partial<State>;
  /**
   * 生成器 从 config 转换为 props
   * @param props
   */
  emitter: (componentState: Partial<State>, env?: EmitterEnv) => Partial<Props>;
}

// 入参 T 为 ProTableConfig 这样的数据模型
export type AssetModels<T> = AssetConfigModel<T[keyof T]>[];

// C: 组件全局 config
// P: 目标 Props
export type ComponentAssetModel<C extends object, P> = {
  [key in keyof C]: AssetConfigModel<C[key], P, C>;
};
