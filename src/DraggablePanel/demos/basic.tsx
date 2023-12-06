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
      overflow: 'hidden',
      maxWidth: '100%',
    }}
  >
    <div style={{ flex: 1, padding: 12 }}>内容</div>
    <DraggablePanel style={{ background: '#fff', padding: 12 }} maxWidth={600}>
      可拖面板
    </DraggablePanel>
  </div>
);
