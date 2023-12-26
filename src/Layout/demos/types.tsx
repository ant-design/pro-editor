import { EditorLayout, Input } from '@ant-design/pro-editor';
import { Segmented, Space } from 'antd';
import { useState } from 'react';
import { DefaultLayoutProps } from './_defaultProps';

export default () => {
  const [value, setValue] = useState<string>('Bottom');

  return (
    <Space
      direction="vertical"
      style={{
        maxWidth: '100%',
      }}
    >
      <Segmented
        options={['Left&Right', 'LeftFull', 'RightFull', 'Bottom']}
        value={value}
        onChange={(e) => setValue(e.toString())}
      />
      <EditorLayout
        style={{
          maxWidth: '100%',
          height: '600px',
        }}
        header={{
          ...DefaultLayoutProps.header,
          children: (
            <Input
              addonBefore="Options"
              placeholder="Search For Some Options"
              style={{ width: 250 }}
            />
          ),
        }}
        type={value}
        footer={{
          ...DefaultLayoutProps.footer,
          children: <div>Footer</div>,
        }}
        leftPannel={{
          children: <div>Left Pannel</div>,
        }}
      />
    </Space>
  );
};
