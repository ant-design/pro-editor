import { StoreApi } from 'zustand';
import { createContext } from 'zustand-utils';
import { InternalProEditorStore, createStore } from './createStore';

const { Provider, useStore, useStoreApi } = createContext<StoreApi<InternalProEditorStore>>();

// ======== 导出 ======== //

export { Provider, createStore, useStore, useStoreApi };

export type { ProEditorState, ProEditorStoreKey, PublicProEditorStore } from './createStore';

export * from './selectors';
export type { AwarenessEditor } from './slices/awareness';
export { EditorMode, TabKey } from './slices/general';
