---
title: CollapseTitle
atomId: CollapseTitle
group: Basic
---

# CollapseTitle Folding Container

A collapsible container with responsive interactive capabilities for the editor.

## When to use

Assemblies, editor scenarios, used to expand and collapse content.

## Code Demo

### Basic Usage

<code src="./demos/basic.tsx" ></code>

### Default Expand

Control whether to expand by `defaultExpand`.

<code src="./demos/defaultexpand.tsx" ></code>

### Controlled Expand

Control the expansion process through the `expand` property, which can be used for custom expansion.

<code src="./demos/expand.tsx" ></code>

## API

| Parameter      | Description                     | Type                             | Default |
| :------------- | :------------------------------ | :------------------------------- | :------ |
| defaultExpand  | Default expand                  | `boolean`                        | false   |
| expand         | Controlled expand               | `boolean`                        | -       |
| title          | Title                           | `string`                         | -       |
| onExpandChange | Expand callback                 | `(expand: boolean) => void`      | -       |
| extra          | Title right extension rendering | `(expand: boolean) => ReactNode` | -       |
