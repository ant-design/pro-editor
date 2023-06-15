import { ReactNode } from 'react';

import type { FlattenNode } from './data';

export type RenderNodeProps<T = any> = (node: FlattenNode<T>) => ReactNode;
