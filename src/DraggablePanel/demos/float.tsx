/**
 * iframe: true
 */
import { DraggablePanel } from '@ant-design/pro-editor';

export default () => {
  return (
    <div
      style={{
        height: 500,
        display: 'flex',
      }}
    >
      <DraggablePanel style={{ padding: 12 }} mode="float">
        悬浮可拖拽面板
      </DraggablePanel>
    </div>
  );
};
