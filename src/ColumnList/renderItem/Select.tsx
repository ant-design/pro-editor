import { ColumnItemOption, useSortableList } from '@ant-design/pro-editor';
import { Select } from 'antd';
import { createStyles } from 'antd-style';
import { CSSProperties, memo } from 'react';

const useStyle = createStyles(({ prefixCls: ant, token, css, cx }) => {
  const prefix = `${ant}-${token.editorPrefix}-content`;
  return {
    select: cx(
      `${prefix}-tem`,
      css`
        .${ant}-select-selector {
          padding-left: 13px;
        }
      `,
    ),
  };
});

interface ItemRenderProps {
  dataIndex: string;
  value: string;
  index: number;
  style: CSSProperties;
  options: ColumnItemOption[];
  placeholder?: string;
}

const ControlSelect = memo<ItemRenderProps>(
  ({ dataIndex, value, index, style, options, placeholder }) => {
    const instance = useSortableList();

    const { styles } = useStyle();

    return (
      <Select
        size="small"
        style={style}
        options={options}
        className={styles.select}
        value={value}
        onClear={() => {
          instance.updateItem({ [dataIndex]: null }, index);
        }}
        placeholder={placeholder || '请选择'}
        onChange={(value) => {
          instance.updateItem({ [dataIndex]: value }, index);
        }}
      />
    );
  },
);

export default ControlSelect;
