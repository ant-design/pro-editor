import type { ProEditorStore } from './store';

export const isDesignModeSelector = (s: ProEditorStore) => s.mode === 'design';

export const storeSelectors = {
  isDesignMode: isDesignModeSelector,
};
