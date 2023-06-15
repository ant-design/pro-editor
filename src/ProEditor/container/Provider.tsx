import type { FC, ReactNode } from 'react';
import { DevtoolsOptions } from 'zustand/middleware';

import { createStore, Provider, useStoreApi } from '../store';

export const ProEditorProvider: FC<{
  children: ReactNode;
  devtoolOptions?: boolean | DevtoolsOptions;
}> = ({ children, devtoolOptions }) => {
  let isWrapped = true;

  const Content = <>{children}</>;

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

export default ProEditorProvider;
