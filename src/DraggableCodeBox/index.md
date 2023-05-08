---
title: DraggableCodeBox 可拖拽代码框
group: 基础组件
---

# DraggableCodeBox 可拖拽代码框

## 何时使用

需展示收起代码块时使用。

## 基本使用

<code src="./demos/normal.tsx" ></code>

## 多栏展示

<code src="./demos/double.tsx" ></code>

## API

### DraggableCodeBox

| 参数          | 说明           | 类型            | 默认值 | 版本 |
| :------------ | :------------- | :-------------- | :----- | :--- |
| defaultHeight | 代码框初始高度 | `number`        | `184`  | -    |
| items         | 代码块列表     | `CodeBoxItem[]` | `[]`   | -    |

### CodeBoxItem

| 参数    | 说明           | 类型     | 默认值     | 版本 |
| :------ | :------------- | :------- | :--------- | :--- |
| data    | 代码内容       | `string` | -          | -    |
| title   | 代码框标题     | `string` | -          | -    |
| btnText | 复制按钮的文案 | `string` | `复制代码` | -    |
