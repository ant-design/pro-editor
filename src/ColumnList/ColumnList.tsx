import {
  CreatorButtonProps,
  SortableList,
  SortableListProps,
  SortableListRef,
  getPrefixCls,
} from '@ant-design/pro-editor';
import { FC, forwardRef, useCallback } from 'react';
import ColumnItem from './ColumnItem';
import { Header } from './Header';
import { useStyle } from './style';
import { ColumnItemList } from './types';

export interface ColumnListProps<T = any> extends SortableListProps<T> {
  columns: ColumnItemList<T>;
}

const ColumnList: <T>(props: ColumnListProps<T>) => ReturnType<FC> = forwardRef<
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

    // ColumnList 默认有添加一行按钮
    const customCreatorButtonProps: CreatorButtonProps | false =
      creatorButtonProps === false
        ? false
        : {
            position: 'bottom' as const,
            // 默认生成空数据
            record: () => ({}),
            ...creatorButtonProps,
          };

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
          creatorButtonProps={customCreatorButtonProps}
          hideRemove={hideRemove}
        />
      ),
      [prefixCls, columns],
    );

    return (
      <SortableList
        ref={ref}
        renderItem={renderItem}
        renderHeader={() => <Header prefixCls={prefixCls} columns={columns} />}
        className={cx(prefixCls, className)}
        creatorButtonProps={customCreatorButtonProps}
        {...props}
      />
    );
  },
);

export default ColumnList;
