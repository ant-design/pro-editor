import { SortList } from '@ant-design/pro-editor';

import { useState } from 'react';
import ItemRender from './_ItemRender';
import { INIT_VALUES, SchemaItem } from './data';

/**
 * 创建一个随机的索引标记符
 */
export const randomIndex = () => Math.random() * 10000;

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
        creatorButtonProps={{
          creatorButtonText: '自定义添加',
          record: (index) => ({
            title: `${index}-${randomIndex()}`,
          }),
        }}
        renderContent={(item, index) => (
          <ItemRender item={item} index={index} />
        )}
        SHOW_STORE_IN_DEVTOOLS // 用于显示 Redux Devtools
      />
    </div>
  );
};
