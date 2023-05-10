---
title: SortableList 可排序列表
group:
  title: 可排序组件
  order: 1
---

# SortableList 可排序列表

## 何时使用

简单排序表单场景。

## 代码演示

### 基本使用

提供 `renderContent()` 方法由用户自定义表单区域，更加灵活。

<code src="./demos/normal.tsx" ></code>

### 受控使用

提供 `useSortableList()` hook 获取组件实例，用户可以控制数据更新的时间。

<code src="./demos/controlled.tsx" ></code>

### 自定义创建按钮

提供 `creatorButtonProps` 属性方便配置自定义创建按钮的文案和初始化生成逻辑。

<code src="./demos/custom.tsx" ></code>

### 使用 ref 实现添加

提供传统的 `ref` 方式关联组件实例，可实现自定义功能，如将添加按钮渲染到组件右上方。

<code src="./demos/ref.tsx" ></code>

### 自定义列表标题

提供 `renderHeader()` 方法可自定义列表标题。

<code src="./demos/header.tsx" ></code>

### 自定义操作项

提供 `actions` 配置项可自定义用户操作项，`hideRemove` 属性可以隐藏删除操作，完全自定义。

<code src="./demos/actions.tsx" ></code>

### 开启紧凑模式

提供 `compact` 配置型开启紧凑模式，开启后把手和操作项会浮动在内容区域内部，需用户自行调整间距。

<code src="./demos/compact.tsx" ></code>

### Provider

为了方便用户在更高的上下文中通过 `useStore()` 方法获得组件数据的范围，我们提供了 `SortableListProvider` 由用户控制 Provider 的作用范围。

<code src="./demos/provider.tsx" ></code>

### 空数据

当没有数据时，列表显示空状态。

<code src="./demos/empty.tsx" ></code>

## API

<API id="SortableList" />
