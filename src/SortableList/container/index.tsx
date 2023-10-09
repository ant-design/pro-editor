import { FC, forwardRef, memo } from 'react';
import { ConfigProvider } from '../../ConfigProvider';
import type { StoreUpdaterProps } from '../type';
import type { AppProps } from './App';
import App from './App';
import { SortableListProvider } from './Provider';
import StoreUpdater from './StoreUpdater';

export { SortableListProvider } from './Provider';

export interface SortableListProps<T> extends StoreUpdaterProps<T>, AppProps {}

export const SortableList: <T>(props: SortableListProps<T>) => ReturnType<FC> = memo(
  forwardRef((props, ref) => {
    const { SHOW_STORE_IN_DEVTOOLS, className, style, ...res } = props;
    return (
      <ConfigProvider>
        <SortableListProvider showDevtools={SHOW_STORE_IN_DEVTOOLS}>
          <App style={style} className={className} />
          <StoreUpdater {...res} ref={ref} />
        </SortableListProvider>
      </ConfigProvider>
    );
  }),
);
