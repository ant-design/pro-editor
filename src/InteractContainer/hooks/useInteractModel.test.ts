import { renderHook } from '@testing-library/react';
import { useInteractModel } from './useInteractModel';

// 开始之前将所有节点清理掉
beforeEach(() => {
  document.body.childNodes.forEach((n) => n.remove());
});

describe('useInteractModel', () => {
  it('识别到元素', () => {
    const div = document.createElement('div');
    div.setAttribute('data-uxid', 'row');
    document.body.appendChild(div);

    const { result } = renderHook(() =>
      useInteractModel([
        { id: 'container', actions: ['hover'], selectors: ['row'] },
      ]),
    );

    expect(result.current.models[0].elements).toEqual([div]);
  });
});
