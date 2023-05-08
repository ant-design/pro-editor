import { memo, useEffect } from 'react';

import { useStore } from '../store';
import type { StoreUpdaterProps } from '../types';

const StoreUpdater = memo(({ onClick }: StoreUpdaterProps) => {
  const updateState = useStore((s) => s.updateState);

  useEffect(() => {
    if (typeof onClick !== 'undefined') {
      updateState({ onItemClick: onClick });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClick]);

  return null;
});

export default StoreUpdater;
