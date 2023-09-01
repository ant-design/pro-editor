import { act, renderHook } from '@testing-library/react';
import { useEffect, useState } from 'react';

import type { CanvasInteractRule, InteractStatus } from '../../InteractContainer';
import { createStore } from './createStore';

vi.mock('zustand/traditional');

const useStore = createStore();

interface AssetConfig {
  data: any;
  columns: any;
}

describe('proBuilderStore', () => {
  describe('状态值', () => {
    it('mode 默认为开发者模式', () => {
      const { result } = renderHook(() => useStore());
      expect(result.current.mode).toEqual('develop');
    });
  });
  describe('方法', () => {
    it('updatePosition', () => {
      const { result } = renderHook(() => useStore());

      expect(result.current.editorAwareness.panelPosition).toEqual({
        x: 0,
        y: 0,
      });

      act(() => {
        result.current.updatePanelPosition({ x: 12 });
      });
      expect(result.current.editorAwareness.panelPosition).toEqual({
        x: 12,
        y: 0,
      });

      act(() => {
        result.current.updatePanelPosition({ y: 1 });
      });
      expect(result.current.editorAwareness.panelPosition).toEqual({
        x: 12,
        y: 1,
      });
    });

    it('正确获取和设置 viewport', () => {
      const { result } = renderHook(() => useStore());

      act(() => {
        result.current.setViewport({ zoom: 2 });
      });

      expect(result.current.editorAwareness.viewport).toEqual({
        zoom: 2,
        x: 0,
        y: 0,
      });
    });

    describe('修改配置', () => {
      it('默认', () => {
        const { result } = renderHook(() => useStore());

        expect(result.current.config).toEqual(null);

        act(() => {
          result.current.internalUpdateConfig({ hello: 'world' });
        });

        expect(result.current.config).toEqual({ hello: 'world' });
      });
      it('受控模式：没有 componentAssets 则不生成 props', () => {
        type Config = { text: string };
        const useTextStore = createStore();

        const { result } = renderHook(() => {
          const [value, onChange] = useState<Config>({ text: '' });
          const [p, onPropsChange] = useState();
          const store = useTextStore();

          useEffect(() => {
            useTextStore.setState({
              onConfigChange: ({ config, props }) => {
                onChange(config);
                onPropsChange(props);
              },
            });
            // eslint-disable-next-line react-hooks/exhaustive-deps
          }, []);

          useEffect(() => {
            if (!value) return;
            useTextStore.setState({ config: value });
            // eslint-disable-next-line react-hooks/exhaustive-deps
          }, [value]);

          return { store, value, props: p };
        });

        expect(result.current.store.config).toEqual({ text: '' });
        expect(result.current.props).toBeUndefined();

        act(() => {
          result.current.store.internalUpdateConfig({ text: '2' });
        });

        expect(result.current.store.config).toEqual({ text: '2' });
        expect(result.current.value).toEqual({ text: '2' });
        expect(result.current.props).toBeUndefined();
      });
      describe('受控模式，有 componentAssets', () => {
        const useTestStore = createStore();

        const useTestHook = () => {
          const [value, onChange] = useState<AssetConfig>();
          const [p, onPropsChange] = useState();
          const [empty, setIsEmpty] = useState<boolean>(true);
          const store = useTestStore();

          useEffect(() => {
            useTestStore.setState({
              onConfigChange: ({ config, isEmpty, props }) => {
                onChange(config as any);
                onPropsChange(props);
                setIsEmpty(isEmpty);
              },
            });
            // eslint-disable-next-line react-hooks/exhaustive-deps
          }, []);

          useEffect(() => {
            if (!value) return;
            useTestStore.setState({ config: value });
            // eslint-disable-next-line react-hooks/exhaustive-deps
          }, [value]);

          return {
            store,
            setConfig: onChange,
            value,
            props: p,
            isEmpty: empty,
          };
        };

        it('内部 config 更新时，内部 props 更新，同时外部值可接受到 props、config 和 isEmpty 值变化', () => {
          const { result } = renderHook(useTestHook);

          // 内部值
          expect(result.current.store.config).toBeNull();
          expect(result.current.store.props).toEqual({});

          // 外部值
          expect(result.current.props).toBeUndefined();
          expect(result.current.isEmpty).toBeTruthy();

          const config = {
            data: { dataType: 'oneApi' },
            columns: [{ dataIndex: 'a', title: 'hello' }],
          };

          act(() => {
            result.current.store.internalUpdateConfig(config);
          });

          // 内部值
          expect(result.current.store.config).toEqual(config);
          expect(result.current.store.props).toMatchSnapshot();

          // 外部值
          expect(result.current.value).toEqual(config);
          expect(result.current.isEmpty).toBeFalsy();
          expect(result.current.props).toMatchSnapshot();
        });

        it('外部设置 config 时，内部 props 会跟随 config 更新，不触发 onChange', () => {
          const { result } = renderHook(useTestHook);

          expect(result.current.store.config).toBeNull();
          expect(result.current.store.props).toEqual({});
          expect(result.current.isEmpty).toBeTruthy();

          const config = {
            data: { dataType: 'oneApi' },
            columns: [{ dataIndex: 'a', title: 'hello' }],
          };

          act(() => {
            result.current.setConfig(config);
          });

          // 内部值
          expect(result.current.store.config).toEqual(config);
          expect(result.current.store.props).toMatchSnapshot();

          // 外部值
          expect(result.current.value).toEqual(config);
          expect(result.current.isEmpty).toBeTruthy();
          expect(result.current.props).toBeUndefined();
        });
      });
    });

    describe('画布交互', () => {
      it('默认', () => {
        const rule: CanvasInteractRule = {
          id: 'column',
          selectors: [],
          actions: ['click'],
        };
        const { result } = renderHook(() => useStore());

        expect(result.current.interaction).toEqual({});

        act(() => {
          result.current.internalUpdateCanvasInteract({
            action: 'click',
            currentNode: { rule, index: 2 },
          });
        });

        expect(result.current.interaction).toEqual({
          action: 'click',
          currentNode: { index: 2, rule },
        });

        act(() => {
          result.current.internalUpdateCanvasInteract({
            status: 'unSelected',
          });
        });

        expect(result.current.interaction).toEqual({
          status: 'unSelected',
        });
      });
      it('受控模式', () => {
        const rule: CanvasInteractRule = {
          id: 'column',
          selectors: [],
          actions: ['click'],
        };
        const { result } = renderHook(() => {
          const [value, onChange] = useState<InteractStatus>({
            action: 'hover',
          });
          const store = useStore();

          useEffect(() => {
            useStore.setState({ onInteractionChange: onChange });
            // eslint-disable-next-line react-hooks/exhaustive-deps
          }, []);

          useEffect(() => {
            if (!value) return;
            useStore.setState({ interaction: value });
            // eslint-disable-next-line react-hooks/exhaustive-deps
          }, [value]);

          return { store, value };
        });

        expect(result.current.store.interaction).toEqual({ action: 'hover' });

        act(() => {
          result.current.store.internalUpdateCanvasInteract({
            action: 'click',
            currentNode: { rule, index: 2 },
          });
        });

        expect(result.current.store.interaction).toEqual({
          action: 'click',
          currentNode: { index: 2, rule },
        });

        expect(result.current.value).toEqual({
          action: 'click',
          currentNode: { index: 2, rule },
        });
      });
      it('toggleCanvasInteraction', () => {
        const { result } = renderHook(() => useStore());

        expect(result.current.enableCanvasInteraction).toBeTruthy();

        act(() => {
          result.current.toggleCanvasInteraction();
        });

        expect(result.current.enableCanvasInteraction).toBeFalsy();
        act(() => {
          result.current.toggleCanvasInteraction();
        });

        expect(result.current.enableCanvasInteraction).toBeTruthy();
      });

      it('取消选中', () => {
        const rule: CanvasInteractRule = {
          id: 'column',
          selectors: [],
          actions: ['click'],
        };
        const { result } = renderHook(() => useStore());

        expect(result.current.interaction).toEqual({});

        act(() => {
          result.current.internalUpdateCanvasInteract({
            action: 'click',
            currentNode: { rule, index: 3 },
          });
        });

        expect(result.current.interaction).toEqual({
          action: 'click',
          currentNode: { index: 3, rule },
        });

        act(() => {
          result.current.deselectCanvas();
        });

        expect(result.current.interaction).toEqual({
          status: 'unSelected',
        });
      });
    });
  });
});
