import {
  SortableList,
  SortableListProps,
  SortableListRef,
  getPrefixCls,
} from '@ant-design/pro-editor';
import { ReactNode, forwardRef, useCallback } from 'react';
import ColumnItem from './ColumnItem';
import { Header } from './Header';
import { useStyle } from './style';
import { ColumnItemList } from './types';

export interface ColumnListProps<T = any> extends SortableListProps<T> {
  columns: ColumnItemList<T>;
}

const ColumnList: <T>(props: ColumnListProps<T>) => ReactNode = forwardRef<
  SortableListRef,
  ColumnListProps
>(({ prefixCls: customPrefixCls, className, columns, actions, hideRemove, ...props }, ref) => {
  const prefixCls = getPrefixCls('column-list', customPrefixCls);
  const { cx } = useStyle(prefixCls);

  const renderItem = useCallback(
    (item, { index, listeners, dragging }) => (
      <ColumnItem
        columns={columns}
        item={item}
        dragging={dragging}
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
        {...props}
      />
    </>
  );
});

export default ColumnList;
