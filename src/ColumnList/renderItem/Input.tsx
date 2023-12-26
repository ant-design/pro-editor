import { CreatorButtonProps, Input, useSortableList } from '@ant-design/pro-editor';
import { createStyles } from 'antd-style';
import { CSSProperties, memo, useEffect, useRef } from 'react';

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
  dragging: boolean;
  prefixCls: string;
  style: CSSProperties;
  placeholder?: string;
  creatorButtonProps: CreatorButtonProps | false;
}

const ControlInput = memo<ItemRenderProps>(
  ({ dataIndex, placeholder, value, index, prefixCls, style, dragging, creatorButtonProps }) => {
    const instance = useSortableList();
    const inputRef = useRef(null);
    const { styles } = useStyle(prefixCls);

    useEffect(() => {
      if (dragging) {
        inputRef.current.blur();
      }
    }, [dragging]);

    const customListId = (index) => {
      const id = instance.getIdByIndex(index);
      return `column-list-${index}-${id}`;
    };

    const handleNextFocus = () => {
      const value = instance.getValue() || [];
      // 如果是最后一个节点，按下回车后，会自动添加一个新的节点
      if (index + 1 === value.length && creatorButtonProps !== false) {
        const { record } = creatorButtonProps;
        instance.addItem(record(value.length));
      }

      setTimeout(() => {
        const nextNodeEl = document.getElementById(customListId(index + 1));
        nextNodeEl?.focus();
      }, 0);
    };

    return (
      <Input
        size={'small'}
        ref={inputRef}
        value={value}
        style={style}
        id={customListId(index)}
        placeholder={placeholder || '请输入'}
        className={styles.input}
        onPressEnter={() => {
          handleNextFocus();
        }}
        onChange={(value) => {
          instance.updateItem({ [dataIndex]: value }, index);
        }}
      />
    );
  },
);

export default ControlInput;
