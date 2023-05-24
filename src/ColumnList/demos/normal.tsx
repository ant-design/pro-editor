import type { ColumnItemList } from '@ant-design/pro-editor';
import { ColumnList } from '@ant-design/pro-editor';
type SchemaItem = {
  title: string;
  dataIndex: string;
};

const initialValues = [
  { title: '序号', dataIndex: 'index' },
  {
    title: '授权企业名称',
    dataIndex: 'name',
  },
  { title: '被授权企业', dataIndex: 'authCompany' },
];

const columns: ColumnItemList<SchemaItem> = [
  {
    title: '配置项一',
    dataIndex: 'title',
    type: 'input',
  },
  {
    title: '配置项二',
    dataIndex: 'dataIndex',
    type: 'input',
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
