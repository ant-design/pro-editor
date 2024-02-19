---
title: IconPicker
atomId: IconPicker
group:
  title: Panel
---

# IconPicker Icon Selector

Used for selecting icons.

## Code Demo

<code src="./demos/normal.tsx" title="Basic Usage"></code>

<code src="./demos/controlled.tsx" title="Controlled Mode"></code>

<code src="./demos/scripts.tsx" title="External Scripts" description="If `iconfontScripts` are passed in externally and `onChange` method is not set, the button for adding icon sources will be hidden by default."></code>

## API

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

| Property      | Type       | Description                                                |
| ------------- | ---------- | ---------------------------------------------------------- |
| type          | `iconfont` | Icon type, only supports iconfont                          |
| componentName | `string`   | Icon component name                                        |
| props         | `Object`   | Props of the icon component, must include the `type` field |
| scriptUrl     | `string`   | Link address of the iconfont script                        |
