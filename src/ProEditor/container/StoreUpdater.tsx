import { memo, MutableRefObject, useImperativeHandle } from 'react';
import { createStoreUpdater } from 'zustand-utils';

import { ProEditorInstance, useProEditor } from '../hooks/useProEditor';
import type { ProEditorState } from '../store';
import { useStoreApi } from '../store';

/**
 * 传入StoreUpdater 的值
 */
export interface StoreUpdaterProps extends Partial<ProEditorState> {
  editorRef?: MutableRefObject<ProEditorInstance>;
}

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
    const storeApi = useStoreApi();
    const useStoreUpdater = createStoreUpdater(storeApi);

    useStoreUpdater('mode', mode);
    useStoreUpdater('config', config);
    useStoreUpdater('presenceAsset', presenceAsset);
    useStoreUpdater('presenceEditor', presenceEditor);

    // 为了在受控模式下避免不必要的渲染，将下面的对象只做第一次加载
    useStoreUpdater('componentAsset', componentAsset, []);
    useStoreUpdater('onPresenceAssetChange', onPresenceAssetChange, []);
    useStoreUpdater('onPresenceEditorChange', onPresenceEditorChange, []);
    useStoreUpdater('onConfigChange', onConfigChange, []);
    useStoreUpdater('onCanvasError', onCanvasError, []);

    const instance = useProEditor();
    useImperativeHandle(editorRef, () => instance);

    return null;
  },
);

export default StoreUpdater;
