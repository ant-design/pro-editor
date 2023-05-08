import type { FC } from 'react';

import App from './App';
import Provider from './Provider';
import StoreUpdater from './StoreUpdater';

import type { ExcelTableProps } from '../types';

const ExcelTable: FC<ExcelTableProps> = (props) => {
  const { value, onChange, defaultValue, ...res } = props;
  return (
    <Provider>
      <App {...res} />
      <StoreUpdater
        data={value}
        onDataChange={onChange}
        defaultData={defaultValue}
      />
    </Provider>
  );
};

export default ExcelTable;
