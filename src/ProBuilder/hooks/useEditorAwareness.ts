import { useDebounceFn } from 'ahooks';
import { useMemo } from 'react';

import { PartialDeep } from 'type-fest';
import { AwarenessEditor, useStore } from '../store';

export const useUpdateEditorAwareness = (): {
  updateEditorAwareness: (awareness: PartialDeep<AwarenessEditor>) => void;
} => {
  const updateEditorAwareness = useStore((s) => s.internalUpdateEditorAwareness);
  const { run } = useDebounceFn(updateEditorAwareness, { wait: 100 });

  return useMemo(
    () => ({
      updateEditorAwareness: run,
    }),
    [],
  );
};
