import type { StoreApi } from 'zustand';
import { create } from 'zustand';
import { createContext, optionalDevtools } from 'zustand-utils';

import type { InternalSortableTreeStore } from './store';
import vanillaStore from './store';

const createStore = (showDevTools: boolean) =>
  create(optionalDevtools(showDevTools)(vanillaStore, { name: 'SortableTree' }));

const { useStore, useStoreApi, Provider } = createContext<StoreApi<InternalSortableTreeStore>>();

// ========= 导出 ========= //

export type { ControlledState, OnTreeDataChange, State } from './initialState';
export * from './selectors';
export type { InternalSortableTreeStore } from './store';
export type { TreeNodeDispatchPayload } from './treeDataReducer';
export { Provider, createStore, useStore, useStoreApi };
