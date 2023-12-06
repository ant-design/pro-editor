import { EditorLayout } from '@ant-design/pro-editor';

export default () => {
  return (
    <EditorLayout
      style={{
        maxWidth: '100%',
      }}
      leftPannel={{
        children: <div>Left Pannel</div>,
      }}
    />
  );
};
