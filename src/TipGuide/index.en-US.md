---
title: TipGuide
group: Basic
---

# TipGuide Focus Guide

## When to use

Guide users' attention in simple scenarios.

## Code Demo

### Basic

Note that `guideKey` is required and must be unique.

<code src="./demos/normal.tsx" ></code>

### Controlled

Use `open` for control.

<code src="./demos/controlled.tsx" ></code>

### Custom Footer

<code src="./demos/footer.tsx" ></code>

You can also use localStorage in business by customizing and controlling it.

<code src="./demos/localStorage.tsx" ></code>

### Offset

You can use `offsetY` to vertically offset the guide point.

<code src="./demos/offset.tsx" ></code>

## API

| Parameter    | Description                                | Type                                      | Default  |
| :----------- | :----------------------------------------- | :---------------------------------------- | :------- |
| title        | Guide title                                | `string`                                  | -        |
| placement    | ToolTip position                           | `TooltipProps['placement']`               | 'bottom' |
| offsetY      | Vertical offset value                      | number                                    | -        |
| maxWidth     | Maximum width                              | number                                    | 300      |
| open         | Controlled open attribute                  | boolean                                   | -        |
| onOpenChange | Trigger when the open attribute changes    | (open: boolean) => void                   | -        |
| defaultOpen  | Default open state                         | boolean                                   | -        |
| footerRender | Render API for customizing the footer part | (dom: React.ReactNode) => React.ReactNode | -        |
