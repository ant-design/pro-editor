/**
 * title: 默认使用
 * compact: true
 */
import { SortableList } from '@ant-design/pro-editor';
import { useTheme } from 'antd-style';
import { Flexbox } from 'react-layout-kit';

const list = [{ id: 'hello' }, { id: 'world' }];

const Demo = () => {
  const token = useTheme();
  return (
    <Flexbox padding={24} style={{ background: token.colorBgLayout }}>
      <SortableList value={list} />
    </Flexbox>
  );
};

export default Demo;
