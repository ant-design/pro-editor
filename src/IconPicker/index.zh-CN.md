---
title: IconPicker 图标选择器
atomId: IconPicker
group:
  title: 面板模块
  order: 1
---

# IconPicker 图标选择器

选择 Icon 时使用。

## 代码演示

<code src="./demos/normal.tsx" title="基本使用"></code>

<code src="./demos/controlled.tsx" title="受控模式"></code>

<code src="./demos/scripts.tsx" title="外部传入 scripts" description="如果外部传入 `iconfontScripts`` 源并且不设置 `onChange` 方法，那么默认会隐藏添加图标源的按钮。"></code>

## API

| 属性名                       | 类型                                           | 描述                             |
| ---------------------------- | ---------------------------------------------- | -------------------------------- |
| defaultIcon                  | `IconUnit`                                     | 默认图标单元                     |
| defaultIconfontScripts       | `ExternalScripts[]`                            | 默认 Iconfont 脚本数组           |
| defaultActiveIconfontScript  | `string`                                       | 默认选中的 Iconfont 脚本         |
| icon                         | `IconUnit`                                     | 图标单元                         |
| onIconChange                 | `(icon: IconUnit) => void`                     | Icon 改变回调函数                |
| iconfontScripts              | `ExternalScripts[]`                            | IconFont 脚本地址                |
| onIconfontScriptsChange      | `(iconfontScripts: ExternalScripts[]) => void` | Iconfont 脚本改变回调函数        |
| activeIconfontScript         | `string`                                       | 选中的 Iconfont 脚本             |
| onActiveIconfontScriptChange | `(scripts: string) => void`                    | 选中的 Iconfont 脚本改变回调函数 |

### ExternalScripts

描述外部脚本的接口。

| 属性名 | 类型     | 描述 |
| ------ | -------- | ---- |
| name   | `string` | 名称 |
| url    | `string` | URL  |

### IconUnit

最基础的图标信息单元，可以是 `ReactIcon` 或 `IconfontIcon`。

### ReactIcon

| 属性名        | 类型               | 描述                    |
| ------------- | ------------------ | ----------------------- |
| type          | `antd` \| `custom` | 图标类型，antd 或自定义 |
| componentName | `string`           | 图标组件名称            |
| props         | `Object`           | 图标组件的 props 属性   |

### IconfontIcon

| 属性名        | 类型       | 描述                                      |
| ------------- | ---------- | ----------------------------------------- |
| type          | `iconfont` | 图标类型，仅支持 iconfont                 |
| componentName | `string`   | 图标组件名称                              |
| props         | `Object`   | 图标组件的 props 属性，必须包含 type 字段 |
| scriptUrl     | `string`   | iconfont 的脚本链接地址                   |
