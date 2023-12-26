---
group: Basic
title: Markdown
description: Markdown is a React component for rendering Markdown text. It supports various Markdown syntax such as headings, lists, links, images, code blocks, etc. It is commonly used in document, blog, and other text-intensive applications.
---

## Default

ProEditor has a built-in default Markdown renderer, using React-Markdown, and our own Highlight and Snippet for rendering code blocks.

You can also customize it by passing in props like components to React-Markdown, and the excess will be passed through.

<code src="./demos/index.tsx" nopadding></code>

## Customizing Input Plugins

We have built-in some plugins for Markdown conversion, but if you have other needs, you can customize the input rehypePlugins and remarkPlugins to expand the current rendering capabilities.

For example, below is an example of using rehypeRaw to render HTML capabilities.

> It should be noted that there may be parsing conflicts between different plugins, which may need to be resolved by the user.

<code src="./demos/htmlPlugin.tsx" nopadding></code>

## APIs

| Property      | Type                              | Description                            |
| ------------- | --------------------------------- | -------------------------------------- |
| children      | string                            | The Markdown content to render.        |
| className     | string                            | Class name for the Markdown component. |
| onDoubleClick | () => void                        | Double-click event handler function.   |
| style         | CSSProperties                     | Style for the Markdown component.      |
| rehypePlugins | Markdown rehypePlugins Types      | Custom rehype plugins.                 |
| remarkPlugins | remarkPlugins rehypePlugins Types | Custom remark plugins.                 |
