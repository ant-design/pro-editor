import { forwardRef, memo } from 'react';
import { ConfigProvider } from '../../ConfigProvider';
import type { AppProps } from './App';
import App from './App';
import { SortListProvider } from './Provider';
import type { StoreUpdaterProps } from './StoreUpdater';
import StoreUpdater from './StoreUpdater';

export { SortListProvider } from './Provider';

export interface SortListProps<T> extends StoreUpdaterProps<T>, AppProps {}

export const SortList: <T>(props: SortListProps<T>) => JSX.Element = memo(
  forwardRef((props, ref) => {
    const { SHOW_STORE_IN_DEVTOOLS, className, style, ...res } = props;
    return (
      <ConfigProvider>
        <SortListProvider showDevtools={SHOW_STORE_IN_DEVTOOLS}>
          <App style={style} className={className} />
          <StoreUpdater {...res} ref={ref} />
        </SortListProvider>
      </ConfigProvider>
    );
  }),
);
