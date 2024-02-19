import { Card, Space } from 'antd';
import InteractContainer from '../index';

export const Demo = () => {
  return (
    <InteractContainer
      rules={[
        {
          id: 'btn',
          selectors: ['.ant-card'],
          actions: ['hover', 'click'],
        },
      ]}
    >
      <div style={{ padding: 24 }}>
        <Space>
          <Card size={'small'}>可选择元素</Card>
          <Card size={'small'}>可选择元素</Card>
          <Card size={'small'}>可选择元素</Card>
        </Space>
      </div>
    </InteractContainer>
  );
};

export default Demo;
