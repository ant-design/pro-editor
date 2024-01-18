import { withProvider } from '@ant-design/pro-editor';
import type { FC } from 'react';
import { useContextCanvas } from './hooks/useContextCanvas';
import { useStyle } from './style';
import type { ContextCanvasProps } from './type';

const ContextCanvas: FC<ContextCanvasProps> = (props) => {
  useStyle();
  useContextCanvas(props);
  return <>{props.children}</>;
};

export default withProvider(ContextCanvas);

export * from './type';
