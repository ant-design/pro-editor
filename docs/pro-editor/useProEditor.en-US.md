---
title: useProEditor
group:
  title: Hooks
  order: 5
order: 1
---

This method is a React Hook used to obtain the instance object of the ProEditor editor. Here is how to use it:

```tsx | pure
import { useProEditor } from '@ant-design/pro-editor';

// Call the useProEditor method in the component:
const MyComponent = () => {
  const editor = useProEditor();

  // You can use the editor object here to access the properties and methods of ProEditor
  // For example:
  const presenceEditor = editor.getPresenceEditor();
  const viewport = editor.getViewport();
  const config = editor.getConfig();
  const props = editor.getProps();

  return <div>My Component</div>;
};
```

:::warning

Note: This hook can only be used in components wrapped by `ProBuilderProvider`, or in the child components of the `<ProEditor />` component.

:::

You can use the editor object to access the properties and methods of ProEditor:

- `getPresenceEditor`: Get the presenceEditor object of the current ProEditor;

- `getViewport`: Get the `viewport` of the current ProEditor;

- `getConfig`: Get the config of the current ProEditor;

- `getProps`: Get the props of the current ProEditor.

- Note: The objects returned by the above methods are always the latest values, meaning that each call will return the most up-to-date value.
