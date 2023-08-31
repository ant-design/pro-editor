/**
 * title: 自定义表单
 * description: 目前支持 `input` 和 `select`, `custom` 三种表单类型.
 */
import type { ColumnItemList, SortableItem } from '@ant-design/pro-editor';
import { ColorPicker, ColumnList } from '@ant-design/pro-editor';
import { tableColumnValueOptions } from './mock_data/options';

type SchemaItem = {
  title: string;
  valueType: string;
  dataIndex: string;
} & SortableItem;

const initialValues = [
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
  {
    title: '颜色',
    dataIndex: 'color',
    type: 'custom',
    render: ({ value, onChange }) => {
      return (
        <ColorPicker
          value={value}
          size="small"
          onChangeComplete={(value) => onChange(value.toHexString())}
          showText
        />
      );
    },
  },
];

export default () => (
  <ColumnList<SchemaItem>
    columns={columns}
    initialValues={initialValues}
    onChange={(values) => {
      console.log('onChange', values);
    }}
  />
);
