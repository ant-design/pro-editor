import { EditFilled } from '@ant-design/icons';
import { ActionIcon, SortList } from '@ant-design/pro-editor';
import { message } from 'antd';
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
        hideRemove
        actions={(item) => [
          <ActionIcon
            icon={<EditFilled />}
            key={'edit'}
            tabIndex={-1}
            onClick={() => message.info(item.dataIndex)}
          />,
        ]}
        renderContent={(item, index) => (
          <ItemRender item={item} index={index} />
        )}
      />
    </div>
  );
};
