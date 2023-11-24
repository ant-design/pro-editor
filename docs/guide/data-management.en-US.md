---
title: Best Practices for Editor Data Flow
group:
  title: State Management
  order: 10
---

## Best Practices for Data Flow

The editor scenario is different from the CRUD web page, as it involves a large amount of rich interactive capabilities. Therefore, it is crucial to design a data flow architecture that is easy to develop and maintain.

## Conceptual Elements

| Conceptual Term | Explanation                                                                                                                                                                                                                                                                                                                                                            |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| store           | The store contains the application's state and actions. It allows access to and modification of the state during application rendering.                                                                                                                                                                                                                                |
| state           | The state refers to the application's data, storing the current state of the application. Any change in the state will trigger a re-rendering of the application to reflect the new state.                                                                                                                                                                             |
| action          | An action is an operation function that describes the interactive events occurring in the application. Actions are typically triggered by user interactions, network requests, or timers. Actions can be **synchronous** or **asynchronous**.                                                                                                                          |
| reducer         | A reducer is a pure function that takes the current state and action as parameters and returns a new state. It is used to update the application's state based on the action type. A reducer is a pure function with no side effects, and therefore, it is always a **synchronous** function.                                                                          |
| selector        | A selector is a function used to retrieve specific data from the application's state. It takes the application's state as a parameter and returns computed or transformed data. Selectors can combine parts of the state or multiple states to generate derived data. Selectors are commonly used to map the application's state to component props for component use. |
| slice           | A slice is a concept used to express a part of the data model's state. It specifies a state slice and its related state, action, reducer, and selector. Using slices, a large store can be divided into smaller, maintainable subtypes.                                                                                                                                |

## Structural Layering

In different levels of complexity, the organization of the store structure can vary significantly:

### Low Complexity

Generally includes 2 to 5 states and 3 to 4 actions. The structure at this level typically consists of a single `store.ts` file and a `initialState.ts` file.

```bash
DataFill/store
├── index.ts
├── initialState.ts
```

### Moderate Complexity

Moderate complexity involves 5 to 15 states, 5 to 10 actions, and may include selector implementation for derived states. It may also involve reducer simplifying part of the data changes. The structure at this level generally consists of a `store.ts`, `initialState.ts`, and `selectors.ts`/`reducer.ts`.

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

### Medium Complexity

Medium complexity involves 15 to 30 states, 10 to 20 actions, and likely includes selectors to aggregate derived states and reducers to simplify part of the data changes.

At this level, using a single action store for management becomes challenging, and it often requires breaking it down into multiple slices to manage different actions.

The following code represents the internal data flow of the `SortableTree` component:

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

Interpreting key files:

1. `selectors.ts`: Contains selector functions used to retrieve derived states from the store. Selector functions can aggregate and compute derived states as needed, providing them to components for use.
2. `slices folder`: Multiple modules extracted for managing different actions. Each module generally includes a Slice containing related actions.
   - `crudSlice.ts`: Manages operations for CRUD operations on tree data.
   - `dndSlice.ts`: Manages drag and drop-related operations.
   - `selectionSlice.ts`: Manages operations related to selected states.
3. `treeDataReducer.ts`: Manages the reducer for tree data. It handles atomic operations related to data changes in `treeData`, such as adding nodes, deleting nodes, and dragging nodes.

### High Complexity

High complexity involves over 30 states and over 20 actions. It inevitably requires slices for modular cohesion. Each slice declares its own initState, action, reducer, and selector.

