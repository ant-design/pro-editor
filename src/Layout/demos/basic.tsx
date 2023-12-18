import { Button, EditorLayout, Input } from '@ant-design/pro-editor';
import { Space } from 'antd';
import { DefaultLayoutProps } from './_defaultProps';

export default () => {
  return (
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
            placeholder="Search For Some Little Options"
            style={{ width: 250 }}
          />
        ),
        extra: (
          <Space>
            <Button type="primary">Save</Button>
            <Button type="dashed">Export</Button>
          </Space>
        ),
      }}
      footer={{
        ...DefaultLayoutProps.footer,
      }}
      leftPannel={{
        children: <div>Left Pannel</div>,
      }}
    />
  );
};
