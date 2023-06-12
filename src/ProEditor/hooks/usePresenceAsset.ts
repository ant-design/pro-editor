import { useMemo } from 'react';
import { useStore } from '../store';

export const usePresenceAsset = <T>() => {
  const presenceAsset = useStore((s) => s.presenceAsset) as T;
  const internalUpdatePresenceAsset = useStore((s) => s.internalUpdateAssetAwareness);

  return useMemo(() => [presenceAsset, internalUpdatePresenceAsset] as const, [presenceAsset]);
};
