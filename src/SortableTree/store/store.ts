import type {
  DragEndEvent,
  DragMoveEvent,
  DragOverEvent,
  DragStartEvent,
  UniqueIdentifier,
} from '@dnd-kit/core';
import produce from 'immer';
import isEqual from 'lodash.isequal';
import type { MouseEvent } from 'react';
import type { StateCreator } from 'zustand/vanilla';

import type { FlattenNode } from '../types';
import { getFlattenedData } from '../utils/utils';
import type { State } from './initialState';
import { initialDragState, initialState } from './initialState';
import { dataFlattenSelector, projectedSelector } from './selectors';
import type { TreeDataDispatchPayload } from './treeDataReducer';
import { treeDataReducer } from './treeDataReducer';

interface Action {
  handleDragStart: (event: DragStartEvent) => void;
  handleDragMove: (event: DragMoveEvent) => void;
  handleDragOver: (event: DragOverEvent) => void;
  handleDragEnd: (event: DragEndEvent) => void;
  handleDragCancel: () => void;
  resetState: () => void;

  getActiveNode: () => FlattenNode | null;
  dispatchTreeData: (payload: TreeDataDispatchPayload) => void;

  updateSelectedIds: (selectedKeys: UniqueIdentifier[]) => void;
  toggleSelectedNode: (id: UniqueIdentifier, active?: boolean) => void;
  // 选择逻辑
  withKeyboardSelectNode: (
    event: MouseEvent<any>,
    id: UniqueIdentifier,
  ) => void;
  selectedSingleNode: (id: UniqueIdentifier) => void;
  rowSelectNode: (id: UniqueIdentifier) => void;
  multiSelectNode: (id: UniqueIdentifier) => void;
  deselectedNode: () => void;
}

export type Store = State & Action;

const vanillaStore: StateCreator<Store, [['zustand/devtools', never]]> = (
  set,
  get,
) => ({
  ...initialState,
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

  resetState: () => {
    set({ ...initialDragState });

    document.body.style.setProperty('cursor', '');
  },

  updateSelectedIds: (selectedIds) => {
    set({ selectedIds });
    get().onSelectedIdsChange?.(selectedIds);
  },
  /**
   * 更新选中的节点
   * 如果已经存在，那么啥也不干，如果不存在，则添加
   * @param id
   */
  toggleSelectedNode: (id) => {
    const { selectedIds } = get();
    set(
      produce((s) => {
        if (!selectedIds.includes(id)) {
          s.selectedIds.push(id);
        } else {
          s.selectedIds = selectedIds.filter((key) => key !== id);
        }
      }),
    );
  },
  withKeyboardSelectNode: (e, id) => {
    const { multiSelectNode, rowSelectNode, selectedSingleNode } = get();
    // 按住 ctrl 单选
    if (e.metaKey) {
      multiSelectNode(id);
      return;
    }

    // 按住 shift 时批量选择
    if (e.shiftKey) {
      rowSelectNode(id);
      return;
    }

    // 单选
    selectedSingleNode(id);
  },

  rowSelectNode: (id) => {
    const { selectedIds, updateSelectedIds } = get();
    // 当前选区中没有元素
    if (selectedIds.length === 0) {
      updateSelectedIds([id]);
      return;
    }

    const dataFlatten = dataFlattenSelector(get());

    const currentIndex = dataFlatten.findIndex((d) => d.id === id);
    const activeIndex = dataFlatten.findIndex((d) => d.id === selectedIds[0]);

    // 当前选区中只有1个元素 判断一下
    if (selectedIds.length === 1) {
      let ids = selectedIds;
      // 否则进行比较 index 大小
      if (activeIndex === currentIndex) {
        // 如果就是自己，那么就取消选择
        ids = [];
      } else if (activeIndex > currentIndex) {
        // 如果当前选区的 index 大于当前的 index，那么就从当前的 index 到 activeIndex + 1
        ids = dataFlatten.slice(currentIndex, activeIndex + 1).map((d) => d.id);
      } else {
        ids = dataFlatten.slice(activeIndex, currentIndex + 1).map((d) => d.id);
      }
      updateSelectedIds(ids);
    }
  },
  selectedSingleNode: (id) => {
    const { selectedIds, updateSelectedIds } = get();

    if (selectedIds?.includes(id)) {
      updateSelectedIds([]);
    } else {
      updateSelectedIds([id]);
    }
  },
  deselectedNode: () => {
    const { updateSelectedIds } = get();

    updateSelectedIds([]);
  },
  multiSelectNode: (id) => {
    const { selectedIds, updateSelectedIds } = get();
    if (selectedIds?.includes(id)) {
      updateSelectedIds(
        produce(selectedIds, (draft) => {
          draft.splice(draft.indexOf(id), 1);
        }),
      );
    } else {
      updateSelectedIds([...selectedIds, id]);
    }
  },

  // ===== 更新 treeData 方法 ======= //
  dispatchTreeData: (payload) => {
    const { onTreeDataChange, treeData } = get();
    const nextTreeData = treeDataReducer(treeData, payload);
    if (isEqual(treeData, nextTreeData)) return;

    set({ treeData: nextTreeData });

    if (onTreeDataChange) onTreeDataChange(nextTreeData);
  },
  //辅助方法
  getActiveNode: () => {
    const { activeId, treeData } = get();
    return activeId
      ? getFlattenedData(treeData, activeId).find(({ id }) => id === activeId)
      : null;
  },
});

export default vanillaStore;
