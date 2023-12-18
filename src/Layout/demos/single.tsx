import { EditorLayout } from '@ant-design/pro-editor';

export default () => {
  return (
    <EditorLayout
      style={{
        maxWidth: '100%',
        height: '600px',
      }}
      header={false}
      footer={false}
      leftPannel={{
        children: <div>Left Pannel</div>,
      }}
    />
  );
};
