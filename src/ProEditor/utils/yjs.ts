import { Doc, UndoManager } from 'yjs';
import { AbstractType } from 'yjs/dist/src/types/AbstractType';
import { DocOpts } from 'yjs/dist/src/utils/Doc';
import { Transaction } from 'yjs/dist/src/utils/Transaction';
import { StackItem } from 'yjs/dist/src/utils/UndoManager';
import { YEvent } from 'yjs/dist/src/utils/YEvent';

export interface UserActionParams {
  type?: string | unknown;
  name?: string;
  timestamp?: number;
}

class UserAction {
  type;
  name;
  timestamp;
  constructor(params: UserActionParams) {
    this.type = params.type;
    this.name = params.name;
    this.timestamp = params.timestamp;
  }
}

interface UndoEvent extends Transaction {
  type: 'undo' | 'redo';
  origin: UserAction;
  stackItem: StackItem;
  changedParentTypes: Map<AbstractType<YEvent<any>>, Array<YEvent<any>>>;
}

export class DocWithHistoryManager<T = object> extends Doc {
  private _internalHistoryKey = '__INTERNAL_HISTORY_MAP__';

  constructor(params?: DocOpts) {
    super(params);

    this.undoManager = new UndoManager(this.getHistoryMap(), {
      trackedOrigins: new Set([UserAction]),
    });

    this.undoManager.on('stack-item-added', (e: UndoEvent) => {
      e.stackItem.meta.set('timestamp', e.origin.timestamp);
      e.stackItem.meta.set('type', e.origin.type);
      e.stackItem.meta.set('name', e.origin.name);
    });
  }

  public undoManager: UndoManager;

  updateHistoryData = (value: Partial<T>) => {
    const map = this.getMap(this._internalHistoryKey);

    Object.entries(value).forEach(([key, value]) => {
      map.set(key, value);
    });
  };

  recordHistoryData = (value: Partial<T>, userAction: UserActionParams) => {
    this.transact(() => {
      this.updateHistoryData(value);
    }, new UserAction(userAction));
  };

  getHistoryMap = () => {
    return this.getMap(this._internalHistoryKey);
  };

  getHistoryJSON = () => {
    const map = this.getMap(this._internalHistoryKey);

    return map.toJSON() as T;
  };

  redo = () => {
    return this.undoManager.redo();
  };

  undo = () => {
    return this.undoManager.undo();
  };
}
