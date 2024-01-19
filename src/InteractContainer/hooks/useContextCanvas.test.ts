import { act, fireEvent, renderHook } from '@testing-library/react';
import { useState } from 'react';

import { createTestElement } from '../utils';
import { useContextCanvas } from './useContextCanvas';

import type { CanvasInteractRule, InteractStatus } from '../type';

// 开始之前将所有节点清理掉
beforeEach(() => {
  document.body.childNodes.forEach((n) => n.remove());
});

describe('useContextCanvas', () => {
  describe('hover交互', () => {
    it('移入', () => {
      const div = createTestElement('btn');

      renderHook(() =>
        useContextCanvas({
          rules: [{ id: 'container', selectors: ['btn'], actions: ['hover'] }],
        }),
      );
      act(() => {
        fireEvent.mouseEnter(div);
      });

      expect(div.className).toEqual('ant-editor-context-canvas-hover');
    });
    it('移入 -> 移出 -> 移入', () => {
      const div = document.createElement('div');
      div.setAttribute('data-uxid', 'btn');
      document.body.appendChild(div);

      renderHook(() =>
        useContextCanvas({
          rules: [{ id: 'container', selectors: ['btn'], actions: ['hover'] }],
        }),
      );

      act(() => {
        fireEvent.mouseEnter(div);
      });

      expect(div.className).toEqual('ant-editor-context-canvas-hover');

      act(() => {
        fireEvent.mouseLeave(div);
      });

      expect(div.className).toEqual('');

      act(() => {
        fireEvent.mouseEnter(div);
      });
      expect(div.className).toEqual('ant-editor-context-canvas-hover');
    });

    it('选中时', () => {});
  });

  describe('受控模式', () => {
    it('受控选中 -> 取消选中', () => {
      createTestElement('ctr');

      const rules: CanvasInteractRule[] = [
        { id: 'container', actions: ['click'], selectors: ['ctr'] },
      ];

      const { result } = renderHook(() => {
        const [active, setActive] = useState<InteractStatus>();
        const { onClick } = useContextCanvas({
          rules,
          status: active,
          onStatusChange: setActive,
        });

        return { status: active, setActive, onClick };
      });

      expect(result.current.status).toBeUndefined();

      // 选中
      act(() => {
        result.current.setActive({
          status: 'selected',
          action: 'click',
          currentNode: {
            index: 0,
            rule: rules[0],
          },
          activeNode: {
            index: 0,
            rule: rules[0],
          },
        });
      });

      expect(result.current.status).toEqual({
        status: 'selected',
        action: 'click',
        currentNode: {
          index: 0,
          rule: rules[0],
        },
        activeNode: {
          index: 0,
          rule: rules[0],
        },
      });

      // 取消选中
      act(() => {
        result.current.setActive({
          status: 'unSelected',
          action: 'click',
        });
      });

      expect(result.current.status).toEqual({
        status: 'unSelected',
        action: 'click',
      });
    });
  });

  it('禁用画布交互', () => {
    const div = createTestElement('btn');

    renderHook(() =>
      useContextCanvas({
        rules: [{ id: 'container', selectors: ['btn'], actions: ['hover'] }],
        disabled: true,
      }),
    );
    act(() => {
      fireEvent.mouseEnter(div);
    });

    expect(div.className).toEqual('');
  });
});
