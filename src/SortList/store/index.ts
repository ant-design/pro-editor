import type { StoreApi } from 'zustand';
import { create } from 'zustand';
import { createContext } from 'zustand-utils';
import { optionalDevtools } from '../../utils';

import type { Store } from './store';
import vanillaStore from './store';

const createStore = (showDevTools: boolean) =>
  create(optionalDevtools(showDevTools)(vanillaStore, { name: 'SortList' }));

const { useStore, useStoreApi, Provider } = createContext<StoreApi<Store>>();

// ========= 导出 ========= //
export type { State } from './initialState';
export type { Store } from './store';
export { createStore, useStore, Provider, useStoreApi };
