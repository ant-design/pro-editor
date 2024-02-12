---
nav: Components
group: Basic
title: Snippet
---

# Snippet Code Snippet

The Snippet component is used to display code snippets with syntax highlighting. Customization can be done with symbols and syntax highlighting languages before the content. The component also supports copying through the included CopyButton by default.

## Code Demo

<code src="./demos/index.tsx" nopadding title="Basic Example"></code>

<code src="./demos/spotlight.tsx" nopadding title="Spotlight Background Effect" description="You can set the `spotlight` attribute to enable the spotlight background effect"></code>

## APIs

| Property  | Description                                   | Type               | Default |
| :-------- | :-------------------------------------------- | :----------------- | :------ |
| children  | Content displayed in the component            | string             | -       |
| copyable  | Whether the content can be copied             | boolean            | true    |
| language  | Language of the component content             | string             | 'tsx'   |
| spotlight | Whether to add a spotlight background effect  | boolean            | false   |
| symbol    | Symbol displayed before the component content | string             | -       |
| type      | Rendering type of the component               | 'ghost' \| 'block' | 'ghost' |
