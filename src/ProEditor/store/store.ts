import isEqual from 'lodash.isequal';
import type { NumberSize } from 're-resizable';
import type { Position } from 'react-rnd';
import { PartialDeep } from 'type-fest';
import type { StateCreator } from 'zustand/vanilla';

import type { InteractStatus } from '../../InteractContainer';
import type { PresenceEditor, ProEditorState } from './initialState';

import { Viewport } from 'reactflow';
import initialState from './initialState';

export type ProEditorStoreKey = keyof ProEditorStore;
/**

 ProEditorAction 接口
 @template Config 配置类型
 @template View 视图类型 **/
export interface ProEditorAction<Config = any, View = any> {
  /**
   * 同步输出源
   * @param key ProEditorStoreKey
   * @param value ProEditorStore[ProEditorStoreKey]
   **/
  syncOutSource: (
    key: ProEditorStoreKey,
    value: ProEditorStore[ProEditorStoreKey],
  ) => void;
  /**
   * @deprecated
   */
  internalSetState: (nextState: Partial<ProEditorState<Config>>) => void;
  //  标准方法
  /**
   * 内部更新配置
   * @param config Partial
   **/
  internalUpdateConfig: (config: Partial<Config>) => void;
  internalUpdateCanvasInteract: (interaction: InteractStatus) => void;
  internalUpdatePresenceEditor: (presence: PartialDeep<PresenceEditor>) => void;
  internalUpdatePresenceAsset: (presence: View) => void;

  reset: () => void;
  toggleCanvasInteraction: () => void;
  exportConfig: () => void;

  updatePanelPosition: (position: Partial<Position>) => void;
  updatePanelSize: (sizeDelta: Partial<NumberSize>) => void;
  updateViewport: (viewPort: Partial<Viewport>) => void;

  /**
   * 切换面板展开折叠状态
   * @param nextExpandState
   */
  togglePanelExpand: (nextExpandState?: boolean) => void;
  deselectCanvas: () => void;
}

export type ProEditorStore<Config = any> = ProEditorState<Config> &
  ProEditorAction<Config>;

const vanillaStore: StateCreator<
  ProEditorStore,
  [['zustand/devtools', never]]
> = <T>(set, get) => ({
  ...initialState,

  // ======== 受控模式 ======== //

  syncOutSource: (key, value) => {
    // 值相同时不变更
    if (isEqual(value, get()[key])) return;

    set({ ...get(), [key]: value }, false, `⛓受控变更：${key}`);
  },

  // ======== 内部通用控制值 ======== //

  /**
   * 内部设置所有状态方法
   */
  internalSetState(nextState: Partial<ProEditorState>) {
    set({ ...get(), ...nextState }, false, '🚦已废弃内部更新【需要重构】');
  },
  /**
   * 内部修改 config 方法
   * 传给 ProTableStore 进行 config 同步
   */
  internalUpdateConfig: (config: Partial<T>) => {
    const { onConfigChange, componentAsset } = get();

    const nextConfig = { ...get().config, ...config };

    set({ config: nextConfig }, false, '🕹内部更新：config');

    onConfigChange?.({
      config: nextConfig,
      props: componentAsset?.generateProps(nextConfig),
      isEmpty: componentAsset?.isStarterMode(nextConfig),
    });
  },
  //内部更新交互参数方法
  internalUpdateCanvasInteract: (interact) => {
    const { onInteractionChange } = get();

    set({ interaction: interact }, false, '🕹内部更新：interaction');

    onInteractionChange?.(interact);
  },

  internalUpdatePresenceAsset: (awareness) => {
    const { onPresenceAssetChange, presenceAsset } = get();

    const nextAwarenessView = { ...presenceAsset, ...awareness };

    set(
      { presenceAsset: nextAwarenessView },
      false,
      '🕹内部更新：assetAwareness',
    );

    onPresenceAssetChange?.(nextAwarenessView);
  },

  internalUpdatePresenceEditor: (awareness) => {
    const { onPresenceEditorChange, presenceEditor } = get();

    const nextAwareness = { ...presenceEditor, ...awareness };

    set({ presenceEditor: nextAwareness }, false, '🕹内部更新：editorPresence');

    onPresenceEditorChange?.(nextAwareness);
  },
  // ======== 画布交互 ======== //

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

  // ======== 编辑器控制 ======== //
  /**
   * 重置所有配置
   */
  reset: () => {
    set({ ...initialState }, false, 'reset');
  },

  /**
   * 更新坐标值
   * @param newPos
   */
  updatePanelPosition: (newPos: Position) => {
    const { presenceEditor } = get();

    get().internalUpdatePresenceEditor({
      panelPosition: { ...presenceEditor.panelPosition, ...newPos },
    });
  },
  updatePanelSize: (size) => {
    get().internalUpdatePresenceEditor({ panelSize: size });
  },

  updateViewport: (viewPort) => {
    const { internalUpdatePresenceEditor, presenceEditor } = get();

    internalUpdatePresenceEditor({
      viewport: {
        ...presenceEditor.viewport,
        ...viewPort,
      },
    });
  },

  /**
   * 触发面板展开折叠
   */
  togglePanelExpand: (nextExpandState) => {
    const { internalUpdatePresenceEditor, presenceEditor } = get();
    if (typeof nextExpandState === undefined) {
      internalUpdatePresenceEditor({
        panelExpand: !presenceEditor.panelExpand,
      });
    } else {
      internalUpdatePresenceEditor({ panelExpand: nextExpandState });
    }
  },
  /**
   * 导出配置
   */
  exportConfig: () => {
    const eleLink = document.createElement('a');
    eleLink.download = 'pro-edior-config.json';
    eleLink.style.display = 'none';
    const blob = new Blob([JSON.stringify(get().config)]);
    eleLink.href = URL.createObjectURL(blob);
    document.body.appendChild(eleLink);
    eleLink.click();
    document.body.removeChild(eleLink);
  },
});

export default vanillaStore;
