import { arrayMove } from '@dnd-kit/sortable';
import { produce } from 'immer';
import merge from 'lodash.merge';
import { KeyManager, SortableListDispatchPayload } from '../type';

export const listDataReducer = (
  value: any[],
  keyManager: KeyManager,
  payload: SortableListDispatchPayload,
) => {
  switch (payload.type) {
    case 'moveItem':
      const { activeId, targetId } = payload;
      const activeIndex = activeId ? keyManager.keys.indexOf(activeId) : -1;
      const overIndex = targetId ? keyManager.keys.indexOf(targetId) : -1;
      if (activeIndex === overIndex) return;

      // Do not handle out of range
      if (
        activeIndex < 0 ||
        activeIndex >= value.length ||
        overIndex < 0 ||
        overIndex >= value.length
      ) {
        return;
      }

      return {
        data: produce(value, (draft) => {
          const sortedItems = arrayMove(draft, activeIndex, overIndex);
          return sortedItems;
        }),
        manager: produce(keyManager, (draft) => {
          draft.keys = arrayMove(draft.keys, activeIndex, overIndex);
          return draft;
        }),
      };

    case 'removeItem':
      const indexSet = new Set(Array.isArray(payload.index) ? payload.index : [payload.index]);
      if (indexSet.size <= 0) {
        return;
      }

      return {
        data: produce(value, (draft) => {
          const sortedItems = draft.filter((_, valueIndex) => !indexSet.has(valueIndex));
          return sortedItems;
        }),
        manager: produce(keyManager, (draft) => {
          draft.keys = draft.keys.filter((_, keysIndex) => !indexSet.has(keysIndex));
          return draft;
        }),
      };

    case 'addItem':
      const { item, index = value.length } = payload;
      return {
        data: produce(value, (draft) => {
          draft.splice(index, 0, item);
          return draft;
        }),
        manager: produce(keyManager, (draft) => {
          draft.keys.splice(index, 0, draft.id);
          draft.id += 1;
          return draft;
        }),
      };

    case 'updateItem':
      return {
        data: produce(value, (draft) => {
          const { item, index } = payload;
          draft[index] = merge(draft[index], item);
          return draft;
        }),
        manager: produce(keyManager, (draft) => {
          return draft;
        }),
      };
  }
};
