import type { InternalProBuilderStore } from './createStore';
import { isDesignModeSelector } from './selectors';

test('isDesignModeSelector', () => {
  const design = isDesignModeSelector({ mode: 'design' } as InternalProBuilderStore);
  expect(design).toBeTruthy();

  const dev = isDesignModeSelector({ mode: 'develop' } as InternalProBuilderStore);
  expect(dev).toBeFalsy();
});
