---
title: InteractContainer
group: Panel
---

# InteractContainer Interactive Container

Component that gives interactive capabilities to subsets

## Demo

<code src="./demos/Basic.tsx" ></code>

### Set Container

<code src="./demos/WithContainer.tsx" ></code>

### Controlled Mode

<code src="./demos/Controlled.tsx" ></code>

## Writing Rules

```ts
export type InteractionType = 'click' | 'hover' | 'rightClick' | 'keyboard';

export interface CanvasInteractRule {
  /**
   * Used for selecting objects
   * Supports using class, id selectors
   */
  selectors: string[];
  /**
   * Supported interaction behaviors
   * Default is ["hover", "click"]
   */
  actions?: InteractionType[];
}
```
