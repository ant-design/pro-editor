---
title: usePresenceAsset
group: Hooks
order: 2
---

This method can obtain the perceptual view state of assets in the editor.

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

Note: This hook can only be used within components wrapped by `ProBuilderProvider`, or within the child components of the `<ProEditor />` component.

:::
