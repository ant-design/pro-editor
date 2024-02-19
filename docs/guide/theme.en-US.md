---
title: Theme Configuration
order: 5
group:
  title: Quick Start
---

# Theme Configuration

The overall style of `ProEditor` is consistent with that of `antd`. We have adopted an enterprise-level theme switching framework to empower the theme configuration capabilities of `ProEditor`: [antd-style](https://github.com/ant-design/antd-style)

## Dark Mode

<code src="./demos/Theme/darkTheme.tsx" ></code>

## Light Mode

<code src="./demos/Theme/lightTheme.tsx" ></code>

You can even achieve system theme color adaptation with a simple configuration of the ThemeProvider. For more capabilities, please refer to [antd-style](https://github.com/ant-design/antd-style).

```js
<ThemeProvider appearance="dark">// any antd & ProEditor components</ThemeProvider>
```
