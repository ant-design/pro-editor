import { ExcelTable, type TableData } from '@ant-design/pro-editor';
import { Button, Divider } from 'antd';
import { useState } from 'react';

const tableData = [
  ['序号', '标题', '状态', '标签', '创建时间', '操作'],
  ['1', '你好1', '成功', 'Tag1', '昨天', '修改'],
  ['2', '2你好', '失', 'Tag2', '今天', '修改'],
  ['3', '你好3', '失败', 'Tag4', '明天', '修改'],
  ['4', '4你好', '成功', 'Tag5', '大后天', '修改'],
];

export default () => {
  const [data, setData] = useState<TableData>();

  return (
    <div>
      <Button
        onClick={() => {
          setData(tableData);
        }}
      >
        插入表格数据
      </Button>
      <Divider />
      <ExcelTable
        value={data}
        onChange={(e) => {
          console.log(e);

          setData(e);
        }}
      />
    </div>
  );
};
