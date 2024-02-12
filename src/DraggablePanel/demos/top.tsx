/**
 * compact: true
 */
import { DraggablePanel } from '@ant-design/pro-editor';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox style={{ height: 300 }}>
    <DraggablePanel placement="top" maxHeight={250} style={{ width: '100%', padding: 12 }}>
      Top Panel
    </DraggablePanel>
    <div style={{ flex: 1, padding: 12 }}>Content</div>
  </Flexbox>
);
