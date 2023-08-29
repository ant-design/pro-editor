/**
 * title: 配置使用
 * description: 通过配置 `items` 渲染整个内容
 */
import { CopyOutlined, DragOutlined, ZoomInOutlined, ZoomOutOutlined } from '@ant-design/icons';
import { ActionGroup } from '@ant-design/pro-editor';
import { message } from 'antd';

export default () => {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <>
      {contextHolder}
      <ActionGroup
        items={[
          {
            icon: <CopyOutlined />,
            onClick: () => {
              messageApi.info('复制！');
            },
            label: '复制',
          },
          {
            icon: <ZoomInOutlined />,
            onClick: () => {
              messageApi.success('放大！');
            },
            label: '放大！',
          },
          {
            icon: <ZoomOutOutlined />,
            style: {
              color: '#1890ff',
            },
            onClick: () => {
              messageApi.success('缩小！');
            },
            label: '缩小！',
          },
          {
            icon: <DragOutlined />,
            onClick: () => {
              messageApi.loading('快速定位ing');
            },
            label: '快速定位',
          },
        ]}
      />
    </>
  );
};
