import { produce } from 'immer';
import { forwardRef, useImperativeHandle } from 'react';
import { createStoreUpdater } from 'zustand-utils';
import { useSortableList } from '..';
import { useStoreApi } from '../store';
import type { StoreUpdaterProps } from '../type';

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
      getItemStyles,
      getId,
      creatorButtonProps,
      hideRemove,
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
            draft[index] = crypto.randomUUID();
          }
        });
        return draft;
      });

      storeApi.setState({ keyManager: manager });
    };

    useStoreUpdater('value', initialValues, []);
    useStoreUpdater('value', value);
    useStoreUpdater('actions', actions);
    useStoreUpdater('getId', getId);
    useStoreUpdater('onChange', onChange);
    useStoreUpdater('renderItem', renderItem);
    useStoreUpdater('renderContent', renderContent);
    useStoreUpdater('renderEmpty', renderEmpty);
    useStoreUpdater('getItemStyles', getItemStyles);
    useStoreUpdater('creatorButtonProps', creatorButtonProps);
    useStoreUpdater('hideRemove', hideRemove);

    // KeyManager 状态受控
    useStoreUpdater('initialValues', initialValues, [], (state) => {
      KeyManagerUpdater(state, 'initialValues');
    });

    useStoreUpdater('value', value, null, (state) => KeyManagerUpdater(state, 'value'));

    // 将 store 传递到外部
    const instance = useSortableList();
    useImperativeHandle(ref, () => instance);

    return null;
  },
);

export default StoreUpdater;
