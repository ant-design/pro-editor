import { useSortableList } from '@ant-design/pro-editor';
import { Input, Select } from 'antd';
import { memo, useState } from 'react';
import { Flexbox } from 'react-layout-kit';
import { ItemRenderProps, fieldStyle, tableColumnValueOptions } from './data';

export const randomIndex = () => Math.random() * 10000;

const ItemRender = memo(({ item, index, compact = false }: ItemRenderProps) => {
  const instance = useSortableList();
  const [title, setTitle] = useState(item?.title);
  const [changed, setChanged] = useState(false);

  const updateTitle = () => {
    instance.updateItem({ title }, index);
    setChanged(false);
  };

  const handleNextFocus = () => {
    const value = instance.getValue() || [];
    // 如果是最后一个节点，按下回车后，会自动添加一个新的节点
    if (index + 1 === value.length) {
      const id = randomIndex();
      instance.addItem({ id, title: `new-${randomIndex()}` });
    } else {
      const nextNodeEl = document.getElementById(`index-${index + 1}`);
      nextNodeEl?.focus();
    }
  };

  return (
    <Flexbox horizontal align={'center'} gap={8} key={index} width={'100%'}>
      <div style={fieldStyle}>
        <Input
          size={'small'}
          style={{ width: '100%', paddingLeft: compact ? 12 : undefined }}
          id={`index-${index}`}
          value={title}
          onBlur={() => {
            if (changed) updateTitle();
          }}
          onPressEnter={() => {
            if (changed) updateTitle();
            handleNextFocus();
          }}
          onChange={(e) => {
            setTitle(e.target.value);
            setChanged(true);
          }}
        />
      </div>
      <div style={fieldStyle}>
        <Select
          size="small"
          style={{ width: '100%' }}
          options={tableColumnValueOptions}
          placeholder="请选择列类型"
          value={item?.dataIndex}
          onChange={(value) => {
            instance.updateItem({ dataIndex: value }, index);
          }}
        />
      </div>
    </Flexbox>
  );
});

export default ItemRender;
