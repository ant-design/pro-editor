import { SortList } from '@ant-design/pro-editor';
import { Flexbox } from 'react-layout-kit';
import ItemRender from './_ItemRender';
import { fieldStyle, INIT_VALUES, SchemaItem } from './data';

const Header = () => {
  return (
    <Flexbox horizontal align={'center'} gap={8} style={{ paddingRight: 22 }}>
      <div style={{ ...fieldStyle, color: 'rgba(0,0,0,.45)' }}>列标题</div>
      <div style={{ ...fieldStyle, color: 'rgba(0,0,0,.45)' }}>值类型</div>
    </Flexbox>
  );
};

export default () => {
  return (
    <SortList<SchemaItem>
      initialValues={INIT_VALUES}
      onChange={(data) => {
        console.log('data', data);
      }}
      renderHeader={() => <Header />}
      renderContent={(item, index) => <ItemRender item={item} index={index} />}
    />
  );
};
