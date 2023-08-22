import isEqual from 'fast-deep-equal';
import { fromEvent, Subject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import type { StoreApi } from 'zustand';
import { createContext } from 'zustand-utils';
import { createWithEqualityFn } from 'zustand/traditional';

import DataFiller from '../DataFiller';
import type { ShowDemoDataPayload } from '../types';
import initialState from './initialState';

import type { DataFillConfig, DataFillType } from '../types';
import type { DataFillState } from './initialState';

export interface DataFillAction {
  updateState: (newState: Partial<DataFillState>) => void;
  updateConfig: (newConfig: Partial<DataFillConfig>) => void;
  handleFill: (key: DataFillType) => void;
  handleShowDemoData: (payload: ShowDemoDataPayload) => void;
}

export type DataFillStore = DataFillState & DataFillAction;

const createStore = () =>
  createWithEqualityFn<DataFillStore>((set, get) => {
    // 处理鼠标交互处理

    const mouseMoveIn$ = new Subject<ShowDemoDataPayload>();
    mouseMoveIn$
      .pipe(
        // 当用户鼠标移入时，在当前移入对象处显示
        tap(({ key }) => {
          const { config } = get();

          set({ demoKey: key, demoData: DataFiller[key](config[key]) });
        }),
        switchMap(({ event }) => {
          return fromEvent(event.target, 'mouseleave').pipe(
            tap(() => {
              set({ demoKey: '', demoData: '' });
            }),
          );
        }),
      )
      .subscribe();

    return {
      ...initialState,

      updateState: (newState) => {
        set({ ...get(), ...newState });
      },

      updateConfig: (newConfig) => {
        set({ config: { ...get().config, ...newConfig } });
      },
      /**
       * 处理数据填充
       * @param key
       */
      handleFill: (key) => {
        const { onItemClick, config } = get();
        const filler = () => DataFiller[key](config[key]);

        onItemClick?.({ key, filler });
      },
      handleShowDemoData: (payload) => mouseMoveIn$.next(payload),
    };
  }, isEqual);

const { Provider, useStore, useStoreApi } = createContext<StoreApi<DataFillStore>>();

export { createStore, Provider, useStore, useStoreApi };
