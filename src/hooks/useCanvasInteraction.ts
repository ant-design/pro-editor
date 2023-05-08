import { useStore } from '../ProEditor';

export const useCanvasInteraction = () => {
  const interaction = useStore((s) => s.interaction);
  const internalUpdateCanvasInteract = useStore(
    (s) => s.internalUpdateCanvasInteract,
  );

  return [interaction, internalUpdateCanvasInteract] as const;
};
