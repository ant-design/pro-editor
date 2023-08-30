/**
 * title: 自定义初始化
 * description: 可通过 `creatorButtonProps` 来自定义初始化逻辑，id 的生成逻辑是必须的。
 */
import type { ColumnItemList, SortableItem } from '@ant-design/pro-editor';
import { ColumnList } from '@ant-design/pro-editor';

import { tableColumnValueOptions } from './mock_data/options';

type SchemaItem = {
  title: string;
  valueType?: string;
  dataIndex: string;
} & SortableItem;

const INIT_VALUES = [
  { id: 'orderId', dataIndex: 'orderId', valueType: 'text', title: '订单id', color: undefined },
  {
    id: 'orderNumber',
    dataIndex: 'orderNumber',
    valueType: 'text',
    title: '订单号',
    color: undefined,
  },
  {
    id: 'orderMoney',
    dataIndex: 'orderMoney',
    valueType: 'text',
    title: '订单金额',
    color: undefined,
  },
  {
    id: 'productName',
    dataIndex: 'productName',
    valueType: 'text',
    title: '产品名称',
    color: undefined,
  },
  {
    id: 'productComment',
    dataIndex: 'productComment',
    valueType: 'text',
    title: '产品介绍',
    color: undefined,
  },
  {
    id: 'orderStatus',
    dataIndex: 'orderStatus',
    valueType: 'text',
    title: '订单状态',
    color: undefined,
  },
  {
    id: 'orderCreated',
    dataIndex: 'orderCreated',
    valueType: 'date',
    title: '订单创建时间',
    color: undefined,
  },
  {
    id: 'detailPic',
    dataIndex: 'detailPic',
    valueType: 'text',
    title: '产品详情图',
    color: undefined,
  },
  {
    id: 'closeReason',
    dataIndex: 'closeReason',
    valueType: 'text',
    title: '订单关闭原因',
    color: undefined,
  },
  {
    id: 'closeType',
    dataIndex: 'closeType',
    valueType: 'text',
    title: '订单关闭类型',
    color: undefined,
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
    creatorButtonProps={{
      position: 'top',
      record: (index) => ({
        id: randomIndex(),
        dataIndex: `${index}-${randomIndex()}`,
      }),
    }}
  />
);
