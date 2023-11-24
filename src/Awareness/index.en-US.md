---
title: Awareness
atomId: Awareness
group:
  title: Real-time Collaboration
  order: 5
---

# Introduction

Awareness represents the movement and actions of users within the application. Users can see in real-time what others are doing.

## Awareness.Cursor

Pointer for collaborative roles

<code src="./demos/Cursor.tsx" ></code>

## Awareness.Avatar

Collaborative user

<code src="./demos/Avatar.tsx" ></code>

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
| name      | `string`     | User name                                                    |
| color     | `string`     | Color                                                        |
| active    | `boolean`    | Whether it is in an active state, default is `false`         |
| current   | `boolean`    | Whether it is the current user, default is `false`           |
| following | `boolean`    | Whether it is following the current user, default is `false` |
| onClick   | `() => void` | Click event callback function                                |
