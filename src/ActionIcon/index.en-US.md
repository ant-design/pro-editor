---
title: ActionIcon
group: Basic
atomId: ActionIcon
demo:
  cols: 2
---

# ActionIcon

A wrapper for antd Button that makes the icon responsive to button actions.

## Code Demo

<code src="./demos/basic.tsx" title="Basic Example" description="`icon` sets the action icon, `title` sets the action description"></code><code src="./demos/preset.tsx" title="Predefined Actions" description="We have predefined some commonly used editor action icons, which can be added as needed"></code>

## API

| Parameter | Description    | Type                                       | Default |
| :-------- | :------------- | :----------------------------------------- | :------ |
| cursor    | Mouse type     | `CSSProperties['cursor']`                  | -       |
| title     | Action hint    | `TooltipProps['title']`                    | -       |
| placement | Hint position  | `TooltipProps['placement']`                | -       |
| icon      | Icon           | `ButtonProps['icon']`                      | -       |
| onClick   | Click callback | `ButtonProps['onClick']`                   | -       |
| size      | Icon size      | `'default' \| 'large' \|'small' \| number` | small   |

For other API references, please refer to antd Button Props.
