/**
 * title: 自定义 Id 生成规则
 * description: 如果传入的数据中没有 `id` 字段，可以通过 `getId` 指定获取唯一值的方法
 * compact: true
 */
import { SortableList } from '@ant-design/pro-editor';
import { Divider } from 'antd';
import { useTheme } from 'antd-style';
import { Flexbox } from 'react-layout-kit';

const Demo = () => {
  const token = useTheme();
  return (
    <Flexbox padding={24} style={{ background: token.colorBgLayout }}>
      <SortableList
        value={[
          { text: 'hello', dataIndex: 'foo' },
          { text: 'world', dataIndex: 'bar' },
        ]}
        getId={(item) => item.dataIndex}
        onChange={(value) => {
          console.log('value', value);
        }}
      />
      <Divider plain>当值相同且未指定 id 时无法正常排序</Divider>
      <SortableList
        value={[
          { text: 'hello', dataIndex: 'world' },
          { text: 'hello', dataIndex: 'world' },
        ]}
        renderContent={(item) => item.text}
        onChange={(value) => {
          console.log('value', value);
        }}
      />
    </Flexbox>
  );
};

export default Demo;
