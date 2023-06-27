/**
 * title: 紧凑模式
 * description: 提供 `compact` 配置型开启紧凑模式，开启后把手和操作项会浮动在内容区域内部，需用户自行调整间距。
 */
import { SortableList } from '@ant-design/pro-editor';
import ItemRender from './_ItemRender';
import { INIT_VALUES, SchemaItem } from './data';

export default () => {
  return (
    <div style={{ width: 340, padding: '0 12px' }}>
      <SortableList<SchemaItem>
        initialValues={INIT_VALUES}
        compact
        onChange={(data) => {
          console.log('data', data);
        }}
        renderContent={(item, index) => <ItemRender item={item} index={index} compact />}
      />
    </div>
  );
};
