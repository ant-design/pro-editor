/**
 * compact: true
 */
import { SortableList, SortableListProvider, useSortableList } from '@ant-design/pro-editor';
import { Button, message } from 'antd';
import { useTheme } from 'antd-style';
import { useState } from 'react';
import { Flexbox } from 'react-layout-kit';
import ItemRender from './_ItemRender';
import { INIT_VALUES, SchemaItem } from './data';

const App = () => {
  const [listData, setListData] = useState<SchemaItem[]>(INIT_VALUES);

  return (
    <SortableList<SchemaItem>
      value={listData}
      onChange={(data) => {
        console.log('data', data);
        setListData(data);
      }}
      renderContent={(item, index) => <ItemRender item={item} index={index} />}
      SHOW_STORE_IN_DEVTOOLS // 用于显示 Redux Devtools
    />
  );
};

const Extra = () => {
  const instance = useSortableList();
  return (
    <Button
      block
      size="small"
      type="primary"
      style={{ marginBottom: 8 }}
      onClick={() => message.info(JSON.stringify(instance.getValue()))}
    >
      Get Value
    </Button>
  );
};

export default () => {
  const token = useTheme();

  return (
    <SortableListProvider>
      <Flexbox padding={24} style={{ background: token.colorBgLayout }}>
        <Extra />
        <App />
      </Flexbox>
    </SortableListProvider>
  );
};
