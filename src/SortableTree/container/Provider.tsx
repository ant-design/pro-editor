import { FC, ReactNode } from 'react';

import { createStore, Provider, useStoreApi } from '../store';

export const SortableTreeProvider: FC<{
  children: ReactNode;
  showDevtools?: boolean;
}> = ({ children, showDevtools }) => {
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

  return (
    <Provider createStore={() => createStore(showDevtools)}>{Content}</Provider>
  );
};
