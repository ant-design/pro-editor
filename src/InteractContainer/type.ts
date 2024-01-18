import type { ReactNode } from 'react';

export type InteractionType = 'click' | 'hover';

// export enum InteractStatusEnum {
//   Hover = 'hover',
//   Unhover = 'unhover',
//   Selected = 'selected',
//   UnSelected = 'unSelected',
// }

export type InteractStatusType = 'hover' | 'unhover' | 'unSelected' | 'selected';

// export type InteractStatusType = typeof InteractStatusEnum[keyof typeof InteractStatusEnum];
/**
 * 激活的节点
 */
export interface InteractStatusNode {
  index: number;
  rule: CanvasInteractRule;
}

/**
 * 交互规则
 */
export interface CanvasInteractRule {
  /**
   * 规则id
   */
  id: string;
  /**
   * 用于选择对象
   * 支持使用 类、id 选择器
   */
  selectors: string[];
  /**
   * 支持的交互行为
   */
  actions: InteractionType[];
}

export type ContainerNode = Document | Element;
/**
 * 交互模型
 */
export interface CanvasInteractModel extends CanvasInteractRule {
  elements: Element[];
  /**
   * 容器是否匹配
   */
  containerMatched: boolean;
}

export interface ValidElement {
  /**
   * 元素
   */
  element: HTMLElement;
  /**
   * 选择器
   */
  selector: string;
  /**
   * 序号
   */
  index: number;
}

export interface InteractStatus {
  /**
   * 交互状态的动作
   */
  action?: InteractionType;
  /**
   * 交互状态的动作
   */
  status?: InteractStatusType;
  /**
   * 当前的交互节点
   */
  currentNode?: InteractStatusNode;
  /**
   * 实际激活的节点
   */
  activeNode?: InteractStatusNode;
}

export type GetContainer = (() => HTMLElement) | HTMLElement | string;

export type OnInteractionStatusChange = (status: InteractStatus) => void;

export interface ContextCanvasProps {
  /**
   * 交互规则
   */
  rules: CanvasInteractRule[];
  /**
   * 受控模式的状态
   */
  status?: InteractStatus;
  /**
   * 状态变更回调
   */
  onStatusChange?: OnInteractionStatusChange;
  /**
   * 禁用交互
   */
  disabled?: boolean;
  /**
   * 响应画布式交互的父节点
   */
  getContainer?: GetContainer;
  /**
   * 前缀
   */
  prefixCls?: string;
  /**
   * 子组件
   */
  children?: ReactNode;
}
