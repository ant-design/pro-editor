import { EditFilled } from '@ant-design/icons';
import type { ColumnItemList } from '@ant-design/pro-editor';
import { ActionIcon, ColumnList } from '@ant-design/pro-editor';
import { message } from 'antd';
import { useState } from 'react';
import { tableColumnValueOptions } from './mock_data/options';

type SchemaItem = {
  title: string;
  valueType: string;
  dataIndex: string;
};

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
  const [value, setValue] = useState([]);
  return (
    <ColumnList<SchemaItem>
      columns={columns}
      value={value}
      actions={(field) => [
        <ActionIcon
          icon={<EditFilled />}
          key={'edit'}
          tabIndex={-1}
          style={{ height: 22 }}
          onClick={() => message.info(field.dataIndex)}
        />,
      ]}
      onChange={(values) => {
        console.log('onChange', values);
        setValue(values);
      }}
    />
  );
};
