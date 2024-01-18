import { renderHook } from '@testing-library/react';
import { useRender } from './useRender';

describe('useRender', () => {
  it('渲染点击后取消', () => {
    const { result } = renderHook(() => useRender());

    const div = document.createElement('div');

    result.current.renderSelected(div);
    expect(div.className).toEqual('ant-editor-context-canvas-click');

    expect(result.current.currentSelectedElementRef.current).toEqual(div);
    expect(result.current.isSelected()).toBeTruthy();

    result.current.renderUnselected(div);
    expect(div.className).toEqual('');

    expect(result.current.isSelected()).toBeFalsy();
    expect(result.current.currentSelectedElementRef.current).toBeNull();
  });

  it('渲染悬浮后取消', () => {
    const { result } = renderHook(() => useRender());

    const div = document.createElement('div');
    result.current.renderHover(div);
    expect(div.className).toEqual('ant-editor-context-canvas-hover');
    result.current.renderUnHover();
    expect(div.className).toEqual('');
  });

  test('isSelected 默认值', () => {
    const { result } = renderHook(() => useRender());

    expect(result.current.isSelected()).toBeFalsy();
  });
});
