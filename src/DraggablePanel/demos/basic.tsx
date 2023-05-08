/**
 * compact: false
 */
import { DraggablePanel } from '@ant-design/pro-editor';

export default () => (
  <div
    style={{
      background: '#f1f1f1',
      border: '2px solid #ddd',
      height: 300,
      display: 'flex',
    }}
  >
    <div style={{ flex: 1, padding: 12 }}>内容</div>
    <DraggablePanel style={{ background: '#fff', padding: 12 }}>
      可拖面板
    </DraggablePanel>
  </div>
);
