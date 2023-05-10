import type { IconUnit } from '@c2d2c/types';
import { act, renderHook } from '@testing-library/react';
import { readFileSync } from 'fs';
import path from 'path';
import { vi } from 'vitest';
import { create } from 'zustand';

import type { Store } from './store';
import vanillaStore from './store';

import type { ExternalScripts } from '../types';

const useStore = create<Store>(vanillaStore as any);

const TEST_ICON_FONT_SCRIPT1 =
  'https://gw.alipayobjects.com/os/hitu-asset/artists/pro-editor/icons-1.0.0-beta.6.js';

const TEST_ICON_FONT_SCRIPT2 =
  'https://gw.alipayobjects.com/os/hitu-asset/artists/pro-editor/icons-1.0.0-beta.7.js';
let originFetch;

describe('IconPicker Store', () => {
  beforeEach(() => {
    originFetch = global.fetch;
    const text = readFileSync(path.join(__dirname, './__mockData__/iconfont.js'), {
      encoding: 'utf-8',
    });
    // @ts-ignore
    global.fetch = vi.fn(() => {
      return {
        text: () => Promise.resolve(text),
      };
    });
  });

  afterEach(() => {
    global.fetch = originFetch;
  });

  describe('State：组件状态', () => {
    it('默认初始值', () => {
      expect(useStore.getState()).toMatchSnapshot();
    });
    it('Hooks 初始值', () => {
      const hooks = renderHook(() => useStore());
      expect(hooks.result.current).toMatchSnapshot();
    });
  });

  describe('Action：用户行为', () => {
    it('resetIcon: 重置图标', () => {
      const icon: IconUnit = {
        type: 'iconfont',
        componentName: 'I',
        props: { type: 'xes' },
        scriptUrl: '123',
      };
      useStore.setState({ icon });
      expect(useStore.getState().icon).toEqual(icon);

      useStore.getState().resetIcon();

      expect(useStore.getState().icon).toBeNull();
    });
    it('togglePanel: 切换面板显示', () => {
      expect(useStore.getState().open).toBeFalsy();

      useStore.getState().togglePanel();
      expect(useStore.getState().open).toBeTruthy();

      useStore.getState().togglePanel();
      expect(useStore.getState().open).toBeFalsy();
    });
    it('toggleForm: 切换显示添加表单', () => {
      expect(useStore.getState().showForm).toBeFalsy();

      useStore.getState().toggleForm(true);
      expect(useStore.getState().showForm).toBeTruthy();

      useStore.getState().toggleForm();
      expect(useStore.getState().showForm).toBeFalsy();

      useStore.getState().toggleForm(false);
      expect(useStore.getState().showForm).toBeFalsy();
    });

    it('selectIcon: 选择图标', () => {
      expect(useStore.getState().icon).toBeNull();

      const icon: IconUnit = {
        type: 'iconfont',
        componentName: 'I',
        props: { type: 'xes' },
        scriptUrl: '123',
      };
      useStore.getState().selectIcon(icon);

      expect(useStore.getState().icon).toEqual(icon);
    });

    it('addScript: 添加iconfont脚本', () => {
      const script: ExternalScripts = {
        name: 'Iconfont',
        url: TEST_ICON_FONT_SCRIPT1,
      };
      expect(useStore.getState().iconfontScripts).toEqual([]);

      useStore.getState().addScript(script);
      expect(useStore.getState().iconfontScripts).toEqual([script]);
      // 不会重复添加
      useStore.getState().addScript(script);
      expect(useStore.getState().iconfontScripts).toEqual([script]);
    });

    describe('removeScripts: 删除 iconfont 脚本', () => {
      it('简单场景', () => {
        const script: ExternalScripts = {
          name: 'Iconfont',
          url: TEST_ICON_FONT_SCRIPT1,
        };
        useStore.setState({ iconfontScripts: [script] });
        expect(useStore.getState().iconfontScripts).toEqual([script]);

        useStore.getState().removeScripts(TEST_ICON_FONT_SCRIPT1);

        expect(useStore.getState().iconfontScripts).toEqual([]);
        expect(useStore.getState().activeIconfontScript).toEqual('');
      });
      it('删除第一个', () => {
        const iconfontScripts: ExternalScripts[] = [
          {
            name: 'Iconfont',
            url: TEST_ICON_FONT_SCRIPT1,
          },
          {
            name: 'Iconfont2',
            url: TEST_ICON_FONT_SCRIPT2,
          },
        ];
        useStore.setState({
          iconfontScripts,
          activeIconfontScript: TEST_ICON_FONT_SCRIPT1,
        });
        expect(useStore.getState().iconfontScripts).toEqual(iconfontScripts);

        useStore.getState().removeScripts(TEST_ICON_FONT_SCRIPT1);

        expect(useStore.getState().iconfontScripts).toEqual([
          {
            name: 'Iconfont2',
            url: TEST_ICON_FONT_SCRIPT2,
          },
        ]);
      });
    });

    test('selectScript: 选择激活的 iconfont 脚本', async () => {
      const { result } = renderHook(() => useStore());

      const iconfontScripts: ExternalScripts[] = [
        {
          name: 'Iconfont',
          url: TEST_ICON_FONT_SCRIPT1,
        },
      ];

      await act(() => {
        useStore.setState({ iconfontScripts });
        result.current.selectScript(TEST_ICON_FONT_SCRIPT1);
      });

      expect(useStore.getState().iconfontIconList).toHaveLength(17);
    });
  });
});
