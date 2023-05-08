import type { UniqueIdentifier } from '@dnd-kit/core';
import type { MutableRefObject } from 'react';

export type { UniqueIdentifier };

/**
 * 树节点
 */
export interface TreeNode<T = any> {
  id: UniqueIdentifier;
  children: TreeNode<T>[];
  /**
   * 组是否折叠
   */
  collapsed?: boolean;
  /**
   * 是否显示额外区域
   */
  showExtra?: boolean;
  content?: T;
}

export type TreeData<T = any> = TreeNode<T>[];

/**
 * 展平的节点
 */
export interface FlattenNode<T = any> extends TreeNode<T> {
  parentId: UniqueIdentifier | null;
  depth: number;
  index: number;
}

export type SensorContext = MutableRefObject<{
  items: FlattenNode[];
  offset: number;
}>;

export interface Projected {
  depth: number;
  maxDepth: number;
  minDepth: number;
  parentId: UniqueIdentifier;
}
