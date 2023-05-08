import { useSortable } from '@dnd-kit/sortable';
import type { PropsWithChildren } from 'react';
import Item from './Item';

interface SortableItemProps {
  disabled?: boolean;
  id: string;
  index: number;
  useDragOverlay?: boolean;
  onRemove?: (index: number) => void;
  children: React.ReactElement;
  actions?: React.ReactNode[];
  prefixCls?: string;
}

export function SortableItem({
  disabled,
  id,
  index,
  actions,
  onRemove,
  useDragOverlay = true,
  children,
  prefixCls,
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
      value={id}
      disabled={disabled}
      dragging={isDragging}
      sorting={isSorting}
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
