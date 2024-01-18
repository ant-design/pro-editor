---
title: 编辑器数据流最佳实践
group:
  title: 状态管理研发
  order: 10
---

## 数据流最佳实践

编辑器场景不同于 CRUD 的网页，存在大量的富交互能力，如何设计一个易于开发与易于维护的数据流架构非常重要。

## 概念要素

| 概念名词 | 解释                                                                                                                                                                                                                                                                 |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| store    | 状态库 (store)，包含存储应用的状态、动作。允许在应用渲染中访问和修改状态。                                                                                                                                                                                           |
| state    | 状态 (state) 是指应用程序的数据，存储了应用程序的当前状态，状态的变化**一定会触发应用的重新渲染**，以反映新的状态。                                                                                                                                                  |
| action   | 动作 (action) 是一个操作函数，它描述了应用程序中发生的交互事件。动作通常是由用户交互、网络请求或定时器等触发。 action 可以是**同步**的，也可以是**异步**的。                                                                                                         |
| reducer  | 归约器 (reducer) 是一个纯函数，它接收当前状态和动作作为参数，并返回一个新的状态。它用于根据动作类型来更新应用程序的状态。Reducer 是一个纯函数，不存在副作用，因此一定是 **同步** 函数。                                                                              |
| selector | 选择器 (selector) 是一个函数，用于从应用程序的状态中获取特定的数据。它接收应用程序的状态作为参数，并返回经过计算或转换后的数据。Selector 可以将状态的一部分或多个状态组合起来，以生成派生的数据。Selector 通常用于将应用程序的状态映射到组件的 props，以供组件使用。 |
| slice    | 切片 (slice) 是一个概念，用于表达数据模型状态的一部分。它指定了一个状态切片（slice），以及与该切片相关的 state、action、reducer 和 selector。使用 Slice 可以将大型的 Store 拆分为更小的、可维护的子类型。                                                            |

## 结构分层

在不同的复杂度下，我们可以将 Store 的结构组织可以由很大的不同：

### 较低复杂度

一般包含 2\~5 个 state 、3 \~ 4 个 action。此时的结构一般直接一个 `store.ts` + 一个 `initialState.ts` 即可。

```bash
DataFill/store
├── index.ts
├── initialState.ts
```

### 一般复杂度

一般复杂度存在 5 \~ 15 个 state、 5 \~ 10 个 action，可能会存在 selector 实现派生状态，也有可能存在 reducer 简化部分数据变更的复杂度。此时的结构一般为一个 `store.ts` + 一个 `initialState.ts` + 一个 `selectors.ts`/`reducer.ts`。

```bash
IconPicker/store
├── index.ts
├── initialState.ts
├── selectors.ts
└── store.ts
```

```bash
SortableList/store
├── index.ts
├── initialState.ts
├── listDataReducer.ts
└── store.ts
```

### 中等复杂度

中等复杂度存在 15 \~ 30 个 state、 10 \~ 20 个 action，大概率会存在 selector 来聚合派生状态，大概率存在 reducer 简化部分数据变更的复杂度。

此时结构，用单一的 action store 已经较难维护，往往会拆解出来多个 slice 用于管理不同的 action。

下方的代码代表了 `SortableTree` 组件的内部数据流：

```bash
SortableTree/store
├── index.ts
├── initialState.ts
├── selectors.ts
├── slices
   ├── crudSlice.ts
   ├── dndSlice.ts
   └── selectionSlice.ts
├── store.ts
└── treeDataReducer.ts
```

解读几个关键文件：

1. `selectors.ts`：包含了一些用于从 Store 中获取派生状态的选择器函数。选择器函数可以根据需要聚合和计算派生状态，提供给组件使用；
2. `slices文件夹`：拆解出来的多个模块，用于管理不同的 action。每个模块一般包含一个 Slice，其中包含了相关的 action。
   - `crudSlice.ts`：用于管理对树形数据进行增删改查的操作。
   - `dndSlice.ts`：用于管理拖拽和排序相关的操作。
   - `selectionSlice.ts`：用于管理选中状态相关的操作。
3. `treeDataReducer.ts`：用于管理树形数据的 reducer。它会处理一些与`treeData`相关的数据变化的原子操作，例如添加节点、删除节点、拖动节点等。

### 高等复杂度

高等复杂度存在 30 个以上的 state、 20 个以上的 action。必然需要 slice 做模块化内聚。在每个 slice 中都各自声明了各自的 initState、 action、reducer 与 selector。

