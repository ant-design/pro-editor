/**
 * title: 基础使用
 * description: 通过配置 `columns` 渲染排序表单
 */
import type { ColumnItemList, SortableItem } from '@ant-design/pro-editor';
import { ColumnList } from '@ant-design/pro-editor';

type SchemaItem = {
  title: string;
  dataIndex: string;
} & SortableItem;

const initialValues = [
  { id: 'index', title: '序号', valueType: 'indexBorder', dataIndex: 'index' },
  {
    id: 'name',
    title: '授权企业名称',
    valueType: 'text',
    dataIndex: 'name',
  },
  { id: 'authCompany', title: '被授权企业', valueType: 'text', dataIndex: 'authCompany' },
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
