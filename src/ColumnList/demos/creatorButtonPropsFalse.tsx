import type { ColumnItemList } from '@ant-design/pro-editor';
import { ColumnList } from '@ant-design/pro-editor';
import { tableColumnValueOptions } from './mock_data/options';

type SchemaItem = {
  title: string;
  valueType?: string;
  dataIndex: string;
};

const INIT_VALUES = [
  {
    dataIndex: 'productName',
    valueType: 'text',
    title: 'Product Name',
    color: undefined,
  },
  {
    dataIndex: 'productComment',
    valueType: 'text',
    title: 'Product Comment',
    color: undefined,
  },
  {
    dataIndex: 'orderStatus',
    valueType: 'text',
    title: 'Order Status',
  },
];

/**
 * 创建一个随机的索引标记符，请勿在生产环境使用
 */
export const randomIndex = () => Math.random() * 10000;

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

export default () => (
  <ColumnList<SchemaItem>
    columns={columns}
    initialValues={INIT_VALUES}
    onChange={(values) => {
      console.log('onChange', values);
    }}
    creatorButtonProps={false}
  />
);
