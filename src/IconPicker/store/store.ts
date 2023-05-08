import produce from 'immer';
import isEqual from 'lodash.isequal';
import type { StateCreator } from 'zustand/vanilla';
import type { ExternalScripts, IconUnit } from '../types';
import {
  extractListFormIconfontJS,
  findNeighborIndex,
} from '../utils/iconfont';

import type { State } from './initialState';
import { initialState } from './initialState';

export interface Action {
  resetIcon: () => void;
  togglePanel: () => void;
  selectIcon: (icon: IconUnit) => void;
  removeScripts: (url: string) => void;
  selectScript: (url: string) => void;
  toggleForm: (visible?: boolean) => void;
  addScript: (script: ExternalScripts) => void;
  updateScripts: (scripts: ExternalScripts[]) => void;
}

export type Store = State & Action;

const vanillaStore: StateCreator<Store, [['zustand/devtools', never]]> = (
  set,
  get,
) => ({
  ...initialState,

  resetIcon: () => {
    set({ icon: null });
  },
  togglePanel: () => {
    set((s) => ({ ...s, open: !s.open }));
  },
  selectIcon: (icon) => {
    set({ icon, open: false, filterKeywords: undefined }, false, '选择 Icon');

    get().onIconChange?.(icon);
  },

  addScript: (script) => {
    const { selectScript, iconfontScripts, updateScripts } = get();

    set({
      showForm: false,
    });

    updateScripts(
      produce(iconfontScripts, (draft) => {
        if (!draft.find((i) => i.url === script.url)) {
          draft.push(script);
        }
      }),
    );

    selectScript(script.url);
  },
  updateScripts: (scripts) => {
    const { onIconfontScriptsChange, iconfontScripts } = get();

    if (isEqual(iconfontScripts, scripts)) return;
    set({ iconfontScripts: scripts });

    onIconfontScriptsChange?.(scripts);
  },
  toggleForm: (visible) => {
    set((s) => ({
      ...s,
      showForm: typeof visible === 'undefined' ? !s.showForm : visible,
    }));
  },
  selectScript: async (url) => {
    const { onActiveIconfontScriptChange } = get();
    onActiveIconfontScriptChange?.(url);
    // 没有 url 的情况下，不选择 script
    if (!url) {
      set({ activeIconfontScript: '', iconfontIconList: [] });
      return;
    }

    const iconfontScripts = get().iconfontScripts.find((i) => i.url === url);

    const res = await fetch(url);
    const jsText = await res.text();

    const iconfontList = extractListFormIconfontJS(jsText);

    set({
      activeIconfontScript: url,
      showForm: false,
      iconfontIconList: iconfontList.map((i) => ({
        type: 'iconfont',
        componentName: iconfontScripts.name,
        scriptUrl: url,
        props: { type: i },
      })),
    });
  },
  removeScripts: (url) => {
    const { iconfontScripts, selectScript, updateScripts } = get();

    const nextIconfontScripts = iconfontScripts.filter((i) => i.url !== url);

    // 找到临近的图标库并选中

    const currentIndex = iconfontScripts.findIndex((i) => i.url === url);

    const nextIndex = findNeighborIndex(nextIconfontScripts, currentIndex);

    const nextScript = nextIconfontScripts[nextIndex]?.url;

    updateScripts(nextIconfontScripts);

    selectScript(nextScript);
  },
});

export default vanillaStore;
