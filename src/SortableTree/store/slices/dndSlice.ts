import { DragEndEvent, DragMoveEvent, DragOverEvent, DragStartEvent } from '@dnd-kit/core';
import { StateCreator } from 'zustand/vanilla';

import { FlattenNode } from '../../types';
import { getFlattenedData } from '../../utils/utils';
import { initialDragState } from '../initialState';
import { projectedSelector } from '../selectors';
import { InternalSortableTreeStore } from '../store';

export interface DndAction {
  resetState: () => void;
  getActiveNode: () => FlattenNode | null;
  handleDragStart: (event: DragStartEvent) => void;
  handleDragMove: (event: DragMoveEvent) => void;
  handleDragOver: (event: DragOverEvent) => void;
  handleDragEnd: (event: DragEndEvent) => void;
  handleDragCancel: () => void;
}

export const dndSlice: StateCreator<
  InternalSortableTreeStore,
  [['zustand/devtools', never]],
  [],
  DndAction
> = (set, get) => ({
  //辅助方法
  getActiveNode: () => {
    const { activeId, treeData } = get();
    return activeId ? getFlattenedData(treeData, activeId).find(({ id }) => id === activeId) : null;
  },
  resetState: () => {
    set({ ...initialDragState });

    document.body.style.setProperty('cursor', '');
  },
  // ===== 拖拽相关方法 =====
  handleDragStart: ({ active: { id: activeId } }) => {
    set({ activeId, overId: activeId });

    const activeNode = get().getActiveNode();

    if (activeNode) {
      set({
        currentPosition: {
          parentId: activeNode.parentId,
          overId: activeId,
        },
      });
    }

    document.body.style.setProperty('cursor', 'move');
  },
  handleDragMove: ({ delta }) => {
    set({ offsetLeft: delta.x });
  },
  handleDragOver: ({ over }) => {
    set({ overId: over?.id ?? null });
  },
  handleDragEnd: ({ active, over }) => {
    const { resetState, dispatchTreeData } = get();

    const projected = projectedSelector(get());

    if (projected && over) {
      dispatchTreeData({
        type: 'moveNode',
        projected,
        activeId: active.id,
        targetId: over.id,
      });
    }

    resetState();
  },
  handleDragCancel: () => {
    get().resetState();
  },
});
