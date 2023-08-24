import isEqual from 'fast-deep-equal';
import type { StoreApi } from 'zustand';
import { createContext, optionalDevtools } from 'zustand-utils';
import { createWithEqualityFn } from 'zustand/traditional';

import type { Store } from './store';
import vanillaStore from './store';

const createStore = (showDevTools: boolean) =>
  createWithEqualityFn(
    optionalDevtools(showDevTools)(vanillaStore, { name: 'SortableList' }),
    isEqual,
  );

const { useStore, useStoreApi, Provider } = createContext<StoreApi<Store>>();

// ========= 导出 ========= //
export type { Store } from './store';
export { Provider, createStore, useStore, useStoreApi };
