import { EditorLayout, Input } from '@ant-design/pro-editor';
import { Segmented, Space } from 'antd';
import { useState } from 'react';
import { DefaultLayoutProps } from './_defaultProps';

export default () => {
  const [value, setValue] = useState<string>('ghost');
  const [style, setStyle] = useState({});
  return (
    <Space
      direction="vertical"
      style={{
        maxWidth: '100%',
      }}
    >
      <Segmented
        options={['ghost', 'block', 'pure']}
        value={value}
        onChange={(e) => {
          if (e.toString() === 'pure') {
            setStyle({
              backgroundColor: 'rgba(200,200,200,0.3)',
              border: '1px solid #1890ff',
            });
          } else {
            setStyle({});
          }
          setValue(e.toString());
        }}
      />
      <EditorLayout
        style={{
          maxWidth: '100%',
          height: '600px',
        }}
        header={{
          ...DefaultLayoutProps.header,
          style: style,
          children: (
            <Input
              addonBefore="Options"
              placeholder="Search For Some Options"
              style={{ width: 250 }}
            />
          ),
        }}
        themeType={value}
        footer={{
          ...DefaultLayoutProps.footer,
          children: <div>Footer</div>,
        }}
        centerPannel={{
          style: style,
          children: <div>Center Pannel</div>,
        }}
        rightPannel={{
          style: style,
          children: <div>right Pannel</div>,
        }}
        bottomPannel={{
          style: style,
          children: <div>Bottom Pannel</div>,
        }}
        leftPannel={{
          style: style,
          children: <div>Left Pannel</div>,
        }}
      />
    </Space>
  );
};
