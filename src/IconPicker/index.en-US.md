---
title: IconPicker
group: Panel
---

# IconPicker Icon Selector

## When To Use

Used for selecting icons.

## Code Demo

### Basic Usage

<code src="./demos/normal.tsx" ></code>

### Controlled Mode

<code src="./demos/controlled.tsx" ></code>

### External Scripts

If external iconfontScripts are provided and onChange method is not set, the add icon source button will be hidden by default.

<code src="./demos/scripts.tsx" ></code>

## API

## Basic Properties

| Property                     | Type                                           | Description                                           |
| ---------------------------- | ---------------------------------------------- | ----------------------------------------------------- |
| defaultIcon                  | `IconUnit`                                     | Default icon unit                                     |
| defaultIconfontScripts       | `ExternalScripts[]`                            | Default Iconfont scripts array                        |
| defaultActiveIconfontScript  | `string`                                       | Default selected Iconfont script                      |
| icon                         | `IconUnit`                                     | Icon unit                                             |
| onIconChange                 | `(icon: IconUnit) => void`                     | Callback function for icon change                     |
| iconfontScripts              | `ExternalScripts[]`                            | IconFont script addresses                             |
| onIconfontScriptsChange      | `(iconfontScripts: ExternalScripts[]) => void` | Callback function for Iconfont script change          |
| activeIconfontScript         | `string`                                       | Selected Iconfont script                              |
| onActiveIconfontScriptChange | `(scripts: string) => void`                    | Callback function for selected Iconfont script change |

### ExternalScripts

Interface describing external scripts.

| Property | Type     | Description |
| -------- | -------- | ----------- |
| name     | `string` | Name        |
| url      | `string` | URL         |

### IconUnit

The most basic unit of icon information, which can be `ReactIcon` or `IconfontIcon`.

### ReactIcon

| Property      | Type               | Description                 |
| ------------- | ------------------ | --------------------------- |
| type          | `antd` \| `custom` | Icon type, antd or custom   |
| componentName | `string`           | Icon component name         |
| props         | `Object`           | Props of the icon component |

### IconfontIcon

| Property      | Type       | Description                                              |
| ------------- | ---------- | -------------------------------------------------------- |
| type          | `iconfont` | Icon type, only supports iconfont                        |
| componentName | `string`   | Icon component name                                      |
| props         | `Object`   | Props of the icon component, must include the type field |
| scriptUrl     | `string`   | Link to the iconfont script                              |
