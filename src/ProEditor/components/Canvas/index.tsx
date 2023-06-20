import { AimOutlined, RedoOutlined, StopOutlined, UndoOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import type { FC } from 'react';
import { memo } from 'react';
import { shallow } from 'zustand/shallow';

import FreeCanvas from '../../../FreeCanvas';
import { useStore } from '../../store';
import Component from './Component';

const Canvas: FC = memo(() => {
  const [
    viewport,
    componentAsset,
    enableCanvasInteraction,
    toggleCanvasInteraction,
    updateEditorAwareness,
    redo,
    undo,
    canRedo,
    canUndo,
  ] = useStore(
    (s) => [
      s.editorAwareness.viewport,
      s.componentAsset,
      s.enableCanvasInteraction,
      s.toggleCanvasInteraction,
      s.internalUpdateEditorAwareness,
      s.redo,
      s.undo,
      s.redoStack().length > 0,
      s.undoStack().length > 0,
    ],
    shallow,
  );

  const ErrorBoundary = componentAsset.ErrorBoundary;

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
          <Button.Group key={'undo-redo'}>
            <Tooltip title="撤销">
              <Button icon={<UndoOutlined />} onClick={undo} disabled={!canUndo} />
            </Tooltip>
            <Tooltip title="重做">
              <Button icon={<RedoOutlined />} onClick={redo} disabled={!canRedo} />
            </Tooltip>
          </Button.Group>,
        ]}
      >
        <Component />
      </FreeCanvas>
    </ErrorBoundary>
  );
});

export default Canvas;
