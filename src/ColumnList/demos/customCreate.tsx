import { PlusCircleTwoTone } from '@ant-design/icons';
import type { ColumnItemList, SortableListRef } from '@ant-design/pro-editor';
import { ActionIcon, ColumnList } from '@ant-design/pro-editor';
import { Button, Empty } from 'antd';
import { useRef } from 'react';
import { Flexbox } from 'react-layout-kit';

import { tableColumnValueOptions } from './mock_data/options';

type SchemaItem = {
  title: string;
  valueType?: string;
  dataIndex: string;
};

const INIT_VALUES = [
  { dataIndex: 'orderId', valueType: 'text', title: 'Order ID' },
  {
    dataIndex: 'orderNumber',
    valueType: 'text',
    title: 'Order Number',
  },
  {
    dataIndex: 'orderMoney',
    valueType: 'text',
    title: 'Order Money',
  },
];

/**
 * 创建一个随机的索引标记符，请勿在生产环境使用
 */
export const randomIndex = () => Math.random() * 10000;

const columns: ColumnItemList<SchemaItem> = [
  {
    title: 'Title',
    dataIndex: 'title',
    type: 'input',
  },
  {
    title: 'ValueType',
    dataIndex: 'valueType',
    type: 'select',
    options: tableColumnValueOptions,
  },
  {
    title: 'DataIndex',
    dataIndex: 'dataIndex',
    type: 'select',
  },
];

export default () => {
  const ref = useRef<SortableListRef<SchemaItem>>(null);

  const createNewRecord = () => {
    const id = `id-${randomIndex()}}`;
    return { dataIndex: '', title: `new-${id}`, valueType: 'text' };
  };

  const handleCreate = () => {
    const data = createNewRecord();
    ref.current.addItem(data);
  };

  return (
    <>
      <Flexbox
        horizontal
        align={'center'}
        distribution={'space-between'}
        style={{ marginBottom: 16 }}
      >
        <div>Custom Title</div>
        <ActionIcon
          icon={<PlusCircleTwoTone />}
          key={'edit'}
          tabIndex={-1}
          onClick={handleCreate}
        />
      </Flexbox>
      <ColumnList<SchemaItem>
        ref={ref}
        columns={columns}
        renderEmpty={() => (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No Data">
            <Button type="primary" onClick={handleCreate}>
              Create Custom Data
            </Button>
          </Empty>
        )}
        initialValues={INIT_VALUES}
        onChange={(values) => {
          console.log('onChange', values);
        }}
        creatorButtonProps={{ style: { display: 'none' }, record: createNewRecord }}
      />
    </>
  );
};
