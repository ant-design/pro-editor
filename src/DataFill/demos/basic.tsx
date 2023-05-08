import { DataFill } from '@ant-design/pro-editor';

const Demo = () => {
  return (
    <DataFill
      onClick={(payload) => {
        console.log(`${payload.key}:`, payload.filler());
      }}
    />
  );
};

export default Demo;
