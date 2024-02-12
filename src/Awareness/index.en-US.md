---
title: Awareness
atomId: Awareness
group:
  title: Real-time Collaboration
  order: 5
demo:
  cols: 2
---

# Awareness Collaborative Perception Suite

Awareness represents the user's movements and actions within the application. Users can see in real-time what others are doing.

## Code Demo

<code src="./demos/Cursor.tsx" title="Awareness.Cursor" description="Pointer for collaborative roles"></code><code src="./demos/Avatar.tsx" title="Awareness.Avatar" description="Collaborative user"></code>

## API

### Awareness.Cursor

Cursor properties

| Property | Type                       | Description     |
| -------- | -------------------------- | --------------- |
| position | `{ x: number; y: number }` | Cursor position |
| color    | `string`                   | Cursor color    |
| name     | `string`                   | Cursor name     |

### Awareness.Avatar

Properties of the avatar component

| Property  | Type         | Description                                                  |
| --------- | ------------ | ------------------------------------------------------------ |
| name      | `string`     | Username                                                     |
| color     | `string`     | Color                                                        |
| active    | `boolean`    | Whether it is in an active state, default is `false`         |
| current   | `boolean`    | Whether it is the current user, default is `false`           |
| following | `boolean`    | Whether it is following the current user, default is `false` |
| onClick   | `() => void` | Click event callback function                                |
