import { SortableList } from '@ant-design/pro-editor';
import ItemRender from './_ItemRender';
import { SchemaItem } from './data';

export default () => {
  return (
    <SortableList<SchemaItem>
      onChange={(data) => {
        console.log('data', data);
      }}
      renderContent={(item, index) => <ItemRender item={item} index={index} />}
    />
  );
};
