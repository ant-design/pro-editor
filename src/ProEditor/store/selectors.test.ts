import type { InternalProEditorStore } from './createStore';
import { isDesignModeSelector } from './selectors';

test('isDesignModeSelector', () => {
  const design = isDesignModeSelector({ mode: 'design' } as InternalProEditorStore);
  expect(design).toBeTruthy();

  const dev = isDesignModeSelector({ mode: 'develop' } as InternalProEditorStore);
  expect(dev).toBeFalsy();
});
