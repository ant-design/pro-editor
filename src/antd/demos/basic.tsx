import { Input } from '@ant-design/pro-editor';
import { Space } from 'antd';

export default () => (
  <Space direction={'vertical'}>
    Input
    <Space direction={'vertical'}>
      <Input
        placeholder={'请输入内容'}
        onChange={(value) => {
          console.log(value);
        }}
      />
      <Input value={'包含有文本'} />
    </Space>
  </Space>
);
