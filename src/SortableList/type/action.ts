import type { UniqueIdentifier } from '@dnd-kit/core';

// 新增节点
export interface AddItemAction {
  /**
   * 动作类型
   */
  type: 'addItem';
  /**
   * 新增的节点
   */
  item: any;
  /**
   * 新增节点的位置
   * @default undefined
   */
  index?: number;
}

// 移动节点
export interface MoveItemAction {
  /**
   * 动作类型
   */
  type: 'moveItem';
  /**
   * 当前节点的唯一标识符
   */
  activeId: UniqueIdentifier;
  /**
   * 目标节点的唯一标识符
   */
  targetId: UniqueIdentifier;
}

// 移除节点
export interface RemoveItemAction {
  /**
   * 动作类型
   */
  type: 'removeItem';
  /**
   * 要移除的节点的位置
   */
  index: number;
}

// 修改节点
export interface UpdateItemAction {
  /**
   * 动作类型
   */
  type: 'updateItem';
  /**
   * 要修改的节点的位置
   */
  index: number;
  /**
   * 修改后的节点内容
   */
  item: any;
}

/**
 * 内部 Item 数据更新方法
 */
export type SortableListDispatchPayload =
  | MoveItemAction
  | AddItemAction
  | RemoveItemAction
  | UpdateItemAction;
