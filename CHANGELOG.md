# Changelog

## [Version&nbsp;0.4.0-alpha.5](https://github.com/ant-design/pro-editor/compare/v0.4.0-alpha.4...v0.4.0-alpha.5)

<sup>Released on **2023-06-15**</sup>

#### ✨ 新特性

- **pro-editor**: 支持配置 ProEditorStore 在 devtools 中的名称.

#### 🐛 修复

- **pro-editor**: 调整 devtools api 名称.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's improved

- **pro-editor**: 支持配置 ProEditorStore 在 devtools 中的名称 ([e9d373d](https://github.com/ant-design/pro-editor/commit/e9d373d))

#### What's fixed

- **pro-editor**: 调整 devtools api 名称 ([4b4f509](https://github.com/ant-design/pro-editor/commit/4b4f509))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version&nbsp;0.4.0-alpha.4](https://github.com/ant-design/pro-editor/compare/v0.4.0-alpha.3...v0.4.0-alpha.4)

<sup>Released on **2023-06-15**</sup>

#### 🐛 修复

- **component-asset**: 修正 CreateAssetStore 的类型，对齐到 ProEditorInstance.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's fixed

- **component-asset**: 修正 CreateAssetStore 的类型，对齐到 ProEditorInstance ([70008a8](https://github.com/ant-design/pro-editor/commit/70008a8))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version&nbsp;0.4.0-alpha.3](https://github.com/ant-design/pro-editor/compare/v0.4.0-alpha.2...v0.4.0-alpha.3)

<sup>Released on **2023-06-15**</sup>

#### 🐛 修复

- **pro-editor**: 修正与 assetStore 的数据同步问题.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's fixed

- **pro-editor**: 修正与 assetStore 的数据同步问题 ([fa98010](https://github.com/ant-design/pro-editor/commit/fa98010))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version&nbsp;0.4.0-alpha.2](https://github.com/ant-design/pro-editor/compare/v0.4.0-alpha.1...v0.4.0-alpha.2)

<sup>Released on **2023-06-14**</sup>

#### ✨ 新特性

- **component-asset**: CreateUseAssetStore 方法支持导出 AssetProvider.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's improved

- **component-asset**: CreateUseAssetStore 方法支持导出 AssetProvider ([557ff3b](https://github.com/ant-design/pro-editor/commit/557ff3b))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version&nbsp;0.4.0-alpha.1](https://github.com/ant-design/pro-editor/compare/v0.3.0...v0.4.0-alpha.1)

<sup>Released on **2023-06-14**</sup>

#### ✨ 新特性

- **pro-editor**: 增加 updateCanvasInteraction 方法.

#### 🐛 修复

- **sortable-tree**: 修正 ReactNodeProps 方法类型定义.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's improved

- **pro-editor**: 增加 updateCanvasInteraction 方法 ([7a038c8](https://github.com/ant-design/pro-editor/commit/7a038c8))

#### What's fixed

- **sortable-tree**: 修正 ReactNodeProps 方法类型定义 ([8dfe762](https://github.com/ant-design/pro-editor/commit/8dfe762))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version&nbsp;0.3.0](https://github.com/ant-design/pro-editor/compare/v0.2.3...v0.3.0)

<sup>Released on **2023-06-14**</sup>

#### ✨ 新特性

- Support undo/redo for ProEditor, 完善 AssetStore 数据链路, 实现 AssetStore 与 EditorStore 的状态自动同步, 新增 ContextMenu 组件, 新增 LevaPanel 属性面板, 重构优化 ComponentAsset store 实现，收敛 AssetStore 的定义方式.

#### 🐛 修复

- Fix config update, remove lucide icon, 修正潜藏的 undo/redo bug，并补充单测.

#### 💄 样式

- **leva-panel**: 添加 style 与 className 属性.
- Update empty style.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's improved

- Support undo/redo for ProEditor ([cec5611](https://github.com/ant-design/pro-editor/commit/cec5611))
- 完善 AssetStore 数据链路 ([20df5b2](https://github.com/ant-design/pro-editor/commit/20df5b2))
- 实现 AssetStore 与 EditorStore 的状态自动同步 ([3eeb73b](https://github.com/ant-design/pro-editor/commit/3eeb73b))
- 新增 ContextMenu 组件 ([265b442](https://github.com/ant-design/pro-editor/commit/265b442))
- 新增 LevaPanel 属性面板 ([ee2d922](https://github.com/ant-design/pro-editor/commit/ee2d922))
- 重构优化 ComponentAsset store 实现，收敛 AssetStore 的定义方式 ([37e85ab](https://github.com/ant-design/pro-editor/commit/37e85ab))

#### What's fixed

- Fix config update ([fee5441](https://github.com/ant-design/pro-editor/commit/fee5441))
- Remove lucide icon ([697a8f3](https://github.com/ant-design/pro-editor/commit/697a8f3))
- 修正潜藏的 undo/redo bug，并补充单测 ([a671b65](https://github.com/ant-design/pro-editor/commit/a671b65))

#### Styles

- **leva-panel**: 添加 style 与 className 属性 ([b0920fe](https://github.com/ant-design/pro-editor/commit/b0920fe))
- Update empty style ([a6a61c5](https://github.com/ant-design/pro-editor/commit/a6a61c5))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version&nbsp;0.3.0-alpha.8](https://github.com/ant-design/pro-editor/compare/v0.3.0-alpha.7...v0.3.0-alpha.8)

<sup>Released on **2023-06-14**</sup>

#### ✨ 新特性

- 完善 AssetStore 数据链路.

#### 💄 样式

- **leva-panel**: 添加 style 与 className 属性.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's improved

- 完善 AssetStore 数据链路 ([20df5b2](https://github.com/ant-design/pro-editor/commit/20df5b2))

#### Styles

- **leva-panel**: 添加 style 与 className 属性 ([b0920fe](https://github.com/ant-design/pro-editor/commit/b0920fe))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version&nbsp;0.3.0-alpha.7](https://github.com/ant-design/pro-editor/compare/v0.3.0-alpha.6...v0.3.0-alpha.7)

<sup>Released on **2023-06-14**</sup>

#### ✨ 新特性

- 实现 AssetStore 与 EditorStore 的状态自动同步, 新增 LevaPanel 属性面板.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's improved

- 实现 AssetStore 与 EditorStore 的状态自动同步 ([3eeb73b](https://github.com/ant-design/pro-editor/commit/3eeb73b))
- 新增 LevaPanel 属性面板 ([ee2d922](https://github.com/ant-design/pro-editor/commit/ee2d922))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version&nbsp;0.3.0-alpha.6](https://github.com/ant-design/pro-editor/compare/v0.3.0-alpha.5...v0.3.0-alpha.6)

<sup>Released on **2023-06-13**</sup>

#### ✨ 新特性

- 重构优化 ComponentAsset store 实现，收敛 AssetStore 的定义方式.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's improved

- 重构优化 ComponentAsset store 实现，收敛 AssetStore 的定义方式 ([37e85ab](https://github.com/ant-design/pro-editor/commit/37e85ab))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version&nbsp;0.3.0-alpha.5](https://github.com/ant-design/pro-editor/compare/v0.3.0-alpha.4...v0.3.0-alpha.5)

<sup>Released on **2023-06-13**</sup>

#### 🐛 修复

- 修正潜藏的 undo/redo bug，并补充单测.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's fixed

- 修正潜藏的 undo/redo bug，并补充单测 ([a671b65](https://github.com/ant-design/pro-editor/commit/a671b65))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version&nbsp;0.3.0-alpha.4](https://github.com/ant-design/pro-editor/compare/v0.3.0-alpha.3...v0.3.0-alpha.4)

<sup>Released on **2023-06-13**</sup>

#### 🐛 修复

- Fix config update.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's fixed

- Fix config update ([fee5441](https://github.com/ant-design/pro-editor/commit/fee5441))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version&nbsp;0.3.0-alpha.3](https://github.com/ant-design/pro-editor/compare/v0.3.0-alpha.2...v0.3.0-alpha.3)

<sup>Released on **2023-06-13**</sup>

#### 🐛 修复

- Remove lucide icon.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's fixed

- Remove lucide icon ([697a8f3](https://github.com/ant-design/pro-editor/commit/697a8f3))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version&nbsp;0.3.0-alpha.2](https://github.com/ant-design/pro-editor/compare/v0.3.0-alpha.1...v0.3.0-alpha.2)

<sup>Released on **2023-06-13**</sup>

#### ✨ 新特性

- 新增 ContextMenu 组件.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's improved

- 新增 ContextMenu 组件 ([265b442](https://github.com/ant-design/pro-editor/commit/265b442))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version&nbsp;0.3.0-alpha.1](https://github.com/ant-design/pro-editor/compare/v0.2.3...v0.3.0-alpha.1)

<sup>Released on **2023-06-13**</sup>

#### ✨ 新特性

- Support undo/redo for ProEditor.

#### 💄 样式

- Update empty style.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's improved

- Support undo/redo for ProEditor ([cec5611](https://github.com/ant-design/pro-editor/commit/cec5611))

#### Styles

- Update empty style ([a6a61c5](https://github.com/ant-design/pro-editor/commit/a6a61c5))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

### [Version&nbsp;0.2.3](https://github.com/ant-design/pro-editor/compare/v0.2.2...v0.2.3)

<sup>Released on **2023-06-13**</sup>

#### 🐛 修复

- Fix miss deps.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's fixed

- Fix miss deps ([c677d6b](https://github.com/ant-design/pro-editor/commit/c677d6b))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

### [Version&nbsp;0.2.2](https://github.com/ant-design/pro-editor/compare/v0.2.1...v0.2.2)

<sup>Released on **2023-06-13**</sup>

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

### [Version&nbsp;0.2.2-alpha.1](https://github.com/ant-design/pro-editor/compare/v0.2.1...v0.2.2-alpha.1)

<sup>Released on **2023-06-13**</sup>

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

### Version&nbsp;0.2.1

<sup>Released on **2023-06-12**</sup>

#### ✨ 新特性

- SortableList support onChange event.

#### 🐛 修复

- Fix avatar key, github pages css style lost, SortableList 默认空数据处理, test case error, 将 handsontable 模块异步导入，解决 SSR 下无法使用的问题.

<br/>

[<img width="32" height="32" title="arvinxx" src="https://avatars.githubusercontent.com/u/28616219?v=4" />](https://api.github.com/users/arvinxx)

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's improved

- SortableList support onChange event ([87cba27](https://github.com/ant-design/pro-editor/commit/87cba27)) - by **rdmclin2**

#### What's fixed

- Fix avatar key ([1515bdb](https://github.com/ant-design/pro-editor/commit/1515bdb)) - by [<img width="16" height="16" src="https://avatars.githubusercontent.com/u/28616219?v=4" /> **arvinxx**](https://api.github.com/users/arvinxx)
- Github pages css style lost, closes [#15](https://github.com/ant-design/pro-editor/issues/15) ([778ae76](https://github.com/ant-design/pro-editor/commit/778ae76)) - by **大猫**
- SortableList 默认空数据处理 ([b286188](https://github.com/ant-design/pro-editor/commit/b286188)) - by **rdmclin2**
- Test case error ([8b8600d](https://github.com/ant-design/pro-editor/commit/8b8600d)) - by **rdmclin2**
- 将 handsontable 模块异步导入，解决 SSR 下无法使用的问题 ([224ebf5](https://github.com/ant-design/pro-editor/commit/224ebf5)) - by [<img width="16" height="16" src="https://avatars.githubusercontent.com/u/28616219?v=4" /> **arvinxx**](https://api.github.com/users/arvinxx)

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>
