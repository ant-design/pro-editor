import type { ColumnItemList } from '@ant-design/pro-editor';
import { ColumnList } from '@ant-design/pro-editor';

type SchemaItem = {
  title: string;
  dataIndex: string;
};

const initialValues = [
  { title: 'Index', dataIndex: 'index' },
  {
    title: 'Enterprise',
    dataIndex: 'name',
  },
  { title: 'Company', dataIndex: 'authCompany' },
];

const columns: ColumnItemList<SchemaItem> = [
  {
    title: 'Title',
    dataIndex: 'title',
    type: 'input',
  },
  {
    title: 'Index',
    dataIndex: 'dataIndex',
    type: 'input',
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
    onChange={(values) => {
      console.log('onChange', values);
    }}
  />
);
