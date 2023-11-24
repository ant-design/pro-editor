---
group: Basic
title: Snippet
description: The Snippet component is used to display code snippets with syntax highlighting. It can be customized with symbols and syntax highlighting languages before the content. The component also supports copying via the included CopyButton.
---

# Snippet Code Snippet

## Default

<code src="./demos/index.tsx" nopadding></code>

## APIs

| Parameter | Description                                   | Type               | Default |
| :-------- | :-------------------------------------------- | :----------------- | :------ |
| children  | Content displayed within the component        | string             | -       |
| copyable  | Whether the content can be copied             | boolean            | true    |
| language  | Language of the component content             | string             | 'tsx'   |
| spotlight | Whether to add a spotlight background effect  | boolean            | false   |
| symbol    | Symbol displayed before the component content | string             | -       |
| type      | Rendering type of the component               | 'ghost' \| 'block' | 'ghost' |
