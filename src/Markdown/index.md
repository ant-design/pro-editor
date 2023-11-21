---
nav: 组件
group: Content
title: Markdown
description: Markdown是一个用于渲染Markdown文本的React组件。它支持各种Markdown语法，如标题、列表、链接、图片、代码块等。它通常用于文档、博客和其他文本密集型应用中。
---

## Default

<code src="./demos/index.tsx" nopadding></code>

## APIs

| 属性名                | 类型          | 描述                       |
| --------------------- | ------------- | -------------------------- |
| children              | string        | 要渲染的 Markdown 内容。   |
| className             | string        | Markdown 组件的类名。      |
| fullFeaturedCodeBlock | boolean       | 是否启用完整功能的代码块。 |
| onDoubleClick         | () => void    | 双击事件处理函数。         |
| style                 | CSSProperties | Markdown 组件的样式。      |
