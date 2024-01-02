import { FC } from 'react';
import type { FlattenNode } from './data';

export type RenderNodeProps<T = any> = (node: FlattenNode<T>) => ReturnType<FC>;

export type VirtualConfig =
  | {
      /**
       * @title 虚拟滚动的高度
       */
      height: number;
      /**
       * @title 虚拟滚动的宽度
       */
      width?: number;
      /**
       * @title 虚拟滚动的行高
       */
      itemHeight?: (index: number) => number;
    }
  | false;
