import { useRef } from 'react';
import getPrefixCls from '../../_util/getPrefixCls';

import isEqual from 'lodash.isequal';
import type { InteractionType } from '../type';

export const useRender = (customizePrefixCls?: string) => {
  const prefixCls = getPrefixCls('context-canvas', customizePrefixCls);

  const selectItem = useRef<HTMLElement>();
  const hoverItem = useRef<HTMLElement>();

  const isSelected = () => !!selectItem.current;

  /*工具方法*/

  const addClass = (element: HTMLElement, action: InteractionType) => {
    if (!element) return;

    element.classList.add(`${prefixCls}-${action}`);
  };
  const removeClass = (element: HTMLElement, action: InteractionType) => {
    if (!element) return;

    element.classList.remove(`${prefixCls}-${action}`);
  };
  const removeAllClass = (action: InteractionType) => {
    removeClass(selectItem.current, action);
    removeClass(hoverItem.current, action);
  };

  /* 渲染方法 */

  const renderSelected = (element: HTMLElement) => {
    selectItem.current = element;
    addClass(element, 'click');
    removeClass(element, 'hover');
  };

  const renderUnselected = (element: HTMLElement) => {
    removeClass(element, 'click');
    removeClass(element, 'hover');
    if (isEqual(element, selectItem.current)) {
      selectItem.current = null;
    }
  };

  const renderUnselectedAll = () => {
    removeClass(selectItem.current, 'click');
    removeClass(selectItem.current, 'hover');
    selectItem.current = null;
  };

  const renderHover = (element: HTMLElement) => {
    addClass(element, 'hover');
    hoverItem.current = element;
  };
  const renderUnHover = () => {
    removeAllClass('hover');
    hoverItem.current = null;
  };

  return {
    renderSelected,
    renderUnselected,
    renderHover,
    renderUnHover,
    renderUnselectedAll,
    currentSelectedElementRef: selectItem,
    isSelected,
  };
};

export type RenderModel = ReturnType<typeof useRender>;
