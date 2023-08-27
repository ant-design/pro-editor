/**
 * title: 使用 ref 获得实例
 * description: 提供传统的 `ref` 方式关联组件实例，可实现自定义功能，如将添加按钮渲染到组件右上方。
 */
import { PlusCircleFilled } from '@ant-design/icons';
import { ActionIcon, SortableList, SortableListRef } from '@ant-design/pro-editor';
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
  const ref = useRef<SortableListRef>(null);

  return (
    <div style={{ width: 340, padding: '0 12px' }}>
      <Flexbox horizontal align={'center'} distribution={'space-between'}>
        <div>列配置项</div>
        <ActionIcon
          icon={<PlusCircleFilled />}
          key={'edit'}
          tabIndex={-1}
          onClick={() => {
            const id = `id-${listData.length}-${randomIndex()}`;
            ref.current.addItem({ id, title: `new-${id}` });
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
    </div>
  );
};
