/**
 * iframe: 500
 */
import type { Position } from '@ant-design/pro-editor';
import { DraggablePanel } from '@ant-design/pro-editor';
import { useLocalStorageState } from 'ahooks';

export default () => {
  const [position, setPos] = useLocalStorageState<Position>('demo-pos');

  return (
    <div
      style={{
        height: 500,
        display: 'flex',
      }}
    >
      <DraggablePanel
        position={position}
        onPositionChange={setPos}
        mode={'float'}
        style={{ padding: 12 }}
      >
        悬浮可拖拽面板
      </DraggablePanel>
    </div>
  );
};
