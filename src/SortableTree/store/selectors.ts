import type { FlattenNode } from '../types';
import { getFlattenedData, getProjection } from '../utils/utils';

import type { InternalSortableTreeStore } from './store';

export const dataFlattenSelector = (s: InternalSortableTreeStore): FlattenNode[] =>
  getFlattenedData(s.treeData, s.activeId);

export const sortedIdsSelector = (s: InternalSortableTreeStore) => {
  return dataFlattenSelector(s).map(({ id }) => id);
};

export const projectedSelector = (s: InternalSortableTreeStore) => {
  const { activeId, overId, offsetLeft, indentationWidth } = s;

  return activeId && overId
    ? getProjection(dataFlattenSelector(s), activeId, overId, offsetLeft, indentationWidth)
    : null;
};
