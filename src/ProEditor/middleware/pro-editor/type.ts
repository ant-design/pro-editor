import { StateCreator } from 'zustand/vanilla';
import { ConfigPublicAction } from '../../store/slices/config';
import { TakeTwo, Write } from '../types/utils';

export interface ProEditorSetStateAction {
  type: unknown;

  /**
   * 如果记录，那么历史记录的名字是什么
   */
  name?: string;
  /**
   * 是否将操作记录到历史记录中
   */
  recordHistory?: boolean;
}

/**
 * 用于给注入方法添加额外的 proEditor 实例对象
 */
export interface ProEditorMiddlewareInjectMethod<Sa extends unknown[], Sr, T, A> {
  setState<A1 extends string | ProEditorSetStateAction>(...a: [...a: TakeTwo<Sa>, action?: A1]): Sr;

  proEditor: {
    undo?: () => void;
    redo?: () => void;
    // clearStorage: () => void;
    getOptions: () => Partial<ProEditorOptions<T, A>>;
  };
}
/**
 * 提供给用户的配置项
 */
export interface ProEditorOptions<S, EditorSaveState = S> {
  /** Name of the storage (must be unique) */
  name: string;
  /**
   * Filter the persisted value.
   *
   * @params state The state's value
   */
  partialize?: (state: S) => EditorSaveState;
}

// 为  mutator 注入 'pro-editor' 类型，以支持第三个配置参数

type WithProEditor<S, A> = S extends {
  getState: () => infer T;
  setState: (...a: infer Sa) => infer Sr;
}
  ? Write<S, ProEditorMiddlewareInjectMethod<Sa, Sr, T, A>>
  : never;

declare module 'zustand/vanilla' {
  interface StoreMutators<S, A> {
    ['pro-editor']: WithProEditor<S, A>;
  }
}

// 内部方法，用于保证中间件内部的类型定义安全

export type ProEditorImpl = <T>(
  storeInitializer: StateCreator<T, [['pro-editor', unknown]], []>,
  options: ProEditorOptions<T, T>,
) => StateCreator<T, [['pro-editor', unknown]], []>;

export interface InjectInternalProEditor {
  proEditor: {
    __INTERNAL_SET_CONFIG__NOT_USE_IT: ConfigPublicAction['setConfig'];
  };
}
