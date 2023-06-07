/**
 * iframe: 100
 */
import { Awareness } from '@ant-design/pro-editor';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox style={{ background: 'rgba(0,0,0,0.5)' }} height={'100vh'}>
    <Awareness.Cursor name={'user1'} position={{ x: 50, y: 30 }} color={'pink'} />
    <Awareness.Cursor name={'user2'} position={{ x: 200, y: 30 }} color={'blue'} />
    <Awareness.Cursor name={'user3'} position={{ x: 350, y: 30 }} color={'green'} />
  </Flexbox>
);
