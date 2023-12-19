---
title: EditorLayout 基础布局
atomId: Layout
group: 基础组件
---

# EditorLayout 基础布局

EditorLayout 是我们专门为了编辑器场景制作的编辑器布局组件

## 代码演示

### 基础用法

<code src="./demos/basic.tsx"></code>

### 只需要面板

你可以通过设置 header 和 footer 为 false 来隐藏头和尾的配置

<code src="./demos/single.tsx" ></code>

当然你也可以对某个 pannel 设置 false 来关闭其内容

<code src="./demos/noLeftPannel.tsx" ></code>

### 改变布局

你可以通过声明不同的 types 来渲染一些不同结构的布局

我们把布局分为 4 种，分别对应下方的图片，默认是 Bottom 模式，足以适应市面上大部分编辑器的场景。

![layout-types](https://mdn.alipayobjects.com/huamei_re70wt/afts/img/A*-asvT7GkKIwAAAAAAAAAAAAADmuEAQ/original)

<code src="./demos/types.tsx" ></code>

### 布局主题类型

你可以指定 ThemeType 来切换一些简单的布局主题样式

注意：在 pure 模式下，我们会将原有的 Pannel 之间的间距、各部分的 Radius、背景色都会关闭，这个时候，如果你不给每一个区域加上颜色或者一些特殊 css 进行区分，是很难看清楚各个部分的。

<code src="./demos/themeType.tsx"></code>

### 对话布局

你可以简单通过配置和样式来搭建一个类似对话内容的布局

<code src="./demos/dingding.tsx"></code>
