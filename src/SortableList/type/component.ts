import type { DraggableSyntheticListeners, UniqueIdentifier } from '@dnd-kit/core';
import type { Transform } from '@dnd-kit/utilities';
import type { CSSProperties, ReactElement, ReactNode, Ref } from 'react';

export interface SortableBaseItem {
  id: UniqueIdentifier;
}

export type SortableItem<T = Record<string, any>> = SortableBaseItem & T;

export type SortableItemList<T = Record<string, any>> = SortableItem<T>[];

export interface BaseItemProps {
  dragOverlay?: boolean;
  color?: string;
  disabled?: boolean;
  dragging?: boolean;
  handle?: boolean;
  height?: number;
  index?: number;
  fadeIn?: boolean;
  hideRemove?: boolean;
  compact?: boolean;
  transform?: Transform | null;
  listeners?: DraggableSyntheticListeners;
  sorting?: boolean;
  className?: string;
  style?: React.CSSProperties;
  transition?: string | null;
  id: UniqueIdentifier;
  onRemove?: () => void;
  actions?: React.ReactNode[];
  prefixCls?: string;
}

export type RenderItem<T = SortableItem> = (
  item: T,
  options: {
    dragOverlay: boolean;
    dragging: boolean;
    sorting: boolean;
    index: number | undefined;
    fadeIn: boolean;
    listeners: DraggableSyntheticListeners;
    ref: Ref<HTMLElement>;
    style: CSSProperties | undefined;
    transform: any;
    transition: any;
    onRemove: () => void;
    onAddItem: (index: number, newItem: T) => void;
  },
) => ReactElement;

export interface CreatorButtonProps {
  /**
   * 列表有值时是否展示添加按钮
   */
  showInList?: boolean;
  /**
   * 空数据时是否展示添加按钮
   */
  showInEmpty?: boolean;
  /**
   * 生成初始值逻辑
   */
  record?: (index: number) => Record<string, any>;
  /**
   * 新增一行按钮文案
   */
  creatorButtonText?: string;
}

export type RenderItemProps<T = SortableItem> = (item: T, index: number) => ReactNode;

export type RenderActionProps<T = SortableItem> =
  | ((item: T, index: number) => ReactNode[])
  | React.ReactNode[];

export type { UniqueIdentifier };

interface GetWrapperStyleArgs {
  index: number;
  isDragging: boolean;
  id: UniqueIdentifier;
}

interface GetItemStylesArgs extends GetWrapperStyleArgs {
  isSorting: boolean;
  overIndex: number;
  isDragOverlay: boolean;
}

export type GetItemStyles = (status: GetItemStylesArgs) => CSSProperties;
