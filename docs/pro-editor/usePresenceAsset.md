---
title: usePresenceAsset
group: Hooks
order: 2
---

该方法可以获取编辑器中的资产的感知视图状态

```ts
import { usePresenceAsset } from '@ant-design/pro-editor';

const getPresenceAsset = () => {
  const [presence, setPresence] = usePresenceAsset();

  useEffect(() => {
    console.log(setPresence);
  }, [presence]);

  return null;
};
```

:::warning

注：该 hook 只能在被 `ProEditorProvider` 包裹的组件中使用，或者在 `<ProEditor />` 组件的子组件中使用。

:::
