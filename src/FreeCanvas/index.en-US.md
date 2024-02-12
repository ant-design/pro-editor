---
title: FreeCanvas
atomId: FreeCanvas
group: Panel
---

# FreeCanvas Free Canvas

A free canvas encapsulation based on `ReactFlow`

## Code Demo

<code src='./demos/basic.tsx' ></code>

## API

### Basic Properties

| Property         | Type                           | Description                                     |
| ---------------- | ------------------------------ | ----------------------------------------------- |
| children         | `ReactNode`                    | The child elements of the free canvas component |
| viewport         | `Viewport`                     | The initial value of the viewport               |
| defaultViewport  | `Viewport`                     | The default value of the viewport               |
| control          | `boolean`                      | Whether to display the control panel            |
| onViewportChange | `(viewport: Viewport) => void` | Callback function when the viewport changes     |
| extraControlBtns | `React.ReactNode[]`            | Additional control buttons                      |

### Viewport

The Viewport object represents the coordinate system of a view, and includes the following properties:

| Property | Type   | Description                                             |
| -------- | ------ | ------------------------------------------------------- |
| x        | number | The x-coordinate of the top-left corner of the viewport |
| y        | number | The y-coordinate of the top-left corner of the viewport |
| zoom     | number | The zoom ratio of the viewport                          |
