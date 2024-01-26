/**
 * title: 受控模式
 * description: onChange 会返回变更数据
 * compact: true
 */
import { SortableList } from '@ant-design/pro-editor';
import { Button } from 'antd';
import { useTheme } from 'antd-style';
import { useState } from 'react';
import { Flexbox } from 'react-layout-kit';

const Demo = () => {
  const [list, setList] = useState(['hello', 'world']);

  const token = useTheme();
  return (
    <Flexbox padding={24} style={{ background: token.colorBgLayout }}>
      <SortableList
        value={list}
        onChange={(value) => {
          console.log('change value', value);
          setList(value);
        }}
        SHOW_STORE_IN_DEVTOOLS
      />
      <Button
        type="primary"
        onClick={() => {
          setList(['foo', 'bar', 'yes']);
        }}
        style={{ marginTop: 8 }}
      >
        设置数据
      </Button>
    </Flexbox>
  );
};

export default Demo;
