import type { Position } from '@ant-design/pro-editor';
import { ActionGroup, DraggablePanel } from '@ant-design/pro-editor';
import { useLocalStorageState } from 'ahooks';
import { defaultItems } from './_items';

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
        minHeight={0}
        minWidth={0}
        resize={{
          right: false,
          left: false,
          top: false,
          bottom: false,
        }}
        size={{
          width: 'auto',
          height: 'auto',
        }}
        style={{
          background: '#fff',
        }}
      >
        <ActionGroup size={30} items={defaultItems} />
      </DraggablePanel>
    </div>
  );
};
