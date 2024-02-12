/**
 * compact: true
 */
import { PlusCircleFilled } from '@ant-design/icons';
import { ActionIcon, SortableList, SortableListRef } from '@ant-design/pro-editor';
import { useTheme } from 'antd-style';
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
  const ref = useRef<SortableListRef<SchemaItem>>(null);
  const token = useTheme();

  return (
    <Flexbox padding={24} style={{ background: token.colorBgLayout }}>
      <Flexbox horizontal align={'center'} distribution={'space-between'}>
        <div>Column Config</div>
        <ActionIcon
          icon={<PlusCircleFilled />}
          key={'edit'}
          tabIndex={-1}
          onClick={() => {
            const id = `id-${listData.length}-${randomIndex()}`;
            ref.current.addItem({ title: `new-${id}` });
          }}
        />
      </Flexbox>
      <SortableList<SchemaItem>
        ref={ref}
        value={listData}
        onChange={(data) => {
          console.log('data', data);
          setListData(data);
        }}
        renderContent={(item, index) => <ItemRender item={item} index={index} />}
      />
    </Flexbox>
  );
};
