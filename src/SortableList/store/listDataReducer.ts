import { arrayMove } from '@dnd-kit/sortable';
import { produce } from 'immer';
import merge from 'lodash.merge';
import { SortableListDispatchPayload } from '../type';

export const listDataReducer = (value: any[], getId, payload: SortableListDispatchPayload) => {
  switch (payload.type) {
    case 'moveItem':
      const { activeIndex, overIndex } = payload;

      if (activeIndex === overIndex) return;

      if (
        activeIndex < 0 ||
        activeIndex >= value.length ||
        overIndex < 0 ||
        overIndex >= value.length
      ) {
        return;
      }

      return produce(value, (draft) => {
        const sortedItems = arrayMove(draft, activeIndex, overIndex);
        return sortedItems;
      });

    case 'removeItem':
      const indexSet = new Set(Array.isArray(payload.index) ? payload.index : [payload.index]);
      if (indexSet.size <= 0) {
        return;
      }

      return produce(value, (draft) => {
        const sortedItems = draft.filter((_, valueIndex) => !indexSet.has(valueIndex));
        return sortedItems;
      });

    case 'addItem':
      const { item, index = value.length } = payload;
      return produce(value, (draft) => {
        draft.splice(index, 0, item);
        return draft;
      });

    case 'updateItem':
      return produce(value, (draft) => {
        const { item, index } = payload;
        draft[index] = merge(draft[index], item);
        return draft;
      });
  }
};
