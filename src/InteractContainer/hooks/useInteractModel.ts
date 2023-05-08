import { useEffect, useRef } from 'react';
import type { CanvasInteractRule, ContainerNode } from '../type';

import { InteractModel } from './InteractModel';

export const useInteractModel = (
  rules: CanvasInteractRule[],
  container: ContainerNode = document,
) => {
  const interactModel = useRef(new InteractModel(rules, container));

  // 任何时候进行刷新，都要重新
  useEffect(() => {
    interactModel.current.initModels();
  });

  useEffect(() => {
    interactModel.current = new InteractModel(rules, container);
  }, [rules, container]);

  return interactModel.current;
};
