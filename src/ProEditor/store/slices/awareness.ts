import merge from 'lodash.merge';
import type { NumberSize } from 're-resizable';
import type { Position } from 'react-rnd';
import { Viewport } from 'reactflow';
import { PartialDeep } from 'type-fest';
import { StateCreator } from 'zustand';

import { InternalProEditorStore } from '../createStore';

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
  presenceAsset: T;
  /**
   * 编辑器供外部感知的视图状态变化时的回调函数
   * @param presenceAsset - 编辑器供外部感知的视图状态
   */
  onPresenceAssetChange?: (presenceAsset: T) => void;
  /** 编辑器受外部感知的状态 */
  presenceEditor: AwarenessEditor;
  /**
   * 编辑器受外部感知的状态变化时的回调函数
   * @param presence - 编辑器受外部感知的状态
   */
  onPresenceEditorChange?: (presence: AwarenessEditor) => void;
}

const initialAwarenessState: AwarenessSliceState = {
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

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AwarenessPublicAction {}

export interface AwarenessSlice extends AwarenessPublicAction, AwarenessSliceState {
  internalUpdateEditorAwareness: (awareness: PartialDeep<AwarenessEditor>) => void;
  internalUpdateAssetAwareness: <T>(awareness: T) => void;
}

export const awarenessSlice: StateCreator<
  InternalProEditorStore,
  [['zustand/devtools', never]],
  [],
  AwarenessSlice
> = (set, get) => ({
  ...initialAwarenessState,
  internalUpdateAssetAwareness: (awareness) => {
    const { onPresenceAssetChange, presenceAsset } = get();

    const nextAwarenessView = { ...presenceAsset, ...awareness };

    set({ presenceAsset: nextAwarenessView }, false, '🕹内部更新：assetAwareness');

    onPresenceAssetChange?.(nextAwarenessView);
  },

  internalUpdateEditorAwareness: (awareness) => {
    const { onPresenceEditorChange, presenceEditor } = get();

    const nextAwareness = merge({}, presenceEditor, awareness);

    set({ presenceEditor: nextAwareness }, false, '🕹内部更新：editorPresence');

    onPresenceEditorChange?.(nextAwareness);
  },
});
