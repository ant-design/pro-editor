import { produce } from 'immer';
import { ForwardedRef, forwardRef, useImperativeHandle } from 'react';
import { createStoreUpdater } from 'zustand-utils';
import { useSortableList } from '..';

import { OnChange, useStoreApi } from '../store';

import type {
  CreatorButtonProps,
  GetItemStyles,
  RenderActionProps,
  RenderItemProps,
} from '../type';

/**
 * 供外部使用的 ref 方法
 */
export interface SortableListRef<T> {
  addItem: (item?: T, index?: number) => void;
  removeItem: (index: number) => void;
  updateItem: (item: T, index: number) => void;
}

export interface StoreUpdaterProps<T = any> {
  /**
   * 值
   */
  value?: T[];
  /**
   * 初始值
   */
  initialValues?: T[];
  /**
   * 值变化
   */
  onChange?: OnChange;
  /**
   * 渲染内容区域
   */
  renderContent?: RenderItemProps<T>;
  /**
   * 除列表自带操作之外的其他操作自渲染
   */
  actions?: RenderActionProps<T>;
  /**
   * 渲染头部区域
   */
  renderHeader?: () => React.ReactNode;
  /**
   * 对外部暴露方法
   */
  ref?: ForwardedRef<SortableListRef<T>>;
  /**
   * 新建对象相关属性
   */
  creatorButtonProps?: CreatorButtonProps;
  /**
   * 如果为 true，则会在 devtools 中显示 SortableTree 内部的数据结构
   * @internal
   */
  SHOW_STORE_IN_DEVTOOLS?: boolean;
  /**
   * 紧凑模式, 默认为 false
   */
  compact?: boolean;
  /**
   * 是否隐藏删除按钮，默认为 false
   */
  hideRemove?: boolean;
  /**
   * 自定义排序容器样式
   */
  getItemStyles?: GetItemStyles;
}

const StoreUpdater = forwardRef(
  (
    {
      creatorButtonProps,
      initialValues,
      value,
      onChange,
      renderContent,
      renderHeader,
      getItemStyles,
      actions,
      compact,
      hideRemove,
    }: StoreUpdaterProps,
    ref,
  ) => {
    const storeApi = useStoreApi();
    const useStoreUpdater = createStoreUpdater<StoreUpdaterProps>(storeApi);

    // KeyManager 和 value & initialValues 同步。
    const KeyManagerUpdater = (state, key) => {
      const { keyManager } = storeApi.getState();
      // value 为空处理
      const value = state[key] || [];
      const manager = produce(keyManager, (draft) => {
        value.forEach((__, index) => {
          const key = draft.keys[index];
          if (key === undefined) {
            draft.keys[index] = draft.id;
            draft.id += 1;
          }
        });
        return draft;
      });

      storeApi.setState({ keyManager: manager, [key]: value });
    };

    useStoreUpdater('value', initialValues, []);
    useStoreUpdater('onChange', onChange);
    useStoreUpdater('creatorButtonProps', creatorButtonProps);
    useStoreUpdater('renderContent', renderContent);
    useStoreUpdater('renderHeader', renderHeader);
    useStoreUpdater('getItemStyles', getItemStyles);
    useStoreUpdater('actions', actions);
    useStoreUpdater('compact', compact);
    useStoreUpdater('hideRemove', hideRemove);

    // KeyManager 状态受控
    useStoreUpdater('initialValues', initialValues, [initialValues], (state) => {
      KeyManagerUpdater(state, 'initialValues');
    });
    useStoreUpdater('value', value, [value], (state) => KeyManagerUpdater(state, 'value'));

    // 将 store 传递到外部
    const instance = useSortableList();
    useImperativeHandle(ref, () => instance);

    return null;
  },
);

export default StoreUpdater;
