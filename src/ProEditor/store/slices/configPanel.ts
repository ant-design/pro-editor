import { NumberSize } from 're-resizable';
import { Position } from 'react-rnd';
import { StateCreator } from 'zustand';

import { InternalProEditorStore } from '../createStore';

export interface ConfigPanelPublicAction {
  /**
   * 切换面板展开折叠状态
   * @param nextExpandState
   */
  togglePanelExpand: (nextExpandState?: boolean) => void;
}
export interface ConfigPanelSlice extends ConfigPanelPublicAction {
  updatePanelPosition: (position: Partial<Position>) => void;
  updatePanelSize: (sizeDelta: Partial<NumberSize>) => void;
}

export const configPanelSlice: StateCreator<
  InternalProEditorStore,
  [['zustand/devtools', never]],
  [],
  ConfigPanelSlice
> = (set, get) => ({
  /**
   * 更新坐标值
   * @param newPos
   */
  updatePanelPosition: (newPos: Position) => {
    const { presenceEditor } = get();

    get().internalUpdateEditorAwareness({
      panelPosition: { ...presenceEditor.panelPosition, ...newPos },
    });
  },
  updatePanelSize: (size) => {
    get().internalUpdateEditorAwareness({ panelSize: size });
  },

  /**
   * 触发面板展开折叠
   */
  togglePanelExpand: (nextExpandState) => {
    const { internalUpdateEditorAwareness, presenceEditor } = get();
    if (typeof nextExpandState === undefined) {
      internalUpdateEditorAwareness({
        panelExpand: !presenceEditor.panelExpand,
      });
    } else {
      internalUpdateEditorAwareness({ panelExpand: nextExpandState });
    }
  },
});