Below is an example of a high-complexity data flow ([link](https://github.com/lobehub/lobe-chat/tree/master/src/store/session)):

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

Although the directory structure of this data flow seems complex, with the modularization of slices and fractal architecture, it becomes easy to locate the corresponding modules, making it easy to maintain and add new features.

## Best Practices for Directory Structure in Editor Scenarios

In the editor scenario, we should assume that it will eventually evolve into a high-complexity data flow. Therefore, from the beginning, the directory structure should be split into slices, with each slice being an independent module containing its own initState, action, reducer, and selector.

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

### Top-Level Objects

`index.ts` is an aggregate export file and will not be elaborated further.

#### initialState

`initialState.ts` aggregates all slice initialStates.

```ts
import { CRUDState, initialCRUDState } from './slices/crud';

export type EditorStoreState = CRUDState & AnotherState;

export const initialState: EditorStoreState = {
  ...initialCRUDState,
};
```

If later expanded to multiple slices, simply aggregate and export the corresponding state in the same way.

#### selectors

Selectors are exported from their respective slices for direct external use.

```ts
export { crudSelectors } from './slices/crud';
export { chatSelectors, topicSelectors } from './slices/chat';
export { sessionSelectors } from './slices/session';
```

#### store

Now, let's take a look at `store.ts`.

```ts
import { devtools } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';
import { StateCreator } from 'zustand/vanilla';

import { EditorStoreState, initialState } from './initialState';
import { CRUDAction, createCRUDSlice } from './slices/crud';

//  ===============  Aggregate createStoreFn ============ //

export type EditorStore = CRUDAction & EditorStoreState;

const createStore: StateCreator<EditorStore, [['zustand/devtools', never]]> = (...parameters) => ({
  ...initialState,
  ...createCRUDSlice(...parameters),
});

//  ===============  Implement useStore ============ //

export const useEditorStore = createWithEqualityFn<EditorStore>()(
  devtools(createStore, {
    name: 'EditorStore',
  }),

  shallow,
);
```

The key code here is `createStore`, which aggregates all slices and returns a complete editor Store for store initialization.

The `createWithEqualityFn` function wraps relevant middleware, and by default, it uses the `devtools` middleware to provide developer tool support and replaces the default comparison function with `shallow` to optimize performance.

### Slice Section

The initState and selector in each slice are similar to non-slice. Therefore, they will not be elaborated further. Let's focus on `slices/crud/action.ts`:

```ts
import { StateCreator } from 'zustand/vanilla';

import { EditorStore } from '@/store/edtior';

export interface CrudAction {
  // Relevant business actions...
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

Through the `import` statement, the code then defines a `CrudAction` interface to describe business operations.

The `createCrudSlice` is declared as a function that takes `set` and `get` as parameters and returns an object containing the editor state and business operations.

```ts
StateCreator<EditorStore, [['zustand/devtools', never]], [], CrudAction>;
```

The type definition introduces `StateCreator` as the full type, and `CrudAction` at the end represents the actions that need to be implemented in this slice. The middle `[['zustand/devtools', never]]` indicates that this slice is wrapped by the `devtools` middleware, allowing the `set` method to accept middleware parameters.

This implementation ensures that each slice has the ability to perceive all states and call all methods, while focusing only on its defined methods and states, thus achieving convergence of focus.

## Feature Development

With the slice layering pattern, we can ensure that each slice's functional modules are controllable and do not expand indefinitely. They can be split into common, business, or internal slices as needed.

Once the framework is controllable, we can focus on feature development. The core feature development workload exists in two areas: action and selector. Let's first discuss the action part.

### Action Development

Actions, being ordinary function methods, support both synchronous and asynchronous operations in theory. However, based on our past practical experience, actions can be divided into two categories:

- Data state changes: For example, modifying the current user's status information, modifying login status, marking viewed guides, etc.
- Business logic orchestration: For example, a login process includes requests, success judgment, failure judgment, etc.

We strongly recommend consolidating the first category of data state changes into a single `dispatchXXX` method and sinking the data change logic into a reducer. In SortableTree, a `dispatchTreeData` method is consolidated:

```ts
const crudSlice = (set, get) => ({
  dispatchTreeData: (payload) => {
    const { treeData } = get();
    const nextTreeData = treeDataReducer(treeData, payload);

    set({ treeData: nextTreeData });
  },
});
```

The benefit of this approach is to ensure the atomicity of data changes. By sinking the data change logic into a reducer, it can prevent the logic from being scattered across various actions, leading to uncontrolled data changes.

This approach also brings several benefits:

1. **Facilitates controlled capability**: After atomic data changes, by adding an `onTreeDataChange` at the bottom of `dispatchTreeData`, it can easily achieve controlled data state changes, making it easy to transform the application into a component.
2. **Semantic data changes**: By naming the dispatch corresponding payload methods, it can easily make the originally difficult data changes semantic. For example, `dispatchTreeData({ type: 'toggleCollapse', id:'123' })` can be easily understood as expanding/collapsing the node with id 123.
3. **Enhances state maintainability**: After unifying the dispatch of data changes, we can easily change the state by calling dispatch outside the store or inside the store, significantly reducing maintenance costs.

### Reducer Development

In addition, sinking the data change logic into a reducer brings corresponding benefits. Since a reducer is just a pure function, it can easily implement unit testing. Combined with AI, we can achieve one-line requirement implementation of reducers and generate test code with a single click. The development and maintenance costs of reducers will be greatly reduced.

| Feature Implementation                                                                           | Unit Testing                                                                                                                  |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| ![](https://gw.alipayobjects.com/zos/kitchen/qcmFMlllP/f588a003-6317-4ef2-9728-491c9bda3c05.png) | ![](https://github-production-user-asset-6210df.s3.amazonaws.com/28616219/261315145-01f8542f-e748-4334-b8fa-67b929fa1795.png) |

### Selector Development

Selectors are generally used to map the data stored in the store to the content needed for display on the page. Therefore, the data stored in the store can be transformed through selectors. For example:

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

Where `chatsTokenCount` is a selector, aimed at calculating the token count in messages. It transforms the `chats` array in the store into a numerical value for external use.

```ts
export const chatsTokenCount = (s: SessionStore): number[] => {
  const chats = currentChatsWithHistoryConfig(s);
  return encode(chats.map((m) => m.content).join('')).length;
};
```

Since a selector is just a function, it can also be easily integrated with simple unit testing.

Using a selector on the page is also straightforward, simply import it as needed. Since the transformed data type is `number`, the state type perceived by React is also `number`. Therefore, even if there are other state changes in `chats` that do not affect the calculation result (such as updating the message time), the component will not trigger a re-render.

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
