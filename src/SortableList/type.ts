import type { UniqueIdentifier } from '@dnd-kit/core';
import type { ReactNode } from 'react';

export interface KeyManager {
  /**
   * 列表 ID 项
   */
  keys: UniqueIdentifier[];
  /**
   * 当前自增 ID
   */
  id: number;
}

export interface CreatorButtonProps {
  /**
   * 列表有值时是否展示添加按钮
   */
  showInList?: boolean;
  /**
   * 空数据时是否展示添加按钮
   */
  showInEmpty?: boolean;
  /**
   * 生成初始值逻辑
   */
  record?: (index: number) => Record<string, any>;
  /**
   * 新增一行按钮文案
   */
  creatorButtonText?: string;
}

export type RenderItemProps<T = any> = (item: T, index: number) => ReactNode;

export type RenderActionProps<T = any> =
  | ((item: T, index: number) => ReactNode[])
  | React.ReactNode[];

export type { UniqueIdentifier };
