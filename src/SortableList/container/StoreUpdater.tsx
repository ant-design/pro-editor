import { produce } from 'immer';
import { forwardRef, useImperativeHandle } from 'react';
import { createStoreUpdater } from 'zustand-utils';
import { useSortableList } from '..';
import { useStoreApi } from '../store';
import type { StoreUpdaterProps } from '../type';
import { getUUID } from '../utils';

const StoreUpdater = forwardRef(
  (
    {
      initialValues,
      value,
      actions,
      onChange,
      renderItem,
      renderContent,
      renderEmpty,
      renderHeader,
      getItemStyles,
      creatorButtonProps,
      hideRemove,
      handle,
    }: StoreUpdaterProps,
    ref,
  ) => {
    const storeApi = useStoreApi();
    const useStoreUpdater = createStoreUpdater<StoreUpdaterProps>(storeApi);

    // KeyManager 和 value & initialValues 同步。
    const KeyManagerUpdater = (state, key) => {
      const { keyManager } = storeApi.getState();
      // value 为空处理
      const value = state[key] || [];
      const manager = produce(keyManager, (draft) => {
        value.forEach((__, index) => {
          const key = draft[index];
          if (key === undefined) {
            draft[index] = getUUID(index);
          }
        });
        return draft;
      });

      storeApi.setState({ keyManager: manager, value });
    };

    useStoreUpdater('initialValues', initialValues, [], (state) => {
      KeyManagerUpdater(state, 'initialValues');
    });
    useStoreUpdater('value', value, [], (state) => {
      KeyManagerUpdater(state, 'value');
    });
    useStoreUpdater('actions', actions);
    useStoreUpdater('onChange', onChange);
    useStoreUpdater('renderItem', renderItem);
    useStoreUpdater('renderContent', renderContent);
    useStoreUpdater('renderEmpty', renderEmpty);
    useStoreUpdater('renderHeader', renderHeader);
    useStoreUpdater('getItemStyles', getItemStyles);
    useStoreUpdater('creatorButtonProps', creatorButtonProps);
    useStoreUpdater('hideRemove', hideRemove);
    useStoreUpdater('handle', handle);

    // 将 store 传递到外部
    const instance = useSortableList();
    useImperativeHandle(ref, () => instance);

    return null;
  },
);

export default StoreUpdater;
