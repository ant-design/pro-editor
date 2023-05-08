import produce from 'immer';
import isEqual from 'lodash.isequal';
import { create } from 'zustand';

import { getNewRows, updateDataByColumn, updateDataByRow } from './utils';

import { initialState } from './initialState';

import type { CellChange } from 'handsontable/common';
import type { ExcelTableState, TableData } from './initialState';

/**
 * 组件交互点
 */
export interface ExcelTableAction {
  setStoreState: (nextState: Partial<ExcelTableState>) => void;
  /**
   * 内部更新 Data 方法
   * @param data
   */
  internalUpdateData: (data: TableData) => void;
  outsideUpdateData: (data: TableData) => void;
  setDefaultData: (data: TableData) => void;
  handleDataChanges: (changes: CellChange[]) => void;
  updateByColumn: (column: number) => void;
  updateByRow: (row: number) => void;
  resetData: () => void;
  reset: () => void;
}

export type ExcelTableStore = ExcelTableState & ExcelTableAction;

export const createStore = () =>
  create<ExcelTableStore>((set, get) => {
    return {
      ...initialState,
      setStoreState(nextState: Partial<ExcelTableState>) {
        set(nextState);
      },
      setDefaultData: (defaultData) => {
        set({ defaultData });
      },

      // 全量重置
      resetData: () => {
        const { defaultData, internalUpdateData } = get();
        internalUpdateData(defaultData);
      },

      reset: () => set({ ...initialState }),

      /**
       * 外部更新数据方法
       * @param data
       */
      outsideUpdateData: (data) => {
        set({ data });
      },
      /**
       * 内部更新 Data 方法
       * @param nextData
       */
      internalUpdateData: (nextData) => {
        const { data: prevData, onDataChange } = get();

        if (isEqual(prevData, nextData)) return;

        set({ data: nextData });

        // 受控更新
        onDataChange?.(nextData);
      },
      handleDataChanges: (changes) => {
        const { data, internalUpdateData } = get();

        const nextData = produce(data, (draft) => {
          changes.forEach((change) => {
            const [row, column, prev, next] = change;
            if (prev !== next) {
              // 如果 draft[row] 存在，说明是在行里面的
              if (draft[row]) {
                draft[row][column] = next;
              } else {
                // 否则说明行不够了，需要添加新行

                const diffRow = row + 1 - data.length;
                const newRows = getNewRows(diffRow, data[0].length);

                newRows.forEach((newRow) => {
                  draft.push(newRow);
                });

                draft[row][column] = next;
              }
            }
          });
        });

        internalUpdateData(nextData);
      },
      updateByColumn: (column) => {
        const newData = updateDataByColumn(column, get().data);

        get().internalUpdateData(newData);
      },
      updateByRow: (row) => {
        const newData = updateDataByRow(row, get().data);

        get().internalUpdateData(newData);
      },
    };
  });
