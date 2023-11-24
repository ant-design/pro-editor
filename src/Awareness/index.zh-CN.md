---
title: Awareness 协同感知套件
atomId: Awareness
group:
  title: 多人实时协同
  order: 5
---

# 简介

Awareness 代表着用户在应用内的运动和行为。用户能够实时看到其他人正在做什么。

## Awareness.Cursor

协同角色的指针

<code src="./demos/Cursor.tsx" ></code>

## Awareness.Avatar

协同用户

<code src="./demos/Avatar.tsx" ></code>

## API

### Awareness.Cursor

光标属性

| 属性     | 类型                       | 描述     |
| -------- | -------------------------- | -------- |
| position | `{ x: number; y: number }` | 光标位置 |
| color    | `string`                   | 光标颜色 |
| name     | `string`                   | 光标名称 |

## Awareness.Avatar

头像组件的属性

| 属性名    | 类型         | 描述                               |
| --------- | ------------ | ---------------------------------- |
| name      | `string`     | 用户名                             |
| color     | `string`     | 颜色                               |
| active    | `boolean`    | 是否激活状态，默认为 `false`       |
| current   | `boolean`    | 是否当前用户，默认为 `false`       |
| following | `boolean`    | 是否关注了当前用户，默认为 `false` |
| onClick   | `() => void` | 点击事件回调函数                   |
