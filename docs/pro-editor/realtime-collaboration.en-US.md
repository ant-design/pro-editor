---
title: Real-time Collaboration Module
group:
  title: Abilities
  order: 1
---

# Real-time Collaboration Module

This module implements the basic functionality of real-time collaboration among multiple users.

- Data synchronization (using yjs-zustand middleware)
- Collaboration awareness (Avatar, Cursor components)

## Demo Showcase

<code src="./demos/realtimeCollaboration/demo.tsx"></code>

## Data Synchronization: Yjs Middleware

It reuses the [zustand-middleware-yjs](https://github.com/joebobmiles/zustand-middleware-yjs) middleware.

By designing a suitable data synchronization layer structure for the ProEditor container, it can possess the capability for multi-user collaboration.

## Collaboration Awareness

The zustand-middleware-yjs does not provide the Awareness capability in yjs. Therefore, common functions in multi-user collaboration such as user status and pointer display need to be implemented independently.

## History Records (TODO)

After implementing multi-user collaboration based on YJS, the history records are a native feature. However, presenting this large amount of data to users in a suitable manner requires the design of a reasonable interaction solution.

## Offline Cache

Offline caching is one of the core principles of Local First.
