import { defaultDropAnimation, DragOverlay } from '@dnd-kit/core';
import type { FC } from 'react';
import { memo } from 'react';
import { shallow } from 'zustand/shallow';
import { Item } from '../components';

import { defaultDropAnimationSideEffects } from '@dnd-kit/core';

import isEqual from 'lodash.isequal';
import { useStore } from '../store';
import type { Store } from '../store/store';

const selector = (s: Store) => ({
  activeId: s.activeId,
  compact: s.compact,
  renderContent: s.renderContent,
  getActiveIndex: s.getActiveIndex,
});

interface OverlayProps {
  prefixCls: string;
}

const Overlay: FC<OverlayProps> = ({ prefixCls }) => {
  const { activeId, compact, renderContent, getActiveIndex } = useStore(
    selector,
    shallow,
  );
  const value = useStore((s) => s.value, isEqual);
  const activeIndex = getActiveIndex();

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
        <Item id={activeId} dragOverlay prefixCls={prefixCls} compact={compact}>
          {renderContent(value[activeIndex], activeIndex)}
        </Item>
      ) : null}
    </DragOverlay>
  );
};

export default memo(Overlay);
