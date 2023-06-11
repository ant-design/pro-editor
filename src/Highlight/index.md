---
title: Highlight 代码高亮
group: 基础组件
---

# Highlight 代码高亮

## 何时使用

展示代码时使用，不需要编辑代码时使用。

## 代码演示

### 指定语言

你可以通过 `language` 指定语言高亮，通过 `theme` 指定高亮主题。

<code src="./demos/basic.tsx" ></code>

### 展示代码块行号

你可以通过 `lineNumber` 指定是否需要展示代码块行号。

<code src="./demos/lineNumber.tsx" ></code>

### 使用 highlight.js 渲染器

Highlight 默认使用 [Shiki](https://github.com/shikijs/shiki) 渲染，Shiki 使用 TextMate 语法器更加精确，不过需要加载额外的 wasm 文件，在网络不好的情况下体验不佳。你可以通过设定渲染器为 [highlight.js](https://highlightjs.org/) 来替代。

<code src="./demos/highlight.js.tsx" ></code>

### 主题 & 语言 & 行号 & 渲染器

你可以通过这个示例查看不同语言在不同主题下的效果。

<code src="./demos/theme.tsx" ></code>

## API 参数

### Highlight

| 参数        | 说明                                             | 类型           | 默认值  |
| :---------- | :----------------------------------------------- | :------------- | :------ |
| language    | 指定语言类型，详见下表                           | string         | -       |
| theme       | 指定主题，可选 `dark`, `light`                   | string         | `light` |
| lineNumber  | 指定代码块行号是否开启，可选 `true`, `false`     | boolean        | false   |
| copyable    | 指定代码块是否展示复制按钮，可选 `true`, `false` | boolean        | true    |
| height      | 指定代码块高度，用于需要控制代码块高度固定的场景 | number         | -       |
| highlighter | 指定渲染器，可选 `highlight.js`, `shiki`         | `highlight.js` | -       |

### 目前支持的语言列表

- javascript
- typescript
- css
- java
- json
- markdown
- xml
- yaml
- python
- sql
