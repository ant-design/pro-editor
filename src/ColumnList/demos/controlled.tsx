import type { ColumnItemList } from '@ant-design/pro-editor';
import { ColumnList } from '@ant-design/pro-editor';
import { Button } from 'antd';
import { useState } from 'react';

import { tableColumnValueOptions } from './mock_data/options';

type SchemaItem = {
  title: string;
  valueType: string;
  dataIndex: string;
};

const INIT_VALUES: SchemaItem[] = [
  { title: 'Index', valueType: 'indexBorder', dataIndex: 'index' },
  {
    title: 'Enterprise',
    valueType: 'text',
    dataIndex: 'name',
  },
  { title: 'Company', valueType: 'text', dataIndex: 'authCompany' },
];

const columns: ColumnItemList<SchemaItem> = [
  {
    title: 'Title',
    dataIndex: 'title',
    type: 'input',
  },
  {
    title: 'ValueType',
    dataIndex: 'valueType',
    type: 'select',
    options: tableColumnValueOptions,
  },
  {
    title: 'DataIndex',
    dataIndex: 'dataIndex',
    type: 'select',
  },
];

export default () => {
  const [value, setValue] = useState(INIT_VALUES);

  return (
    <>
      <Button
        type="primary"
        block
        onClick={() => {
          setValue([
            {
              dataIndex: 'orderCreated',
              valueType: 'date',
              title: 'CreateTime',
            },
            {
              dataIndex: 'detailPic',
              valueType: 'text',
              title: 'Detail',
            },
          ]);
        }}
        style={{ marginBottom: 12 }}
      >
        Set Data
      </Button>
      <ColumnList<SchemaItem>
        columns={columns}
        value={value}
        onChange={(values) => {
          setValue(values);
          console.log('onChange', values);
        }}
      />
    </>
  );
};
