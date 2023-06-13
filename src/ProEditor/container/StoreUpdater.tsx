import isEqual from 'fast-deep-equal';
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
    assetAwareness,
    onAssetAwarenessChange,
    editorAwareness,
    onEditorAwarenessChange,
    editorRef,
  }: StoreUpdaterProps) => {
    const storeApi = useStoreApi();
    const useStoreUpdater = createStoreUpdater(storeApi);
    const { yjsDoc } = storeApi.getState();

    // 结合 yjs 进行变更
    const useUpdateWithYjs = (key: 'config', value: any) => {
      useStoreUpdater(key, value, [value], (partialNewState) => {
        // 如果相等，不需要更新
        if (isEqual(value, storeApi.getState()[key])) return;

        storeApi.setState(partialNewState);

        yjsDoc.updateHistoryData(partialNewState);
      });
    };

    useStoreUpdater('mode', mode);
    useUpdateWithYjs('config', config);
    useStoreUpdater('assetAwareness', assetAwareness);
    useStoreUpdater('editorAwareness', editorAwareness);

    // 为了在受控模式下避免不必要的渲染，将下面的对象只做第一次加载
    useStoreUpdater('componentAsset', componentAsset, []);
    useStoreUpdater('onAssetAwarenessChange', onAssetAwarenessChange, []);
    useStoreUpdater('onEditorAwarenessChange', onEditorAwarenessChange, []);
    useStoreUpdater('onConfigChange', onConfigChange, []);
    useStoreUpdater('onCanvasError', onCanvasError, []);

    const instance = useProEditor();
    useImperativeHandle(editorRef, () => instance);

    return null;
  },
);

export default StoreUpdater;
