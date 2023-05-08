import isEqual from 'lodash.isequal';
import { useEffect, useReducer } from 'react';

import type { ContainerNode, InteractStatus } from '../type';
import type { InteractModel } from './InteractModel';

interface StatusHandleClick {
  type: 'handleClick';
  target: Element;
}

interface StatusHandleContainerClick {
  type: 'handleContainerClick';
  target?: ContainerNode;
}

interface StatusHandleHover {
  type: 'handleHover';
  target?: Element;
  action: 'hover' | 'unhover';
}

export type StatusDispatch =
  | StatusHandleClick
  | StatusHandleContainerClick
  | StatusHandleHover;

interface ControlledValueOption {
  value?: InteractStatus;
  onChange?: (value: InteractStatus) => void;
}

export const useInteractStatus = (
  interactModel: InteractModel,
  option: ControlledValueOption = {},
) => {
  const statusReducer = (
    state: InteractStatus,
    payload: StatusDispatch,
  ): InteractStatus => {
    const status = option?.value ?? state;
    switch (payload.type) {
      // 处理容器的点击操作
      case 'handleContainerClick':
        return { status: 'unSelected', action: 'click' };

      // 处理 元素本身的点击状态
      case 'handleClick':
        const currentNode = interactModel.getRuleAndIndexByElement(
          payload.target,
        );

        const isActive = status && !!status.activeNode;

        // 如果两个元素相同的情况下
        if (status && isEqual(currentNode, status.activeNode)) {
          return {
            status: isActive ? 'unSelected' : 'selected',
            action: 'click',
            currentNode: isActive ? undefined : currentNode,
            activeNode: isActive ? undefined : currentNode,
          };
        }

        // 如果两个元素不同，那么选中新元素
        return {
          status: 'selected',
          currentNode,
          activeNode: currentNode,
          action: 'click',
        };

      // 处理 hover 状态
      case 'handleHover':
        const node =
          payload.target &&
          interactModel.getRuleAndIndexByElement(payload.target);
        return {
          ...status,
          status: payload.action,
          action: 'hover',
          currentNode: node,
        };

      default:
        return status;
    }
  };

  const [status, dispatchStatus] = useReducer(statusReducer, option?.value);

  useEffect(() => {
    if (option?.onChange) {
      option.onChange(status);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return { status: option?.value ?? status, dispatchStatus };
};

export type UseInteractStatus = ReturnType<typeof useInteractStatus>;
