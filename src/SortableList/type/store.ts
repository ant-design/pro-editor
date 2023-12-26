import { ForwardedRef } from 'react';
import type {
  CreatorButtonProps,
  GetItemStyles,
  RenderActionProps,
  RenderContent,
  RenderEmpty,
  RenderHeader,
  RenderItem,
  SortableListDispatchPayload,
  UniqueIdentifier,
} from '../type';

export type OnChange<T = any> = (items: T[], event: SortableListDispatchPayload) => void;

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
  value?: any[];
  /**
   * 和 Value 值对应的 id 管理器
   */
  keyManager?: UniqueIdentifier[];
  /**
   * 渲染额外区域
   */
  actions?: RenderActionProps;
  /**
   * 渲染可排序项
   */
  renderItem?: RenderItem;
  /**
   * 渲染空状态
   */
  renderEmpty?: RenderEmpty;
  /**
   * 渲染可排序项内容
   */
  renderContent?: RenderContent;
  /**
   * 渲染头部
   */
  renderHeader?: RenderHeader;
  /**
   * 新建对象相关属性
   */
  creatorButtonProps?: CreatorButtonProps | false;
  /**
   * 渲染可排序列表项样式
   */
  getItemStyles?: GetItemStyles;
  /**
   * 隐藏
   */
  hideRemove?: boolean;
  /**
   * 是否显示拖拽手柄
   */
  handle?: boolean;
}

/**
 * 供外部使用的 ref 方法
 */
export interface SortableListRef<T = any> {
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
  onChange?: OnChange<T>;
  /**
   * 渲染可排序项
   */
  renderItem?: RenderItem<T>;
  /**
   * 渲染内容区域
   */
  renderContent?: RenderContent<T>;
  /**
   * 渲染空状态
   */
  renderEmpty?: RenderEmpty;
  /**
   * 渲染头部
   */
  renderHeader?: RenderHeader;
  /**
   * 新建对象相关属性
   */
  creatorButtonProps?: CreatorButtonProps | false;
  /**
   * 除列表自带操作之外的其他操作自渲染
   */
  actions?: RenderActionProps<T>;
  /**
   * 对外部暴露方法
   */
  ref?: ForwardedRef<SortableListRef<T>>;
  /**
   * 如果为 true，则会在 devtools 中显示 SortableTree 内部的数据结构
   * @internal
   */
  SHOW_STORE_IN_DEVTOOLS?: boolean;
  /**
   * 是否隐藏删除按钮，默认为 false
   */
  hideRemove?: boolean;
  /**
   * 是否显示拖拽手柄，默认 true
   */
  handle?: boolean;
  /**
   * 自定义排序容器样式
   */
  getItemStyles?: GetItemStyles;
}
