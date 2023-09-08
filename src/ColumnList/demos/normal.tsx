/**
 * title: 基础使用
 * description: 通过配置 `columns` 渲染排序表单
 */
import type { ColumnItemList } from '@ant-design/pro-editor';
import { ColumnList } from '@ant-design/pro-editor';

type SchemaItem = {
  title: string;
  dataIndex: string;
};

const initialValues = [
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
    creatorButtonProps={{
      record: () => ({
        valueType: 'text',
        title: '示例标题',
      }),
    }}
  />
);
