import { LevaPanel } from '@ant-design/pro-editor';
import { useState } from 'react';
import { ButtonConfig, buttonSchema } from './schema';

export default () => {
  const [config, setConfig] = useState<ButtonConfig>({ children: '默认按钮', type: 'primary' });

  return (
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
  );
};
