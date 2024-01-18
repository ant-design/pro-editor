import type { DropAnimation, Modifier } from '@dnd-kit/core';
import { DragOverlay, defaultDropAnimation } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { memo } from 'react';
import { shallow } from 'zustand/shallow';

import { SortableTreeItem } from '../components';
import { useStore } from '../store';
import { getChildCount } from '../utils/utils';

// 拖拽时的动效
const dropAnimationConfig: DropAnimation = {
  keyframes({ transform }) {
    return [
      { opacity: 1, transform: CSS.Transform.toString(transform.initial) },
      {
        opacity: 0,
        transform: CSS.Transform.toString({
          ...transform.final,
          x: transform.final.x + 5,
          y: transform.final.y + 5,
        }),
      },
    ];
  },
  easing: 'ease-out',
  sideEffects({ active }) {
    active.node.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: defaultDropAnimation.duration,
      easing: defaultDropAnimation.easing,
    });
  },
};

// 可以用于控制 Overlay 的位置和尺寸
const adjustTranslate: Modifier = ({ transform }) => {
  return {
    ...transform,
    x: transform.x + 20,
    y: transform.y - 10,
  };
};

const Overlay = () => {
  const [activeId, treeData, indentationWidth, getActiveNode] = useStore(
    (s) => [s.activeId, s.treeData, s.indentationWidth, s.getActiveNode],
    shallow,
  );

  const activeItem = getActiveNode();

  return (
    <DragOverlay dropAnimation={dropAnimationConfig} modifiers={[adjustTranslate]}>
      {activeId && activeItem ? (
        <SortableTreeItem
          id={activeId}
          depth={activeItem.depth}
          clone
          childCount={getChildCount(treeData, activeId) + 1}
          node={activeItem}
          indentationWidth={indentationWidth}
        />
      ) : null}
    </DragOverlay>
  );
};

export default memo(Overlay);
