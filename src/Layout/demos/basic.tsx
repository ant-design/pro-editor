import { Layout } from '@ant-design/pro-editor';

export default () => {
  return (
    <Layout
      style={{
        maxWidth: '100%',
      }}
      leftPannel={{
        children: <div>Left Pannel</div>,
      }}
    />
  );
};
