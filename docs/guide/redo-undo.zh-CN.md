---
title: 撤销重做
group: 状态管理研发
order: 2
---

# 撤销重做

撤销重做是编辑器场景保障用户体验的一个重要特性。ProEditor 作为编辑器框架，为上层的应用编辑器提供了撤销重做的原子化能力。

## 立即上手

<code src="./demos/Redo/index.tsx" ></code>

## 使用方式

### 初始化

1. 外层包裹 ProEditorProvider，传入相应的 zustand store

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

2. zustand store 包裹 ProEditorMiddleware

```ts
import { proEditorMiddleware, ProEditorOptions } from '@ant-design/pro-editor';

interface ProEditorStore extends Partial<Store> { }


const proEditorOptions: ProEditorOptions<Store, ProEditorStore> = {
  name: 'store-name', // 每个 store 需要有自己的唯一名称
  partialize: (s) => ({ data: s.data }), // 支持按需接入
};

export const useStore = create<Store>()(

  // createStore 是 StoreCreator 类型的对象
  proEditorMiddleware(createStore, proEditorOptions)),
);
```

多个 Store 使用的方式：

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

多 Store 撤销重做互相隔离

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

### 设定历史记录

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
      // 不进入历史记录
      recordHistory: false,
    });
  },

  plus: () => {
    const nextData = get().data + 1;

    // 默认进入历史记录
    set({ data: nextData }, false, { type: 'plus' });
  },
  data: 3,
});
```
