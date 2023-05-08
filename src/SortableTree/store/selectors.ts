import type { FlattenNode } from '../../SortableTree';
import { getFlattenedData, getProjection } from '../utils/utils';

import type { Store } from './store';

export const dataFlattenSelector = (s: Store): FlattenNode[] =>
  getFlattenedData(s.treeData, s.activeId);

export const sortedIdsSelector = (s: Store) => {
  return dataFlattenSelector(s).map(({ id }) => id);
};

export const projectedSelector = (s: Store) => {
  const { activeId, overId, offsetLeft, indentationWidth } = s;

  return activeId && overId
    ? getProjection(
        dataFlattenSelector(s),
        activeId,
        overId,
        offsetLeft,
        indentationWidth,
      )
    : null;
};
