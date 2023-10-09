/**
 * title: 自定义创建逻辑
 * description: 你可以设置 `creatorButtonProps={false}` 来关闭默认的创建效果，然后自定义创建逻辑
 */
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
  { dataIndex: 'orderId', valueType: 'text', title: '订单id' },
  {
    dataIndex: 'orderNumber',
    valueType: 'text',
    title: '订单号',
  },
  {
    dataIndex: 'orderMoney',
    valueType: 'text',
    title: '订单金额',
  },
];

/**
 * 创建一个随机的索引标记符，请勿在生产环境使用
 */
export const randomIndex = () => Math.random() * 10000;

const columns: ColumnItemList<SchemaItem> = [
  {
    title: '列标题',
    dataIndex: 'title',
    type: 'input',
  },
  {
    title: '值类型',
    dataIndex: 'valueType',
    type: 'select',
    options: tableColumnValueOptions,
  },
  {
    title: '字段',
    dataIndex: 'dataIndex',
    type: 'select',
  },
];

export default () => {
  const ref = useRef<SortableListRef<SchemaItem>>(null);

  const handleCreate = () => {
    const id = `id-${randomIndex()}}`;
    ref.current.addItem({ dataIndex: id, title: `new-${id}`, valueType: 'text' });
  };

  return (
    <>
      <Flexbox
        horizontal
        align={'center'}
        distribution={'space-between'}
        style={{ marginBottom: 16 }}
      >
        <div>列配置项</div>
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
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="暂无数据">
            <Button type="primary" onClick={handleCreate}>
              创建自定义数据
            </Button>
          </Empty>
        )}
        initialValues={INIT_VALUES}
        onChange={(values) => {
          console.log('onChange', values);
        }}
        creatorButtonProps={false}
      />
    </>
  );
};
