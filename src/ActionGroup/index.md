---
title: ActionGroup 工具面板
atomId: ActionGroup
group: 基础组件
---

# ActionGroup 工具面板

## 何时使用

当你需要一个通用面板用于承载全局通用的「全屏、重做、撤销、删除」这一系列工具的地方，可以使用。

## 代码演示

### 基础

<code src="./demos/basic.tsx" ></code>

### 使用配置

<code src="./demos/config.tsx" ></code>

### 高度自定义

<code src="./demos/custom.tsx" ></code>

### 使用浮动面板

<code src="./demos/withPanel.tsx" iframe></code>

## API

| 属性名            | 类型                                                                            | 描述                             |
| ----------------- | ------------------------------------------------------------------------------- | -------------------------------- |
| className         | `string`                                                                        | 自定义的 classname               |
| style             | `React.CSSProperties`                                                           | 自定义 style                     |
| config            | `[]<ButtonConfig>`                                                              | 生成按钮的配置 config            |
| render            | `(defalutDom: React.ReactNode, config: Array<ButtonConfig>) => React.ReactNode` | 用于渲染自定义能力的 render 方法 |
| onFullScreenClick | `() => void`                                                                    | 全屏按钮点击的回掉               |
| onUndoClick       | `() => void`                                                                    | 撤销按钮点击的回掉               |
| onRedoClick       | `() => void`                                                                    | 重做按钮点击的回掉               |
| onDeleteClick     | `() => void`                                                                    | 删除按钮点击的回掉               |

### ButtonConfig

| 属性名  | 类型                  | 描述                   |
| ------- | --------------------- | ---------------------- |
| icon    | `React.ReactNode`     | 展示的 icon            |
| style   | `React.CSSProperties` | 每个配置按钮的单独样式 |
| key     | `key`                 | 每个按钮单独的 key     |
| onClick | `() => void`          | 按钮点击事件的回掉     |
