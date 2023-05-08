import { useEffect } from 'react';
import { devtools } from 'zustand/middleware';
import type { StateCreator } from 'zustand/vanilla';

/**
 * 更新方法
 * @param useStoreApi
 */
export const createStoreUpdater =
  <T>(useStoreApi: any) =>
  (key: keyof T, value: any, deps = [value], updater?) => {
    const store = useStoreApi();

    useEffect(() => {
      if (typeof value !== 'undefined') {
        if (updater) {
          updater(value);
        } else store.setState({ [key]: value });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
  };

export type ZustandStoreWithDevTools<T> = StateCreator<
  T,
  [['zustand/devtools', never]]
>;

/**
 * 将是否开启 devtools 变成可选方案
 * Refs: https://github.com/pmndrs/zustand/discussions/1266
 */

export const optionalDevtools = (showDevTools: boolean) =>
  (showDevTools ? devtools : (f) => f) as typeof devtools;
