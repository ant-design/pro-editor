import { StoreApi } from 'zustand';
import { createContext } from 'zustand-utils';
import { InternalProBuilderStore, createStore } from './createStore';

const { Provider, useStore, useStoreApi } = createContext<StoreApi<InternalProBuilderStore>>();

// ======== 导出 ======== //

export { Provider, createStore, useStore, useStoreApi };

export type { InternalProBuilderStore, ProBuilderState } from './createStore';

export * from './selectors';
export type { AwarenessEditor } from './slices/awareness';
export { EditorMode, TabKey } from './slices/general';
