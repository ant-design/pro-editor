---
title: TipGuide 关注点引导
atomId: TipGuide
group: 基础组件
---

# TipGuide 关注点引导

## 何时使用

简单场景引导用户关注。

## 代码演示

### 基础

注意 `guideKey` 必填，且唯一。

<code src="./demos/normal.tsx" ></code>

### 偏移

可以通过 `offsetY` 将引导点进行垂直方向偏移。

<code src="./demos/offset.tsx" ></code>

## API

| 参数      | 说明                           | 类型                        | 默认值   |
| :-------- | :----------------------------- | :-------------------------- | :------- |
| title     | 引导标题                       | `string`                    | -        |
| placement | ToolTip 位置                   | `TooltipProps['placement']` | 'bottom' |
| offsetY   | 纵向偏移值                     | number                      | -        |
| maxWidth  | 最大宽度                       | number                      | 300      |
| guideKey  | 最用于持久化该引导值状态, 必填 | string                      | -        |
