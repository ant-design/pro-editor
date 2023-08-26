import type { DraggableSyntheticListeners, UniqueIdentifier } from '@dnd-kit/core';
import type { Transform } from '@dnd-kit/utilities';
import type { CSSProperties, ReactElement, Ref } from 'react';

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
  item: SortableItem;
  renderItem?: RenderItem;
  index?: number;
  fadeIn?: boolean;
  hideRemove?: boolean;
  transform?: Transform | null;
  listeners?: DraggableSyntheticListeners;
  sorting?: boolean;
  className?: string;
  style?: React.CSSProperties;
  transition?: string | null;
  id: UniqueIdentifier;
  onRemove?: () => void;
  prefixCls?: string;
}

export interface SortableItemProps {
  disabled?: boolean;
  id: UniqueIdentifier;
  index: number;
  item: SortableItem;
  useDragOverlay?: boolean;
  onRemove?: (index: number) => void;
  renderItem?: RenderItem;
  getItemStyles?: GetItemStyles;
  prefixCls?: string;
  hideRemove?: boolean;
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
  },
) => ReactElement;

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
