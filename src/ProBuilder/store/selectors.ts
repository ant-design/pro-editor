import type { InternalProBuilderStore } from './createStore';

export const isDesignModeSelector = (s: InternalProBuilderStore) => s.mode === 'design';

export const storeSelectors = {
  isDesignMode: isDesignModeSelector,
};
