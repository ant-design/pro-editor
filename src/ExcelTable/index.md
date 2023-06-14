---
title: ExcelTable 类 Excel 表格组件
group: 面板模块
---

# ExcelTable 类 Excel 表格组件

基于 [handsontable](https://handsontable.com/) 进行上层封装的类 Excel 表格组件。

:::warning
注：目前该组件只用于本组件库内部消费，暂不考虑对外统一提供个性化能力支持， 目前如需要相似能力，建议使用 handsontable 。<a href="https://handsontable.com/docs/react-simple-example/">参考案例</a>
:::

## 基础案例

<code src="./demos/_basic.tsx" ></code>

## 默认值

<code src="./demos/_defaultData.tsx" ></code>

## 受控模式

<code src="./demos/_controlled.tsx" ></code>

## 隐藏工具条

<code src="./demos/_hideToolbar.tsx" ></code>

## API

| 属性名       | 类型                         | 描述             |
| ------------ | ---------------------------- | ---------------- |
| value        | `string[][]`                 | 当前数据值       |
| defaultValue | `string[][]`                 | 初始数据值       |
| onChange     | `(data: string[][]) => void` | 数据变化回调函数 |
| toolbar      | `false`                      | 工具条           |
