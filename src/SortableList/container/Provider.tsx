import { FC, ReactNode } from 'react';
import { Provider, createStore, useStoreApi } from '../store';

export const SortableListProvider: FC<{
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
  return <Provider createStore={() => createStore(showDevtools)}>{Content}</Provider>;
};
