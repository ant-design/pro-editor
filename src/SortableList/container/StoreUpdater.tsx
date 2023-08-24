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
      onChange,
      renderContent,
      renderHeader,
      getItemStyles,
      actions,
      compact,
      hideRemove,
    }: StoreUpdaterProps,
    ref,
  ) => {
    const storeApi = useStoreApi();
    const useStoreUpdater = createStoreUpdater<StoreUpdaterProps>(storeApi);

    useStoreUpdater('value', initialValues, []);
    useStoreUpdater('initialValues', initialValues);
    useStoreUpdater('value', value);
    useStoreUpdater('onChange', onChange);
    useStoreUpdater('renderContent', renderContent);
    useStoreUpdater('renderHeader', renderHeader);
    useStoreUpdater('getItemStyles', getItemStyles);
    useStoreUpdater('actions', actions);
    useStoreUpdater('compact', compact);
    useStoreUpdater('hideRemove', hideRemove);

    // 将 store 传递到外部
    const instance = useSortableList();
    useImperativeHandle(ref, () => instance);

    return null;
  },
);

export default StoreUpdater;
