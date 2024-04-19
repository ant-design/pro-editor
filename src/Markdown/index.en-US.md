---
group: Basic
title: Markdown
atomId: Markdown
description:
---

# Markdown Document Display

Markdown is a React component used to render Markdown text. It supports various Markdown syntax such as headings, lists, links, images, code blocks, and more. It is commonly used in documentations, blogs, and other text-intensive applications.

## Code Demo

<code src="./demos/index.tsx" nopadding title="Default Rendering"></code>

<code src="./demos/code.tsx" nopadding title="Code"></code>

<code src="./demos/htmlPlugin.tsx" nopadding title="Custom Plugins Input" description="We have built-in some plugins for Markdown conversion, but if you have other requirements, you can customize the input of `rehypePlugins` and `remarkPlugins` to enhance the current rendering capabilities. The example is a sample input of rehypeRaw for rendering HTML capabilities. It is worth noting that there may be parsing conflicts between different plugins, which may need to be resolved by the user."></code>

<code src="./demos/renderComponets.tsx" nopadding title="Custom Partial Components" description="You can customize the rendering of some React-Markdown components through the Components property. For example, here is a case where the current A tag is modified"></code>

## APIs

| Property      | Type                              | Description                               |
| ------------- | --------------------------------- | ----------------------------------------- |
| children      | string                            | The Markdown content to render.           |
| className     | string                            | The class name of the Markdown component. |
| onDoubleClick | () => void                        | Double-click event handler.               |
| style         | CSSProperties                     | The style of the Markdown component.      |
| rehypePlugins | Markdown rehypePlugins Types      | Custom rehype plugins.                    |
| remarkPlugins | remarkPlugins rehypePlugins Types | Custom remark plugins.                    |
