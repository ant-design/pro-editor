import { SortList } from '@ant-design/pro-editor';
import ItemRender from './_ItemRender';
import { INIT_VALUES, SchemaItem } from './data';

export default () => {
  return (
    <div style={{ width: 340, padding: '0 12px' }}>
      <SortList<SchemaItem>
        initialValues={INIT_VALUES}
        onChange={(data) => {
          console.log('data', data);
        }}
        renderContent={(item, index) => (
          <ItemRender item={item} index={index} />
        )}
      />
    </div>
  );
};
