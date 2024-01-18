---
title: ActionIcon
group: Basic
atomId: ActionIcon
demo:
  cols: 2
---

# ActionIcon

## When to use

It is a encapsulation of antd Button, allowing icons to have responsive button actions.

## Code Example

<code src="./demos/basic.tsx" ></code> <code title='Default' src="./demos/preset.tsx" description='Presets for some commonly used buttons in the editor'></code>

## API

| Parameter | Description    | Type                                       | Default |
| :-------- | :------------- | :----------------------------------------- | :------ |
| cursor    | Mouse type     | `CSSProperties['cursor']`                  | -       |
| title     | Action hint    | `TooltipProps['title']`                    | -       |
| placement | Hint position  | `TooltipProps['placement']`                | -       |
| icon      | Icon           | `ButtonProps['icon']`                      | -       |
| onClick   | Click callback | `ButtonProps['onClick']`                   | -       |
| size      | Icon size      | `'default' \| 'large' \|'small' \| number` | small   |

Refer to other API in antd Button Props.
