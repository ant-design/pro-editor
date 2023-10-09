import type { EditorStore } from '../../store';

export const isDesignTest = (s: EditorStore) => s.text === 'design';

export const editorSelectors = { isDesignTest };
