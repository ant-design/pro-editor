---
title: InteractContainer 交互容器
atomId: InteractContainer
group: 面板模块
---

# InteractContainer 交互容器

赋予子集可交互能力的组件

## Demo 示例

<code src="./demos/Basic.tsx" ></code>

### 设置容器

<code src="./demos/WithContainer.tsx" ></code>

### 受控模式

<code src="./demos/Controlled.tsx" ></code>

## 编写规则

```ts
export type InteractionType = 'click' | 'hover' | 'rightClick' | 'keyboard';

export interface CanvasInteractRule {
  /**
   * 用于选择对象
   * 支持使用 类、id 选择器
   */
  selectors: string[];
  /**
   * 支持的交互行为
   * 默认为 ["hover", "click"]
   */
  actions?: InteractionType[];
}
```
