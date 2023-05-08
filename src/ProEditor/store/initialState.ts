import type { NumberSize } from 're-resizable';
import type { Position } from 'react-rnd';
import type { Viewport } from 'reactflow';

import type { ComponentAsset } from '../../ComponentAsset';
import type {
  InteractStatus,
  OnInteractionStatusChange,
} from '../../InteractContainer';

import getPrefixCls from '../../_util/getPrefixCls';

export enum TabKey {
  canvas,
  code,
}

export enum EditorMode {
  Design = 'design',
  Develop = 'develop',
}

/**
 * 编辑器框架演示状态
 */
export interface PresenceEditor {
  /**
   * 面板悬浮模式下的坐标值
   */
  panelPosition: Position;
  /**
   * 面板的尺寸
   */
  panelSize: Partial<NumberSize>;
  /**
   * 组件在画板上的尺寸
   */
  componentSizeOnCanvas?: { width?: number; height?: number };

  /**
   * 面板展开状态
   */
  panelExpand: boolean;
  /**
   * 画布当前的视图
   */
  viewport: Viewport;
}

interface EditorOnChangePayload<Config> {
  config: Config;
  props: any;
  isEmpty: boolean;
}
export type OnConfigChange<Config> = (
  payload: EditorOnChangePayload<Config>,
) => void;

/**
 * ProEditorState 接口描述编辑器状态
 * @template Config - 编辑器配置属性类型
 * @template PresenceAsset - 编辑器供外部感知的视图状态类型
 */
export interface ProEditorState<Config = any, PresenceAsset = any> {
  /** 组件的类前缀 */
  prefixCls: string;
  /** 组件交互状态 */
  interaction: InteractStatus;
  /**
   * 组件交互状态变化时的回调函数
   * @param status - 组件交互状态
   */
  onInteractionChange?: OnInteractionStatusChange;
  /**
   * 组件画布报错时的回调函数
   */
  onCanvasError?: () => void;
  /** 用户角色 */
  mode: EditorMode;
  /** 所有组件资产 */
  componentAsset?: ComponentAsset<Config>;
  /** 编辑器的配置属性 */
  config?: Config;
  /**
   * 编辑器的配置属性变化时的回调函数
   * @param config - 编辑器的配置属性
   */
  onConfigChange?: OnConfigChange<Config>;
  /** 编辑器供外部感知的视图状态 */
  presenceAsset: PresenceAsset;
  /**
   * 编辑器供外部感知的视图状态变化时的回调函数
   * @param presenceAsset - 编辑器供外部感知的视图状态
   */
  onPresenceAssetChange?: (presenceAsset: PresenceAsset) => void;
  /** 编辑器受外部感知的状态 */
  presenceEditor: PresenceEditor;
  /**
   * 编辑器受外部感知的状态变化时的回调函数
   * @param presence - 编辑器受外部感知的状态
   */
  onPresenceEditorChange?: (presence: PresenceEditor) => void;
  /** 是否为暗黑模式 */
  isDarkMode: boolean;
  /** 组件的 props */
  props?: any;
  /** 是否开启画布交互 */
  enableCanvasInteraction: boolean;
}

const initialState: ProEditorState = {
  prefixCls: getPrefixCls('editor'),
  // 模式
  mode: EditorMode.Develop,
  isDarkMode: false,
  // 交互
  interaction: {},
  onInteractionChange: null,

  enableCanvasInteraction: true,

  // 资产
  componentAsset: null,

  // 文件配置属性
  config: null,
  onConfigChange: null,
  props: {},

  presenceAsset: {},
  onPresenceAssetChange: null,
  presenceEditor: {
    // 面板
    panelPosition: { x: 0, y: 0 },
    panelSize: {
      width: 340,
    },
    panelExpand: true,
    viewport: {
      x: 0,
      y: 0,
      zoom: 1,
    },
  },
  onPresenceEditorChange: null,
};

export default initialState;
