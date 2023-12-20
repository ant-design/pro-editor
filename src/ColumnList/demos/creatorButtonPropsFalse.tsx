/**
 * title: 关闭添加能力
 * description: 可通过 `creatorButtonProps={false}` 来关闭添加功能，包括添加一行按钮，回车添加以及空状态添加
 */
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
    title: '产品名称',
    color: undefined,
  },
  {
    dataIndex: 'productComment',
    valueType: 'text',
    title: '产品介绍',
    color: undefined,
  },
  {
    dataIndex: 'orderStatus',
    valueType: 'text',
    title: '订单状态',
  },
];

/**
 * 创建一个随机的索引标记符，请勿在生产环境使用
 */
export const randomIndex = () => Math.random() * 10000;

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
