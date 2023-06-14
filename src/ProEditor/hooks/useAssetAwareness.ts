import { useMemo } from 'react';
import { useStore } from '../store';

export const useAssetAwareness = <T>() => {
  const presenceAsset = useStore((s) => s.assetAwareness) as T;
  const internalUpdatePresenceAsset = useStore((s) => s.internalUpdateAssetAwareness);

  return useMemo(() => [presenceAsset, internalUpdatePresenceAsset] as const, [presenceAsset]);
};
