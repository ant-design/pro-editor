import type { Column } from '@ant-design/pro-editor';
import { SortableList } from '@ant-design/pro-editor';

type SchemaItem = {
  title: string;
  dataIndex: string;
};

const INIT_VALUES = [
  { title: '序号', dataIndex: 'index' },
  {
    title: '授权企业名称',
    dataIndex: 'name',
  },
  { title: '被授权企业', dataIndex: 'authCompany' },
];

const columns: Column<SchemaItem>[] = [
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
  <SortableList<SchemaItem>
    columns={columns}
    initialValues={INIT_VALUES}
    onChange={(values) => {
      console.log('onChange', values);
    }}
  />
);
