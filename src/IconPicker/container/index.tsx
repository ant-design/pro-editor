import type { FC } from 'react';
import { memo } from 'react';
import App from './App';
import type { StoreUpdaterProps } from './StoreUpdater';
import StoreUpdater from './StoreUpdater';

import { ConfigProvider } from '../../ConfigProvider';
import { createStore, Provider } from '../store';

export type IconPickerProps = StoreUpdaterProps;

const IconPicker: FC<IconPickerProps> = (props) => {
  return (
    <ConfigProvider>
      <Provider createStore={createStore}>
        <App />
        <StoreUpdater {...props} />
      </Provider>
    </ConfigProvider>
  );
};
export default memo(IconPicker);
