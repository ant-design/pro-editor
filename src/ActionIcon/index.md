---
title: ActionIcon 动作图标
group: 基础组件
atomId: ActionIcon
nav:
  title: 基础组件
  order: 2
demo:
  cols: 2
---

# ActionIcon 动作图标

## 何时使用

对 antd Button 的封装，让图标具备按钮动作的响应式效果。

## 代码演示

<code src="./demos/basic.tsx" ></code>
<code src="./demos/preset.tsx" ></code>

## API

| 参数      | 说明     | 类型                                       | 默认值 |
| :-------- | :------- | :----------------------------------------- | :----- |
| cursor    | 鼠标类型 | `CSSProperties['cursor']`                  | -      |
| title     | 动作提示 | `TooltipProps['title']`                    | -      |
| placement | 提示位置 | `TooltipProps['placement']`                | -      |
| icon      | 图标     | `ButtonProps['icon']`                      | -      |
| onClick   | 点击回调 | `ButtonProps['onClick']`                   | -      |
| size      | 图标尺寸 | `'default' \| 'large' \|'small' \| number` | small  |

其他 API 参考 antd Button Props .
