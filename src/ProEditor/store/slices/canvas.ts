import { Viewport } from 'reactflow';
import { StateCreator } from 'zustand';

import { InteractStatus, OnInteractionStatusChange } from '@/InteractContainer';
import { UserActionParams } from '@/ProEditor/utils/yjs';
import { InternalProEditorStore } from '../createStore';

// ======== state ======== //

export interface PublicCanvasState {
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
}

export interface CanvasSliceState extends PublicCanvasState {
  /** 是否开启画布交互 */
  enableCanvasInteraction: boolean;
}

const initialCanvasState: CanvasSliceState = {
  // 交互
  interaction: {},
  onInteractionChange: null,
  enableCanvasInteraction: true,
};

export interface CanvasPublicAction {
  deselectCanvas: () => void;
  updateViewport: (viewPort: Partial<Viewport>) => void;
  updateCanvasInteraction: (
    interaction: InteractStatus,
    action?: Partial<UserActionParams>,
  ) => void;
}
export interface CanvasSlice extends CanvasPublicAction, CanvasSliceState {
  internalUpdateCanvasInteract: (
    interaction: InteractStatus,
    action?: Partial<UserActionParams>,
  ) => void;
  toggleCanvasInteraction: () => void;
}

export const canvasSlice: StateCreator<
  InternalProEditorStore,
  [['zustand/devtools', never]],
  [],
  CanvasSlice
> = (set, get) => ({
  ...initialCanvasState,
  //内部更新交互参数方法
  internalUpdateCanvasInteract: (interact, action) => {
    const { onInteractionChange } = get();

    set({ interaction: interact }, false, {
      type: action?.type || '🕹内部更新：interaction',
    });

    onInteractionChange?.(interact);
  },

  /**
   * 开关画布的激活态
   */
  toggleCanvasInteraction: () => {
    const { enableCanvasInteraction } = get();
    set({ enableCanvasInteraction: !enableCanvasInteraction });
  },
  /**
   * 取消画布的激活
   */
  deselectCanvas: () => {
    const { internalUpdateCanvasInteract } = get();
    internalUpdateCanvasInteract({ status: 'unSelected' });
  },

  updateCanvasInteraction: (interaction) => {
    get().internalUpdateCanvasInteract(interaction, { name: 'updateCanvasInteraction 触发' });
  },

  updateViewport: (viewPort) => {
    const { internalUpdateEditorAwareness, editorAwareness } = get();

    internalUpdateEditorAwareness({
      viewport: {
        ...editorAwareness.viewport,
        ...viewPort,
      },
    });
  },
});
