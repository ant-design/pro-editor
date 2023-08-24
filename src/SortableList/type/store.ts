import { ForwardedRef } from 'react';
import type {
  CreatorButtonProps,
  GetItemStyles,
  RenderActionProps,
  RenderItemProps,
  SortableItem,
  SortableItemList,
  SortableListDispatchPayload,
  UniqueIdentifier,
} from '../type';

export type OnChange = (items: SortableItemList, event: SortableListDispatchPayload) => void;

export interface SortableListState {
  /*
   * 值变化
   */
  onChange?: OnChange;
  /**
   * 删除回调
   */
  onRemove?: (index: number) => void;
  /**
   * 当前选中项 ID
   */
  activeId?: UniqueIdentifier;
  /**
   * 值
   */
  value?: SortableItemList;
  /**
   * 渲染内容区域
   */
  renderContent: RenderItemProps;
  /**
   * 渲染额外区域
   */
  actions: RenderActionProps;
  /**
   * 渲染可排序列表项样式
   */
  getItemStyles?: GetItemStyles;
  /**
   * 渲染头部区域
   */
  renderHeader: () => React.ReactNode;
  /**
   * 新建对象相关属性
   */
  creatorButtonProps?: CreatorButtonProps;
  /**
   * 紧凑模式
   */
  compact?: boolean;
  /**
   * 隐藏
   */
  hideRemove?: boolean;
}

/**
 * 供外部使用的 ref 方法
 */
export interface SortableListRef {
  addItem: (item?: SortableItem, index?: number) => void;
  removeItem: (index: number) => void;
  updateItem: (item: SortableItem, index: number) => void;
}

export interface StoreUpdaterProps<T = SortableItem> {
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
  ref?: ForwardedRef<SortableListRef>;
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
