import { act, renderHook } from '@testing-library/react';
import type { FilledPayload } from '../types';
import { createStore } from './index';

const useStore = createStore();

describe('useStore', () => {
  it('默认快照', () => {
    const { result } = renderHook(() => useStore());

    expect(result.current).toMatchSnapshot('default');
  });

  it('修改配置项后触发填充', () => {
    const { result } = renderHook(() => useStore());
    let fillFunc;

    const onItemClick = (payload: FilledPayload) => {
      fillFunc = payload.filler;
    };

    // 默认脱敏
    act(() => {
      result.current.updateState({ onItemClick });
      result.current.handleFill('idCard');
    });

    expect(fillFunc()).toHaveLength(12);

    // 修改为不脱敏
    act(() => {
      result.current.updateConfig({ idCard: false });
      result.current.handleFill('idCard');
    });

    expect(fillFunc()).toHaveLength(18);
  });

  it('受控模式：触发onChange', () => {
    const { result } = renderHook(() => useStore());

    // 设置 onChange 方法
    const keyMap = [];
    const onItemClick = (payload: FilledPayload) => {
      keyMap.push(payload.key);
    };

    act(() => {
      result.current.updateState({ onItemClick });
    });
    expect(result.current.onItemClick).toEqual(onItemClick);

    // 更新 data
    act(() => {
      result.current.handleFill('name');
    });

    expect(keyMap).toEqual(['name']);

    act(() => {
      result.current.handleFill('time');
    });
    expect(keyMap).toEqual(['name', 'time']);
  });
});
