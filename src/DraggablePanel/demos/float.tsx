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
        Float Draggable Panel
      </DraggablePanel>
    </div>
  );
};
