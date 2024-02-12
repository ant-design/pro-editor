---
title: ErrorBoundary
order: 100
atomId: ErrorBoundary
group:
  title: Panel
---

# ErrorBoundary Error Prompt

General error prompt panel

## Code Demo

<code src='./demos/_prod.tsx' title="Production Environment"></code>

<code src='./demos/_dev.tsx' title="Development Environment" description="Error messages will be displayed directly during development"></code>

## API

Error boundary component property interface

| Property       | Type              | Description                                         |
| -------------- | ----------------- | --------------------------------------------------- |
| children       | `React.ReactNode` | Child component                                     |
| onExportConfig | `() => void`      | Callback function for exporting configuration items |
| onRetry        | `() => void`      | Retry callback function                             |
| showDev        | `boolean`         | Whether to display developer options                |
