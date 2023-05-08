import { Input, InputNumber } from '@ant-design/pro-editor';
import { Space } from 'antd';

export default () => (
  <Space direction={'vertical'}>
    <Space align={'start'}>
      Input
      <Space direction={'vertical'}>
        <Input placeholder={'请输入内容'} />
        <Input value={'包含有文本'} />
        <InputNumber defaultValue={100} />
        <InputNumber defaultValue={100} addonAfter={'列'} />
      </Space>
    </Space>
  </Space>
);
