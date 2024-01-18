/**
 * title: 创建按钮
 * description: 通过 `creatorButtonProps` 可以自定义创建按钮，record 为创建的数据
 * compact: true
 */
import { SortableList } from '@ant-design/pro-editor';
import { useTheme } from 'antd-style';
import { Flexbox } from 'react-layout-kit';

const list = [{ text: 'hello' }, { text: 'world' }];

const Demo = () => {
  const token = useTheme();
  return (
    <Flexbox padding={24} style={{ background: token.colorBgLayout }}>
      <SortableList
        value={list}
        renderContent={(item) => item.text}
        creatorButtonProps={{
          creatorButtonText: '自定义添加',
          record: () => ({
            text: Math.ceil(Math.random() * 100000).toString(16),
          }),
        }}
      />
    </Flexbox>
  );
};

export default Demo;
