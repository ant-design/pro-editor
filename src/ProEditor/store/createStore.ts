import type { StoreApi } from 'zustand';
import { create } from 'zustand';
import { createContext, optionalDevtools } from 'zustand-utils';

import type { ProEditorStore } from './store';
import vanillaStore from './store';

const { Provider, useStore, useStoreApi } =
  createContext<StoreApi<ProEditorStore>>();

const createStore = <T = any>(showDevTools: boolean = false) => {
  const devtools = optionalDevtools(showDevTools);

  return create<ProEditorStore<T>>()(
    devtools(vanillaStore, { name: 'ProEditorStore' }),
  );
};

export { Provider, createStore, useStore, useStoreApi };
