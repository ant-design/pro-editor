import { PlusCircleFilled } from '@ant-design/icons';
import { ActionIcon, SortList, SortListRef } from '@ant-design/pro-editor';
import { useRef, useState } from 'react';
import { Flexbox } from 'react-layout-kit';
import ItemRender from './_ItemRender';
import { INIT_VALUES, SchemaItem } from './data';

/**
 * 创建一个随机的索引标记符
 */
export const randomIndex = () => Math.random() * 10000;

export default () => {
  const [listData, setListData] = useState<SchemaItem[]>(INIT_VALUES);
  const ref = useRef<SortListRef<SchemaItem>>(null);

  return (
    <div style={{ width: 340, padding: '0 12px' }}>
      <Flexbox horizontal align={'center'} distribution={'space-between'}>
        <div>列配置项</div>
        <ActionIcon
          icon={<PlusCircleFilled />}
          key={'edit'}
          tabIndex={-1}
          onClick={() => {
            ref.current.addItem({ title: `new-${randomIndex()}` });
          }}
        />
      </Flexbox>
      <SortList<SchemaItem>
        ref={ref}
        value={listData}
        onChange={(data) => {
          console.log('data', data);
          setListData(data);
        }}
        creatorButtonProps={false}
        renderContent={(item, index) => (
          <ItemRender item={item} index={index} />
        )}
        SHOW_STORE_IN_DEVTOOLS // 用于显示 Redux Devtools
      />
    </div>
  );
};
