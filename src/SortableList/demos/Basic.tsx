/**
 * title: 默认使用
 * description: 默认支持列表渲染
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
      <SortableList initialValues={list} />
    </Flexbox>
  );
};

export default Demo;
