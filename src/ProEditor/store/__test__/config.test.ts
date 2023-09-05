import { act, renderHook } from '@testing-library/react';

import { beforeEach, vi } from 'vitest';
import { createStore } from '../createStore';

vi.mock('zustand');

let useStore = createStore();

beforeEach(() => {
  useStore = createStore();
});

describe('configSlice', () => {
  it('should initialize state correctly', () => {
    const { result } = renderHook(() => useStore());

    expect(result.current.yjsDoc).toBeDefined();
    expect(result.current.config).toBeNull();
    expect(result.current.onConfigChange).toBeNull();
    expect(result.current.props).toEqual({});
  });

  it('should reset config and props to initial state', () => {
    const { result } = renderHook(() => useStore());

    act(() => {
      useStore.setState({ props: { 123: 1 }, config: { abc: 'abc' } });
    });

    expect(result.current.props).toEqual({ 123: 1 });
    expect(result.current.config).toEqual({ abc: 'abc' });

    act(() => {
      result.current.resetConfig();
    });

    expect(result.current.props).toEqual({});
    expect(result.current.config).toEqual(null);
  });

  it('should update config and trigger onConfigChange callback', () => {
    const { result } = renderHook(() => useStore());

    const onConfigChange = vi.fn();

    act(() => {
      useStore.setState({ onConfigChange });

      result.current.internalUpdateConfig({ foo: 'bar' });
    });

    expect(onConfigChange).toHaveBeenCalledWith({
      config: { foo: 'bar' },
    });
  });

  it('should update config and record history data', () => {
    const { result } = renderHook(() => useStore());
    const internalUpdateConfig = vi.fn();

    act(() => {
      useStore.setState({ internalUpdateConfig });

      result.current.setConfig({ foo: 'bar' }, { recordHistory: true });
    });

    expect(result.current.yjsDoc.undoManager.undoStack).toHaveLength(1);
  });

  it('should update config without recording history data', () => {
    const { result } = renderHook(() => useStore());

    act(() => {
      result.current.setConfig({ foo: 'bar' }, { recordHistory: false });
    });

    expect(result.current.config).toEqual({ foo: 'bar' });

    expect(result.current.yjsDoc.undoManager.undoStack).toHaveLength(0);

    act(() => {
      result.current.setConfig({ foo: 'abc' });
    });

    expect(result.current.yjsDoc.undoManager.undoStack).toHaveLength(1);
  });
});
