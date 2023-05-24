import { ColumnItemList, createStyles, css, cx, useSortableList } from '@ant-design/pro-editor';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import ControlInput from './renderItem/Input';
import ControlSelect from './renderItem/Select';

const useStyle = createStyles(({}, prefixCls) => {
  const prefix = `${prefixCls}-content`;
  return {
    content: cx(
      prefix,
      css`
        flex: 1;
        height: 24px;
        font-size: 12px;
        border-radius: 2px;
        min-width: 48px;
      `,
    ),
  };
});

interface ItemRenderProps<T = any> {
  columns: ColumnItemList<T>;
  item: T;
  index: number;
  prefixCls: string;
}

const ColumnItem = memo<ItemRenderProps>(({ item, index, prefixCls, columns }) => {
  const { styles } = useStyle(prefixCls);
  const instance = useSortableList();

  return (
    <Flexbox horizontal gap={4} width={'100%'} className={styles.content}>
      {columns.map((col, colIndex) => {
        const style = { flex: 1, maxWidth: `${100 / columns.length}%` };
        const props = {
          dataIndex: col.dataIndex,
          value: item[col.dataIndex],
          index,
          prefixCls,
          style,
          placeholder: col.placeholder,
        };
        switch (col.type) {
          default:
          case 'input':
            return <ControlInput key={`${item?.dataIndex}-${colIndex}`} {...props} />;

          case 'select':
            return (
              <ControlSelect
                key={`${item?.dataIndex}-${colIndex}`}
                options={col.options}
                {...props}
              />
            );
          case 'custom':
            const Custom = col.render;
            return Custom ? (
              <Custom
                item={item}
                column={col}
                onChange={(value) => {
                  instance.updateItem({ [col.dataIndex]: value }, index);
                }}
                {...props}
              />
            ) : (
              '暂无实现'
            );
        }
      })}
    </Flexbox>
  );
});

export default ColumnItem;
