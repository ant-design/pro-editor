---
title: Highlight
atomId: Highlight
group: Basic
---

# Highlight

Used to display code, Highlight defaults to using [Shiki](https://github.com/shikijs/shiki) for rendering. Shiki uses a TextMate grammar for more precision.

## Code Demo

<code src="./demos/auto.tsx" title="Automatic Theme" description="By default, `auto` is enabled, which will automatically switch themes based on the current environment"></code>

<code src="./demos/basic.tsx" title="Specify Language and Theme" description="You can specify the language for highlighting using `language` and the highlighting theme using `theme`"></code>

<code src="./demos/lineNumber.tsx"  title="Display Code Block Line Numbers"
description="You can specify whether to display line numbers for the code block using `lineNumber`"></code>

<code src="./demos/theme.tsx"  title="Switch Language and Theme"
description="You can use this example to see the effects of different languages in different themes"></code>

## API Parameters

### Highlight

| Parameter    | Description                                                                                        | Type    | Default |
| :----------- | :------------------------------------------------------------------------------------------------- | :------ | :------ |
| language     | Specifies the language type, see table below                                                       | string  | -       |
| showLanguage | Whether to display the language tag                                                                | boolean | true    |
| theme        | Specifies the theme, options: `dark`, `light`, `auto`                                              | string  | `auto`  |
| lineNumber   | Specifies whether to enable code block line numbers, options: `true`, `false`                      | boolean | false   |
| copyable     | Specifies whether to display a copy button for the code block, options: `true`, `false`            | boolean | true    |
| height       | Specifies the code block height, for scenarios where the code block height needs to be fixed       | number  | -       |
| type         | Specifies the rendering type, options: `block`, `pure`. In pure mode, container styles are removed | `block` | -       |

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

### Rendering Instructions
