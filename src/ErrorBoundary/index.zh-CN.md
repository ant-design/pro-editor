---
title: ErrorBoundary 错误提示
order: 100
atomId: ErrorBoundary
group:
  title: 面板模块
  order: 1
---

# ErrorBoundary 错误提示

## 示例

### 生产环境

<code src='./demos/_prod.tsx' ></code>

### 开发环境

开发时会直接显示报错信息：

<code src='./demos/_dev.tsx' ></code>

## API

错误边界组件属性接口

| 属性名            | 类型                | 描述        |
| -------------- | ----------------- | --------- |
| children       | `React.ReactNode` | 子组件       |
| onExportConfig | `() => void`      | 导出配置项回调函数 |
| onRetry        | `() => void`      | 重试回调函数    |
| showDev        | `boolean`         | 是否显示开发者选项 |
