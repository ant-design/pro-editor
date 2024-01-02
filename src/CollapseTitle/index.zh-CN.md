---
title: CollapseTitle 折叠容器
atomId: CollapseTitle
group: 基础组件
---

# CollapseTitle 折叠容器

可折叠容器，具备编辑器响应式交互。

## 何时使用

装配器，编辑器场景，用于展开和折叠内容。

## 代码演示

### 基础使用

<code src="./demos/basic.tsx" ></code>

### 默认展开

通过 `defaultExpand` 控制是否默认展开。

<code src="./demos/defaultexpand.tsx" ></code>

### 受控展开

通过 `expand` 属性控制展开过程，可用于自定义展开.

<code src="./demos/expand.tsx" ></code>

## API

| 参数           | 说明             | 类型                             | 默认值 |
| :------------- | :--------------- | :------------------------------- | :----- |
| defaultExpand  | 默认展开         | `boolean`                        | false  |
| expand         | 受控展开         | `boolean`                        | -      |
| title          | 标题             | `string`                         | -      |
| onExpandChange | 展开回调         | `(expand: boolean) => void`      | -      |
| extra          | 标题右侧扩展渲染 | `(expand: boolean) => ReactNode` | -      |
