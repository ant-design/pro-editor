import { DraggablePanel, LevaPanel } from '@ant-design/pro-editor';
import { Button } from 'antd';
import { useState } from 'react';
import { ButtonConfig, buttonSchema } from './schema';

export default () => {
  const [config, setConfig] = useState<ButtonConfig>({ children: '默认按钮', type: 'primary' });

  return (
    <div
      style={{
        minHeight: 300,
        display: 'flex',
      }}
    >
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          padding: 12,
          alignSelf: 'center',
        }}
      >
        <Button {...config} />
      </div>
      <DraggablePanel style={{ padding: 12 }}>
        <LevaPanel
          schema={buttonSchema}
          title="按钮属性配置器"
          value={config}
          onChange={(changedValue, fullValue) => {
            setConfig(fullValue);
            console.log('check changedValue:', changedValue);
            console.log('check fullValue:', fullValue);
          }}
        />
      </DraggablePanel>
    </div>
  );
};
