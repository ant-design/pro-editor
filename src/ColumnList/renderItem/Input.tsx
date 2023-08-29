import { genUniqueId, useSortableList } from '@ant-design/pro-editor';
import { UniqueIdentifier } from '@dnd-kit/core';
import { Input } from 'antd';
import { createStyles } from 'antd-style';
import { CSSProperties, memo, useRef, useState } from 'react';

const useStyle = createStyles(({ css, cx }, prefixCls) => {
  const prefix = `${prefixCls}-content`;
  return {
    input: cx(
      `${prefix}-tem`,
      css`
        padding-left: 13px;
      `,
    ),
  };
});

interface ItemRenderProps {
  dataIndex: string;
  value: string;
  index: number;
  id: UniqueIdentifier;
  prefixCls: string;
  style: CSSProperties;
  placeholder?: string;
}

const ControlInput = memo<ItemRenderProps>(
  ({ dataIndex, placeholder, value, index, prefixCls, style, id }) => {
    const instance = useSortableList();

    const [innerValue, setInnerValue] = useState(value);
    const [changed, setChanged] = useState(false);
    const shouldChange = useRef(true);
    const { styles } = useStyle(prefixCls);

    const updateTitle = () => {
      instance.updateItem({ [dataIndex]: innerValue }, index);
      setChanged(false);
    };

    const customListId = (index, id) => `column-list-${index}-${id}`;

    const handleNextFocus = () => {
      const value = instance.getValue() || [];
      // 如果是最后一个节点，按下回车后，会自动添加一个新的节点
      if (index + 1 === value.length) {
        instance.addItem({ id: genUniqueId(value.length.toString()), [dataIndex]: '' });
      }

      setTimeout(() => {
        const nextNodeEl = document.getElementById(
          customListId(index + 1, instance.getIdByIndex(index + 1)),
        );
        nextNodeEl?.focus();
      }, 200);
    };

    return (
      <Input
        size={'small'}
        value={innerValue}
        style={style}
        id={customListId(index, id)}
        onCompositionStart={() => {
          shouldChange.current = false;
        }}
        placeholder={placeholder || '请输入'}
        onCompositionEnd={() => {
          shouldChange.current = true;
        }}
        onBlur={() => {
          if (changed) updateTitle();
        }}
        className={styles.input}
        onPressEnter={() => {
          if (!shouldChange.current) return;
          if (changed) updateTitle();
          handleNextFocus();
        }}
        onChange={(e) => {
          setInnerValue(e.target.value);
          setChanged(true);
        }}
      />
    );
  },
);

export default ControlInput;
