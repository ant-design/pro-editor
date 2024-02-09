---
title: Highlight
atomId: Highlight
group: Basic
---

# Highlight

## When to use

Use it to display code. Highlight uses [Shiki](https://github.com/shikijs/shiki) for rendering by default. Shiki uses the TextMate syntax parser for more precision, but it requires loading additional wasm files, which may result in poor performance in case of poor network conditions. If initialization fails, the component will use [highlight.js](https://highlightjs.org/) as a replacement.

## Code Demo

### Automatic Theme

<code src="./demos/auto.tsx" ></code>

### Disable Shiki

<code src="./demos/shiki.tsx" ></code>

### Specify Language

<code src="./demos/basic.tsx" ></code>

### Display Code Block Line Numbers

<code src="./demos/lineNumber.tsx" ></code>

### Theme & Language & Line Numbers & Renderer

<code src="./demos/theme.tsx" ></code>

## API Parameters

### Highlight

| Parameter    | Description                                                                                            | Type    | Default |
| :----------- | :----------------------------------------------------------------------------------------------------- | :------ | :------ |
| language     | Specify the language type, see the table below                                                         | string  | -       |
| showLanguage | Whether to display the language tag                                                                    | boolean | true    |
| theme        | Specify the theme, options: `dark`, `light`, `auto`                                                    | string  | `auto`  |
| lineNumber   | Specify whether to enable line numbers for the code block, options: `true`, `false`                    | boolean | false   |
| copyable     | Specify whether to display a copy button for the code block, options: `true`, `false`                  | boolean | true    |
| height       | Specify the height of the code block, used for scenarios where the code block height needs to be fixed | number  | -       |
| type         | Specify the rendering type, options: `block`, `pure`. In pure mode, the container style is removed     | `block` | -       |

### Currently supported language list

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

### Rendering Instructions
