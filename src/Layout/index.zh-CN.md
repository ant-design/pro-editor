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
