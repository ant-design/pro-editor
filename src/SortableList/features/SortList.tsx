import isEqual from 'lodash.isequal';
import type { FC } from 'react';
import { memo } from 'react';
import { shallow } from 'zustand/shallow';
import { List, SortableItem } from '../components';
import type { Store } from '../store';
import { useStore } from '../store';

const selector = (s: Store) => ({
  renderItem: s.renderItem,
  renderContent: s.renderContent,
  getItemStyles: s.getItemStyles,
  actions: s.actions,
  hideRemove: s.hideRemove,
  dispatchListData: s.dispatchListData,
});

interface SortableListProps {
  prefixCls: string;
}

const SortableList: FC<SortableListProps> = ({ prefixCls }) => {
  const { dispatchListData, renderItem, renderContent, hideRemove, getItemStyles, actions } =
    useStore(selector, shallow);

  const items = useStore((s) => s.value, isEqual);

  return (
    <List prefixCls={prefixCls}>
      {items.map((item, index) => {
        return (
          <SortableItem
            key={item.id}
            id={item.id}
            item={item}
            index={index}
            actions={typeof actions === 'function' ? actions(item, index) : actions}
            hideRemove={hideRemove}
            renderItem={renderItem}
            renderContent={renderContent}
            getItemStyles={getItemStyles}
            onRemove={() => dispatchListData({ type: 'removeItem', index })}
            useDragOverlay={true}
            prefixCls={prefixCls}
          />
        );
      })}
    </List>
  );
};

export default memo(SortableList);
