---
title: 实时协同模块
group: 容器能力
---

# 实时协同模块

实现了多人实时协同的基础功能的模块。

- 数据同步（ yjs-zustand 中间件）
- 协同感知（ Avatar、Cursor 组件）

## Demo 演示

<code src="./demos/realtimeCollaboration/demo.tsx"></code>

## 数据同步： Yjs 中间件

复用了 [zustand-middleware-yjs](https://github.com/joebobmiles/zustand-middleware-yjs) 中间件

后面只要为 ProEditor 容器设计合适的数据同步分层结构，ProEditor 容器就可以具有多人协作的能力。

## 协同感知

zustand-middleware-yjs 并不提供 yjs 中的 Awareness 能力。因此比如在多人协同中比较常用的用户状态、指针显示等功能是自行实现的。

## 历史记录（TODO）

历史记录在基于 YJS 实现多人协同后，是属于天生自带的功能。但这个历史记录只是大量的数据，这些数据该如何合适地对用户展示，还需要设计合理的交互方案。

## 离线缓存

离线缓存 是 Local First 理念的核心之一
