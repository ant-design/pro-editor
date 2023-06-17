---
title: ProEditorProvider
group: 组件
---

# ProEditorProvider

如果：

- 希望在不是 ProEditor 组件子元素的组件中使用 `useProEditor`、useConfig、`useViewport` 等 ProEditor 钩子；
- 在页面上有多个 ProEditor 实例；
- 需要在不是 ProEditor 组件子元素的组件中访问内部状态，或使用 ProEditor 所提供的数据方法。

那么你就需要用 `ProEditorProvider` 包裹相应的应用组件。
