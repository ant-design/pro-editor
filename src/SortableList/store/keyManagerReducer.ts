import { arrayMove } from '@dnd-kit/sortable';
import { produce } from 'immer';
import { SortableListDispatchPayload } from '../type';
import { getUUID } from '../utils';

export const keyManagerReducer = (value: any[], payload: SortableListDispatchPayload) => {
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
      const { index = value.length } = payload;
      return produce(value, (draft) => {
        draft.splice(index, 0, getUUID(index));
        return draft;
      });

    case 'updateItem':
      return produce(value, (draft) => {
        return draft;
      });
  }
};
