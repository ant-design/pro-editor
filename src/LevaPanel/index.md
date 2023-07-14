---
title: LevaPanel 属性面板
atomId: LevaPanel
group:
  title: 面板模块
  order: 1
---

# LevaPanel 属性面板

## 何时使用

基于 [Leva](https://leva.pmnd.rs/) 根据 JsonSchema 生成面板模块。

## 代码演示

### 基本使用

<code src="./demos/basic.tsx" ></code>

### 按钮组件配置

<code src="./demos/button.tsx" compact></code>

## API

| 属性名       | 类型                                                 | 描述                 |
| ------------ | ---------------------------------------------------- | -------------------- |
| schema       | `JSONSchema\<T\>`                                    | JSON Schema 配置项   |
| defaultValue | `T \| undefined`                                     | 表单默认值           |
| value        | `T \| undefined`                                     | 表单当前值           |
| onChange     | `(changedValue: Partial\<T\>, fullValue: T) => void` | 表单值变化的回调函数 |
| title        | `ReactNode`                                          | 标题                 |
