/**
 * title: useSortableList
 * description: 在 Item 子组件中使用 `useSortableList()` hook，可以获得当前组件实例
 */
import { SortableList } from '@ant-design/pro-editor';
import { useState } from 'react';

import ItemRender from './_ItemRender';
import { INIT_VALUES, SchemaItem } from './data';

export default () => {
  const [listData, setListData] = useState<SchemaItem[]>(INIT_VALUES);

  return (
    <div style={{ width: 340, padding: '0 12px' }}>
      <SortableList<SchemaItem>
        value={listData}
        onChange={(data) => {
          console.log('data', data);
          setListData(data);
        }}
        renderContent={(item, index) => <ItemRender item={item} index={index} />}
      />
    </div>
  );
};
