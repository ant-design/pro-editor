import { EditFilled } from '@ant-design/icons';
import type { ColumnItemList } from '@ant-design/pro-editor';
import { ActionIcon, ColumnList } from '@ant-design/pro-editor';
import { message } from 'antd';
import { tableColumnValueOptions } from './mock_data/options';

type SchemaItem = {
  title: string;
  valueType: string;
  dataIndex: string;
};

const initialValues: SchemaItem[] = [
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

/**
 * 创建一个随机的索引标记符，请勿在生产环境使用
 */
export const randomIndex = () => Math.random() * 10000;

export default () => (
  <ColumnList<SchemaItem>
    columns={columns}
    initialValues={initialValues}
    actions={(field) => [
      <ActionIcon
        icon={<EditFilled />}
        key={'edit'}
        style={{ height: 22 }}
        tabIndex={-1}
        onClick={() => message.info(field.dataIndex)}
      />,
    ]}
    creatorButtonProps={{
      record: () => ({
        valueType: 'text',
        title: 'Example Title',
      }),
    }}
    onChange={(values) => {
      console.log('onChange', values);
    }}
  />
);
