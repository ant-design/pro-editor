/**
 * title: 受控模式
 * description: 表单可通过 `value` 受控
 */
import type { ColumnItemList } from '@ant-design/pro-editor';
import { ColumnList } from '@ant-design/pro-editor';
import { useState } from 'react';

import { tableColumnValueOptions } from './mock_data/options';

type SchemaItem = {
  title: string;
  valueType: string;
  dataIndex: string;
};

const INIT_VALUES: SchemaItem[] = [
  { title: '序号', valueType: 'indexBorder', dataIndex: 'index' },
  {
    title: '授权企业名称',
    valueType: 'text',
    dataIndex: 'name',
  },
  { title: '被授权企业', valueType: 'text', dataIndex: 'authCompany' },
];

const columns: ColumnItemList<SchemaItem> = [
  {
    title: '列标题',
    dataIndex: 'title',
    type: 'input',
  },
  {
    title: '值类型',
    dataIndex: 'valueType',
    type: 'select',
    options: tableColumnValueOptions,
  },
  {
    title: '字段',
    dataIndex: 'dataIndex',
    type: 'select',
  },
];

export default () => {
  const [value, setValue] = useState(INIT_VALUES);

  return (
    <ColumnList<SchemaItem>
      columns={columns}
      value={value}
      onChange={(values) => {
        setValue(values);
        console.log('onChange', values);
      }}
    />
  );
};
