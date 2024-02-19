import { Button, Card, Divider, Space } from 'antd';
import { useState } from 'react';
import InteractContainer from '../index';

import type { CanvasInteractRule, InteractStatus } from '../type';

const rules: CanvasInteractRule[] = [
  {
    id: 'controller',
    selectors: ['.ant-card'],
    actions: ['hover', 'click'],
  },
];
export const Demo = () => {
  const [activeStatus, setActiveStatus] = useState<InteractStatus>();

  return (
    <div>
      <Space>
        <Button
          onClick={() => {
            setActiveStatus({ status: 'unSelected' });
          }}
        >
          取消选中
        </Button>
        <Button
          onClick={() => {
            setActiveStatus({
              activeNode: {
                rule: rules[0],
                index: 0,
              },
              action: 'click',
              status: 'selected',
            });
          }}
        >
          选中
        </Button>
      </Space>
      <Divider />
      <InteractContainer
        status={activeStatus}
        getContainer={'#controller'}
        rules={rules}
        onStatusChange={setActiveStatus}
      >
        <div id={'controller'}>
          <div style={{ padding: 40 }} data-uxid={'controller'}>
            <Space>
              <Card size={'small'}>可选择元素</Card>
              <Card size={'small'}>可选择元素</Card>
              <Card size={'small'}>可选择元素</Card>
            </Space>
          </div>
        </div>
      </InteractContainer>
    </div>
  );
};

export default Demo;
