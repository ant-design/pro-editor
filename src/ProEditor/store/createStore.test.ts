import { act, renderHook } from '@testing-library/react';
import { useEffect, useState } from 'react';

import { createStore } from './createStore';

vi.mock('zustand/traditional');

const useStore = createStore();

interface AssetConfig {
  data: any;
  columns: any;
}

describe('proEditorStore', () => {
  describe('方法', () => {
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
          const store = useTestStore();

          useEffect(() => {
            useTestStore.setState({
              onConfigChange: ({ config, props }) => {
                onChange(config as any);
                onPropsChange(props);
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
          };
        };

        it('内部 config 更新时，内部 props 更新，同时外部值可接受到 props、config 值变化', () => {
          const { result } = renderHook(useTestHook);

          // 内部值
          expect(result.current.store.config).toBeNull();
          expect(result.current.store.props).toEqual({});

          // 外部值
          expect(result.current.props).toBeUndefined();

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
          expect(result.current.props).toMatchSnapshot();
        });

        it('外部设置 config 时，内部 props 会跟随 config 更新，不触发 onChange', () => {
          const { result } = renderHook(useTestHook);

          expect(result.current.store.config).toBeNull();
          expect(result.current.store.props).toEqual({});

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
          expect(result.current.props).toBeUndefined();
        });
      });
    });
  });
});
