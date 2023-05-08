import { Button, InputNumber } from 'antd';
import type { FC } from 'react';
import { Flexbox } from 'react-layout-kit';
import { shallow } from 'zustand/shallow';

import type { ExcelTableStore } from '../store';
import { useStore } from '../store';

import { useStyles } from './Toolbar.style';

interface ToolbarProps {
  prefixCls: string;
}

const selector = (s: ExcelTableStore) => ({
  row: s.data?.length || 0,
  column: s.data?.[0]?.length || 0,

  updateByRow: s.updateByRow,
  updateByColumn: s.updateByColumn,
  resetData: s.resetData,
});

const Toolbar: FC<ToolbarProps> = ({ prefixCls }) => {
  const { row, column, updateByRow, updateByColumn, resetData } = useStore(
    selector,
    shallow,
  );

  const { styles } = useStyles({ prefixCls });
  return (
    <Flexbox horizontal distribution={'space-between'}>
      <Flexbox horizontal gap={8}>
        <InputNumber
          size={'small'}
          value={column}
          onChange={(e) => {
            if (!e) return;
            updateByColumn(e);
          }}
          min={1}
          addonAfter={'列'}
          className={styles.input}
        />
        <InputNumber
          size={'small'}
          value={row - 1}
          onChange={(r) => {
            updateByRow(r + 1);
          }}
          addonAfter={'行'}
          min={1}
          className={styles.input}
        />
      </Flexbox>
      <div>
        <Button size={'small'} onClick={resetData} className={styles.button}>
          重置
        </Button>
      </div>
    </Flexbox>
  );
};

export default Toolbar;
