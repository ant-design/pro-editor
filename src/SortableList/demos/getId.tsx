/**
 * title: 自定义 Id 生成规则
 * description: 如果传入的数据中没有 `id` 字段，可以通过 `getId` 指定获取唯一值的方法
 * compact: true
 */
import { SortableList } from '@ant-design/pro-editor';
import { useTheme } from 'antd-style';
import { Flexbox } from 'react-layout-kit';

const list = [
  { text: 'hello', dataIndex: 'foo' },
  { text: 'world', dataIndex: 'bar' },
];

const Demo = () => {
  const token = useTheme();
  return (
    <Flexbox padding={24} style={{ background: token.colorBgLayout }}>
      <SortableList
        value={list}
        getId={(item) => item.dataIndex}
        onChange={(value) => {
          console.log('value', value);
        }}
      />
    </Flexbox>
  );
};

export default Demo;
