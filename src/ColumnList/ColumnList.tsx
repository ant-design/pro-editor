import { PlusOutlined } from '@ant-design/icons';
import {
  SortableList,
  SortableListProvider,
  getPrefixCls,
  useSortableList,
} from '@ant-design/pro-editor';
import { Button } from 'antd';
import { ReactNode, forwardRef, useCallback, useMemo } from 'react';
import { SortableListProps, SortableListRef } from '../SortableList';
import ColumnItem from './ColumnItem';
import { Header } from './Header';
import { useStyle } from './style';
import { ColumnItemList } from './types';
import { genUniqueID } from './utils';

export interface CreatorButtonProps<T> {
  /**
   * 生成初始值逻辑
   */
  record?: (index: number) => Partial<T>;
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
}

const ColumnList: <T = any>(props: ColumnListProps<T>) => ReactNode = forwardRef<
  SortableListRef,
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
      ...props
    },
    ref,
  ) => {
    const prefixCls = getPrefixCls('column-list', customPrefixCls);
    const { styles, cx } = useStyle(prefixCls);
    // 校验是否传入 ID，如果没有传入 ID，就生成一个 ID
    const parsedValue = useMemo(
      () =>
        value
          ? value.map((item, index) => ({
              id: genUniqueID(index),
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
              id: genUniqueID(index),
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

    const CreateButton = () => {
      const { record, creatorButtonText = '添加一列' } = creatorButtonProps || {};
      const instance = useSortableList();
      const itemsLength = instance.getValue().length;

      return (
        <Button
          block
          size={'small'}
          className={styles.btnAdd}
          onClick={() => {
            const intialValue = {
              id: genUniqueID(itemsLength),
              ...(record && typeof record === 'function' ? record(itemsLength) : undefined),
            };
            instance.addItem(intialValue);
          }}
          icon={<PlusOutlined />}
        >
          {creatorButtonText}
        </Button>
      );
    };

    return (
      <SortableListProvider>
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
        {creatorButtonProps ? <CreateButton /> : null}
      </SortableListProvider>
    );
  },
);

export default ColumnList;
