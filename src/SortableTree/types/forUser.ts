import type { FlattenNode } from '../../SortableTree';

export type RenderNodeProps<T = any> = (node: FlattenNode<T>) => JSX.Element;
