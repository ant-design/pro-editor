import type { FC } from 'react';
import type { DataFillProps } from '../types';

import { ConfigProvider } from '../../ConfigProvider';
import App from './App';
import StoreUpdater from './StoreUpdater';

import { createStore, Provider } from '../store';

const DataFill: FC<DataFillProps> = (props) => {
  const { onClick, ...res } = props;

  return (
    <ConfigProvider>
      <Provider createStore={createStore}>
        <App {...res} />
        <StoreUpdater onClick={onClick} />
      </Provider>
    </ConfigProvider>
  );
};

export default DataFill;
