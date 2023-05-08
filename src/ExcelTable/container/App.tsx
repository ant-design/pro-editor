import type { FC } from 'react';
import { Flexbox } from 'react-layout-kit';
import { ConfigProvider } from '../../ConfigProvider';
import { cx } from '../../theme';

import { getPrefixCls } from '../../theme';

import Table from '../components/Table';
import Toolbar from '../components/Toolbar';

import type { ComponentProps } from '../types';

const ExcelTable: FC<ComponentProps> = ({
  prefixCls: customizePrefixCls,
  className,
  toolbar,
}) => {
  const prefixCls = getPrefixCls('excel-table', customizePrefixCls);

  return (
    <ConfigProvider>
      <Flexbox className={cx(className, prefixCls)}>
        {toolbar === false ? null : <Toolbar prefixCls={prefixCls} />}
        <Flexbox style={{ marginTop: 12 }}>
          <Table prefixCls={prefixCls} />
        </Flexbox>
      </Flexbox>
    </ConfigProvider>
  );
};

export default ExcelTable;
