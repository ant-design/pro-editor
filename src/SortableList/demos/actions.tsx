import { EditFilled } from '@ant-design/icons';
import type { Column } from '@ant-design/pro-editor';
import { ActionIcon, SortableList } from '@ant-design/pro-editor';
import { message } from 'antd';
import { tableColumnValueOptions } from './mock_data/options';

type SchemaItem = {
  title: string;
  valueType: string;
  dataIndex: string;
};

const INIT_VALUES = [
  { title: '序号', valueType: 'indexBorder', dataIndex: 'index' },
  {
    title: '授权企业名称',
    valueType: 'text',
    dataIndex: 'name',
  },
  { title: '被授权企业', valueType: 'text', dataIndex: 'authCompany' },
];

const columns: Column<SchemaItem>[] = [
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

export default () => (
  <SortableList
    columns={columns}
    initialValues={INIT_VALUES}
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
    }}
  />
);
