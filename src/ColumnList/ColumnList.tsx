import {
  CreatorButtonProps,
  SortableList,
  SortableListProps,
  SortableListRef,
  withProvider,
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
>(({ className, columns, actions, hideRemove, creatorButtonProps, ...props }, ref) => {
  const { cx } = useStyle();

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
        actions={typeof actions === 'function' ? actions(item, index) : actions}
        creatorButtonProps={customCreatorButtonProps}
        hideRemove={hideRemove}
      />
    ),
    [columns],
  );

  return (
    <SortableList
      ref={ref}
      renderItem={renderItem}
      renderHeader={() => <Header columns={columns} />}
      className={cx(className)}
      creatorButtonProps={customCreatorButtonProps}
      {...props}
    />
  );
});

export default withProvider(ColumnList);
