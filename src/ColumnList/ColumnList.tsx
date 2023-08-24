import { getPrefixCls, SortableList } from '@ant-design/pro-editor';
import { cx } from 'antd-style';
import { forwardRef, ReactNode, useCallback, useMemo } from 'react';

import { SortableListProps, SortableListRef } from '../SortableList';
import ColumnItem from './ColumnItem';
import { Header } from './Header';
import { ColumnItemList } from './types';

export interface ColumnListProps<T = any> extends SortableListProps<T> {
  columns: ColumnItemList<T>;
}

const genUniqueID = (_, index) => {
  return `columnlist_${index}_${Math.floor(Math.random() * 10000)}_${Date.now()}`;
};

const ColumnList: <T = any>(props: ColumnListProps<T>) => ReactNode = forwardRef<
  SortableListRef,
  ColumnListProps
>(({ prefixCls: customPrefixCls, className, columns, value, initialValues, ...props }, ref) => {
  const prefixCls = getPrefixCls('column-list', customPrefixCls);
  // 校验是否传入 ID，如果没有传入 ID，就生成一个 ID
  const parsedValue = useMemo(
    () =>
      value
        ? value.map((item, index) => ({
            id: genUniqueID(item, index),
            ...item,
          }))
        : undefined,
    [value],
  );
  // 校验是否传入 ID，如果没有传入 ID，就生成一个 ID
  const parsedInitialValues = useMemo(
    () =>
      initialValues
        ? initialValues.map((item, index) => ({
            id: genUniqueID(item, index),
            ...item,
          }))
        : undefined,
    [initialValues],
  );

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
    <SortableList
      ref={ref}
      compact
      renderContent={renderContent}
      renderHeader={renderHeader}
      value={parsedValue}
      initialValues={parsedInitialValues}
      className={cx(prefixCls, className)}
      {...props}
    />
  );
});

export default ColumnList;
