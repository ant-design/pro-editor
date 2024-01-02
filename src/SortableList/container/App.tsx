import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  MeasuringStrategy,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { createPortal } from 'react-dom';

import { restrictToVerticalAxis, restrictToWindowEdges } from '@dnd-kit/modifiers';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import type { CSSProperties, FC } from 'react';
import { useMemo } from 'react';
import { Flexbox } from 'react-layout-kit';
import { shallow } from 'zustand/shallow';
import { cx } from '../../theme';
import DragOverlay from '../features/DragOverlay';
import SortList from '../features/SortList';
import type { Store } from '../store';
import { useStore } from '../store';

const measuringConfig = {
  strategy: MeasuringStrategy.Always,
};

const selector = (s: Store) => ({
  handleDragStart: s.handleDragStart,
  handleDragCancel: s.handleDragCancel,
  handleDragEnd: s.handleDragEnd,
  keyManager: s.keyManager,
  renderHeader: s.renderHeader,
});

export interface AppProps {
  /**
   * 类名
   */
  className?: string;
  /**
   * 样式
   */
  style?: CSSProperties;
  /**
   * 类名前缀
   */
  prefixCls?: string;
}

const App: FC<AppProps> = ({ className, style }) => {
  const { handleDragStart, handleDragCancel, handleDragEnd, keyManager, renderHeader } = useStore(
    selector,
    shallow,
  );

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const overlay = useMemo(() => createPortal(<DragOverlay />, document.body), []);

  return (
    <Flexbox className={cx(className)} style={style}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter} // 碰撞检测策略
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        measuring={{ droppable: measuringConfig }}
        onDragCancel={handleDragCancel}
        modifiers={[restrictToVerticalAxis, restrictToWindowEdges]}
      >
        <SortableContext items={keyManager} strategy={verticalListSortingStrategy}>
          {renderHeader?.()}
          <SortList />
          {overlay}
        </SortableContext>
      </DndContext>
    </Flexbox>
  );
};

export default App;
