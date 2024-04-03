import { HolographicCard } from '@ant-design/pro-editor';
import { Center } from 'react-layout-kit';

const Demo = () => {
  return (
    <Center height={800}>
      <HolographicCard
        mask={'https://gw.alipayobjects.com/zos/kitchen/nbf5vouUl/illusion.png'}
        img="https://registry.npmmirror.com/@v-idol/vidol-agent-sample-b/1.0.0/files/cover.png"
      />
    </Center>
  );
};

export default Demo;
