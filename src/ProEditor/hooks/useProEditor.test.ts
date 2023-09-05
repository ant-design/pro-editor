import { ProEditorProvider, useProEditor } from '@ant-design/pro-editor';
import { renderHook } from '@testing-library/react';

describe('useProEditor', () => {
  it('返回正确的实例类型', () => {
    const {
      result: { current: instance },
    } = renderHook(() => useProEditor<{ name: string }>(), {
      wrapper: ProEditorProvider,
    });

    expect(instance).toHaveProperty('getProps');
    expect(instance).toHaveProperty('getConfig');
    expect(instance).toHaveProperty('setConfig');
    expect(instance).toHaveProperty('exportConfig');
    expect(instance).toHaveProperty('resetConfig');

    expect(instance).toHaveProperty('undo');
    expect(instance).toHaveProperty('redo');
    expect(instance).toHaveProperty('undoStack');
    expect(instance).toHaveProperty('redoStack');

    expect(instance).not.toHaveProperty('props');
    expect(instance).not.toHaveProperty('config');
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
});
