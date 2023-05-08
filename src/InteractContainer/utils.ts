import type { ContainerNode, GetContainer } from './type';

/**
 * 获取容器元素
 * @param getContainer
 */
export const getContainerElement = (getContainer?: GetContainer) => {
  if (getContainer) {
    if (typeof getContainer === 'string') {
      const element = document.querySelector(getContainer);
      if (element) return element;
    }

    if (getContainer instanceof HTMLElement) return getContainer;

    if (typeof getContainer === 'function') return getContainer();
  }

  return document;
};

/**
 * 生成事件监听器
 * @param ele
 * @param type
 * @param method
 */
export const initListener = (
  ele: Element[] | ContainerNode,
  type: keyof GlobalEventHandlersEventMap,
  method,
) => {
  if (ele instanceof Array) {
    return {
      register: () => {
        ele.forEach((e) => {
          e.addEventListener(type, method);
        });
      },
      unRegister: () => {
        ele.forEach((e) => {
          e.removeEventListener(type, method);
        });
      },
    };
  } else {
    return {
      register: () => ele.addEventListener(type, method),
      unRegister: () => ele.removeEventListener(type, method),
    };
  }
};

export const createTestElement = (slelector: string, attr = 'data-uxid') => {
  const div = document.createElement('div');
  div.setAttribute(attr, slelector);
  document.body.appendChild(div);
  return div;
};
