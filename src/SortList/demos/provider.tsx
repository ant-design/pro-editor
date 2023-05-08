import {
  SortList,
  SortListProvider,
  useSortList,
} from '@ant-design/pro-editor';
import { Button, message } from 'antd';
import { useState } from 'react';
import ItemRender from './_ItemRender';
import { INIT_VALUES, SchemaItem } from './data';

const App = () => {
  const [listData, setListData] = useState<SchemaItem[]>(INIT_VALUES);

  return (
    <div style={{ width: 340, padding: '0 12px' }}>
      <SortList<SchemaItem>
        value={listData}
        onChange={(data) => {
          console.log('data', data);
          setListData(data);
        }}
        renderContent={(item, index) => (
          <ItemRender item={item} index={index} />
        )}
        SHOW_STORE_IN_DEVTOOLS // 用于显示 Redux Devtools
      />
    </div>
  );
};

const Extra = () => {
  const instance = useSortList();
  return (
    <div>
      <Button onClick={() => message.info(JSON.stringify(instance.getValue()))}>
        获取值
      </Button>
    </div>
  );
};

export default () => (
  <SortListProvider>
    <Extra />
    <App />
  </SortListProvider>
);
