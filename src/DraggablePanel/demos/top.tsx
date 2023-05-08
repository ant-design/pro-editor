/**
 * height: 600
 */
import { DraggablePanel } from '@ant-design/pro-editor';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox
    style={{ background: '#f1f1f1', border: '2px solid #ddd', height: 300 }}
  >
    <DraggablePanel
      placement={'top'}
      style={{ background: '#fff', width: '100%', padding: 12 }}
    >
      顶部面板
    </DraggablePanel>
    <div style={{ flex: 1, padding: 12 }}>内容</div>
  </Flexbox>
);
