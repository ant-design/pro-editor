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

<code src="./demos/normal.tsx" ></code>

### 受控

使用 open 进行受控

<code src="./demos/controlled.tsx" ></code>

### 自定义 footer

<code src="./demos/footer.tsx" ></code>

你还可以通过自定义和受控的方式使用 localStorage 来在业务中使用。

<code src="./demos/localStorage.tsx" ></code>

### 偏移

可以通过 `offsetY` 将引导点进行垂直方向偏移。

<code src="./demos/offset.tsx" ></code>

## API

| 参数         | 说明                                | 类型                                      | 默认值   |
| :----------- | :---------------------------------- | :---------------------------------------- | :------- |
| title        | 引导标题                            | `string`                                  | -        |
| placement    | ToolTip 位置                        | `TooltipProps['placement']`               | 'bottom' |
| offsetY      | 纵向偏移值                          | number                                    | -        |
| maxWidth     | 最大宽度                            | number                                    | 300      |
| open         | 受控的 open 属性                    | boolean                                   | -        |
| onOpenChange | 当 open 属性变化时候的触发          | (open: boolean) => void                   | -        |
| defaultOpen  | 默认时候的打开状态                  | boolean                                   | true     |
| footerRender | 用于自定义 footer 部分的 render api | (dom: React.ReactNode) => React.ReactNode | -        |
