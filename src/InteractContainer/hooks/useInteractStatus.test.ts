import { act, renderHook } from '@testing-library/react';

import { useState } from 'react';
import type { CanvasInteractRule, InteractStatus } from '../type';
import { createTestElement } from '../utils';
import { InteractModel } from './InteractModel';
import { useInteractStatus } from './useInteractStatus';

// 开始之前将所有节点清理掉
beforeEach(() => {
  document.body.childNodes.forEach((n) => n.remove());
});

describe('useInteractStatus', () => {
  describe('handleHover', () => {
    it('unhover', () => {
      createTestElement('row');

      const model = new InteractModel([
        { id: 'container', actions: ['hover'], selectors: ['row'] },
      ]);

      const { result } = renderHook(() => useInteractStatus(model));
      expect(result.current.status).toBeUndefined();

      act(() => {
        result.current.dispatchStatus({
          type: 'handleHover',
          action: 'unhover',
        });
      });

      expect(result.current.status.status).toEqual('unhover');
    });
    it('hover', () => {
      const div = createTestElement('row');

      const model = new InteractModel([
        { id: 'container', actions: ['hover'], selectors: ['row'] },
      ]);

      const { result } = renderHook(() => useInteractStatus(model));

      act(() => {
        result.current.dispatchStatus({
          type: 'handleHover',
          action: 'hover',
          target: div,
        });
      });

      expect(result.current.status.status).toEqual('hover');
      expect(result.current.status.currentNode).toEqual({
        index: 0,
        rule: {
          actions: ['hover'],
          id: 'container',
          selectors: ['row'],
        },
      });
    });
  });

  describe('触发点击', () => {
    it('点击选中 -> 再次点击不选中', () => {
      const div = createTestElement('row');
      const rule: CanvasInteractRule = {
        id: 'container',
        actions: ['click'],
        selectors: ['row'],
      };
      const model = new InteractModel([rule]);

      const { result } = renderHook(() => useInteractStatus(model));
      expect(result.current.status).toBeUndefined();

      // 点击
      act(() => {
        result.current.dispatchStatus({ type: 'handleClick', target: div });
      });
      expect(result.current.status).toEqual({
        action: 'click',
        status: 'selected',
        activeNode: { index: 0, rule },
        currentNode: { index: 0, rule },
      });

      // 再次点击
      act(() => {
        result.current.dispatchStatus({ type: 'handleClick', target: div });
      });
      expect(result.current.status).toEqual({
        action: 'click',
        status: 'unSelected',
      });
    });

    it('点击选中 -> 点击容器区不选中', () => {
      const div = createTestElement('click');

      const rule: CanvasInteractRule = {
        id: 'container',
        actions: ['click'],
        selectors: ['click'],
      };

      const model = new InteractModel([rule]);

      const { result } = renderHook(() => useInteractStatus(model));
      expect(result.current.status).toBeUndefined();

      // 点击选中
      act(() => {
        result.current.dispatchStatus({ type: 'handleClick', target: div });
      });

      expect(result.current.status).toEqual({
        action: 'click',
        status: 'selected',
        activeNode: { index: 0, rule },
        currentNode: { index: 0, rule },
      });

      // 点击容器区不选中
      act(() => {
        result.current.dispatchStatus({
          type: 'handleContainerClick',
          target: document,
        });
      });

      expect(result.current.status.status).toEqual('unSelected');
    });

    it('点击选中 -> 鼠标移出移入元素 -> 再次点击不选中', () => {
      // 初始化元素
      const div = createTestElement('move');

      const rule = {
        id: 'container',
        actions: ['click', 'hover'],
        selectors: ['move'],
      };
      const model = new InteractModel([rule]);
      const { result } = renderHook(() => useInteractStatus(model));

      // 点击选中
      act(() => {
        result.current.dispatchStatus({ type: 'handleClick', target: div });
      });

      expect(result.current.status).toEqual({
        action: 'click',
        status: 'selected',
        activeNode: { index: 0, rule },
        currentNode: { index: 0, rule },
      });

      // 鼠标移出移入元素
      act(() => {
        result.current.dispatchStatus({
          type: 'handleHover',
          target: div,
          action: 'hover',
        });
      });

      expect(result.current.status).toEqual({
        action: 'hover',
        status: 'hover',
        currentNode: { index: 0, rule },
        activeNode: { index: 0, rule },
      });

      // 再次点击
      act(() => {
        result.current.dispatchStatus({ type: 'handleClick', target: div });
      });

      // 判断为不选中
      expect(result.current.status).toEqual({
        action: 'click',
        status: 'unSelected',
      });
    });

    it('鼠标移出移入元素 -> 再次点击选中', () => {
      // 初始化元素
      const div = createTestElement('move');
      const model = new InteractModel([
        { id: 'container', actions: ['click', 'hover'], selectors: ['move'] },
      ]);
      const { result } = renderHook(() => useInteractStatus(model));

      // 鼠标移出移入元素
      act(() => {
        result.current.dispatchStatus({
          type: 'handleHover',
          target: div,
          action: 'hover',
        });
      });

      // 再次点击
      act(() => {
        result.current.dispatchStatus({ type: 'handleClick', target: div });
      });

      // 判断为不选中
      expect(result.current.status.status).toEqual('selected');
    });

    it('点击选中元素1 -> 鼠标移入元素2 -> 点击元素2：选中元素2', () => {
      const e1 = createTestElement('hello');
      const e2 = createTestElement('hello');

      const rule = {
        id: 'container',
        actions: ['click'],
        selectors: ['hello'],
      };
      const model = new InteractModel([rule]);
      const { result } = renderHook(() => useInteractStatus(model));

      // 点击选中
      act(() => {
        result.current.dispatchStatus({ type: 'handleClick', target: e1 });
      });

      expect(result.current.status).toEqual({
        action: 'click',
        status: 'selected',
        activeNode: { rule, index: 0 },
        currentNode: { rule, index: 0 },
      });

      // 鼠标移出元素1 移入元素2
      act(() => {
        result.current.dispatchStatus({
          type: 'handleHover',
          target: e1,
          action: 'unhover',
        });
        result.current.dispatchStatus({
          type: 'handleHover',
          target: e2,
          action: 'hover',
        });
      });

      expect(result.current.status).toEqual({
        action: 'hover',
        status: 'hover',
        activeNode: { rule, index: 0 },
        currentNode: { rule, index: 1 },
      });

      // 点击选中元素2
      act(() => {
        result.current.dispatchStatus({ type: 'handleClick', target: e2 });
      });

      expect(result.current.status).toEqual({
        action: 'click',
        status: 'selected',
        activeNode: { rule, index: 1 },
        currentNode: { rule, index: 1 },
      });
    });
  });

  describe('受控模式', () => {
    it('内部触发值，外部收到值', () => {
      const div = createTestElement('row');

      const rule: CanvasInteractRule = {
        id: 'container',
        actions: ['hover'],
        selectors: ['row'],
      };
      const model = new InteractModel([rule]);

      const { result } = renderHook(() => {
        const [value, onChange] = useState<InteractStatus>();
        const { status, dispatchStatus } = useInteractStatus(model, {
          value,
          onChange,
        });
        return { status, dispatchStatus, onChange, value };
      });

      act(() => {
        result.current.dispatchStatus({
          type: 'handleHover',
          action: 'hover',
          target: div,
        });
      });

      expect(result.current.value).toEqual({
        action: 'hover',
        status: 'hover',
        currentNode: { index: 0, rule },
      });
    });

    it('外部触发点击，内部触发hover -> 保持选中态', () => {
      createTestElement('out');
      const div2 = createTestElement('out');

      const rule: CanvasInteractRule = {
        id: 'container',
        actions: ['hover'],
        selectors: ['out'],
      };
      const model = new InteractModel([rule]);

      const { result } = renderHook(() => {
        const [value, onChange] = useState<InteractStatus>();
        const { status, dispatchStatus } = useInteractStatus(model, {
          value,
          onChange,
        });
        return { status, dispatchStatus, onChange, value };
      });

      act(() => {
        // 外部触发选中
        result.current.onChange({
          action: 'click',
          status: 'selected',
          activeNode: { index: 0, rule },
          currentNode: { index: 0, rule },
        });

        // 内部更新hover
        result.current.dispatchStatus({
          type: 'handleHover',
          action: 'hover',
          target: div2,
        });
      });

      expect(result.current.status).toEqual({
        action: 'hover',
        status: 'hover',
        activeNode: { index: 0, rule },
        currentNode: { index: 1, rule },
      });
    });
  });
});
