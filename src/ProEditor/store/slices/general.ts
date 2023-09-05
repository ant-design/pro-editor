import { StackItem as YJSStackItem } from 'yjs/dist/src/utils/UndoManager';
import { StateCreator } from 'zustand';

import { InternalProEditorStore } from '../createStore';

export interface StackItem {
  timestamp: number;
  name?: string;
  type?: string;
}
/**
 * 通用公共动作
 */
export interface GeneralPublicAction {
  /**
   * 撤销操作
   */
  undo: () => void;
  /**
   * 重做操作
   */
  redo: () => void;
  /**
   * 撤销栈
   */
  undoStack: () => StackItem[];
  /**
   * 重做栈
   */
  redoStack: () => StackItem[];

  undoLength: () => number;
  redoLength: () => number;
}

export type GeneralSlice = GeneralPublicAction;

const mapUndoManagerStackToUserStack = (stack: YJSStackItem[]) =>
  stack.map<StackItem>((i) => ({
    name: i.meta.get('name'),
    timestamp: i.meta.get('timestamp'),
    type: i.meta.get('type'),
  }));

export const generalSlice: StateCreator<
  InternalProEditorStore,
  [['zustand/devtools', never]],
  [],
  GeneralSlice
> = (set, get) => ({
  undoStack: () => mapUndoManagerStackToUserStack(get().yjsDoc.undoManager.undoStack),
  redoStack: () => mapUndoManagerStackToUserStack(get().yjsDoc.undoManager.redoStack),

  undoLength: () => get().yjsDoc.undoManager.undoStack.length,
  redoLength: () => get().yjsDoc.undoManager.redoStack.length,

  undo: () => {
    const { yjsDoc, internalUpdateConfig } = get();
    const stack = yjsDoc.undo();

    const { config } = yjsDoc.getHistoryJSON();

    internalUpdateConfig(config, { type: 'history/undo', payload: stack }, true);
  },
  redo: () => {
    const { yjsDoc, internalUpdateConfig } = get();

    const stack = yjsDoc.redo();

    const { config } = yjsDoc.getHistoryJSON();

    internalUpdateConfig(config, { type: 'history/redo', payload: stack }, true);
  },
});
