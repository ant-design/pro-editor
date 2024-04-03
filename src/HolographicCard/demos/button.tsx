import { HolographicCard } from '@ant-design/pro-editor';
import { Button } from 'antd';
import { Center } from 'react-layout-kit';

const Demo = () => (
  <HolographicCard>
    <Center gap={16} style={{ height: '100%' }}>
      <Button type={'primary'}>主按钮</Button>
      <Button>普通按钮</Button>
    </Center>
  </HolographicCard>
);

export default Demo;
