import merge from 'lodash.merge';
import type { NumberSize } from 're-resizable';
import type { Position } from 'react-rnd';
import { Viewport } from 'reactflow';
import { PartialDeep } from 'type-fest';
import { StateCreator } from 'zustand';

import { InternalProBuilderStore } from '../createStore';

/**
 * 编辑器框架演示状态
 */
export interface AwarenessEditor {
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

// ======== state ======== //

export interface AwarenessSliceState<T = object> {
  /** 编辑器供外部感知的视图状态 */
  assetAwareness: T;
  /**
   * 编辑器供外部感知的视图状态变化时的回调函数
   * @param presenceAsset - 编辑器供外部感知的视图状态
   */
  onAssetAwarenessChange?: (awareness: T) => void;
  /** 编辑器受外部感知的状态 */
  editorAwareness: AwarenessEditor;
  /**
   * 编辑器受外部感知的状态变化时的回调函数
   * @param presence - 编辑器受外部感知的状态
   */
  onEditorAwarenessChange?: (awareness: AwarenessEditor) => void;
}

const initialAwarenessState: AwarenessSliceState = {
  assetAwareness: {},
  onAssetAwarenessChange: null,
  editorAwareness: {
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
  onEditorAwarenessChange: null,
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AwarenessPublicAction {}

export interface AwarenessSlice extends AwarenessPublicAction, AwarenessSliceState {
  internalUpdateEditorAwareness: (awareness: PartialDeep<AwarenessEditor>) => void;
  internalUpdateAssetAwareness: <T>(awareness: T) => void;
}

export const awarenessSlice: StateCreator<
  InternalProBuilderStore,
  [['zustand/devtools', never]],
  [],
  AwarenessSlice
> = (set, get) => ({
  ...initialAwarenessState,
  internalUpdateAssetAwareness: (awareness) => {
    const { onAssetAwarenessChange, assetAwareness } = get();

    const nextAwarenessView = { ...assetAwareness, ...awareness };

    set({ assetAwareness: nextAwarenessView }, false, {
      type: '🕹内部更新：assetAwareness',
      payload: awareness,
    });

    onAssetAwarenessChange?.(nextAwarenessView);
  },

  internalUpdateEditorAwareness: (awareness) => {
    const { onEditorAwarenessChange, editorAwareness } = get();

    const nextAwareness = merge({}, editorAwareness, awareness);

    set({ editorAwareness: nextAwareness }, false, {
      type: '🕹内部更新：editorAwareness',
      payload: awareness,
    });

    onEditorAwarenessChange?.(nextAwareness);
  },
});
