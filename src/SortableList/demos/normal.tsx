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
