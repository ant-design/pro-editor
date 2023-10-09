import { TipGuide } from '@ant-design/pro-editor';

import { Button, List, Space } from 'antd';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(true);

  return (
    <Space>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open
      </Button>
      <Button
        onClick={() => {
          setOpen(false);
        }}
      >
        Close
      </Button>
      <TipGuide open={open} placement="right" title={'现在这个 List 是一个空数据，需要你添加数据'}>
        <List />
      </TipGuide>
    </Space>
  );
};
