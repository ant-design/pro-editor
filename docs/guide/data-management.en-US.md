---
title: Best Practices for Data Flow
group:
  title: Data Flow
  order: 10
---

## Best Practices for Data Flow

The editor scenario is different from the web page, with a large amount of rich interactive capabilities. It is crucial to design a data flow architecture that is easy to develop and maintain.

## Conceptual Elements

| Conceptual Term | Explanation                                                                                                                                                                                                                                                                                                                                                            |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| store           | The store contains the application's state and actions. It allows access to and modification of the state in the application rendering.                                                                                                                                                                                                                                |
| state           | The state refers to the application's data, storing the current state of the application. Any change in the state will trigger a re-rendering of the application to reflect the new state.                                                                                                                                                                             |
| action          | An action is an operation function that describes the interactive events in the application. Actions are usually triggered by user interactions, network requests, or timers. Actions can be synchronous or asynchronous.                                                                                                                                              |
| reducer         | A reducer is a pure function that takes the current state and action as parameters and returns a new state. It is used to update the application's state based on the action type. Reducer is a pure function without side effects, therefore it is always a synchronous function.                                                                                     |
| selector        | A selector is a function used to retrieve specific data from the application's state. It takes the application's state as a parameter and returns computed or transformed data. Selectors can combine parts of the state or multiple states to generate derived data. Selectors are commonly used to map the application's state to component props for component use. |
| slice           | A slice is a concept used to express a part of the data model's state. It specifies a state slice and the related state, action, reducer, and selector. Using slices, a large store can be split into smaller, maintainable subtypes.                                                                                                                                  |

## Structural Layering

At different levels of complexity, the organization of the store structure can vary significantly:

### Low Complexity

Generally includes 2-5 states and 3-4 actions. The structure at this level usually consists of a `store.ts` and an `initialState.ts`.

```bash
DataFill/store
├── index.ts
├── initialState.ts
```

### Moderate Complexity

Moderate complexity involves 5-15 states, 5-10 actions, and may include selector implementation for derived states. It may also involve reducer simplifying some data change complexity. The structure at this level generally consists of a `store.ts`, an `initialState.ts`, and a `selectors.ts`/`reducer.ts`.

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

Medium complexity involves 15-30 states, 10-20 actions, and likely includes selectors to aggregate derived states and reducers to simplify some data change complexity. At this level, a single action store structure is difficult to maintain, often leading to the decomposition of multiple slices for managing different actions.

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

1. `selectors.ts`: Contains selector functions used to retrieve derived states from the store. Selector functions can aggregate and calculate derived states as needed, providing them to components for use.
2. `slices folder`: Decomposed modules for managing different actions. Each module generally includes a Slice containing related actions.
   - `crudSlice.ts`: Manages operations for adding, deleting, and modifying tree data.
   - `dndSlice.ts`: Manages drag and drop related operations.
   - `selectionSlice.ts`: Manages operations related to selected states.
3. `treeDataReducer.ts`: Manages the reducer for tree data. It handles atomic operations related to changes in `treeData`, such as adding nodes, deleting nodes, and dragging nodes.

### High Complexity

High complexity involves over 30 states and over 20 actions. It inevitably requires slice modularization. Each slice declares its own initState, action, reducer, and selector.

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

Although the directory structure of this data flow seems complex, with the modularization and fractal architecture, we can easily find the corresponding modules and maintain new features and iterations with ease.

## Best Practices for Directory Structure in Editor Scenarios

In the editor scenario, we should assume that it will eventually evolve into a high-complexity data flow. Therefore, from the beginning, we should split the data flow into slices in the directory structure, where each slice should be an independent module containing its own initState, action, reducer, and selector.

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

`index.ts` is an aggregate export file, not further elaborated.

#### initialState

`initialState.ts` aggregates all slice initialStates.

```ts
import { CRUDState, initialCRUDState } from './slices/crud';

export type EditorStoreState = CRUDState & AnotherState;

export const initialState: EditorStoreState = {
  ...initialCRUDState,
};
```

