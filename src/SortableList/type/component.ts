import type { DraggableSyntheticListeners, UniqueIdentifier } from '@dnd-kit/core';
import type { Transform } from '@dnd-kit/utilities';
import type { CSSProperties, ReactElement, Ref } from 'react';
import { StoreUpdaterProps } from '../type/store';

export interface SortableBaseItem {
  id: UniqueIdentifier;
}

export type SortableItem<T = Record<string, any>> = SortableBaseItem & T;

export type SortableItemList<T = Record<string, any>> = SortableItem<T>[];

export interface BaseItemProps<T = SortableItem>
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
  prefixCls?: string;
}

export type RenderActionProps<T = SortableItem> =
  | ((item: T, index: number) => React.ReactNode[])
  | React.ReactNode[];

export interface SortableItemProps<T = SortableItem>
  extends Pick<
    StoreUpdaterProps<T>,
    'renderItem' | 'renderContent' | 'actions' | 'getItemStyles' | 'hideRemove'
  > {
  disabled?: boolean;
  id: UniqueIdentifier;
  index: number;
  item: T;
  useDragOverlay?: boolean;
  onRemove?: (index: number) => void;
  prefixCls?: string;
}

export type RenderContent<T = SortableItem> = (item: T, index: number) => React.ReactNode;

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
