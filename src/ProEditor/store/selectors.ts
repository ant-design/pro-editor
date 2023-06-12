import type { InternalProEditorStore } from './createStore';

export const isDesignModeSelector = (s: InternalProEditorStore) => s.mode === 'design';

export const storeSelectors = {
  isDesignMode: isDesignModeSelector,
};
