/**
 * title: 模式配置
 */
import { ActionGroup } from '@ant-design/pro-editor';
import { InputNumber, Segmented, Space } from 'antd';
import { useState } from 'react';

export default () => {
  const [type, setType] = useState<string | any>('block');
  const [size, setSize] = useState<string | number | any>('default');
  const [direction, setDirection] = useState<'row' | 'column' | any>('row');
  const [number, setNumber] = useState<number>(24);

  return (
    <Space direction="vertical">
      <Segmented options={['pure', 'ghost', 'block']} value={type} onChange={setType} />
      <Segmented options={['default', 'large', 'number']} value={size} onChange={setSize} />
      {size === 'number' && (
        <InputNumber
          min={18}
          max={200}
          defaultValue={24}
          onChange={(value) => {
            setNumber(value);
          }}
        />
      )}

      <Segmented options={['row', 'column']} value={direction} onChange={setDirection} />
      <ActionGroup type={type} size={size === 'number' ? number : size} direction={direction} />
    </Space>
  );
};
