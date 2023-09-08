/**
 * title: 自定义表单
 * description: 目前支持 `input` 和 `select`, `custom` 三种表单类型.
 */
import type { ColumnItemList } from '@ant-design/pro-editor';
import { ColorPicker, ColumnList } from '@ant-design/pro-editor';
import { tableColumnValueOptions } from './mock_data/options';

type SchemaItem = {
  title: string;
  valueType: string;
  dataIndex: string;
};

const initialValues = [
  {
    dataIndex: 'orderCreated',
    valueType: 'date',
    title: '订单创建时间',
    color: undefined,
  },
  {
    dataIndex: 'detailPic',
    valueType: 'text',
    title: '产品详情图',
    color: undefined,
  },
  {
    dataIndex: 'closeReason',
    valueType: 'text',
    title: '订单关闭原因',
    color: undefined,
  },
  {
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
