import { Empty } from 'antd';
import isEqual from 'lodash.isequal';
import type { FC } from 'react';
import { memo } from 'react';
import { shallow } from 'zustand/shallow';
import { List, SortableItem } from '../components';
import type { Store } from '../store';
import { useStore } from '../store';

const selector = (s: Store) => ({
  renderContent: s.renderContent,
  getItemStyles: s.getItemStyles,
  compact: s.compact,
  hideRemove: s.hideRemove,
  dispatchListData: s.dispatchListData,
});

interface SortableListProps {
  prefixCls: string;
}

const SortableList: FC<SortableListProps> = ({ prefixCls }) => {
  const { dispatchListData, renderContent, compact, hideRemove, getItemStyles } = useStore(
    selector,
    shallow,
  );

  const [items, actions] = useStore((s) => [s.value, s.actions], isEqual);

  return (
    <>
      {Array.isArray(items) && items.length === 0 ? (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      ) : (
        <>
          <List prefixCls={prefixCls}>
            {items.map((item, index) => {
              return (
                <SortableItem
                  key={item.id}
                  id={item.id}
                  index={index}
                  compact={compact}
                  hideRemove={hideRemove}
                  getItemStyles={getItemStyles}
                  onRemove={() => dispatchListData({ type: 'removeItem', index })}
                  actions={typeof actions === 'function' ? actions(item, index) : actions}
                  useDragOverlay={true}
                  prefixCls={prefixCls}
                >
                  {renderContent?.(item, index)}
                </SortableItem>
              );
            })}
          </List>
        </>
      )}
    </>
  );
};

export default memo(SortableList);
