---
title: ProBuilderProvider
group: Components
---

# ProBuilderProvider

If you:

- Want to use `useProEditor`, `useConfig`, `useViewport`, and other ProEditor hooks in components that are not direct children of the ProEditor component;
- Have multiple instances of ProEditor on the page;
- Need to access internal state or use data methods provided by ProEditor in components that are not direct children of the ProEditor component.

Then you need to wrap the relevant application components with `ProBuilderProvider`.
