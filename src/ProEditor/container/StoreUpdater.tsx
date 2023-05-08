import { memo, MutableRefObject, useEffect, useImperativeHandle } from 'react';

import type {
  ProEditorState,
  ProEditorStore,
  ProEditorStoreKey,
} from '../store';
import { ProEditorInstance, useInstance, useStore } from '../store';

/**
 * 传入StoreUpdater 的值
 */
export interface StoreUpdaterProps<Config = any>
  extends Partial<
    Pick<
      ProEditorState<Config>,
      | 'mode'
      | 'componentAsset'
      | 'onCanvasError'

      // 组件配置
      | 'config'
      | 'onConfigChange'

      // 资产感知
      | 'presenceAsset'
      | 'onPresenceAssetChange'
      // 编辑器感知
      | 'presenceEditor'
      | 'onPresenceEditorChange'
    >
  > {
  editorRef?: MutableRefObject<ProEditorInstance>;
}

const useStoreUpdater = (
  key: ProEditorStoreKey,
  value: ProEditorStore[ProEditorStoreKey],
  setStoreState: (
    key: ProEditorStoreKey,
    param: ProEditorStore[ProEditorStoreKey],
  ) => void,
  deps = [value],
) => {
  useEffect(() => {
    if (typeof value !== 'undefined') {
      setStoreState(key, value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

const StoreUpdater = memo(
  ({
    config,
    onConfigChange,
    componentAsset,
    mode,
    onCanvasError,
    presenceAsset,
    onPresenceAssetChange,
    presenceEditor,
    onPresenceEditorChange,
    editorRef,
  }: StoreUpdaterProps) => {
    const syncOutSource = useStore((s) => s.syncOutSource);

    useStoreUpdater('mode', mode, syncOutSource);
    useStoreUpdater('config', config, syncOutSource);
    useStoreUpdater('presenceAsset', presenceAsset, syncOutSource);
    useStoreUpdater('presenceEditor', presenceEditor, syncOutSource);

    // 为了在受控模式下避免不必要的渲染，将下面的对象只做第一次加载
    useStoreUpdater('componentAsset', componentAsset, syncOutSource, []);
    useStoreUpdater(
      'onPresenceAssetChange',
      onPresenceAssetChange,
      syncOutSource,
      [],
    );
    useStoreUpdater(
      'onPresenceEditorChange',
      onPresenceEditorChange,
      syncOutSource,
      [],
    );
    useStoreUpdater('onConfigChange', onConfigChange, syncOutSource, []);
    useStoreUpdater('onCanvasError', onCanvasError, syncOutSource, []);

    const instance = useInstance();
    useImperativeHandle(editorRef, () => instance);

    return null;
  },
);

export default StoreUpdater;
