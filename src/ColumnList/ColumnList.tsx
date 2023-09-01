import {
  SortableItem,
  SortableList,
  SortableListProps,
  SortableListRef,
  genUniqueId,
  getPrefixCls,
} from '@ant-design/pro-editor';
import { ReactNode, forwardRef, useCallback } from 'react';
import ColumnItem from './ColumnItem';
import { Header } from './Header';
import { useStyle } from './style';
import { ColumnItemList } from './types';

export interface ColumnListProps<T extends SortableItem = SortableItem>
  extends SortableListProps<T> {
  columns: ColumnItemList<T>;
}

const ColumnList: <T extends SortableItem>(props: ColumnListProps<T>) => ReactNode = forwardRef<
  SortableListRef,
  ColumnListProps
>(
  (
    {
      prefixCls: customPrefixCls,
      className,
      columns,
      actions,
      hideRemove,
      creatorButtonProps,
      ...props
    },
    ref,
  ) => {
    const prefixCls = getPrefixCls('column-list', customPrefixCls);
    const { cx } = useStyle(prefixCls);

    const renderItem = useCallback(
      (item, { index, listeners }) => (
        <ColumnItem
          columns={columns}
          item={item}
          listeners={listeners}
          index={index}
          prefixCls={prefixCls}
          actions={typeof actions === 'function' ? actions(item, index) : actions}
          hideRemove={hideRemove}
        />
      ),
      [prefixCls, columns],
    );

    return (
      <>
        <Header prefixCls={prefixCls} columns={columns} />
        <SortableList
          ref={ref}
          renderItem={renderItem}
          className={cx(prefixCls, className)}
          creatorButtonProps={
            creatorButtonProps === false
              ? false
              : {
                  record: () => ({
                    id: genUniqueId('column-list'),
                  }),
                  ...creatorButtonProps,
                }
          }
          {...props}
        />
      </>
    );
  },
);

export default ColumnList;
