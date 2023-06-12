import type { StateCreator } from 'zustand';
import { create } from 'zustand';
import { optionalDevtools } from 'zustand-utils';

import {
  AwarenessPublicAction,
  AwarenessSlice,
  AwarenessSliceState,
  awarenessSlice,
} from './slices/awareness';
import { CanvasPublicAction, CanvasSlice, PublicCanvasState, canvasSlice } from './slices/canvas';
import { ConfigPublicAction, ConfigPublicState, ConfigSlice, configSlice } from './slices/config';
import { ConfigPanelSlice, configPanelSlice } from './slices/configPanel';
import {
  GeneralPublicAction,
  GeneralSlice,
  GeneralSliceState,
  generalSlice,
} from './slices/general';

/**
 * ProEditorState 接口描述编辑器状态
 * @template Config - 编辑器配置属性类型
 * @template PresenceAsset - 编辑器供外部感知的视图状态类型
 */
export type ProEditorState<Config = any, PresenceAsset = any> = GeneralSliceState &
  ConfigPublicState<Config> &
  PublicCanvasState &
  AwarenessSliceState<PresenceAsset>;

export type InternalProEditorStore = ProEditorState &
  ConfigSlice &
  CanvasSlice &
  ConfigPanelSlice &
  AwarenessSlice &
  GeneralSlice;

export type PublicProEditorStore = CanvasPublicAction &
  ConfigPublicAction &
  GeneralPublicAction &
  AwarenessPublicAction;

export type ProEditorStoreKey = keyof InternalProEditorStore;

const vanillaStore: StateCreator<InternalProEditorStore, [['zustand/devtools', never]]> = (
  ...params
) => ({
  ...generalSlice(...params),
  ...configSlice(...params),
  ...canvasSlice(...params),
  ...configPanelSlice(...params),
  ...awarenessSlice(...params),
});

export const createStore = (showDevTools: boolean = false) => {
  const devtools = optionalDevtools(showDevTools);

  return create<InternalProEditorStore>()(devtools(vanillaStore, { name: 'ProEditorStore' }));
};
