import { useMemo } from 'react';
import { useStore } from '../store';

export const useCanvasInteraction = () => {
  const interaction = useStore((s) => s.interaction);
  const internalUpdateCanvasInteract = useStore((s) => s.internalUpdateCanvasInteract);

  return useMemo(() => [interaction, internalUpdateCanvasInteract] as const, [interaction]);
};
