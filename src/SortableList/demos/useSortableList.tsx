/**
 * compact: true
 */
import { SortableList } from '@ant-design/pro-editor';
import { useTheme } from 'antd-style';
import { useState } from 'react';
import { Flexbox } from 'react-layout-kit';
import ItemRender from './_ItemRender';
import { INIT_VALUES, SchemaItem } from './data';

export default () => {
  const [listData, setListData] = useState<SchemaItem[]>(INIT_VALUES);
  const token = useTheme();

  return (
    <Flexbox padding={24} style={{ background: token.colorBgLayout }}>
      <SortableList<SchemaItem>
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
