import { AimOutlined, StopOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import type { FC } from 'react';
import { memo } from 'react';
import { shallow } from 'zustand/shallow';

import FreeCanvas from '../../../FreeCanvas';
import { useUpdateEditorAwareness } from '../../hooks/useEditorAwareness';
import { useStore } from '../../store';
import Component from './Component';

const Canvas: FC = memo(() => {
  const [viewport, componentAsset] = useStore(
    (s) => [s.editorAwareness.viewport, s.componentAsset],
    shallow,
  );
  const [enableCanvasInteraction, toggleCanvasInteraction] = useStore(
    (s) => [s.enableCanvasInteraction, s.toggleCanvasInteraction],
    shallow,
  );

  const ErrorBoundary = componentAsset.ErrorBoundary;

  const { updateEditorAwareness } = useUpdateEditorAwareness();

  return (
    <ErrorBoundary>
      <FreeCanvas
        viewport={viewport}
        onViewportChange={(viewport) => {
          updateEditorAwareness({ viewport });
        }}
        extraControlBtns={[
          <Tooltip
            title={`画布交互：已${enableCanvasInteraction ? '启用' : '禁用'}`}
            key="interaction"
          >
            <Button
              icon={enableCanvasInteraction ? <AimOutlined /> : <StopOutlined />}
              onClick={toggleCanvasInteraction}
            />
          </Tooltip>,
        ]}
      >
        <Component />
      </FreeCanvas>
    </ErrorBoundary>
  );
});

export default Canvas;
