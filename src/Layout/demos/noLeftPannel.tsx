import { EditorLayout } from '@ant-design/pro-editor';

export default () => {
  return (
    <EditorLayout
      style={{
        maxWidth: '100%',
        height: '600px',
      }}
      header={false}
      leftPannel={false}
    />
  );
};
