import { HotTable } from '@handsontable/react';
import { registerLanguageDictionary, zhCN } from 'handsontable/i18n';
import { registerAllModules } from 'handsontable/registry';
import type { FC } from 'react';

import 'handsontable/dist/handsontable.full.css';

import { useStore } from '../store';
import { useStyles } from './Table.style';

registerLanguageDictionary(zhCN);

registerAllModules();

interface TableProps {
  prefixCls: string;
}

const Table: FC<TableProps> = ({ prefixCls }) => {
  const { data, handleDataChanges } = useStore();

  const { styles } = useStyles({ prefixCls });

  return (
    <div className={styles.container}>
      <HotTable
        data={data}
        rowHeaders={(index) => {
          return index === 0 ? '列名称' : index.toString();
        }}
        contextMenu={{
          items: [
            'row_above',
            'row_below',
            '---------',
            'col_left',
            'col_right',
            '---------',
            'copy',
            'cut',
            '---------',
            'remove_row',
            // 'remove_col',
            'clear_column',
            '---------',
            'undo',
            'redo',
          ],
        }}
        language={zhCN.languageCode}
        height="auto"
        stretchH={'all'}
        width={'100%'}
        licenseKey="non-commercial-and-evaluation"
        beforeChange={(changes) => {
          handleDataChanges(changes);

          return false;
        }}
      />
    </div>
  );
};

export default Table;
