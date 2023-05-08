import type { Position } from '@ant-design/pro-editor';
import { DraggablePanel } from '@ant-design/pro-editor';
import { useLocalStorageState } from 'ahooks';

export default () => {
  const [position, setPos] = useLocalStorageState<Position>('demo-pos');

  return (
    <div
      style={{
        background: '#f1f1f1',
        border: '2px solid #ddd',
        height: 500,
        display: 'flex',
      }}
    >
      <div style={{ flex: 1, padding: 12 }}>内容</div>
      <DraggablePanel
        position={position}
        onPositionChange={setPos}
        mode={'float'}
        style={{ background: '#fff', padding: 12 }}
      >
        悬浮可拖拽面板
      </DraggablePanel>
    </div>
  );
};
