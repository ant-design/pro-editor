import { TipGuide } from '@ant-design/pro-editor';

import { Button, Checkbox, List, Space, message } from 'antd';
import { useState } from 'react';

export default () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [open, setOpen] = useState(localStorage.getItem('tip-guide-key') ? false : true);
  const [checked, setChecked] = useState(true);

  return (
    <Space>
      {contextHolder}
      <Button
        onClick={() => {
          localStorage.removeItem('tip-guide-key');
          messageApi.open({
            type: 'success',
            content: 'Clear Success ! We will refalsh this page after 3s',
            duration: 3,
          });
          setTimeout(() => {
            location.reload();
          }, 3000);
        }}
      >
        Clear LocalStorage
      </Button>
      <TipGuide
        open={open}
        placement="right"
        title={'现在这个 List 是一个空数据，需要你添加数据'}
        onOpenChange={(e) => {
          if (checked) {
            localStorage.setItem('tip-guide-key', `${checked}`);
          }
          setOpen(e);
        }}
        footerRender={(dom) => {
          return (
            <Space
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <Checkbox
                onChange={(e) => {
                  setChecked(e.target.value);
                }}
                checked={checked}
              >
                不再显示
              </Checkbox>
              {dom}
            </Space>
          );
        }}
      >
        <List />
      </TipGuide>
    </Space>
  );
};
