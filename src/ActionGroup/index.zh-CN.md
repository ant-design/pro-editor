---
title: ActionGroup 工具面板
atomId: ActionGroup
group: 基础组件
demo:
  cols: 2
---

# ActionGroup 工具面板

通用面板，用于承载全局通用的「全屏、重做、撤销、删除」这一系列工具

## 代码演示

<code src="./demos/basic.tsx" title="基本使用" description="通过配置 `items` 渲染"></code>
<code src="./demos/config.tsx" title='配置使用' description= "声明 `type` 为 `divider` 来渲染分隔符"></code>
<code src="./demos/dropMenu.tsx" title="dropdown" description="通过配置 `dropdownMenu` 可以在尾部渲染一个下拉内容"></code>
<code src="./demos/type.tsx" title="模式配置"></code>
<code src="./demos/custom.tsx" title='自定义' description= "通过 `render` 可以自定义渲染特殊的操作内容" ></code>
<code src="./demos/withPanel.tsx" iframe title="浮动面板中使用" description="配合 `DraggablePanel` 可以使得整个面板可浮动拖拽"></code>

## API

| 属性名              | 类型                                                                            | 描述                                                                                    |
| ------------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| className           | `string`                                                                        | 自定义的 classname                                                                      |
| style               | `React.CSSProperties`                                                           | 自定义 style                                                                            |
| items               | `[]<ActionIconItem>`                                                            | 生成按钮的配置 config                                                                   |
| dropdownMenu        | `[]<ActionGroupItem>`                                                           | 生成 drowDownMenuList 内容的 config                                                     |
| dropdownProps       | `[]<ActionGroupItem \| { type: 'divider' }>`                                    | 给 dropdownMenu 设置的自定义 Props，支持除了 Menu 外其余所有 antd dropdown Props 的设置 |
| dropdownMenuTrigger | `React.ReactNode`                                                               | 用于自定义 dropdownMenu 下拉的触发 Dom，默认为 DashOutlined 的 Icon                     |
| render              | `(defalutDom: React.ReactNode, config: Array<ButtonConfig>) => React.ReactNode` | 用于渲染自定义能力的 render 方法                                                        |
| onFullScreenClick   | `() => void`                                                                    | 全屏按钮点击的回调                                                                      |
| onUndoClick         | `() => void`                                                                    | 撤销按钮点击的回调                                                                      |
| onRedoClick         | `() => void`                                                                    | 重做按钮点击的回调                                                                      |
| onDeleteClick       | `() => void`                                                                    | 删除按钮点击的回调                                                                      |
| type                | `'ghost' \| 'block' \| 'pure'`                                                  | 整体的样式                                                                              |
| direction           | `'row' \| 'column'`                                                             | 图标排列时候的方向                                                                      |
| size                | `'default' \| 'large' \| number`                                                | 图标尺寸                                                                                |

### ActionGroupItem

| 属性名  | 类型                  | 描述                   |
| ------- | --------------------- | ---------------------- |
| icon    | `React.ReactNode`     | 展示的 icon            |
| style   | `React.CSSProperties` | 每个配置按钮的单独样式 |
| key     | `key`                 | 每个按钮单独的 key     |
| onClick | `() => void`          | 按钮点击事件的回调     |
| label   | `string`              | 用于展示按钮的提示文案 |
