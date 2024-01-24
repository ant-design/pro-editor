---
title: DataPreviewer
group: Panel
---

# DataPreviewer Data Previewer

## When To Use

Used for previewing data, and displaying an empty state when there is no data.

## Code Demo

### Basic Usage

<code src="./demos/basic.tsx" ></code>

### Empty Data

<code src="./demos/empty.tsx" ></code>

### Additional Button Rendering

<code src="./demos/extra.tsx" ></code>

### Empty Data State Rendering

<code src="./demos/renderEmpty.tsx" ></code>

### Rendering Additional Button in Empty Data State

<code src="./demos/emptyAction.tsx" ></code>

## API

| Property        | Type                                 | Description                                   |
| --------------- | ------------------------------------ | --------------------------------------------- |
| data            | `Record<string, any>[]`              | Data items                                    |
| columns         | `{ title: string, dataIndex: any}[]` | Table form data columns                       |
| collapsed       | `boolean`                            | Controlled collapse                           |
| renderEmpty     | `(node: ReactNode) => ReactNode`     | Render empty state                            |
| emptyAction     | `ReactNode`                          | Render button on the right of the empty state |
| onVisibleChange | `(visible: boolean) => void`         | Callback for expanding or hiding state        |
| onEmptyClick    | `() => void`                         | Callback for clicking the "Try Now" button    |
| onResetClick    | `() => void`                         | Reset button callback                         |
| extra           | `ReactNode`                          | Additional node display                       |
