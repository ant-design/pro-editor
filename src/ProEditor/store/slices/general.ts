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

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GeneralPublicAction {}

export interface GeneralSlice extends GeneralPublicAction, GeneralSliceState {}

export const generalSlice: StateCreator<
  InternalProEditorStore,
  [['zustand/devtools', never]],
  [],
  GeneralSlice
> = () => ({
  ...initialGeneralState,
});
