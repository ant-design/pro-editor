import type { StoreApi } from 'zustand';
import { createContext } from 'zustand-utils';

import type { ExcelTableStore } from './createStore';
import { createStore } from './createStore';

const { Provider, useStore } = createContext<StoreApi<ExcelTableStore>>();

export type { ExcelTableAction, ExcelTableStore } from './createStore';
export * from './initialState';
export { Provider, useStore, createStore };
