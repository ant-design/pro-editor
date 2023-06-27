import { SortableList, SortableListProvider, useSortableList } from '@ant-design/pro-editor';
import { Button, message } from 'antd';
import { useState } from 'react';
import { Flexbox } from 'react-layout-kit';

import ItemRender from './_ItemRender';
import { INIT_VALUES, SchemaItem } from './data';

const App = () => {
  const [listData, setListData] = useState<SchemaItem[]>(INIT_VALUES);

  return (
    <Flexbox padding={24}>
      <SortableList<SchemaItem>
        value={listData}
        onChange={(data) => {
          console.log('data', data);
          setListData(data);
        }}
        renderContent={(item, index) => <ItemRender item={item} index={index} />}
        SHOW_STORE_IN_DEVTOOLS // 用于显示 Redux Devtools
      />
    </Flexbox>
  );
};

const Extra = () => {
  const instance = useSortableList();
  return (
    <div>
      <Button onClick={() => message.info(JSON.stringify(instance.getValue()))}>获取值</Button>
    </div>
  );
};

export default () => (
  <SortableListProvider>
    <Extra />
    <App />
  </SortableListProvider>
);