If there are multiple slices in the future, simply aggregate and export the corresponding state in the same way.

#### selectors

Selectors are exported from their respective slices for direct external use.

```ts
export { crudSelectors } from './slices/crud';
export { chatSelectors, topicSelectors } from './slices/chat';
export { sessionSelectors } from './slices/session';
```

#### store

Now let's take a look at `store.ts`.

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

The `createWithEqualityFn` function wraps the relevant middleware in use, defaulting to using the `devtools` middleware to provide developer tool support and replacing the default comparison function with `shallow` to optimize performance.

### Slice Section

The initState and selector of each slice are similar to non-slice. Therefore, not much elaboration is needed. Let's focus on `slices/crud/action.ts`:

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

Through the `import` statement, the code then defines a `CrudAction` interface to describe the business operations.

The `createCrudSlice` is declared as a function that takes `set` and `get` as parameters and returns an object containing the editor state and business operations.

```ts
StateCreator<EditorStore, [['zustand/devtools', never]], [], CrudAction>;
```

The type definition introduces `StateCreator` as the full type, and `CrudAction` at the end represents the actions that need to be implemented in this slice. The middle `[['zustand/devtools', never]]` indicates that this slice is wrapped by the `devtools` middleware, allowing the `set` method to accept middleware parameters.

This is the key to implementing the Slice pattern while ensuring type friendliness.

After writing this way, we can use the `get()` method to obtain the full `EditorStore` state and actions. If the declared `CrudAction` type and implementation do not match, `createCRUDSlice` will prompt an error, without any additional interference.

This way, each slice has the ability to perceive all states and call all methods, while focusing only on its own defined methods and states, effectively converging the focus.

## Feature Development

With the slice layering pattern, we can ensure that each slice's functional modules are controllable and do not expand indefinitely. They can be split into common, business, or internal slices as needed.

Once the framework is controllable, we can focus on feature development. The development workload for core features exists in two areas: action and selector. Let's first discuss the action part.

### Action Development

Actions, being ordinary function methods, support both synchronous and asynchronous operations in theory. However, based on our past practical experience, actions can be divided into two categories:

- Data state changes: For example, modifying the current user's status information, modifying login status, marking viewed guides, etc.
- Business logic orchestration: For example, a login process, which includes requests, success judgment, failure judgment, and so on.

We strongly recommend consolidating the first category of data state changes into a `dispatchXXX` method and sinking the data change logic into a `reducer`. In SortableTree, a `dispatchTreeData` method is consolidated:

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

1. **Convenient for controlled capabilities**: After atomic data changes, by adding an `onTreeDataChange` at the bottom of `dispatchTreeData`, data state can be easily controlled, making it easy to convert the application into a component.
2. **Semantic data changes**: By naming the payload methods in dispatch, it can semantically clarify the otherwise difficult-to-construct data changes. For example, `dispatchTreeData({ type: 'toggleCollapse', id:'123' })` can be easily understood as expanding/collapsing the node with id 123.
3. **Enhanced state maintainability**: After consolidating the data change logic in dispatch, we can easily change the state by calling dispatch outside the store or inside the store, significantly reducing maintenance costs.

### Reducer Development

In addition, sinking the data change logic into a reducer brings corresponding benefits. Since the reducer is just a pure function, it can be easily unit tested. Combined with AI, we can implement reducers for one-sentence requirements and generate test code with a single click. The development and maintenance costs of reducers will be greatly reduced.

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

Where `chatsTokenCount` is a selector, aimed at calculating the token count in messages. It transforms the `chats` array in the store into a value for external use.

```ts
export const chatsTokenCount = (s: SessionStore): number[] => {
  const chats = currentChatsWithHistoryConfig(s);
  return encode(chats.map((m) => m.content).join('')).length;
};
```

Since a selector is just a function, it can also be easily integrated with simple unit testing.

Using a selector on the page is also straightforward, simply import as needed. Since the transformed data type is `number`, the state type perceived by React is also `number`. Therefore, even if there are other state changes in `chats` that do not affect the calculation result (such as updating the message time), the component will not trigger a re-render.

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
