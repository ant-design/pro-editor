import { ProBuilderProvider, useProBuilder } from '@ant-design/pro-editor';
import { renderHook } from '@testing-library/react';

describe('useProBuilder', () => {
  it('返回正确的实例类型', () => {
    const {
      result: { current: instance },
    } = renderHook(() => useProBuilder<{ name: string }>(), {
      wrapper: ProBuilderProvider,
    });

    expect(instance).toHaveProperty('getProps');
    expect(instance).toHaveProperty('getConfig');
    expect(instance).toHaveProperty('setConfig');
    expect(instance).toHaveProperty('exportConfig');
    expect(instance).toHaveProperty('resetConfig');

    expect(instance).toHaveProperty('getViewport');
    expect(instance).toHaveProperty('setViewport');

    expect(instance).toHaveProperty('getCanvasInteraction');
    expect(instance).toHaveProperty('setCanvasInteraction');
    expect(instance).toHaveProperty('deselectCanvas');

    expect(instance).toHaveProperty('undo');
    expect(instance).toHaveProperty('redo');
    expect(instance).toHaveProperty('undoStack');
    expect(instance).toHaveProperty('redoStack');

    expect(instance).toHaveProperty('getEditorAwareness');

    expect(instance).toHaveProperty('togglePanelExpand');

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
    } = renderHook(() => useProBuilder<{ name: string; age: number }>(), {
      wrapper: ProBuilderProvider,
    });
    const config = { name: 'John' };
    instance.setConfig(config);
    expect(instance.getConfig()).toEqual(config);
    expect(instance.getProps()).toEqual({});
  });

  it('正确获取 presenceEditor', () => {
    const {
      result: { current: instance },
    } = renderHook(useProBuilder, { wrapper: ProBuilderProvider });
    expect(instance.getEditorAwareness()).toMatchSnapshot();
  });
});
