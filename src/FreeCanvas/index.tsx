import type { FC, ReactNode } from 'react';
import type { Viewport } from 'reactflow';
import ReactFlow, { Background, ReactFlowProvider } from 'reactflow';
import Artboard from './Artboard';
import ControlAction from './ControlAction';
import { useStyle } from './style';
// 只有引入默认 style 才能保证交互是正常的
import 'reactflow/dist/style.css';

const nodeTypes = {
  artboard: Artboard,
};

export interface FreeCanvasProps {
  /** 自由画布组件的子元素 */
  children: ReactNode;
  /** 视口的初始值 */
  viewport?: Viewport;
  /** 视口的默认值 */
  defaultViewport?: Viewport;
  /** 是否显示控制面板 */
  control?: boolean;
  /**
   * 视口变化时的回调函数
   * @param viewport - 视口信息
   */
  onViewportChange?: (viewport: Viewport) => void;
  /**
   * 额外控制按钮
   */
  extraControlBtns?: React.ReactNode[];
}

const Canvas: FC<FreeCanvasProps> = ({
  children,
  viewport,
  defaultViewport,
  onViewportChange,
  control = true,
  extraControlBtns = [],
}) => {
  const { styles } = useStyle();

  return (
    <ReactFlowProvider>
      <ReactFlow
        minZoom={0.25}
        maxZoom={4}
        nodes={[
          {
            id: 'artboard',
            type: 'artboard',
            data: children,
            draggable: false,
            connectable: false,
            position: { x: 0, y: 0 },
          },
        ]}
        defaultViewport={defaultViewport}
        onMove={(e, v) => {
          onViewportChange?.(v);
        }}
        nodeTypes={nodeTypes}
        fitView
        onlyRenderVisibleElements
        panOnScroll
        className={styles.flow}
        panOnDrag={false}
        zoomOnScroll={false}
      >
        {control && (
          <div className={styles.control}>
            <ControlAction viewport={viewport} extraBtns={extraControlBtns} />
          </div>
        )}

        <Background color="#aaa" gap={16} style={{ zIndex: -1 }} />
      </ReactFlow>
    </ReactFlowProvider>
  );
};

export default Canvas;
