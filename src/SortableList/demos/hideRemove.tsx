/**
 * title: 隐藏删除按钮
 * description: 你可以设置 `hideRemove` 属性来隐藏默认的删除按钮
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
      <SortableList initialValues={list} hideRemove />
    </Flexbox>
  );
};

export default Demo;
