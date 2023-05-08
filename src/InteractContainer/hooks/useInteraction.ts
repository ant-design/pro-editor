import { useEffect } from 'react';

import { initListener } from '../utils';
import type { InteractModel } from './InteractModel';
import type { UseInteractStatus } from './useInteractStatus';

interface InteractionOptions {
  container: Element | Document;
  interactModel: InteractModel;
  dispatchStatus: UseInteractStatus['dispatchStatus'];
  disabled?: boolean;
}

/**
 * 控制画布交互
 */
export const useInteraction = ({
  interactModel,
  container,
  dispatchStatus,
  disabled,
}: InteractionOptions) => {
  const onContainerClick = (e: MouseEvent) => {
    dispatchStatus({
      type: 'handleContainerClick',
      target: e.target as Element,
    });
  };

  const onClick = (e: MouseEvent) => {
    e.stopPropagation();
    dispatchStatus({ type: 'handleClick', target: e.target as Element });
  };

  const onHoverStart = (e: MouseEvent) => {
    dispatchStatus({
      type: 'handleHover',
      target: e.target as Element,
      action: 'hover',
    });
  };

  const onHoverEnd = () => {
    dispatchStatus({ type: 'handleHover', action: 'unhover' });
  };

  // 注册监听事件
  // 当元素数量发生变动时，需要重新进行事件注册
  useEffect(() => {
    if (disabled) return;
    if (interactModel.totalValidElements === 0) return;

    const listeners = interactModel.getInteractListeners({
      click: onClick,
      hover: { onHoverStart, onHoverEnd },
    });

    listeners.register();
    return () => {
      listeners.unRegister();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled, interactModel.totalValidElements]);

  // 加入容器控制
  useEffect(() => {
    if (disabled) return;
    if (!container) return;

    const { unRegister, register } = initListener(
      container,
      'click',
      onContainerClick,
    );

    register();
    return () => {
      unRegister();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled, container]);

  return { onClick };
};
