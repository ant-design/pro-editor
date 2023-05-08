---
title: useProEditor
group: Hooks
order: 1

nav:
  title: 文档
  order: 1
  path: /docs
---

该方法为一个 React Hook，用于获取 ProEditor 编辑器的实例对象。以下是使用方法：

```tsx | pure
import { useProEditor } from '@ant-design/pro-editor';

// 在组件中调用 useProEditor 方法：
const MyComponent = () => {
  const editor = useProEditor();

  // 在这里可以使用 editor 对象来访问 ProEditor 的属性和方法
  // 例如：
  const presenceEditor = editor.getPresenceEditor();
  const viewport = editor.getViewport();
  const config = editor.getConfig();
  const props = editor.getProps();

  return <div>My Component</div>;
};
```

<!-- <code src="../../demos/useProEditor.tsx" ></code> -->

:::warning

注：该 hook 只能在被 `ProEditorProvider` 包裹的组件中使用，或者在 `<ProEditor />` 组件的子组件中使用。

:::

可以使用 editor 对象来访问 ProEditor 的属性和方法：

- `getPresenceEditor`：获取当前 ProEditor 的 presenceEditor 对象；
- `getViewport`：获取当前 ProEditor 的 `viewport`；
- `getConfig`：获取当前 ProEditor 的 config；
- `getProps`：获取当前 ProEditor 的 props。

- 注意：以上方法返回的对象均为最新值，即每次调用都会返回最新的值。
