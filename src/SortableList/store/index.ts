import type { StoreApi } from 'zustand';
import { create } from 'zustand';
import { createContext, optionalDevtools } from 'zustand-utils';

import type { Store } from './store';
import vanillaStore from './store';

const createStore = (showDevTools: boolean) =>
  create(optionalDevtools(showDevTools)(vanillaStore, { name: 'SortableList' }));

const { useStore, useStoreApi, Provider } = createContext<StoreApi<Store>>();

// ========= 导出 ========= //
export type { OnChange, State } from './initialState';
export type { Store } from './store';
export { createStore, useStore, Provider, useStoreApi };
