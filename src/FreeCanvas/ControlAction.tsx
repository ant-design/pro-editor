import { ExpandOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Space, Tooltip } from 'antd';
import isEqual from 'lodash.isequal';
import type { FC } from 'react';
import { memo, useEffect } from 'react';
import { Viewport, useReactFlow, useViewport } from 'reactflow';
import { styled, useToken } from '../theme';

const Container = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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

const ControlAction: FC<ControlActionProps> = memo(
  ({ viewport, extraBtns = [] }) => {
    const token = useToken();
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
      <ConfigProvider
        theme={{ token: { colorBgContainer: token.colorBgElevated } }}
      >
        <Container>
          <Space>
            <Button icon={<MinusOutlined />} onClick={handleZoomOut} />
            <Zoom />
            <Button icon={<PlusOutlined />} onClick={handleZoomIn} />
            <Tooltip title={'自适应画布'}>
              <Button icon={<ExpandOutlined />} onClick={handleZoomFit} />
            </Tooltip>
            {extraBtns}
          </Space>
        </Container>
      </ConfigProvider>
    );
  },
);

export default ControlAction;
