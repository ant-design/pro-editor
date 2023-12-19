import { Empty } from 'antd';
import isEqual from 'lodash.isequal';
import type { FC } from 'react';
import { memo } from 'react';
import { shallow } from 'zustand/shallow';
import { List, SortableItem } from '../components';
import type { Store } from '../store';
import { useStore } from '../store';

import { PlusOutlined } from '@ant-design/icons';
import { Button } from '../../antd';

import { useStyle } from '../style';

const selector = (s: Store) => ({
  renderItem: s.renderItem,
  renderContent: s.renderContent,
  renderEmpty: s.renderEmpty,
  getItemStyles: s.getItemStyles,
  keyManager: s.keyManager,
  actions: s.actions,
  hideRemove: s.hideRemove,
  creatorButtonProps: s.creatorButtonProps,
  dispatchListData: s.dispatchListData,
});

interface SortableListProps {
  prefixCls: string;
}

const SortableList: FC<SortableListProps> = ({ prefixCls }) => {
  const {
    dispatchListData,
    renderItem,
    renderContent,
    renderEmpty,
    creatorButtonProps = false,
    hideRemove,
    keyManager,
    getItemStyles,
    actions,
  } = useStore(selector, shallow);

  const { styles } = useStyle(prefixCls);
  const items = useStore((s) => s.value, isEqual);
  const {
    record,
    creatorButtonText = '添加一列',
    position = 'bottom',
    style,
  } = creatorButtonProps || {};

  const CreateButton = ({ empty = false }) => {
    return (
      <Button
        block={empty ? false : true}
        size={'small'}
        style={style}
        className={styles.btnAdd}
        onClick={() => {
          dispatchListData({
            type: 'addItem',
            item: record(items.length),
          });
        }}
        icon={<PlusOutlined />}
      >
        {creatorButtonText}
      </Button>
    );
  };

  return Array.isArray(items) && items.length === 0 ? (
    renderEmpty ? (
      renderEmpty()
    ) : (
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="暂无数据">
        {creatorButtonProps !== false ? <CreateButton empty={true} /> : null}
      </Empty>
    )
  ) : (
    <>
      {creatorButtonProps !== false && position === 'top' ? <CreateButton /> : null}
      <List prefixCls={prefixCls}>
        {items.map((item, index) => {
          return (
            <SortableItem
              key={keyManager[index]}
              id={keyManager[index]}
              item={item}
              index={index}
              actions={actions}
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
      {creatorButtonProps !== false && position === 'bottom' ? <CreateButton /> : null}
    </>
  );
};

export default memo(SortableList);
