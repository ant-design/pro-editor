import type { Column } from '@ant-design/pro-editor';
import { SortableList } from '@ant-design/pro-editor';
import { tableColumnValueOptions } from './mock_data/options';

type SchemaItem = {
  title: string;
  valueType: string;
  dataIndex: string;
};

const INIT_VALUES = [
  {
    dataIndex: 'orderId',
    valueType: 'text',
    title: '订单id',
    valueEnum: undefined,
  },
  {
    dataIndex: 'orderNumber',
    valueType: 'text',
    title: '订单号',
    valueEnum: undefined,
  },
  {
    dataIndex: 'orderMoney',
    valueType: 'text',
    title: '订单金额',
    valueEnum: undefined,
  },
  {
    dataIndex: 'productName',
    valueType: 'text',
    title: '产品名称',
    valueEnum: undefined,
  },
  {
    dataIndex: 'productComment',
    valueType: 'text',
    title: '产品介绍',
    valueEnum: undefined,
  },
  {
    dataIndex: 'orderStatus',
    valueType: 'text',
    title: '订单状态',
    valueEnum: undefined,
  },
  {
    dataIndex: 'orderCreated',
    valueType: 'date',
    title: '订单创建时间',
    valueEnum: undefined,
  },
  {
    dataIndex: 'detailPic',
    valueType: 'text',
    title: '产品详情图',
    valueEnum: undefined,
  },
  {
    dataIndex: 'closeReason',
    valueType: 'text',
    title: '订单关闭原因',
    valueEnum: undefined,
  },
  {
    dataIndex: 'closeType',
    valueType: 'text',
    title: '订单关闭类型',
    valueEnum: undefined,
  },
];

/**
 * 创建一个随机的索引标记符
 */
export const randomIndex = () => Math.random() * 10000;

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

// const newColumn: ProTableColumnConfig = ;

export default () => (
  <SortableList
    columns={columns}
    creatorButtonProps={{
      record: (index) => ({
        mockDataIndex: `${index}-${randomIndex()}`,
      }),
    }}
    initialValues={INIT_VALUES}
    onChange={(values) => {
      console.log('onChange', values);
    }}
  />
);
