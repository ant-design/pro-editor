/**
 * title: 自定义操作
 * description: 可以通过 `actions` 属性自定义操作列
 */
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
  { title: '序号', valueType: 'indexBorder', dataIndex: 'index' },
  {
    title: '授权企业名称',
    valueType: 'text',
    dataIndex: 'name',
  },
  { title: '被授权企业', valueType: 'text', dataIndex: 'authCompany' },
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
        title: '示例标题',
      }),
    }}
    onChange={(values) => {
      console.log('onChange', values);
    }}
  />
);
