import type { FC, ReactNode } from 'react';
import { DevtoolsOptions } from 'zustand/middleware';

import { StoreApi } from 'zustand/esm';
import { UseBoundStore } from 'zustand/react';
import { createStore, Provider, useStoreApi } from '../store';
import StoreUpdater from './StoreUpdater';

export interface ProEditorProviderProps {
  children: ReactNode;
  devtoolOptions?: boolean | DevtoolsOptions;
  store?: UseBoundStore<StoreApi<any>>[];
}

export const ProEditorProvider: FC<ProEditorProviderProps> = ({
  children,
  devtoolOptions,
  store,
}) => {
  let isWrapped = true;

  const Content = (
    <>
      {children}
      {store?.map((item, index) => (
        <StoreUpdater key={`${item.name}-${index}`} store={item} />
      ))}
    </>
  );

  try {
    useStoreApi();
  } catch (e) {
    isWrapped = false;
  }
  /* istanbul ignore if */
  if (isWrapped) {
    return Content;
  }

  return <Provider createStore={() => createStore(devtoolOptions)}>{Content}</Provider>;
};
