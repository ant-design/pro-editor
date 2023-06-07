import { Awareness } from '@ant-design/pro-editor';
import { Center } from 'react-layout-kit';

export default () => (
  <Center horizontal>
    <Awareness.Avatar name={'user1'} color={'pink'} active />
    <Awareness.Avatar name={'user2'} color={'blue'} following />
    <Awareness.Avatar name={'user3'} color={'green'} />
  </Center>
);
