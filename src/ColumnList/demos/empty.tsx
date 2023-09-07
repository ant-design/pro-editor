/**
 * title: 空状态
 * description: 当表单值为空时，会渲染空状态
 */
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
