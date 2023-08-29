/**
 * title: 自定义列表项内容
 * description: 提供 `renderContent` 由用户自定义除拖拽等操作外的列表项内容。
 */
import { SortableList } from '@ant-design/pro-editor';
import ItemRender from './_ItemRender';
import { INIT_VALUES, SchemaItem } from './data';

export default () => {
  return (
    <div style={{ width: 340, padding: '0 12px' }}>
      <SortableList<SchemaItem>
        initialValues={INIT_VALUES}
        onChange={(data, event) => {
          console.log('data', data, event);
        }}
        renderContent={(item, index) => <ItemRender item={item} index={index} />}
      />
    </div>
  );
};
