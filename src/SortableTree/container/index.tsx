import { FC, memo } from 'react';

import { ConfigProvider } from '../../ConfigProvider';
import type { ControlledState } from '../store';
import type { AppProps } from './App';
import App from './App';
import { SortableTreeProvider } from './Provider';
import StoreUpdater from './StoreUpdater';

import type { StoreUpdaterProps } from './StoreUpdater';

export interface SortableTreeProps<T> extends StoreUpdaterProps<T>, ControlledState, AppProps {}

export { SortableTreeProvider } from './Provider';

export const SortableTree = memo((props) => {
  const { SHOW_STORE_IN_DEVTOOLS, className, style, ...res } = props;
  return (
    <ConfigProvider>
      <SortableTreeProvider showDevtools={SHOW_STORE_IN_DEVTOOLS}>
        <App style={style} className={className} />
        <StoreUpdater {...res} />
      </SortableTreeProvider>
    </ConfigProvider>
  );
}) as <T>(props: SortableTreeProps<T>) => ReturnType<FC>;
