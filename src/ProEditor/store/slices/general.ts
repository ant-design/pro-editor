import { StateCreator } from 'zustand';

import getPrefixCls from '@/_util/getPrefixCls';
import { InternalProEditorStore } from '../createStore';

// ======== state ======== //

export enum TabKey {
  canvas,
  code,
}

export enum EditorMode {
  Design = 'design',
  Develop = 'develop',
}

export interface GeneralSliceState {
  /** 组件的类前缀 */
  prefixCls: string;
  /** 用户角色 */
  mode: EditorMode;
}

const initialGeneralState: GeneralSliceState = {
  prefixCls: getPrefixCls('editor'),
  // 模式
  mode: EditorMode.Develop,
};

// ======== action ======== //

export interface GeneralPublicAction {
  undo: () => void;
  redo: () => void;
}

export interface GeneralSlice extends GeneralPublicAction, GeneralSliceState {}

export const generalSlice: StateCreator<
  InternalProEditorStore,
  [['zustand/devtools', never]],
  [],
  GeneralSlice
> = (set, get) => ({
  ...initialGeneralState,

  undo: () => {
    const { yjsDoc, internalUpdateConfig } = get();
    const stack = yjsDoc.undo();

    const { config } = yjsDoc.getHistoryJSON();

    internalUpdateConfig(config, { type: 'history/undo', payload: stack });
  },
  redo: () => {
    const { yjsDoc, internalUpdateConfig } = get();

    const stack = yjsDoc.redo();

    const { config } = yjsDoc.getHistoryJSON();

    internalUpdateConfig(config, { type: 'history/redo', payload: stack });
  },
});
