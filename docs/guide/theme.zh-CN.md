---
title: 主题配置
order: 5
group:
  title: 快速上手
---

# 主题配置

整体 `ProEditor` 的样式和 `antd` 一脉相传，我们采用了一个企业级的主题切换框架来做 `ProEditor` 的主题配置能力: [antd-style](https://github.com/ant-design/antd-style)

## 暗色模式

<code src="./demos/Theme/darkTheme.tsx" ></code>

## 亮色模式

<code src="./demos/Theme/lightTheme.tsx" ></code>

你甚至可以通过简单配置 ThemeProvider 来做到和系统主题色自适应，更多的能力麻烦查看 [antd-style](https://github.com/ant-design/antd-style)

```js
<ThemeProvider appearance="dark">// any antd & ProEditor components</ThemeProvider>
```
