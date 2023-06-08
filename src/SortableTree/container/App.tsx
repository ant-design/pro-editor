import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  MeasuringStrategy,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import isEqual from 'fast-deep-equal';
import type { CSSProperties, FC } from 'react';
import { memo, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Flexbox } from 'react-layout-kit';
import { shallow } from 'zustand/shallow';

import { sortableTreeKeyboardCoordinates } from '../keyboardCoordinates';
import type { SensorContext } from '../types';

import { dataFlattenSelector, sortedIdsSelector, useStore } from '../store';

import { getPrefixCls } from '@/theme';
import DragOverlay from '../features/DragOverlay';
import SortableList from '../features/TreeList';

import { useStyles } from '../style';

const measuring = {
  droppable: {
    strategy: MeasuringStrategy.Always,
  },
};

export interface AppProps {
  /**
   * 类名
   */
  className?: string;
  rootClassName?: string;
  /**
   * 样式
   */
  style?: CSSProperties;
  /**
   * 类名前缀
   */
  prefixCls?: string;
}

const App: FC<AppProps> = memo(
  ({ className, rootClassName, style, prefixCls: customPrefixCls }) => {
    const [
      offsetLeft,
      handleDragStart,
      handleDragCancel,
      handleDragEnd,
      handleDragMove,
      indentationWidth,
      handleDragOver,
    ] = useStore(
      (s) => [
        s.offsetLeft,
        s.handleDragStart,
        s.handleDragCancel,
        s.handleDragEnd,
        s.handleDragMove,
        s.indentationWidth,
        s.handleDragOver,
      ],
      shallow,
    );

    const prefixCls = getPrefixCls('sortable-tree', customPrefixCls);

    const { styles, cx } = useStyles(prefixCls);
    const flattenData = useStore(dataFlattenSelector, isEqual);

    const sensorContext: SensorContext = useRef({
      items: flattenData,
      offset: offsetLeft,
    });

    useEffect(() => {
      sensorContext.current = {
        items: flattenData,
        offset: offsetLeft,
      };
    }, [flattenData, offsetLeft]);

    const [coordinateGetter] = useState(() =>
      sortableTreeKeyboardCoordinates(sensorContext, true, indentationWidth),
    );

    const sensors = useSensors(
      useSensor(PointerSensor),
      useSensor(KeyboardSensor, {
        coordinateGetter,
      }),
    );

    const sortedIds = useStore(sortedIdsSelector, isEqual);

    const overlay = useMemo(
      () =>
        createPortal(
          <Flexbox className={cx(rootClassName, styles)}>
            <DragOverlay prefixCls={prefixCls} />
          </Flexbox>,
          document.body,
        ),
      [],
    );

    return (
      <Flexbox className={cx(className, rootClassName, styles)} style={style}>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          measuring={measuring}
          onDragStart={handleDragStart}
          onDragMove={handleDragMove}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
          onDragCancel={handleDragCancel}
        >
          <SortableContext items={sortedIds} strategy={verticalListSortingStrategy}>
            <>
              <SortableList prefixCls={prefixCls} />
              {overlay}
            </>
          </SortableContext>
        </DndContext>
      </Flexbox>
    );
  },
);

export default App;
