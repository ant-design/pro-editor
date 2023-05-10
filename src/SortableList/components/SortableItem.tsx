import { useSortable } from '@dnd-kit/sortable';
import type { PropsWithChildren } from 'react';
import { UniqueIdentifier } from '../type';
import Item from './Item';

interface SortableItemProps {
  disabled?: boolean;
  id: UniqueIdentifier;
  index: number;
  useDragOverlay?: boolean;
  onRemove?: (index: number) => void;
  children: React.ReactNode;
  actions?: React.ReactNode[];
  prefixCls?: string;
  hideRemove?: boolean;
  compact?: boolean;
}

export default function SortableItem({
  disabled,
  id,
  index,
  actions,
  onRemove,
  useDragOverlay = true,
  children,
  prefixCls,
  hideRemove = false,
  compact = false,
}: PropsWithChildren<SortableItemProps>) {
  const {
    attributes,
    isDragging,
    isSorting,
    listeners,
    setNodeRef, // 标记可以 droppable 的容器
    transform,
    transition,
  } = useSortable({
    id,
    disabled,
  });

  return (
    <Item
      ref={setNodeRef}
      key={id}
      id={id}
      disabled={disabled}
      dragging={isDragging}
      sorting={isSorting}
      compact={compact}
      hideRemove={hideRemove}
      index={index}
      actions={actions}
      onRemove={onRemove ? () => onRemove(index) : undefined}
      transform={transform}
      transition={!useDragOverlay && isDragging ? 'none' : transition}
      listeners={listeners}
      data-index={index}
      data-id={id}
      dragOverlay={!useDragOverlay && isDragging}
      prefixCls={prefixCls}
      {...attributes}
    >
      {children}
    </Item>
  );
}
