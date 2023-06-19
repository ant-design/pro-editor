import { createEmptySpreadsheetData } from './utils';

export type TableData = string[][];
export type OnDataChange = (data: TableData) => void;

/**
 * Store 状态机
 */

/**
 * 组件状态
 */
export interface ExcelTableState {
  data?: TableData;
  defaultData?: TableData;
  onDataChange?: OnDataChange;
}

const defaultData = createEmptySpreadsheetData(6, 5);

export const initialState: ExcelTableState = {
  data: defaultData,
  defaultData,
  onDataChange: null,
};
