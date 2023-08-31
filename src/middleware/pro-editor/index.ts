// import {  } from '@/ProEditor/store';
import { StateCreator, StoreMutatorIdentifier } from 'zustand/vanilla';
import { ProEditorImpl, ProEditorSetStateAction } from './type';

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

const middleware: ProEditorImpl = (storeInitializer, options) => (set, get, api) => {
  const partialize = options.partialize ?? ((s) => s);
  /**
   * 记录历史
   * @param action
   */
  const updateInProEditor = (action: ProEditorSetStateAction) => {
    const nextConfig = partialize(get());

    get().proEditor.__INTERNAL_SET_CONFIG__NOT_USE_IT(nextConfig, {
      trigger: 'proEditorMiddleware',
      ...action,
    });
  };
  /*
   * Capture the initial state so that we can initialize the pro editor store to the
   * same values as the initial values of the Zustand store.
   */
  const store = storeInitializer(
    /*
     * Create a new set function that defers to the original and then passes
     * the new state to patchSharedType.
     */
    (partial, replace, action) => {
      set(partial, replace, action);
      updateInProEditor((action as any) || {});
    },
    get,
    {
      ...api,
      // Create a new setState function as we did with set.
      setState: (partial, replace, action) => {
        api.setState(partial, replace, action);

        updateInProEditor((action as any) || {});
      },
    },
  );

  // Return the initial state to create or the next middleware.
  return {
    ...store,
    proEditor: { options: { ...options, partialize } },
  };
};

export type ProEditorMiddleware = <
  T,
  Mps extends [StoreMutatorIdentifier, unknown][] = [],
  Mcs extends [StoreMutatorIdentifier, unknown][] = [],
  U = T,
>(
  initializer: StateCreator<T, [...Mps, ['pro-editor', unknown]], Mcs>,
  options: ProEditorOptions<T, U>,
) => StateCreator<T, Mps, [['pro-editor', U], ...Mcs]>;

export const proEditorMiddleware = middleware as unknown as ProEditorMiddleware;
