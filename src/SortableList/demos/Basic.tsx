/**
 * title: 默认使用
 * description: 默认内容区域渲染 `id`，可通过 `renderContent` 来自定义渲染内容。
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
