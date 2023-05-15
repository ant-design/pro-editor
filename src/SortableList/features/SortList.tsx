import type { FC } from 'react';
import { memo } from 'react';
import { shallow } from 'zustand/shallow';

import { List, SortableItem } from '../components';
import { useStore } from '../store';

import { PlusOutlined } from '@ant-design/icons';
import { Button, Empty } from 'antd';
import isEqual from 'lodash.isequal';
import type { Store } from '../store';
import { useStyle } from '../style';

const selector = (s: Store) => ({
  renderContent: s.renderContent,
  compact: s.compact,
  hideRemove: s.hideRemove,
  creatorButtonProps: s.creatorButtonProps,
  dispatchListData: s.dispatchListData,
});

interface SortableListProps {
  prefixCls: string;
}

const SortableList: FC<SortableListProps> = ({ prefixCls }) => {
  const { dispatchListData, renderContent, compact, hideRemove } = useStore(selector, shallow);

  const [value, keyManager, creatorButtonProps, actions] = useStore(
    (s) => [s.value, s.keyManager, s.creatorButtonProps, s.actions],
    isEqual,
  );

  const {
    record,
    creatorButtonText = '添加一列',
    showInList = true,
    showInEmpty = true,
  } = creatorButtonProps || {};

  const { styles } = useStyle(prefixCls);

  const CreateButton = ({ empty = false }) => {
    return (
      <Button
        block={empty ? false : true}
        size={'small'}
        className={styles.btnAdd}
        onClick={() => {
          const intialValue = {
            ...(record && typeof record === 'function' ? record(value.length) : record),
          };
          dispatchListData({
            type: 'addItem',
            item: intialValue,
          });
        }}
        icon={<PlusOutlined />}
      >
        {creatorButtonText}
      </Button>
    );
  };

  return (
    <>
      {Array.isArray(value) && value.length === 0 ? (
        <>
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}>
            {showInEmpty === false ? null : <CreateButton empty />}
          </Empty>
        </>
      ) : (
        <>
          <List prefixCls={prefixCls}>
            {value.map((item, index) => {
              return (
                <SortableItem
                  key={keyManager.keys[index]}
                  id={keyManager.keys[index]}
                  index={index}
                  compact={compact}
                  hideRemove={hideRemove}
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
          {showInList === false ? null : <CreateButton />}
        </>
      )}
    </>
  );
};

export default memo(SortableList);
