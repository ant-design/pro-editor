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
    title: 'CreateTime',
    color: undefined,
  },
  {
    dataIndex: 'detailPic',
    valueType: 'text',
    title: 'Detail Pic',
    color: undefined,
  },
  {
    dataIndex: 'closeReason',
    valueType: 'text',
    title: 'Close Reason',
    color: undefined,
  },
  {
    dataIndex: 'closeType',
    valueType: 'text',
    title: 'Close Type',
    color: undefined,
  },
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
  {
    title: 'Color',
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
