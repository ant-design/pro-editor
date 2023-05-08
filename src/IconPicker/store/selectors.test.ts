import {
  displayListSelector,
  iconfontScriptsChangeable,
  isEmptyIconfontScripts,
  isEmptyIconList,
} from './selectors';
import type { Store } from './store';

test('isEmptyIconfontScripts', () => {
  // 1 不存在
  expect(isEmptyIconfontScripts({} as Store)).toBeTruthy();
  // 2 为空
  expect(isEmptyIconfontScripts({ iconfontScripts: [] } as Store)).toBeTruthy();
  // 3 有值
  expect(
    isEmptyIconfontScripts({ iconfontScripts: [{}] } as Store),
  ).toBeFalsy();
});

/**
 * 判断什么时候是空的 icon 列表
 */
test('isEmptyIconList', () => {
  // 1 不存在
  expect(isEmptyIconList({} as Store)).toBeTruthy();
  // 2 为空
  expect(
    isEmptyIconList({ iconfontIconList: [], antdIconList: [] } as Store),
  ).toBeTruthy();

  // 3 iconfont有值 antd 无值
  expect(
    isEmptyIconList({
      iconfontIconList: [{}],
      panelTabKey: 'antd',
      antdIconList: [],
    } as Store),
  ).toBeTruthy();
  expect(
    isEmptyIconList({
      iconfontIconList: [{}],
      panelTabKey: 'iconfont',
      antdIconList: [],
    } as Store),
  ).toBeFalsy();

  // 4 antd 有值 iconfont 无值
  expect(
    isEmptyIconList({
      iconfontIconList: [],
      panelTabKey: 'antd',
      antdIconList: [{}],
    } as Store),
  ).toBeFalsy();
  expect(
    isEmptyIconList({
      iconfontIconList: [],
      panelTabKey: 'iconfont',
      antdIconList: [{}],
    } as Store),
  ).toBeTruthy();
});

describe('displayListSelector', () => {
  it('显示 antd 列表', () => {
    expect(
      displayListSelector({
        antdIconList: [{ type: 'antd', componentName: 'Hello' }],
      } as Store),
    ).toEqual([
      {
        componentName: 'Hello',
        type: 'antd',
      },
    ]);
  });
  it('显示 iconfont 列表', () => {
    expect(
      displayListSelector({
        panelTabKey: 'iconfont',
        antdIconList: [{ type: 'antd', componentName: 'Hello' }],
        iconfontIconList: [
          {
            type: 'iconfont',
            scriptUrl: '123',
            componentName: 'Iconfont',
            props: { type: 'test' },
          },
        ],
      } as Store),
    ).toEqual([
      {
        componentName: 'Iconfont',
        props: {
          type: 'test',
        },
        scriptUrl: '123',
        type: 'iconfont',
      },
    ]);
  });

  describe('包含搜索关键词', () => {
    it('搜索 antd', () => {
      const store = {
        antdIconList: [
          { type: 'antd', componentName: 'Hello' },
          { type: 'antd', componentName: 'Test' },
        ],
        iconfontIconList: [
          {
            type: 'iconfont',
            scriptUrl: '123',
            componentName: 'Iconfont',
            props: { type: 'eee' },
          },
        ],
      } as Store;
      expect(displayListSelector({ ...store, filterKeywords: 'H' })).toEqual([
        { type: 'antd', componentName: 'Hello' },
      ]);
    });
    it('搜索 iconfont', () => {
      const store = {
        antdIconList: [
          { type: 'antd', componentName: 'Hello' },
          { type: 'antd', componentName: 'Test' },
        ],
        iconfontIconList: [
          {
            type: 'iconfont',
            scriptUrl: '123',
            componentName: 'Iconfont',
            props: { type: 'eee' },
          },
          {
            type: 'iconfont',
            scriptUrl: '123',
            componentName: 'Iconfont',
            props: { type: 'xer' },
          },
        ],
      } as Store;
      expect(
        displayListSelector({
          ...store,
          panelTabKey: 'iconfont',
          filterKeywords: 'R',
        }),
      ).toEqual([
        {
          type: 'iconfont',
          scriptUrl: '123',
          componentName: 'Iconfont',
          props: { type: 'xer' },
        },
      ]);
    });
  });
});

/**
 * 判断什么时候 iconfontScripts 不可以编辑
 */
describe('iconfontScriptsChangeable', () => {
  it('无props', () => {
    const store = {} as Store;

    expect(iconfontScriptsChangeable(store)).toBeTruthy();
  });
  it('有外部 iconfontScripts，但无 onChange', () => {
    const store = { outsourceIconfontScripts: [] } as Store;

    expect(iconfontScriptsChangeable(store)).toBeFalsy();
  });
});
