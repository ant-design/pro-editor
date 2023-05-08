import { ExcelTable } from '@ant-design/pro-editor';

const tableData = [
  ['序号', '标题', '状态', '标签', '创建时间', '操作'],
  ['1', '你好1', '成功', 'Tag1', '昨天', '修改'],
  ['2', '2你好', '失', 'Tag2', '今天', '修改'],
  ['3', '你好3', '失败', 'Tag4', '明天', '修改'],
  ['4', '4你好', '成功', 'Tag5', '大后天', '修改'],
];

export default () => <ExcelTable defaultValue={tableData} />;
