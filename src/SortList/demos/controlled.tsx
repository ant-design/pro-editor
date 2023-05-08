import { SortList } from '@ant-design/pro-editor';
import { useState } from 'react';
import ItemRender from './_ItemRender';
import { INIT_VALUES, SchemaItem } from './data';

export default () => {
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
