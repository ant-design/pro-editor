import { ColorPicker } from '@ant-design/pro-editor';
import { Input } from 'antd';
import { useState } from 'react';

export const Demo = () => {
  const [color, setColor] = useState('#1677FF');
  return (
    <>
      <ColorPicker value={color} onChange={setColor} />
      <Input value={color} />
    </>
  );
};

export default Demo;
