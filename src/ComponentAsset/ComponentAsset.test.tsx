import { act, fireEvent, render, screen } from '@testing-library/react';

import { ComponentAsset } from '../ComponentAsset';

import type { ButtonConfig } from './demoAssets';
import { contentModel, demoAssets, dynamicContentModel } from './demoAssets';

describe('ComponentAsset', () => {
  describe('状态值', () => {
    it('可以正常初始化（不传入 default 就用 schema 来获得初始值）', () => {
      const asset = new ComponentAsset<ButtonConfig>(demoAssets);

      expect(asset).not.toBeUndefined();
      expect(asset.id).toEqual('Button');
      expect(asset.models).toEqual([contentModel]);
      expect(asset.getDefaultConfig()).toEqual({
        content: {
          icon: '',
        },
      });

      expect(() => asset.isStarterMode({})).toThrowError(
        '暂未实现 emptyModeSelector 方法，请在初始化时传入 emptyModeSelector',
      );
    });

    it('外部传入emptyModeSelector', () => {
      const emptyModeSelector = () => true;
      const asset = new ComponentAsset<ButtonConfig>({
        ...demoAssets,
        ui: {
          ...demoAssets.ui,
          isStarterMode: emptyModeSelector,
        },
      });
      expect(asset.isStarterMode).toEqual(emptyModeSelector);
    });

    it('如果外部传入初始化值，那么采用外部值', () => {
      const asset = new ComponentAsset<ButtonConfig>({
        ...demoAssets,
        ui: {
          ...demoAssets.ui,
          isStarterMode: () => true,
        },
        defaultConfig: {
          content: {
            icon: 'hello',
            text: 'text Button',
          },
        },
      });

      expect(asset.defaultConfig).toEqual({
        content: {
          icon: 'hello',
          text: 'text Button',
        },
      });
    });
  });

  describe('实现方法', () => {
    describe('getDefaultConfig', () => {
      it('函数方法', () => {
        const asset = new ComponentAsset<ButtonConfig>({
          ...demoAssets,
          models: [dynamicContentModel],
        });

        expect(asset.getDefaultConfig()).toEqual({
          content: {
            icon: '',
            text: 'dev',
          },
        });
      });
      it('函数方法，外部传值', () => {
        const asset = new ComponentAsset<ButtonConfig>({
          ...demoAssets,
          models: [dynamicContentModel],
        });

        expect(asset.getDefaultConfig('prod')).toEqual({
          content: {
            icon: '',
            text: 'prod',
          },
        });
      });
    });

    describe('generateProps', () => {
      it('generateProps', () => {
        const asset = new ComponentAsset<ButtonConfig>(demoAssets);

        const props = asset.generateProps({
          content: { icon: '123', text: '123' },
        });
        expect(props).toEqual({ icon: '123', children: '123' });
      });
    });
  });

  describe('实例状态', () => {
    test('同一实例重复渲染多次', async () => {
      const asset = new ComponentAsset<ButtonConfig>(demoAssets);
      const comp = render(
        <asset.AssetProvider createStore={() => asset.componentStore}>
          <asset.Component />
        </asset.AssetProvider>,
      );
      render(
        <asset.AssetProvider createStore={() => asset.componentStore}>
          <asset.Component />
        </asset.AssetProvider>,
      );

      const components = await comp.queryAllByTestId('component');

      expect(components.map((i) => i.innerHTML)).toEqual(['123', '123']);
    });

    test('渲染时多个实例包含不同状态', () => {
      const asset1 = new ComponentAsset<ButtonConfig>(demoAssets);
      const asset2 = new ComponentAsset<ButtonConfig>(demoAssets);

      render(
        <>
          <asset1.AssetProvider createStore={() => asset1.componentStore}>
            <asset1.Component
              // @ts-ignore
              id={'1'}
            />
          </asset1.AssetProvider>
          <asset2.AssetProvider createStore={() => asset2.componentStore}>
            <asset2.Component
              // @ts-ignore
              id={'2'}
            />
          </asset2.AssetProvider>
        </>,
      );

      const btn1 = screen.getByTestId('1');
      const btn2 = screen.getByTestId('2');

      expect(btn1.innerHTML).toEqual('123');
      expect(btn2.innerHTML).toEqual('123');

      act(() => {
        fireEvent.click(btn1);
      });

      expect(btn1.innerHTML).toEqual('clicked');
      expect(btn2.innerHTML).toEqual('123');
    });

    test('渲染时同一实例的组件时共享相同状态', async () => {
      const asset = new ComponentAsset<ButtonConfig>(demoAssets);

      const comp = render(
        <asset.AssetProvider createStore={() => asset.componentStore}>
          <asset.Component />
        </asset.AssetProvider>,
      );
      const panel = render(
        <asset.AssetProvider createStore={() => asset.componentStore}>
          <asset.ConfigPanel />
        </asset.AssetProvider>,
      );

      const component = await comp.findByTestId('component');
      const configPanel = await panel.findByTestId('panel');

      expect(component.innerHTML).toEqual('123');
      expect(configPanel.innerHTML).toEqual('123');

      act(() => {
        fireEvent.click(component);
      });

      expect(component.innerHTML).toEqual('clicked');
      expect(configPanel.innerHTML).toEqual('clicked');
    });
  });
});
