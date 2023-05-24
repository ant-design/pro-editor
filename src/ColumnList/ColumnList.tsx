import { getPrefixCls, SortableList } from '@ant-design/pro-editor';
import { forwardRef, useCallback } from 'react';

import { cx } from 'antd-style';
import { SortableListProps, SortableListRef } from '../SortableList';
import ColumnItem from './ColumnItem';
import { Header } from './Header';
import { ColumnItemList } from './types';

export interface ColumnListProps<T = any> extends SortableListProps<T> {
  columns: ColumnItemList<T>;
}

const ColumnList: <T = any>(props: ColumnListProps<T>) => JSX.Element = forwardRef<
  SortableListRef<any>,
  ColumnListProps
>(({ prefixCls: customPrefixCls, className, columns, ...props }, ref) => {
  const prefixCls = getPrefixCls('column-list', customPrefixCls);

  const renderHeader = useCallback(
    () => <Header prefixCls={prefixCls} columns={columns} />,
    [columns],
  );
  const renderContent = useCallback(
    (item, index) => (
      <ColumnItem columns={columns} item={item} index={index} prefixCls={prefixCls} />
    ),
    [prefixCls, columns],
  );

  return (
    <SortableList<any>
      ref={ref}
      compact
      renderContent={renderContent}
      renderHeader={renderHeader}
      className={cx(prefixCls, className)}
      {...props}
    />
  );
});

export default ColumnList;
