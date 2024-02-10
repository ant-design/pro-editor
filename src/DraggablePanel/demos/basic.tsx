/**
 * compact: false
 */
import { DraggablePanel } from '@ant-design/pro-editor';

export default () => (
  <div
    style={{
      height: 300,
      display: 'flex',
      overflow: 'hidden',
      maxWidth: '100%',
    }}
  >
    <div style={{ flex: 1, padding: 12 }}>内容</div>
    <DraggablePanel style={{ padding: 12 }} maxWidth={600}>
      右侧面板
    </DraggablePanel>
  </div>
);
