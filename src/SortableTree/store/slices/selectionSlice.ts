import { StateCreator } from 'zustand/vanilla';

import { dataFlattenSelector } from '@/SortableTree/store';
import produce from 'immer';
import { MouseEvent } from 'react';
import { UniqueIdentifier } from '../../types';
import { InternalSortableTreeStore } from '../store';

export interface SelectionPublicAction {
  toggleNode: (id: UniqueIdentifier) => void;
  selectedNode: (id: UniqueIdentifier) => void;
  deselectedAll: () => void;
}

export interface SelectionSliceAction extends SelectionPublicAction {
  updateSelectedIds: (selectedKeys: UniqueIdentifier[]) => void;
  multiSelectNode: (id: UniqueIdentifier) => void;
  rowSelectNode: (id: UniqueIdentifier) => void;
  // 选择逻辑
  withKeyboardSelectNode: (event: MouseEvent<any>, id: UniqueIdentifier) => void;
}

export const selectionSlice: StateCreator<
  InternalSortableTreeStore,
  [['zustand/devtools', never]],
  [],
  SelectionSliceAction
> = (set, get) => ({
  updateSelectedIds: (selectedIds) => {
    set({ selectedIds });
    get().onSelectedIdsChange?.(selectedIds);
  },
  /**
   * 更新选中的节点
   * 如果已经存在，那么啥也不干，如果不存在，则添加
   * @param id
   */
  toggleNode: (id) => {
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
    const { multiSelectNode, rowSelectNode, selectedNode } = get();
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
    selectedNode(id);
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
  selectedNode: (id) => {
    const { selectedIds, updateSelectedIds } = get();

    if (selectedIds?.includes(id)) {
      updateSelectedIds([]);
    } else {
      updateSelectedIds([id]);
    }
  },
  deselectedAll: () => {
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
});
