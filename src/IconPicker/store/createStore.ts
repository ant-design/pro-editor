import type { StoreApi } from 'zustand';
import { create } from 'zustand';
import { createContext, optionalDevtools } from 'zustand-utils';

import type { Store } from './store';
import vanillaStore from './store';

export const createStore = (showDevtools?: boolean) =>
  create<Store>()(optionalDevtools(showDevtools)(vanillaStore, { name: 'IconPicker' }));

export const { Provider, useStore, useStoreApi } = createContext<StoreApi<Store>>();
