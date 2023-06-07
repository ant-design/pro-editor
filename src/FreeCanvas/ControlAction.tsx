import { ExpandOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Space, Tooltip } from 'antd';
import { useTheme } from 'antd-style';
import isEqual from 'lodash.isequal';
import type { FC } from 'react';
import { memo, useEffect } from 'react';
import { Center } from 'react-layout-kit';
import { Viewport, useReactFlow, useViewport } from 'reactflow';

const Zoom: FC = memo(() => {
  const reactFlow = useReactFlow();
  const { zoom } = useViewport();

  const handleZoomTo = () => {
    if (zoom === 1) {
      reactFlow.zoomTo(0.5);
    } else {
      reactFlow.zoomTo(1);
    }
  };

  return (
    <Tooltip title={zoom === 1 ? '缩放为 2:1' : '缩放为 1:1'}>
      <Button onClick={handleZoomTo} style={{ width: 64 }}>
        {Math.round(zoom * 100)}%
      </Button>
    </Tooltip>
  );
});

interface ControlActionProps {
  viewport: Viewport;
  /**
   * 额外的操作按钮
   */
  extraBtns?: React.ReactNode[];
}

const ControlAction: FC<ControlActionProps> = memo(({ viewport, extraBtns = [] }) => {
  const token = useTheme();
  const reactFlow = useReactFlow();

  const handleZoomIn = () => {
    reactFlow.zoomIn();
  };
  const handleZoomOut = () => {
    reactFlow.zoomOut();
  };
  const handleZoomFit = () => {
    reactFlow.fitView();
  };

  useEffect(() => {
    if (isEqual(reactFlow.getViewport(), viewport)) return;

    reactFlow.setViewport(viewport);
  }, [viewport]);

  return (
    <ConfigProvider theme={{ token: { colorBgContainer: token.colorBgElevated } }}>
      <Center padding={8}>
        <Space>
          <Button icon={<MinusOutlined />} onClick={handleZoomOut} />
          <Zoom />
          <Button icon={<PlusOutlined />} onClick={handleZoomIn} />
          <Tooltip title={'自适应画布'}>
            <Button icon={<ExpandOutlined />} onClick={handleZoomFit} />
          </Tooltip>
          {extraBtns}
        </Space>
      </Center>
    </ConfigProvider>
  );
});

export default ControlAction;
