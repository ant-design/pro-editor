import { DraggablePanel } from '@ant-design/pro-editor';
import { memo } from 'react';
import { shallow } from 'zustand/shallow';

import { useStore } from '../../store';

const ConfigPanel: React.FC = memo(() => {
  const [
    panelPosition,
    width,
    updatePosition,
    updatePanelSize,
    togglePanelExpand,
    componentAsset,
    isExpand,
  ] = useStore(
    (s) => [
      s.editorAwareness.panelPosition,
      s.editorAwareness.panelSize.width,
      s.updatePanelPosition,
      s.updatePanelSize,
      s.togglePanelExpand,
      s.componentAsset,
      s.editorAwareness.panelExpand,
    ],
    shallow,
  );

  return (
    <DraggablePanel
      isExpand={isExpand}
      style={{ display: 'flex', flexDirection: 'column' }}
      position={panelPosition}
      onPositionChange={updatePosition}
      onSizeDragging={(delta, size) => {
        if (!size.width) return;

        updatePanelSize({
          width: typeof size.width === 'string' ? parseInt(size.width) : size.width,
        });
      }}
      onExpandChange={togglePanelExpand}
      minWidth={340}
      size={{ width, height: '100%' }}
    >
      <componentAsset.ConfigPanel />
    </DraggablePanel>
  );
});

export default ConfigPanel;
