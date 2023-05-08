import type { FC, ReactNode } from 'react';

import { createStore, Provider } from '../store';

const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <Provider createStore={createStore}>{children}</Provider>;
};

export default StoreProvider;
