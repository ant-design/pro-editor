import {
  SortableItem,
  SortableList,
  SortableListProps,
  getPrefixCls,
} from '@ant-design/pro-editor';
import { ReactNode, forwardRef, useCallback, useMemo } from 'react';
import ColumnItem from './ColumnItem';
import { Header } from './Header';
import { useStyle } from './style';
import { ColumnItemList } from './types';
import { genUniqueID } from './utils';

export interface CreatorButtonProps<T> {
  /**
   * 生成初始值逻辑
   */
  record: (index: number) => Partial<T>;
  /**
   * 新增一行按钮文案
   */
  creatorButtonText?: string;
}

export interface ColumnListProps<T = any> extends SortableListProps<T> {
  columns: ColumnItemList<T>;
}

/**
 * 供外部使用的 ref 方法
 */
export interface ColumnListRef<T = any> {
  addItem: (item?: SortableItem<T>, index?: number) => void;
  removeItem: (index: number) => void;
  updateItem: (item: SortableItem<T>, index: number) => void;
}

const ColumnList: <T>(props: ColumnListProps<T>) => ReactNode = forwardRef<
  ColumnListRef,
  ColumnListProps
>(
  (
    {
      prefixCls: customPrefixCls,
      className,
      columns,
      value,
      initialValues,
      actions,
      hideRemove,
      ...props
    },
    ref,
  ) => {
    const prefixCls = getPrefixCls('column-list', customPrefixCls);
    const { cx } = useStyle(prefixCls);
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
          value={parsedValue}
          initialValues={parsedInitialValues}
          className={cx(prefixCls, className)}
          creatorButtonProps={{
            record: (index) => ({
              id: genUniqueID({}, index),
            }),
          }}
          {...props}
        />
      </>
    );
  },
);

export default ColumnList;
