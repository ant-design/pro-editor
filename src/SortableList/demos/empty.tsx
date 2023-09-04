/**
 * title: 空状态
 * description: 当列表没有值时会展示空状态。
 * compact: true
 */
import { SortableList } from '@ant-design/pro-editor';
import { useTheme } from 'antd-style';
import { Flexbox } from 'react-layout-kit';

const list = [];

const Demo = () => {
  const token = useTheme();
  return (
    <Flexbox padding={24} style={{ background: token.colorBgLayout }}>
      <SortableList value={list} />
    </Flexbox>
  );
};

export default Demo;
