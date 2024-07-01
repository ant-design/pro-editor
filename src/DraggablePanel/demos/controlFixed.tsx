/**
 * compact: false
 */
import { DraggablePanel } from '@ant-design/pro-editor';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        height: 300,
        display: 'flex',
        overflow: 'hidden',
        maxWidth: '100%',
      }}
    >
      <div style={{ flex: 1, padding: 12 }}>Content</div>
      <DraggablePanel
        style={{ padding: 12 }}
        maxWidth={600}
        isExpand={open}
        onExpandChange={setOpen}
      >
        Right Panel
      </DraggablePanel>
    </div>
  );
};
