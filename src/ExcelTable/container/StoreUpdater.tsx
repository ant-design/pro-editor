import { useEffect } from 'react';
import { shallow } from 'zustand/shallow';

import type { ExcelTableStore, OnDataChange, TableData } from '../store';
import { useStore } from '../store';

interface StoreUpdaterProps {
  data: TableData;
  defaultData?: TableData;
  onDataChange?: OnDataChange;
}

const selector = (s: ExcelTableStore) => ({
  setData: s.outsideUpdateData,
  setStore: s.setStoreState,
  reset: s.reset,
  setDefaultData: s.setDefaultData,
});

const useStoreUpdater = <T extends any>(
  value: T | undefined,
  setStoreState: (param: T) => void,
  deps = [value],
) => {
  useEffect(() => {
    if (typeof value !== 'undefined') {
      setStoreState(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

const StoreUpdater = ({
  onDataChange,
  data,
  defaultData,
}: StoreUpdaterProps) => {
  const { setData, setDefaultData, setStore } = useStore(selector, shallow);

  useStoreUpdater<OnDataChange>(onDataChange, (fn) => {
    setStore({ onDataChange: fn });
  });

  useStoreUpdater<TableData>(defaultData, setData, []);
  useStoreUpdater<TableData>(data, setData);
  useStoreUpdater<TableData>(defaultData, setDefaultData);

  return null;
};

export default StoreUpdater;
