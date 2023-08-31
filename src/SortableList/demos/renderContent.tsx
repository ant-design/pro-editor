/**
 * title: 自定义列表项内容
 * description: 提供 `renderContent` 由用户自定义除拖拽等操作外的列表项内容。
 * compact: true
 */
import { SortableList } from '@ant-design/pro-editor';
import { useTheme } from 'antd-style';
import { Flexbox } from 'react-layout-kit';
import ItemRender from './_ItemRender';
import { INIT_VALUES, SchemaItem } from './data';

export default () => {
  const token = useTheme();
  return (
    <Flexbox padding={24} style={{ background: token.colorBgLayout }}>
      <SortableList<SchemaItem>
        initialValues={INIT_VALUES}
        onChange={(data, event) => {
          console.log('data', data, event);
        }}
        renderContent={(item, index) => <ItemRender item={item} index={index} />}
      />
    </Flexbox>
  );
};
