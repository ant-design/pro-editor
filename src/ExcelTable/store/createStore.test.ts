import { act, renderHook } from '@testing-library/react';
import Handsontable from 'handsontable';
import type { CellChange } from 'handsontable/common';

import { createStore, initialState } from './index';

vi.mock('zustand');

const useStore = createStore();

const baseData = Handsontable.helper.createEmptySpreadsheetData(3, 4);

describe('useStore', () => {
  it('默认快照', () => {
    const { result } = renderHook(() => useStore());

    expect(result.current).toMatchSnapshot('default');
  });

  it('修改默认值', () => {
    const { result } = renderHook(() => useStore());

    act(() => {
      result.current.setDefaultData(baseData);
    });

    expect(result.current.defaultData).toEqual(baseData);
  });

  it('全部重置', () => {
    const { result } = renderHook(() => useStore());

    act(() => {
      result.current.internalUpdateData(baseData);
    });

    expect(result.current.data).toEqual(baseData);

    act(() => {
      result.current.reset();
    });
    expect(result.current.data).toEqual(initialState.data);
    expect(result.current.defaultData).toEqual(initialState.defaultData);
  });

  it('重置为默认值', () => {
    const { result } = renderHook(() => useStore());

    act(() => {
      result.current.setDefaultData(baseData);
    });
    expect(result.current.data).toEqual(initialState.data);
    expect(result.current.defaultData).toEqual(baseData);

    act(() => {
      result.current.resetData();
    });
    expect(result.current.data).toEqual(baseData);
  });

  it('修改row: updateDataByRow', () => {
    const { result } = renderHook(() => useStore());

    // 初始化基础数据
    // 更新 row
    act(() => {
      result.current.internalUpdateData(baseData);
      result.current.updateByRow(4);
    });

    expect(result.current.data).toEqual(
      Handsontable.helper.createEmptySpreadsheetData(4, 4),
    );
  });
  it('修改column: updateDataByColumn', () => {
    const { result } = renderHook(() => useStore());

    // 初始化基础数据
    // 更新 column
    act(() => {
      result.current.internalUpdateData(baseData);
      result.current.updateByColumn(8);
    });

    expect(result.current.data).toEqual(
      Handsontable.helper.createEmptySpreadsheetData(3, 8),
    );
  });

  it('更新 handsontable', () => {
    const { result } = renderHook(() => useStore());

    act(() => {
      result.current.internalUpdateData(baseData);
      result.current.handleDataChanges([[0, 0, '', '123']]);
    });
    expect(result.current.data).toEqual([
      ['123', '', '', ''],
      ['', '', '', ''],
      ['', '', '', ''],
    ]);

    act(() => {
      result.current.handleDataChanges([[0, 0, '123', '123']]);
    });
    expect(result.current.data).toEqual([
      ['123', '', '', ''],
      ['', '', '', ''],
      ['', '', '', ''],
    ]);
  });

  it('受控模式：触发onChange', () => {
    const { result } = renderHook(() => useStore());

    // 设置 onChange 方法
    const dataMap = [];
    const onDataChange = (data) => {
      dataMap.push(data);
    };

    act(() => {
      result.current.setStoreState({ onDataChange });
    });
    expect(result.current.onDataChange).toEqual(onDataChange);

    // 更新 data
    act(() => {
      result.current.internalUpdateData(baseData);
      result.current.internalUpdateData(baseData);
    });

    expect(dataMap).toEqual([baseData]);

    act(() => {
      result.current.internalUpdateData(initialState.data);
    });

    expect(dataMap).toEqual([baseData, initialState.data]);
  });

  it('受控模式：外部值更新，不触发onChange', () => {
    const { result } = renderHook(() => useStore());

    expect(result.current.data).toEqual(initialState.data);

    const dataMap = [];

    // 设置 onChange 方法
    const onDataChange = (data) => {
      dataMap.push(data);
    };
    act(() => {
      result.current.setStoreState({ onDataChange });
      result.current.outsideUpdateData(baseData);
    });

    expect(dataMap).toEqual([]);
    expect(result.current.data).toEqual(baseData);
  });
});

