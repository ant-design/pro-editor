import type { StoreApi } from 'zustand';
import { create } from 'zustand';
import { createContext } from 'zustand-utils';
import { devtools } from 'zustand/middleware';

import type { Store } from './store';
import vanillaStore from './store';

export const createStore = (showDevtools?: boolean) =>
  // @ts-ignore
  create<Store>()(
    showDevtools
      ? devtools(vanillaStore, { name: 'IconPicker' })
      : vanillaStore,
  );

export const { Provider, useStore, useStoreApi } =
  createContext<StoreApi<Store>>();