下面是一个高复杂度的数据流示例 ([链接](https://github.com/lobehub/lobe-chat/tree/master/src/store/session))：

```bash
LobeChat SessionStore
├── index.ts
├── initialState.ts
├── selectors.ts
├── slices
│   ├── agentConfig
│   │   ├── action.ts
│   │   ├── index.ts
│   │   ├── initialState.ts
│   │   └── selectors.ts
│   ├── chat
│   │   ├── actions
│   │   │   ├── index.ts
│   │   │   ├── message.ts
│   │   │   └── topic.ts
│   │   ├── index.ts
│   │   ├── initialState.ts
│   │   ├── reducers
│   │   │   ├── message.ts
│   │   │   └── topic.ts
│   │   ├── selectors
│   │   │   ├── chat.ts
│   │   │   ├── index.ts
│   │   │   ├── token.ts
│   │   │   ├── topic.ts
│   │   │   └── utils.ts
│   │   └── utils.ts
│   └── session
│       ├── action.ts
│       ├── index.ts
│       ├── initialState.ts
│       ├── reducers
│       │   └── session.ts
│       └── selectors
│           ├── export.ts
│           ├── index.ts
│           └── list.ts
└── store.ts
```

上面这个数据流的目录结构看似复杂，但借助于 slice 的模块化和分形架构的心智，我们可以很容易地找到对应的模块，新增功能与迭代都很易于维护。

## 编辑器场景下的目录结构最佳实践

在编辑器场景下，我们应该默认它终将发展为一个高复杂度的数据流。因此，我们从一开始的目录架构上，就应该将数据流按照 slice 的模式进行拆分，每个 slice 都应该是一个独立的模块，包含自己的 initState、action、reducer 与 selector。

```bash
editorStore
├── index.ts
├── initialState.ts
├── selectors.ts
├── slices
│   ├── crud
│   │   ├── action.ts
│   │   ├── index.ts
│   │   ├── initialState.ts
│   │   └── selectors.ts
└── store.ts
```

### 顶层对象

`index.ts` 是一个聚合导出文件，不再赘述。

#### initialState

`initialState.ts` 中聚合了所有 slice 的 initialState 。

```ts
import { CRUDState, initialCRUDState } from './slices/crud';

export type EditorStoreState = CRUDState & AnotherState;

export const initialState: EditorStoreState = {
  ...initialCRUDState,
};
```

如果后续扩展为多个 slice，只需按同样的方式做聚合与导出相应的 state 即可。

#### selectors

selectors 将从各自的 slices 中导出，供外部直接调用。

```ts
export { crudSelectors } from './slices/crud';
export { chatSelectors, topicSelectors } from './slices/chat';
export { sessionSelectors } from './slices/session';
```

#### store

再来看看 `store.ts`

```ts
import { devtools } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';
import { StateCreator } from 'zustand/vanilla';

import { EditorStoreState, initialState } from './initialState';
import { CRUDAction, createCRUDSlice } from './slices/crud';

//  ===============  聚合 createStoreFn ============ //

export type EditorStore = CRUDAction & EditorStoreState;

const createStore: StateCreator<EditorStore, [['zustand/devtools', never]]> = (...parameters) => ({
  ...initialState,
  ...createCRUDSlice(...parameters),
});

//  ===============  实装 useStore ============ //

export const useEditorStore = createWithEqualityFn<EditorStore>()(
  devtools(createStore, {
    name: 'EditorStore',
  }),

  shallow,
);
```

其中关键的代码是 `createStore` , 它用于聚合所有的 slice，返回一个完整的编辑器 Store 用于 store 初始化创建。

最后使用的 `createWithEqualityFn`函数中包裹了相关的中间件，我们默认使用了 `devtools` 中间件来提供开发者工具支持，并替换默认的比较函数为 `shallow`，用于优化性能。

### Slice 部分

每个 slice 的 initState 与 selector 和不切 slice 是类似的。因此不过多阐述， 重点看下 `slices/crud/action.ts`：

```ts
import { StateCreator } from 'zustand/vanilla';

import { EditorStore } from '@/store/edtior';

export interface CrudAction {
  // 相关的业务 action ...
}

export const createCrudSlice: StateCreator<
  EditorStore,
  [['zustand/devtools', never]],
  [],
  CrudAction
> = (set, get) => ({
  // ...
});
```

通过 `import` 语句，接下来，代码定义了一个`CrudAction`接口，用于描述与业务相关的操作。

声明 `createCrudSlice`是一个函数，它接受`set`和`get`两个参数，并返回一个包含编辑器状态和业务操作的对象。

```ts
StateCreator<EditorStore, [['zustand/devtools', never]], [], CrudAction>;
```

其中的类型定义引入了`StateCreator`作为全量类型，最后的 CrudAction 则代表着这个 slice 中需要实现的 action。 中间的`[['zustand/devtools', never]]` 则意味着这个 slice 被 `devtools` 中间件包裹，因此 `set` 方法将可以接受中间件参数。

这是实现 Slice 模式下，并且保证类型始终友好的关键。

这样书写后，我们可以使用 `get()` 方法拿到全量 `EditorStore` 中的 state 和 action ，而这个 `createCRUDSlice` 只会在声明的 CrudAction 类型与实现不一致时提示错误，不会受到额外的干扰。

这样一来，每个 slice 就具有了感知所有状态和调用所有方法的能力，同时这个 slice 又只需要关注自己所定义的方法和状态，关注点成功被收敛。

## 功能研发

在 slice 分层模式基础下，我们就可以保证每个 slice 的功能模块可控，不会无限膨胀下去，同时可以按需拆成通用、业务或者内部 slice。

在框架达成可控后，我们就可以专注于功能的研发了。其中核心功能的研发工作量存在于两块， action 与 selector，先来讲讲 action 部分。

### action 研发

action 由于就是一个普通的函数方法，支持同步与异步，理论上是没有任何限制的。但是根据我们过去的实践经验来看，action 可以拆分为两类：

- 数据状态变动： 例如修改当前用户的状态信息，修改登录态、标记已查看引导等；
- 业务逻辑编排： 例如一个登录流程，会包含请求、成功判断、失败判断等等；

我们强烈建议将第一类数据状态变动，统一收敛到一个 `dispatchXXX` 的方法中，并将数据变更的逻辑，下沉为一个 `reducer`。在 SortableTree 中，收敛了一个`dispatchTreeData` 的方法：

```ts
const crudSlice = (set, get) => ({
  dispatchTreeData: (payload) => {
    const { treeData } = get();
    const nextTreeData = treeDataReducer(treeData, payload);

    set({ treeData: nextTreeData });
  },
});
```

这样做的好处有什么？核心是保证了数据变更的原子性。数据变更的逻辑被下沉到了 reducer 中，可以避免数据变更的逻辑被分散到各个 action 中，导致数据变更的不可控。

而这也会相应带来若干好处：

1. **方便做受控能力**：当数据变更原子化之后，通过在 `dispatchTreeData` 最下方添加一个 `onTreeDataChange` ，即可实现数据状态的受控变更，将应用轻松转换为组件；
2. **数据变更语义化**：通过 dispatch 对应 payload 方法的命名，可以将原本比较难构造与变更的数据变更语义化，例如 `dispatchTreeData( { type: 'toggleCollapse', id:'123' })`，可以很容易理解为，将 id 为 123 的节点进行展开 / 收起操作；
3. **提升状态维护性**：统一 dispatch 的数据变更心智后，我们既可以在 store 外部调用 dispatch 来变更状态，也可以在 store 内部调用，统一的心智将大大降低维护成本；

### reducer 研发

此外，将数据变更逻辑下沉为 reducer 后， reducer 层面也会带来相应的好处。由于 reducer 只是一个纯函数，因此可以非常方便地实现相应的单元测试。而结合 AI ，我们可以实现一句话需求的 reducer 实现，同时也可以实现一键产出测试代码。在 reducer 上的研发与维护成本将会大大降低。

| 功能实现                                                                                         | 单元测试                                                                                                                      |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| ![](https://gw.alipayobjects.com/zos/kitchen/qcmFMlllP/f588a003-6317-4ef2-9728-491c9bda3c05.png) | ![](https://github-production-user-asset-6210df.s3.amazonaws.com/28616219/261315145-01f8542f-e748-4334-b8fa-67b929fa1795.png) |

### selector 研发

selector 一般用于将 store 中的数据映射为页面上需要展示的内容。因此在 store 中存储的数据可以通过 selector 做诸多的转换。 例如：

```ts
import { currentChats, getChatsById } from './chat';
import { chatsTokenCount, systemRoleTokenCount, totalTokenCount } from './token';

export const chatSelectors = {
  chatsTokenCount,
  currentChats,
  getChatsById,
  systemRoleTokenCount,
  totalTokenCount,
};
```

其中 `chatsTokenCount` 就是一个 selector，它的目的用于计算 message 中的 token 数，它会将 store 中的 chats 数组转化为一个数值提供给外部。

```ts
export const chatsTokenCount = (s: SessionStore): number[] => {
  const chats = currentChatsWithHistoryConfig(s);
  return encode(chats.map((m) => m.content).join('')).length;
};
```

由于 selector 本身只是一个函数，因此它也能够用非常简单的方式集成单元测试。

那在页面上使用 selector 也非常简单，直接按需引入即可（代码如下）。由于转换后的数据类型是 `number`，因此 react 感知到的状态类型也是 `number`，因此即使 chats 中发生了不影响计算结果的其他的状态变更（例如更新 message 的时间等），这个组件内部也不会触发重新渲染。

```tsx | pure
const Token = memo<>(() => {
  const [totalToken, systemRoleToken, chatsToken] = useSessionStore((s) => [
    chatSelectors.totalTokenCount(s),
    chatSelectors.systemRoleTokenCount(s),
    chatSelectors.chatsTokenCount(s),
  ]);

  return (
    <Tooltip placement={'bottom'} title={('tokenDetail', { chatsToken, systemRoleToken })}>
      <TokenTag value={totalToken + inputTokenCount} />
    </Tooltip>
  );
});
```
