---
title: EditorLayout 编辑器布局
atomId: Layout
group: 基础组件
---

# EditorLayout 编辑器布局

EditorLayout 是我们专门为了编辑器场景制作的编辑器布局组件

## 代码演示

<code src="./demos/basic.tsx" title="基础用法"></code>

<code src="./demos/single.tsx" title="只需要面板" description="你可以通过设置 `header` 和 `footer` 为 `false` 来隐藏头和尾的配置"></code>

<code src="./demos/noLeftPannel.tsx" title="关闭 panel" description="当然你也可以对某个 `pannel` 设置 false 来关闭其内容"></code>

### 改变布局

![layout-types](https://mdn.alipayobjects.com/huamei_re70wt/afts/img/A*-asvT7GkKIwAAAAAAAAAAAAADmuEAQ/original)

<code src="./demos/types.tsx" title="改变布局" description="你可以通过声明不同的 `types` 来渲染一些不同结构的布局，我们把布局分为 4 种，默认是 `Bottom` 模式，足以适应市面上大部分编辑器的场景。"></code>

<code src="./demos/themeType.tsx" title="布局主题类型" description="你可以指定 ThemeType 来切换一些简单的布局主题样式，你也可以对每个部分单独配置 ThemeType，会优先于全局的配置"></code>

> 注意：在 pure 模式下，我们会将原有的 Pannel 之间的间距、各部分的 Radius、背景色都会关闭，这个时候，如果你不给每一个区域加上颜色或者一些特殊 css 进行区分，是很难看清楚各个部分的。

<code src="./demos/dingding.tsx" title="对话布局" description="你可以简单通过配置和样式来搭建一个类似对话内容的布局"></code>

## APIs

### LayoutProps 布局 Props

| 属性         | 类型                          | 描述                                        |
| ------------ | ----------------------------- | ------------------------------------------- |
| header       | HeaderFooterSettings 或 false | 可选的头部设置，设置为 `false` 则隐藏。     |
| footer       | HeaderFooterSettings 或 false | 可选的底部设置，设置为 `false` 则隐藏。     |
| leftPannel   | PannelSettings 或 false       | 可选的左侧面板设置，设置为 `false` 则隐藏。 |
| rightPannel  | PannelSettings 或 false       | 可选的右侧面板设置，设置为 `false` 则隐藏。 |
| bottomPannel | PannelSettings 或 false       | 可选的底部面板设置，设置为 `false` 则隐藏。 |
| centerPannel | PannelSettings 或 false       | 可选的中心面板设置，设置为 `false` 则隐藏。 |
| type         | LayoutTypeEnum                | 可选的布局类型。                            |
| themeType    | ThemeLayoutType               | 可选的布局主题类型。                        |

### PannelSettings 面板设定

| 属性      | 类型                       | 描述                                         |
| --------- | -------------------------- | -------------------------------------------- |
| children  | ReactNode 或 ReactNode \[] | 面板的必需内容。                             |
| direction | string                     | 面板的可选方向，'horizontal' 或 'vertical'。 |
| tabs      | TabsProps                  | 面板内部的标签页属性。                       |
| icon      | ReactNode                  | 面板的可选图标。                             |
| extra     | ReactNode                  | 可选的额外 React 节点。                      |
| hide      | boolean                    | 面板的可选隐藏标志。                         |
| minWidth  | number                     | 面板的可选最小宽度。                         |
| minHeight | number                     | 面板的可选最小高度。                         |
| maxWidth  | number                     | 面板的可选最大宽度。                         |
| maxHeight | number                     | 面板的可选最大高度。                         |
| style     | React.CSSProperties        | 面板样式的可选 CSS 属性。                    |
| className | string                     | 面板的可选 CSS 类名。                        |
| themeType | ThemeLayoutType            | 面板的可选主题类型。                         |

### HeaderFooterSettings 头和脚的区域设定

| 属性       | 类型                      | 描述                                    |
| ---------- | ------------------------- | --------------------------------------- |
| iconConfig | iconDropdownType 或 false | 可选的图标配置，设置为 `false` 则隐藏。 |
| extra      | ReactNode                 | 可选的额外 React 节点。                 |
| flex       | FlexProps                 | 可选的 Flexbox 属性。                   |
| hide       | boolean                   | 组件的可选隐藏标志。                    |
| render     | Function                  | 组件的可选自定义渲染函数。              |
| style      | React.CSSProperties       | 组件样式的可选 CSS 属性。               |
| className  | string                    | 组件的可选 CSS 类名。                   |
| children   | ReactNode                 | 组件的可选内容。                        |
| type       | typeEnum 或 string        | 组件的可选类型。                        |
| themeType  | ThemeLayoutType           | 组件的可选主题类型。                    |
