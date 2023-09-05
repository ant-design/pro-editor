import { StoreApi } from 'zustand';
import { createContext } from 'zustand-utils';
import { InternalProEditorStore, createStore } from './createStore';

const { Provider, useStore, useStoreApi } = createContext<StoreApi<InternalProEditorStore>>();

// ======== 导出 ======== //

export { Provider, createStore, useStore, useStoreApi };

export type { InternalProEditorStore, ProEditorState } from './createStore';
