import type { DraggableSyntheticListeners, UniqueIdentifier } from '@dnd-kit/core';
import type { Transform } from '@dnd-kit/utilities';
import type { CSSProperties, FC, ReactElement, Ref } from 'react';
import { StoreUpdaterProps } from '../type/store';

export interface BaseItemProps<T = any>
  extends Pick<StoreUpdaterProps<T>, 'renderItem' | 'renderContent' | 'actions' | 'hideRemove'> {
  dragOverlay?: boolean;
  color?: string;
  disabled?: boolean;
  dragging?: boolean;
  handle?: boolean;
  height?: number;
  item: T;
  index?: number;
  fadeIn?: boolean;
  transform?: Transform | null;
  listeners?: DraggableSyntheticListeners;
  sorting?: boolean;
  className?: string;
  style?: React.CSSProperties;
  transition?: string | null;
  id: UniqueIdentifier;
  onRemove?: () => void;
}

export type RenderActionProps<T = any> =
  | ((item: T, index: number) => React.ReactNode[])
  | React.ReactNode[];

export interface SortableItemProps<T = any>
  extends Pick<
    StoreUpdaterProps<T>,
    'renderItem' | 'renderContent' | 'actions' | 'getItemStyles' | 'hideRemove' | 'handle'
  > {
  disabled?: boolean;
  id: UniqueIdentifier;
  index: number;
  item: T;
  useDragOverlay?: boolean;
  onRemove?: (index: number) => void;
}

export type RenderContent<T = any> = (item: T, index: number) => React.ReactNode;

export type RenderEmpty = () => ReturnType<FC>;

export type RenderHeader = () => ReturnType<FC>;

export interface CreatorButtonProps {
  /**
   * 添加创建按钮的位置
   */
  position?: 'bottom' | 'top';
  /**
   * 生成初始值逻辑
   */
  record: (index: number) => any;
  /**
   * 新增一行按钮文案
   */
  creatorButtonText?: string;
  /**
   * 按钮的样式设置，可以设置按钮是否显示，比如 style: {display: 'none'}
   */
  style?: CSSProperties;
}

export type RenderItem<T = any> = (
  item: T,
  options: {
    /**
     * 是否是被拖出的列表项
     */
    dragOverlay: boolean;
    /**
     * 是否在拖拽中
     */
    dragging: boolean;
    /**
     * 是否在排序中
     */
    sorting: boolean;
    /**
     * 当前列表项索引
     */
    index: number | undefined;
    /**
     * fade 动画
     */
    fadeIn: boolean;
    /**
     * 拖拽项监听器
     */
    listeners: DraggableSyntheticListeners;
    /**
     * ref
     */
    ref: Ref<HTMLElement>;
    /**
     * 当面列表项传入样式
     */
    style: CSSProperties | undefined;
    /**
     * 当面列表项 transform 动画
     */
    transform: any;
    /**
     * 当面列表项 transition 动画
     */
    transition: any;
  },
) => ReactElement;

export type { UniqueIdentifier };

interface GetItemStylesArgs {
  /**
   * 当前列表项索引
   */
  index: number;
  /**
   * 是否在拖拽中
   */
  isDragging: boolean;
  /**
   * 当前列表项 ID
   */
  id: UniqueIdentifier;
  /**
   * 是否在排序中
   */
  isSorting: boolean;
  /**
   * 拖拽覆盖的列表项索引
   */
  overIndex: number;
  /**
   * 是否是拖拽中的列表项
   */
  isDragOverlay: boolean;
}

export type GetItemStyles = (status: GetItemStylesArgs) => CSSProperties;
