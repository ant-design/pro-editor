import type { FC } from 'react';

import { useContextCanvas } from './hooks/useContextCanvas';
import { useStyle } from './style';
import type { ContextCanvasProps } from './type';

const ContextCanvas: FC<ContextCanvasProps> = (props) => {
  useStyle();
  useContextCanvas(props);
  return <>{props.children}</>;
};

export default ContextCanvas;

export * from './type';
