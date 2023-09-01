import { memo } from 'react';
import { isDesignModeSelector, useStore } from '../../store';

/**
 * Stage 下方的控制区域
 */
export const Controller = memo(() => {
  const componentAsset = useStore((s) => s.componentAsset);
  const isDesignMode = useStore(isDesignModeSelector);

  const Controller = isDesignMode
    ? componentAsset.DesignController
    : componentAsset.DevelopController;

  return Controller ? <Controller /> : null;
});
