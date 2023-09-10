import type { FlattenNode } from './data';

export type RenderNodeProps<T = any> = (node: FlattenNode<T>) => JSX.Element;
