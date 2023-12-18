---
group: Basic
title: Markdown
description: Markdown is a React component for rendering Markdown text. It supports various Markdown syntax such as headings, lists, links, images, code blocks, etc. It is commonly used in document, blog, and other text-intensive applications.
---

## Default

ProEditor has a built-in default Markdown renderer, using React-Markdown, and our own Highlight and Snippet for rendering code blocks.

You can also customize it by passing in props like components to React-Markdown, and the excess will be passed through.

<code src="./demos/index.tsx" nopadding></code>

## APIs

| Property      | Type          | Description                               |
| ------------- | ------------- | ----------------------------------------- |
| children      | string        | The Markdown content to render.           |
| className     | string        | The class name of the Markdown component. |
| onDoubleClick | () => void    | Double-click event handler.               |
| style         | CSSProperties | The style of the Markdown component.      |
