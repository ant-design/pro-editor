---
title: Undo Redo
group: State Management Development
order: 2
---

# Undo Redo

Undo redo is an important feature to ensure user experience in the editor scenario. As an editor framework, ProEditor provides atomic capabilities for undo and redo for upper-level application editors.

## Get Started Immediately

<code src="./demos/Redo/index.tsx" ></code>

## Usage

### Initialization

1. Wrap ProEditorProvider with the outer layer and pass in the corresponding zustand store

```tsx | pure
import { ProEditorProvider } from '@ant-design/pro-editor';

import { useStore } from './store';

export default () => {
  return (
    <ProEditorProvider store={[useStore]}>
      <App />
    </ProEditorProvider>
  );
};
```

2. Wrap zustand store with ProEditorMiddleware

```ts
import { proEditorMiddleware, ProEditorOptions } from '@ant-design/pro-editor';

interface ProEditorStore extends Partial<Store> { }


const proEditorOptions: ProEditorOptions<Store, ProEditorStore> = {
  name: 'store-name', // Each store needs to have its own unique name
  partialize: (s) => ({ data: s.data }), // Support on-demand access
};

export const useStore = create<Store>()(

  // createStore is an object of type StoreCreator
  proEditorMiddleware(createStore, proEditorOptions)),
);
```

Usage with multiple stores:

```tsx | pure
import { ProEditorProvider } from '@ant-design/pro-editor';

import { useAStore } from './storeA';
import { useBStore } from './storeB';

export default () => {
  return (
    <ProEditorProvider store={[useAStore, useBStore]}>
      <App />
    </ProEditorProvider>
  );
};
```

Isolation of undo and redo for multiple stores:

```tsx | pure
<div>
  <ProEditorProvider store={[cStore]}>
    <A />
  </ProEditorProvider>

  <ProEditorProvider store={[dStore]}>
    <B />
  </ProEditorProvider>
</div>
```

### Set History

```ts
const createStore: StateCreator<Store, [['zustand/devtools', never], ['pro-editor', never]]> = (
  set,
  get,
) => ({
  tabs: '1',
  switchTabs: (key) => {
    set({ tabs: key });
  },
  plusWithoutHistory: () => {
    set((s) => ({ ...s, data: s.data + 2 }), false, {
      type: 'plusWithoutHistory',
      // Does not enter the history
      recordHistory: false,
    });
  },

  plus: () => {
    const nextData = get().data + 1;

    // Enters the history by default
    set({ data: nextData }, false, { type: 'plus' });
  },
  data: 3,
});
```