describe('实际使用的中遇到的用例 bug', () => {
  it('复制粘贴较长的 excel到表格中，无法正常复制', () => {
    const changes: CellChange[] = [
      [0, 0, '', '序号'],
      [0, 1, '', '作品类型'],
      [0, 2, '', '样本格式'],
      [0, 3, '', '最大容量限制'],
      [0, 4, '', '文件类型'],
      [0, 5, null, '产品定价'],
      [1, 0, '', '1'],
      [1, 1, '', '文字'],
      [1, 2, '', 'PDF'],
      [1, 3, '', '10M'],
      [1, 4, '', '文字'],
      [1, 5, null, '5元/次'],
      [2, 0, '', '2'],
      [2, 1, '', '口述'],
      [2, 2, '', 'MP3、WAV'],
      [2, 3, '', '50M'],
      [2, 4, '', '音频'],
      [2, 5, null, '10元/次'],
      [3, 0, '', '3'],
      [3, 1, '', '音乐'],
      [3, 2, '', 'MP3、WAV'],
      [3, 3, '', '50M'],
      [3, 4, '', '音频'],
      [3, 5, null, '10元/次'],
      [4, 0, '', '4'],
      [4, 1, '', '戏剧'],
      [4, 2, '', 'PDF'],
      [4, 3, '', '10M'],
      [4, 4, '', '文字'],
      [4, 5, null, '5元/次'],
      [5, 0, '', '5'],
      [5, 1, '', '曲艺'],
      [5, 2, '', 'MP4、AVI、WMV'],
      [5, 3, '', '200M'],
      [5, 4, '', '视频'],
      [5, 5, null, '20元/次'],
      [6, 0, null, '6'],
      [6, 1, null, '舞蹈'],
      [6, 2, null, 'MP4、AVI、WMV'],
      [6, 3, null, '200M'],
      [6, 4, null, '视频'],
      [6, 5, null, '20元/次'],
      [7, 0, null, '7'],
      [7, 1, null, '杂技'],
      [7, 2, null, 'MP4、AVI、WMV'],
      [7, 3, null, '200M'],
      [7, 4, null, '视频'],
      [7, 5, null, '20元/次'],
      [8, 0, null, '8'],
      [8, 1, null, '美术'],
      [8, 2, null, 'JPG、PNG、JPEG'],
      [8, 3, null, '5M'],
      [8, 4, null, '图片'],
      [8, 5, null, '5元/次'],
      [9, 0, null, '9'],
      [9, 1, null, '建筑'],
      [9, 2, null, 'PDF'],
      [9, 3, null, '10M'],
      [9, 4, null, '图片'],
      [9, 5, null, '5元/次'],
      [10, 0, null, '10'],
      [10, 1, null, '摄影'],
      [10, 2, null, 'JPG、PNG、JPEG'],
      [10, 3, null, '5M'],
      [10, 4, null, '图片'],
      [10, 5, null, '5元/次'],
      [11, 0, null, '11'],
      [11, 1, null, '视听'],
      [11, 2, null, 'MP4、AVI、WMV'],
      [11, 3, null, '200M'],
      [11, 4, null, '视频'],
      [11, 5, null, '20元/次'],
      [12, 0, null, '12'],
      [12, 1, null, '图形作品（工程设计图、产品设计图、地图、示意图）'],
      [12, 2, null, 'JPG、PNG、JPEG'],
      [12, 3, null, '5M'],
      [12, 4, null, '图片'],
      [12, 5, null, '5元/次'],
    ];
    const { result } = renderHook(() => useStore());

    expect(result.current.data).toEqual(initialState.data);
    act(() => {
      result.current.handleDataChanges(changes);
    });

    expect(result.current.data).toMatchSnapshot();
  });
});
