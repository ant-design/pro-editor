import { Spin } from 'antd';
import type { FC } from 'react';
import { lazy, Suspense } from 'react';
import { Flexbox } from 'react-layout-kit';

import { ConfigProvider } from '../../ConfigProvider';
import { cx, getPrefixCls } from '../../theme';

import Toolbar from '../components/Toolbar';

const Table = lazy(() => import('../components/Table'));

import type { ComponentProps } from '../types';

const ExcelTable: FC<ComponentProps> = ({ prefixCls: customizePrefixCls, className, toolbar }) => {
  const prefixCls = getPrefixCls('excel-table', customizePrefixCls);

  return (
    <ConfigProvider>
      <Flexbox className={cx(className, prefixCls)}>
        {toolbar === false ? null : <Toolbar prefixCls={prefixCls} />}
        <Flexbox style={{ marginTop: 12 }}>
          <Suspense fallback={<Spin />}>
            <Table prefixCls={prefixCls} />
          </Suspense>
        </Flexbox>
      </Flexbox>
    </ConfigProvider>
  );
};

export default ExcelTable;
