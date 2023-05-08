import Handsontable from 'handsontable';
import { updateDataByColumn, updateDataByRow } from './utils';

const baseData = Handsontable.helper.createEmptySpreadsheetData(3, 4);
describe('ExcelTable 工具函数', () => {
  describe('updateDataByRow', () => {
    it('增加行', () => {
      const newData1 = updateDataByRow(4, baseData);
      expect(newData1).toEqual(
        Handsontable.helper.createEmptySpreadsheetData(4, 4),
      );
      const newData2 = updateDataByRow(5, baseData);
      expect(newData2).toEqual(
        Handsontable.helper.createEmptySpreadsheetData(5, 4),
      );
    });
    it('减少行', () => {
      const newData = updateDataByRow(1, baseData);
      expect(newData).toEqual(
        Handsontable.helper.createEmptySpreadsheetData(1, 4),
      );
    });
    it('行不变', () => {
      const newData = updateDataByRow(3, baseData);
      expect(newData).toEqual(baseData);
    });
  });
  describe('updateDataByColumn', () => {
    it('增加行', () => {
      const newData = updateDataByColumn(8, baseData);
      expect(newData).toEqual(
        Handsontable.helper.createEmptySpreadsheetData(3, 8),
      );
    });
    it('减少行', () => {
      const newData = updateDataByColumn(2, baseData);
      expect(newData).toEqual(
        Handsontable.helper.createEmptySpreadsheetData(3, 2),
      );
    });
    it('行不变', () => {
      const newData = updateDataByColumn(4, baseData);
      expect(newData).toEqual(baseData);
    });
  });
});
