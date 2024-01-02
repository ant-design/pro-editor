import { useSortable } from '@dnd-kit/sortable';
import type { SortableItemProps } from '../type';
import Item from './Item';

export default function SortableItem({
  disabled,
  id,
  index,
  onRemove,
  useDragOverlay = true,
  handle = true,
  getItemStyles,
  renderItem,
  renderContent,
  item,
  actions,
  hideRemove = false,
}: SortableItemProps) {
  const {
    attributes,
    isDragging,
    isSorting,
    listeners,
    overIndex,
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
      // 数据
      item={item}
      handle={handle}
      disabled={disabled}
      dragging={isDragging}
      sorting={isSorting}
      hideRemove={hideRemove}
      actions={actions}
      index={index}
      onRemove={onRemove ? () => onRemove(index) : undefined}
      transform={transform}
      transition={!useDragOverlay && isDragging ? 'none' : transition}
      renderItem={renderItem}
      renderContent={renderContent}
      // 样式
      style={getItemStyles({
        index,
        id,
        isDragging,
        isSorting,
        overIndex,
        isDragOverlay: false,
      })}
      listeners={listeners}
      data-index={index}
      data-id={id}
      dragOverlay={!useDragOverlay && isDragging}
      {...attributes}
    />
  );
}
