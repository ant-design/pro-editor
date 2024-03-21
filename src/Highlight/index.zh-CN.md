---
title: Highlight 代码高亮
atomId: Highlight
group: 基础组件
---

# Highlight 代码高亮

展示代码时使用，Highlight 使用 [Shiki](https://github.com/shikijs/shiki) 渲染，Shiki 使用 TextMate 语法器更加精确。

## 代码演示

<code src="./demos/auto.tsx" title="自动主题" description="默认开启 `auto`，会根据当前环境自动切换主题"></code>

<code src="./demos/basic.tsx" title="指定语言和主题" description="你可以通过 `language` 指定语言高亮，通过 `theme` 指定高亮主题"></code>

<code src="./demos/lineNumber.tsx"  title="展示代码块行号"
description="你可以通过 `lineNumber` 指定是否需要展示代码块行号"></code>

<code src="./demos/theme.tsx"  title="切换语言与主题"
 description="你可以通过这个示例查看不同语言在不同主题下的效果"></code>

## API 参数

### Highlight

| 参数         | 说明                                                      | 类型    | 默认值 |
| :----------- | :-------------------------------------------------------- | :------ | :----- |
| language     | 指定语言类型，详见下表                                    | string  | -      |
| showLanguage | 是否展示语言的 Tag                                        | boolean | true   |
| theme        | 指定主题，可选 `dark`, `light`,`auto`                     | string  | `auto` |
| lineNumber   | 指定代码块行号是否开启，可选 `true`, `false`              | boolean | false  |
| copyable     | 指定代码块是否展示复制按钮，可选 `true`, `false`          | boolean | true   |
| height       | 指定代码块高度，用于需要控制代码块高度固定的场景          | number  | -      |
| type         | 指定渲染类型，可选 `block`, `pure`, pure 模式去掉容器样式 | `block` | -      |

### 目前支持的语言列表

- javascript
- typescript
- css
- java
- json
- markdown
- xml
- yaml
- python
- sql

### 渲染说明
