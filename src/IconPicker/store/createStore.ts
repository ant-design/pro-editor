import isEqual from 'fast-deep-equal';
import type { StoreApi } from 'zustand';
import { createContext, optionalDevtools } from 'zustand-utils';
import { createWithEqualityFn } from 'zustand/traditional';

import type { Store } from './store';
import vanillaStore from './store';

export const createStore = (showDevtools?: boolean) =>
  createWithEqualityFn<Store>()(
    optionalDevtools(showDevtools)(vanillaStore, { name: 'IconPicker' }),
    isEqual,
  );

export const { Provider, useStore, useStoreApi } = createContext<StoreApi<Store>>();
