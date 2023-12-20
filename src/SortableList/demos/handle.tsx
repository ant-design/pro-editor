/**
 * title: 隐藏拖拽按钮
 * description: 你可以设置 `handle` 属性来控制拖拽按钮的显隐
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
