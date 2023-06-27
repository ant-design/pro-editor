/**
 * title: 自定义操作项
 * description: 提供 `actions` 配置项可自定义用户操作项，`hideRemove` 属性可以隐藏删除操作，完全自定义。
 */
import { EditFilled } from '@ant-design/icons';
import { ActionIcon, SortableList } from '@ant-design/pro-editor';
import { message } from 'antd';
import ItemRender from './_ItemRender';
import { INIT_VALUES, SchemaItem } from './data';

export default () => {
  return (
    <div style={{ width: 340, padding: '0 12px' }}>
      <SortableList<SchemaItem>
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
        renderContent={(item, index) => <ItemRender item={item} index={index} />}
      />
    </div>
  );
};
