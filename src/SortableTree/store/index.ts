import type { StoreApi } from 'zustand';
import { create } from 'zustand';
import { createContext } from 'zustand-utils';
import { optionalDevtools } from '../../utils';

import type { Store } from './store';
import vanillaStore from './store';

const createStore = (showDevTools: boolean) =>
  create(
    optionalDevtools(showDevTools)(vanillaStore, { name: 'SortableTree' }),
  );

const { useStore, useStoreApi, Provider } = createContext<StoreApi<Store>>();

// ========= 导出 ========= //

export type { ControlledState, State } from './initialState';
export * from './selectors';
export type { Store } from './store';
export type { TreeNodeDispatchPayload } from './treeDataReducer';
export { createStore, useStore, Provider, useStoreApi };
