import { InputNumber } from '@ant-design/pro-editor';
import { Space } from 'antd';

export default () => (
  <Space direction={'vertical'}>
    InputNumber
    <Space direction={'vertical'}>
      <InputNumber size={'large'} defaultValue={100} addonAfter={'列'} />
      <InputNumber
        defaultValue={100}
        onChange={(value) => {
          console.log(value);
        }}
        addonAfter={'列'}
      />
      <InputNumber size={'small'} defaultValue={100} addonAfter={'列'} />
    </Space>
  </Space>
);
