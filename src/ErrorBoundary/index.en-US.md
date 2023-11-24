---
title: ErrorBoundary
order: 100
atomId: ErrorBoundary
group: Basic
---

# ErrorBoundary Error Prompt

## Example

### Production Environment

<code src='./demos/_prod.tsx' ></code>

### Development Environment

Error messages will be displayed directly during development:

<code src='./demos/_dev.tsx' ></code>

## API

Error boundary component property interface

| Property       | Type              | Description                            |
| -------------- | ----------------- | -------------------------------------- |
| children       | `React.ReactNode` | Child component                        |
| onExportConfig | `() => void`      | Export configuration callback function |
| onRetry        | `() => void`      | Retry callback function                |
| showDev        | `boolean`         | Whether to display developer options   |
