/**
 * compact: true
 */
import { DraggablePanel } from '@ant-design/pro-editor';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox horizontal style={{ height: 300 }}>
    <DraggablePanel placement="left" maxWidth={800} style={{ width: '100%', padding: 12 }}>
      左侧面板
    </DraggablePanel>
    <div style={{ flex: 1, padding: 12 }}>内容</div>
  </Flexbox>
);
