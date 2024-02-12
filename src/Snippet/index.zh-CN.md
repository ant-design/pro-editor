---
nav: 组件
group: 基础组件
title: Snippet 代码片段
---

# Snippet 代码片段

Snippet 组件用于显示带有语法突出显示的代码片段。可以在内容之前使用符号和语法突出显示的语言进行自定义。该组件还可以通过默认包含的 CopyButton 进行复制

## 代码演示

<code src="./demos/index.tsx" nopadding title="基础示例"></code>

<code src="./demos/spotlight.tsx" nopadding title="聚光灯背景效果" description="你可以设置 `spotlight` 属性来开启聚光灯背景效果"></code>

## APIs

| 参数      | 说明                   | 类型               | 默认值  |
| :-------- | :--------------------- | :----------------- | :------ |
| children  | 组件内显示的内容       | string             | -       |
| copyable  | 内容是否可以复制       | boolean            | true    |
| language  | 组件内容的语言         | string             | 'tsx'   |
| spotlight | 是否添加聚光灯背景效果 | boolean            | false   |
| symbol    | 组件内容前显示的符号   | string             | -       |
| type      | 组件的渲染类型         | 'ghost' \| 'block' | 'ghost' |
