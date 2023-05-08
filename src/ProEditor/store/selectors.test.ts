import { isDesignModeSelector } from './selectors';
import type { ProEditorStore } from './store';

test('isDesignModeSelector', () => {
  const design = isDesignModeSelector({ mode: 'design' } as ProEditorStore);
  expect(design).toBeTruthy();

  const dev = isDesignModeSelector({ mode: 'develop' } as ProEditorStore);
  expect(dev).toBeFalsy();
});
