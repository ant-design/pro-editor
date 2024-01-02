---
title: Highlight
group: Basic
---

# Highlight Code Highlighting

## When to use

Use when displaying code without the need to edit it.

## Code Demo

### auto theme

<code src="./demos/auto.tsx" ></code>

### Specify Language

You can specify the language for highlighting using `language` and the theme using `theme`.

<code src="./demos/basic.tsx" ></code>

### Display Code Block Line Numbers

You can specify whether to display line numbers for the code block using `lineNumber`.

<code src="./demos/lineNumber.tsx" ></code>

### Theme & Language & Line Numbers & Renderer

You can view the effects of different languages in different themes through this example.

<code src="./demos/theme.tsx" ></code>

### Default Container Wrapper

You can use `containerWrapper` to render a default outer container, which provides some basic capabilities such as expand/collapse and language switching.

<code src="./demos/wrapper.tsx" ></code>

## API Parameters

### Highlight

| Parameter    | Description                                                                                            | Type    | Default |
| :----------- | :----------------------------------------------------------------------------------------------------- | :------ | :------ |
| language     | Specify the language type, see table below                                                             | string  | -       |
| showLanguage | Whether to display the language tag                                                                    | boolean | true    |
| theme        | Specify the theme, options: `dark`, `light`,`auto`                                                     | string  | `auto`  |
| lineNumber   | Specify whether to enable line numbers for the code block, options: `true`, `false`                    | boolean | false   |
| copyable     | Specify whether to display a copy button for the code block, options: `true`, `false`                  | boolean | true    |
| height       | Specify the height of the code block, for scenarios where the code block height needs to be controlled | number  | -       |
| type         | Specify the rendering type, options: `block`, `pure` (pure mode removes container styles)              | `block` | -       |

### Currently Supported Language List

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

### Rendering Notes

Highlight uses [Shiki](https://github.com/shikijs/shiki) for rendering by default. Shiki uses TextMate grammars for more precise highlighting, but it requires loading additional wasm files, which may result in poor performance in case of poor network conditions. If initialization fails, the component will use [highlight.js](https://highlightjs.org/) as a replacement renderer.
