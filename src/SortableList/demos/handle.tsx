/**
 * compact: true
 */
import { SortableList } from '@ant-design/pro-editor';
import { useTheme } from 'antd-style';
import { Flexbox } from 'react-layout-kit';

const list = ['hello', 'world'];

const Demo = () => {
  const token = useTheme();
  return (
    <Flexbox padding={24} style={{ background: token.colorBgLayout }}>
      <SortableList initialValues={list} handle={false} />
    </Flexbox>
  );
};

export default Demo;
