---
title: DataPreviewer 数据预览器
atomId: DataPreviewer
group: 面板模块
---

# DataPreviewer 数据预览器

## 何时使用

预览数据时使用，没有数据时显示空状态。

## 代码演示

### 基础使用

<code src="./demos/basic.tsx" ></code>

### 空数据

<code src="./demos/empty.tsx" ></code>

### 不显示类型

<code src="./demos/showType.tsx" ></code>

### 附加按钮渲染

<code src="./demos/extra.tsx" ></code>

### 空数据状态渲染

<code src="./demos/renderEmpty.tsx" ></code>

### 空数据额外按钮渲染

<code src="./demos/emptyAction.tsx" ></code>

## API

| 属性名             | 类型                                   | 描述              |
| --------------- | ------------------------------------ | --------------- |
| data            | `Record<string, any>[]`              | 数据项             |
| columns         | `{ title: string, dataIndex: any}[]` | 表格形态数据栏目        |
| collapsed       | `boolean`                            | 受控收起            |
| renderEmpty     | `(node: ReactNode) => ReactNode`     | 渲染空状态           |
| emptyAction     | `ReactNode`                          | 空状态立即尝试按钮右侧渲染   |
| onVisibleChange | `(visible: boolean) => void`         | 展开或者隐藏状态的回调     |
| onEmptyClick    | `() => void`                         | 点击 “立即尝试” 按钮的回调 |
| onResetClick    | `() => void`                         | 重置按钮回调          |
| showType        | `boolean`                            | 是否显示数据类型        |
| extra           | `ReactNode`                          | 额外节点展示          |
