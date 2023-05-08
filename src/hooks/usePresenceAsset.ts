import { useStore } from '../ProEditor';

export const usePresenceAsset = <T>() => {
  const presenceAsset = useStore((s) => s.presenceAsset) as T;
  const internalUpdatePresenceAsset = useStore(
    (s) => s.internalUpdatePresenceAsset,
  );

  return [presenceAsset, internalUpdatePresenceAsset] as const;
};
