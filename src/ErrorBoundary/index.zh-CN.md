---
title: ErrorBoundary 错误提示
order: 100
atomId: ErrorBoundary
group:
  title: 面板模块
  order: 1
---

# ErrorBoundary 错误提示

通用错误提示面板

## 代码演示

<code src='./demos/_prod.tsx' title="生产环境"></code>

<code src='./demos/_dev.tsx' title="开发环境" description="开发时会直接显示报错信息"></code>

## API

错误边界组件属性接口

| 属性名         | 类型              | 描述               |
| -------------- | ----------------- | ------------------ |
| children       | `React.ReactNode` | 子组件             |
| onExportConfig | `() => void`      | 导出配置项回调函数 |
| onRetry        | `() => void`      | 重试回调函数       |
| showDev        | `boolean`         | 是否显示开发者选项 |
