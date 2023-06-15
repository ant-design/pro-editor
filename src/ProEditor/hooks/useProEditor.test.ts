import { ProEditorProvider, useProEditor } from '@ant-design/pro-editor';
import { renderHook } from '@testing-library/react';

describe('useProEditor', () => {
  it('返回正确的实例类型', () => {
    const {
      result: { current: instance },
    } = renderHook(() => useProEditor<{ name: string }>(), {
      wrapper: ProEditorProvider,
    });
    expect(instance).toHaveProperty('getViewport');
    expect(instance).toHaveProperty('setViewport');
    expect(instance).toHaveProperty('getConfig');
    expect(instance).toHaveProperty('setConfig');
    expect(instance).toHaveProperty('getProps');
    expect(instance).toHaveProperty('getEditorAwareness');
    expect(instance).toHaveProperty('getCanvasInteraction');
    expect(instance).toHaveProperty('setCanvasInteraction');

    expect(instance).not.toHaveProperty('props');
    expect(instance).not.toHaveProperty('config');
    expect(instance).not.toHaveProperty('interaction');
    expect(instance).not.toHaveProperty('editorAwareness');
    expect(instance).not.toHaveProperty('assetAwareness');
    expect(instance).not.toHaveProperty('onCanvasError');
    expect(instance).not.toHaveProperty('onEditorAwarenessChange');
    expect(instance).not.toHaveProperty('onAssetAwarenessChange');
    expect(instance).not.toHaveProperty('onConfigChange');
    expect(instance).not.toHaveProperty('onInteractionChange');
    expect(instance).not.toHaveProperty('internalSetState');
    expect(instance).not.toHaveProperty('internalUpdateCanvasInteract');
    expect(instance).not.toHaveProperty('internalUpdatePresenceEditor');
    expect(instance).not.toHaveProperty('internalUpdatePresenceAsset');
    expect(instance).not.toHaveProperty('internalUpdateConfig');
  });

  it('正确获取 config 和 props', () => {
    const {
      result: { current: instance },
    } = renderHook(() => useProEditor<{ name: string; age: number }>(), {
      wrapper: ProEditorProvider,
    });
    const config = { name: 'John' };
    instance.setConfig(config);
    expect(instance.getConfig()).toEqual(config);
    expect(instance.getProps()).toEqual({});
  });

  it('正确获取 presenceEditor', () => {
    const {
      result: { current: instance },
    } = renderHook(useProEditor, { wrapper: ProEditorProvider });
    expect(instance.getEditorAwareness()).toMatchSnapshot();
  });
});
