import { useEffect } from 'react';
import type { ContextCanvasProps } from '../type';

import { useContainer } from './useContainer';
import { useInteraction } from './useInteraction';
import { useInteractModel } from './useInteractModel';
import { useInteractStatus } from './useInteractStatus';
import { useRender } from './useRender';

export const useContextCanvas = ({
  rules,
  status: outStatus,
  onStatusChange,
  getContainer,
  disabled,
}: ContextCanvasProps) => {
  const Render = useRender();

  const container = useContainer(getContainer);

  const interactModel = useInteractModel(rules, container);

  const { status, dispatchStatus } = useInteractStatus(interactModel, {
    value: outStatus,
    onChange: onStatusChange,
  });

  const renderByStatus = (interactStatus) => {
    if (!interactStatus) {
      Render.renderUnselectedAll();
      return;
    }

    const element = interactModel.getElementByStatus(interactStatus);

    switch (interactStatus.status) {
      case 'selected':
        Render.renderUnselectedAll();
        Render.renderSelected(element);
        break;
      case 'unSelected': {
        if (element) {
          Render.renderUnselected(element);
        } else {
          Render.renderUnselectedAll();
        }
        break;
      }

      case 'hover':
        Render.renderHover(element);
        break;
      case 'unhover':
        Render.renderUnHover();
        break;
    }
  };

  // 用回调的方式来做渲染控制，便于统一受控和非受控模式
  useEffect(() => {
    renderByStatus(status);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const { onClick } = useInteraction({
    container,
    interactModel,
    dispatchStatus,
    disabled,
  });

  return { onClick };
};
