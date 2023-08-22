import isEqual from 'fast-deep-equal';
import type { StateCreator } from 'zustand';
import { optionalDevtools } from 'zustand-utils';
import { DevtoolsOptions } from 'zustand/middleware';
import { createWithEqualityFn } from 'zustand/traditional';

import { AwarenessSlice, AwarenessSliceState, awarenessSlice } from './slices/awareness';
import { CanvasSlice, PublicCanvasState, canvasSlice } from './slices/canvas';
import { ConfigPublicState, ConfigSlice, configSlice } from './slices/config';
import { ConfigPanelSlice, configPanelSlice } from './slices/configPanel';
import { GeneralSlice, GeneralSliceState, generalSlice } from './slices/general';

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

const vanillaStore: StateCreator<InternalProEditorStore, [['zustand/devtools', never]]> = (
  ...params
) => ({
  ...generalSlice(...params),
  ...configSlice(...params),
  ...canvasSlice(...params),
  ...configPanelSlice(...params),
  ...awarenessSlice(...params),
});

export const createStore = (options: boolean | DevtoolsOptions = false) => {
  const devtools = optionalDevtools(options !== false);

  const devtoolOptions =
    options === false ? undefined : options === true ? { name: 'ProEditorStore' } : options;

  return createWithEqualityFn<InternalProEditorStore>()(
    devtools(vanillaStore, devtoolOptions),
    isEqual,
  );
};
