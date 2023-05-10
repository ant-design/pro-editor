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
import isEqual from 'lodash.isequal';
import type { CSSProperties, FC } from 'react';
import { useMemo } from 'react';
import { Flexbox } from 'react-layout-kit';
import { shallow } from 'zustand/shallow';
import { cx, getPrefixCls } from '../../theme';
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

const App: FC<AppProps> = ({ className, style, prefixCls: customPrefixCls }) => {
  const { handleDragStart, handleDragCancel, handleDragEnd, renderHeader } = useStore(
    selector,
    shallow,
  );

  const keyManager = useStore((s) => s.keyManager, isEqual);
  const prefixCls = getPrefixCls('sortable-list', customPrefixCls);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const overlay = useMemo(
    () => createPortal(<DragOverlay prefixCls={prefixCls} />, document.body),
    [],
  );

  return (
    <Flexbox className={cx(className, prefixCls)} style={style}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter} // 碰撞检测策略
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        measuring={{ droppable: measuringConfig }}
        onDragCancel={handleDragCancel}
        modifiers={[restrictToVerticalAxis, restrictToWindowEdges]}
      >
        <SortableContext
          // dndkit 的 bug ，必须要用 object 的 id 获取，否则 transform 一直为空。
          items={keyManager.keys.map((key) => {
            return {
              id: key,
            };
          })}
          strategy={verticalListSortingStrategy}
        >
          {renderHeader?.()}
          <SortList prefixCls={prefixCls} />
          {overlay}
        </SortableContext>
      </DndContext>
    </Flexbox>
  );
};

export default App;
