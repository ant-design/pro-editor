export const createEmptySpreadsheetData = (rows, columns) => {
  let data = [];
  let row;
  for (let i = 0; i < rows; i++) {
    row = [];
    for (let j = 0; j < columns; j++) {
      row.push('');
    }
    data.push(row);
  }
  return data;
};

/**
 * 根据列数创建需要的行数
 * @param row
 * @param column
 */
export const getNewRows = (row: number, column: number) => createEmptySpreadsheetData(row, column);

export const updateDataByRow = (row, data: string[][]) => {
  if (data?.length < row) {
    const diffRow = row - data.length;
    const newRow = getNewRows(diffRow, data[0].length);
    return data.concat(newRow);
  }

  if (data?.length > row) {
    return data.slice(0, row);
  }

  return data;
};

export const updateDataByColumn = (column: number, data: string[][]) => {
  const headerCol = data?.[0].length;
  if (headerCol > column) {
    return data.map((col) => col.slice(0, column));
  }
  if (headerCol < column) {
    const newColArr = new Array(column - headerCol).fill('');
    return data.map((col) => col.concat(newColArr));
  }
  return data;
};
