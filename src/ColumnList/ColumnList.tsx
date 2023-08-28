import {
  SortableItem,
  SortableList,
  SortableListProps,
  SortableListProvider,
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
  /**
   * 初始化按钮相关配置
   */
  creatorButtonProps?: CreatorButtonProps<T> | false;
  /**
   * 额外操作按钮配置
   */
  actions?: ((item: T, index: number) => ReactNode[]) | React.ReactNode[];
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
      creatorButtonProps,
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
      <SortableListProvider>
        <Header prefixCls={prefixCls} columns={columns} />
        <SortableList
          ref={ref}
          renderItem={renderItem}
          value={parsedValue}
          initialValues={parsedInitialValues}
          className={cx(prefixCls, className)}
          {...props}
        />
      </SortableListProvider>
    );
  },
);

export default ColumnList;
