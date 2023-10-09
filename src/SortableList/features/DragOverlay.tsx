import { defaultDropAnimation, DragOverlay } from '@dnd-kit/core';
import type { FC } from 'react';
import { memo } from 'react';
import { shallow } from 'zustand/shallow';
import { Item } from '../components';

import { defaultDropAnimationSideEffects } from '@dnd-kit/core';

import isEqual from 'lodash.isequal';
import { useStore } from '../store';
import type { Store } from '../store/store';
import { getIndexOfActiveItem } from '../utils';

const selector = (s: Store) => ({
  activeId: s.activeId,
  hideRemove: s.hideRemove,
  renderItem: s.renderItem,
  renderContent: s.renderContent,
  getItemStyles: s.getItemStyles,
});

interface OverlayProps {
  prefixCls: string;
}

const Overlay: FC<OverlayProps> = ({ prefixCls }) => {
  const { activeId, renderItem, hideRemove, getItemStyles, renderContent } = useStore(
    selector,
    shallow,
  );
  const items = useStore((s) => s.value, isEqual);
  const keyManager = useStore((s) => s.keyManager, isEqual);
  const activeIndex = getIndexOfActiveItem(keyManager, activeId);

  return (
    <DragOverlay
      adjustScale={false}
      dropAnimation={{
        ...defaultDropAnimation,
        sideEffects: defaultDropAnimationSideEffects({
          styles: { active: { opacity: '0.5' } },
        }),
      }}
    >
      {activeId ? (
        <Item
          id={activeId}
          dragOverlay
          index={activeIndex}
          item={items[activeIndex]}
          prefixCls={prefixCls}
          renderItem={renderItem}
          renderContent={renderContent}
          style={getItemStyles({
            id: activeId,
            index: activeIndex,
            isSorting: true,
            isDragging: true,
            overIndex: -1,
            isDragOverlay: true,
          })}
          hideRemove={hideRemove}
        />
      ) : null}
    </DragOverlay>
  );
};

export default memo(Overlay);
