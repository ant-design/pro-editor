# Changelog

## [Version&nbsp;0.2.0](https://github.com/ant-design/pro-editor/compare/v0.1.1...v0.2.0)

<sup>Released on **2023-08-28**</sup>

#### ✨ 新特性

- **component-asset**: CreateUseAssetStore 方法支持导出 AssetProvider, 优化 createTestAssetStore ，便于下游测试, 添加 createTestAssetStore 方法，便于下游测试.
- **pro-editor**: 增加 updateCanvasInteraction 方法, 支持 getCanvasInteraction，并调整 store set、get 命名风格, 支持撤销重做, 支持配置 ProEditorStore 在 devtools 中的名称.
- **sortable-list**: 导出 SortableListDispatchPayload 类型定义.
- **sortable-tree**: 支持禁用拖拽功能, 新增 sortableRule 函数规则，控制拖动排序.
- Add ActinGroup Components, add c2d2c getDiffPropsWithSchema and getSymbolMasterNameFromProps func, add field component, add more ActionGroup api support & style update, add more antd temple components, SortableList support onChange event, support undo/redo for ProEditor, update Action Css Transition, update snapshot, 完善 AssetStore 数据链路, 实现 AssetStore 与 EditorStore 的状态自动同步, 新增 ContextMenu 组件, 新增 LevaPanel 属性面板, 重构优化 ComponentAsset store 实现，收敛 AssetStore 的定义方式.

#### 🐛 修复

- **awareness**: 修正类型导出问题, 兼容服务端渲染.
- **component-asset**: 修正 AssetSchema 类型, 修正 CreateAssetStore 的类型，对齐到 ProEditorInstance, 修正类型.
- **excel-table**: 修正 Hansontable 在 server 端的兼容性问题, 修正 Hansontable 在 server 端的兼容性问题.
- **pro-editor**: 修正与 assetStore 的数据同步问题, 调整 devtools api 名称.
- **sortable-list**: 兼容默认数据展示.
- **sortable-tree**: 修正 ReactNodeProps 方法类型定义, 修正 SortableTree 在 server 端的兼容性问题, 修正 SortableTree 在 server 端的兼容性问题.
- **use-proeditor**: 修正 togglePanelExpand 方法缺失的 bug.
- Fix avatar key, fix config update, fix Input ref props, fix miss deps, github pages css style lost, highlight scroll error, refactor with zustand v4.4 equalFn, remove lucide icon, SortableList 默认空数据处理, test case error, test snapshot udpate, update snapshot, update snapshot, update snapshot, upgrade zustand version, 优化 Input 和 InputNumber 组件的受控变更逻辑, 修正潜藏的 undo/redo bug，并补充单测, 将 antd-style 设为 peer，修正 ThemeProvider 多实例问题, 将 handsontable 模块异步导入，解决 SSR 下无法使用的问题.

#### 💄 样式

- **leva-panel**: 添加 style 与 className 属性.
- Update empty style.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's improved

- **component-asset**: CreateUseAssetStore 方法支持导出 AssetProvider ([d33a8b3](https://github.com/ant-design/pro-editor/commit/d33a8b3))
- **component-asset**: 优化 createTestAssetStore ，便于下游测试 ([e58eb84](https://github.com/ant-design/pro-editor/commit/e58eb84))
- **component-asset**: 添加 createTestAssetStore 方法，便于下游测试 ([60fb2c8](https://github.com/ant-design/pro-editor/commit/60fb2c8))
- **pro-editor**: 增加 updateCanvasInteraction 方法 ([8bf85d4](https://github.com/ant-design/pro-editor/commit/8bf85d4))
- **pro-editor**: 支持 getCanvasInteraction，并调整 store set、get 命名风格 ([c673970](https://github.com/ant-design/pro-editor/commit/c673970))
- **pro-editor**: 支持撤销重做 ([28a71a3](https://github.com/ant-design/pro-editor/commit/28a71a3))
- **pro-editor**: 支持配置 ProEditorStore 在 devtools 中的名称 ([2cedbb3](https://github.com/ant-design/pro-editor/commit/2cedbb3))
- **sortable-list**: 导出 SortableListDispatchPayload 类型定义 ([f47782b](https://github.com/ant-design/pro-editor/commit/f47782b))
- **sortable-tree**: 支持禁用拖拽功能 ([9a00235](https://github.com/ant-design/pro-editor/commit/9a00235))
- **sortable-tree**: 新增 sortableRule 函数规则，控制拖动排序, closes [#46](https://github.com/ant-design/pro-editor/issues/46) ([e941865](https://github.com/ant-design/pro-editor/commit/e941865))
- Add ActinGroup Components ([231d713](https://github.com/ant-design/pro-editor/commit/231d713))
- Add c2d2c getDiffPropsWithSchema and getSymbolMasterNameFromProps func, closes [#52](https://github.com/ant-design/pro-editor/issues/52) ([aa62185](https://github.com/ant-design/pro-editor/commit/aa62185))
- Add field component, closes [#49](https://github.com/ant-design/pro-editor/issues/49) ([dfdfd16](https://github.com/ant-design/pro-editor/commit/dfdfd16))
- Add more ActionGroup api support & style update ([16e5dbc](https://github.com/ant-design/pro-editor/commit/16e5dbc))
- Add more antd temple components ([e99d7b7](https://github.com/ant-design/pro-editor/commit/e99d7b7))
- SortableList support onChange event ([663846c](https://github.com/ant-design/pro-editor/commit/663846c))
- Support undo/redo for ProEditor ([c88698a](https://github.com/ant-design/pro-editor/commit/c88698a))
- Update Action Css Transition ([971f090](https://github.com/ant-design/pro-editor/commit/971f090))
- Update snapshot ([6ee7422](https://github.com/ant-design/pro-editor/commit/6ee7422))
- 完善 AssetStore 数据链路 ([eefef20](https://github.com/ant-design/pro-editor/commit/eefef20))
- 实现 AssetStore 与 EditorStore 的状态自动同步 ([7135040](https://github.com/ant-design/pro-editor/commit/7135040))
- 新增 ContextMenu 组件 ([6fa1558](https://github.com/ant-design/pro-editor/commit/6fa1558))
- 新增 LevaPanel 属性面板 ([b7b0633](https://github.com/ant-design/pro-editor/commit/b7b0633))
- 重构优化 ComponentAsset store 实现，收敛 AssetStore 的定义方式 ([6a74062](https://github.com/ant-design/pro-editor/commit/6a74062))

#### What's fixed

- **awareness**: 修正类型导出问题 ([650ef65](https://github.com/ant-design/pro-editor/commit/650ef65))
- **awareness**: 兼容服务端渲染 ([1c04874](https://github.com/ant-design/pro-editor/commit/1c04874))
- **component-asset**: 修正 AssetSchema 类型 ([5ba08b6](https://github.com/ant-design/pro-editor/commit/5ba08b6))
- **component-asset**: 修正 CreateAssetStore 的类型，对齐到 ProEditorInstance ([769cf39](https://github.com/ant-design/pro-editor/commit/769cf39))
- **component-asset**: 修正类型 ([4cede56](https://github.com/ant-design/pro-editor/commit/4cede56))
- **excel-table**: 修正 Hansontable 在 server 端的兼容性问题 ([c4647d5](https://github.com/ant-design/pro-editor/commit/c4647d5))
- **excel-table**: 修正 Hansontable 在 server 端的兼容性问题 ([7c91c42](https://github.com/ant-design/pro-editor/commit/7c91c42))
- **pro-editor**: 修正与 assetStore 的数据同步问题 ([67735e2](https://github.com/ant-design/pro-editor/commit/67735e2))
- **pro-editor**: 调整 devtools api 名称 ([10f1529](https://github.com/ant-design/pro-editor/commit/10f1529))
- **sortable-list**: 兼容默认数据展示 ([58a3a15](https://github.com/ant-design/pro-editor/commit/58a3a15))
- **sortable-tree**: 修正 ReactNodeProps 方法类型定义 ([c4024cc](https://github.com/ant-design/pro-editor/commit/c4024cc))
- **sortable-tree**: 修正 SortableTree 在 server 端的兼容性问题 ([9e55c9f](https://github.com/ant-design/pro-editor/commit/9e55c9f))
- **sortable-tree**: 修正 SortableTree 在 server 端的兼容性问题 ([7c0905e](https://github.com/ant-design/pro-editor/commit/7c0905e))
- **use-proeditor**: 修正 togglePanelExpand 方法缺失的 bug ([169338b](https://github.com/ant-design/pro-editor/commit/169338b))
- Fix avatar key ([26df41f](https://github.com/ant-design/pro-editor/commit/26df41f))
- Fix config update ([2a3bbf3](https://github.com/ant-design/pro-editor/commit/2a3bbf3))
- Fix Input ref props ([da05109](https://github.com/ant-design/pro-editor/commit/da05109))
- Fix miss deps ([0c6f659](https://github.com/ant-design/pro-editor/commit/0c6f659))
- Github pages css style lost, closes [#15](https://github.com/ant-design/pro-editor/issues/15) ([edf7355](https://github.com/ant-design/pro-editor/commit/edf7355))
- Highlight scroll error, closes [#37](https://github.com/ant-design/pro-editor/issues/37) ([5abf169](https://github.com/ant-design/pro-editor/commit/5abf169))
- Refactor with zustand v4.4 equalFn ([0559103](https://github.com/ant-design/pro-editor/commit/0559103))
- Remove lucide icon ([b946ce3](https://github.com/ant-design/pro-editor/commit/b946ce3))
- SortableList 默认空数据处理 ([07bda12](https://github.com/ant-design/pro-editor/commit/07bda12))
- Test case error ([8e9a930](https://github.com/ant-design/pro-editor/commit/8e9a930))
- Test snapshot udpate, closes [#53](https://github.com/ant-design/pro-editor/issues/53) ([d551f68](https://github.com/ant-design/pro-editor/commit/d551f68))
- Update snapshot ([dbe098e](https://github.com/ant-design/pro-editor/commit/dbe098e))
- Update snapshot ([511defb](https://github.com/ant-design/pro-editor/commit/511defb))
- Update snapshot ([53e7dfb](https://github.com/ant-design/pro-editor/commit/53e7dfb))
- Upgrade zustand version ([1fc2daa](https://github.com/ant-design/pro-editor/commit/1fc2daa))
- 优化 Input 和 InputNumber 组件的受控变更逻辑, closes [#45](https://github.com/ant-design/pro-editor/issues/45) ([e1c7d4f](https://github.com/ant-design/pro-editor/commit/e1c7d4f))
- 修正潜藏的 undo/redo bug，并补充单测 ([d1e3cc1](https://github.com/ant-design/pro-editor/commit/d1e3cc1))
- 将 antd-style 设为 peer，修正 ThemeProvider 多实例问题 ([4ab40d7](https://github.com/ant-design/pro-editor/commit/4ab40d7))
- 将 handsontable 模块异步导入，解决 SSR 下无法使用的问题 ([ab69afd](https://github.com/ant-design/pro-editor/commit/ab69afd))

#### Styles

- **leva-panel**: 添加 style 与 className 属性 ([7a55431](https://github.com/ant-design/pro-editor/commit/7a55431))
- Update empty style ([e770ecb](https://github.com/ant-design/pro-editor/commit/e770ecb))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version&nbsp;0.13.0](https://github.com/ant-design/pro-editor/compare/v0.12.1...v0.13.0)

<sup>Released on **2023-08-23**</sup>

#### ✨ 新特性

- Add more antd temple components, update Action Css Transition, update snapshot.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's improved

- Add more antd temple components ([09e95e0](https://github.com/ant-design/pro-editor/commit/09e95e0))
- Update Action Css Transition ([9d5937f](https://github.com/ant-design/pro-editor/commit/9d5937f))
- Update snapshot ([46168b4](https://github.com/ant-design/pro-editor/commit/46168b4))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

### [Version&nbsp;0.12.1](https://github.com/ant-design/pro-editor/compare/v0.12.0...v0.12.1)

<sup>Released on **2023-08-22**</sup>

#### 🐛 修复

- Refactor with zustand v4.4 equalFn, upgrade zustand version.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's fixed

- Refactor with zustand v4.4 equalFn ([f7e002c](https://github.com/ant-design/pro-editor/commit/f7e002c))
- Upgrade zustand version ([bd6e70a](https://github.com/ant-design/pro-editor/commit/bd6e70a))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version&nbsp;0.12.0](https://github.com/ant-design/pro-editor/compare/v0.11.0...v0.12.0)

<sup>Released on **2023-08-15**</sup>

#### ✨ 新特性

- Add more ActionGroup api support & style update.

#### 🐛 修复

- Update snapshot.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's improved

- Add more ActionGroup api support & style update ([3d142fd](https://github.com/ant-design/pro-editor/commit/3d142fd))

#### What's fixed

- Update snapshot ([4bb1c01](https://github.com/ant-design/pro-editor/commit/4bb1c01))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version&nbsp;0.11.0](https://github.com/ant-design/pro-editor/compare/v0.10.0...v0.11.0)

<sup>Released on **2023-08-14**</sup>

#### ✨ 新特性

- Add ActinGroup Components.

#### 🐛 修复

- Update snapshot, update snapshot.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's improved

- Add ActinGroup Components ([e7222a6](https://github.com/ant-design/pro-editor/commit/e7222a6))

#### What's fixed

- Update snapshot ([5b3a02b](https://github.com/ant-design/pro-editor/commit/5b3a02b))
- Update snapshot ([58514a4](https://github.com/ant-design/pro-editor/commit/58514a4))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version&nbsp;0.10.0](https://github.com/ant-design/pro-editor/compare/v0.9.0...v0.10.0)

<sup>Released on **2023-08-01**</sup>

#### ✨ 新特性

- Add c2d2c getDiffPropsWithSchema and getSymbolMasterNameFromProps func.

#### 🐛 修复

- Test snapshot udpate.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's improved

- Add c2d2c getDiffPropsWithSchema and getSymbolMasterNameFromProps func, closes [#52](https://github.com/ant-design/pro-editor/issues/52) ([ea4ad31](https://github.com/ant-design/pro-editor/commit/ea4ad31))

#### What's fixed

- Test snapshot udpate, closes [#53](https://github.com/ant-design/pro-editor/issues/53) ([985c630](https://github.com/ant-design/pro-editor/commit/985c630))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version&nbsp;0.9.0](https://github.com/ant-design/pro-editor/compare/v0.8.0...v0.9.0)

<sup>Released on **2023-07-24**</sup>

#### ✨ 新特性

- Add field component.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's improved

- Add field component, closes [#49](https://github.com/ant-design/pro-editor/issues/49) ([5129247](https://github.com/ant-design/pro-editor/commit/5129247))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version&nbsp;0.8.0](https://github.com/ant-design/pro-editor/compare/v0.7.2...v0.8.0)

<sup>Released on **2023-07-03**</sup>

#### ✨ 新特性

- **sortable-tree**: 新增 sortableRule 函数规则，控制拖动排序.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's improved

- **sortable-tree**: 新增 sortableRule 函数规则，控制拖动排序, closes [#46](https://github.com/ant-design/pro-editor/issues/46) ([9b8d127](https://github.com/ant-design/pro-editor/commit/9b8d127))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

### [Version&nbsp;0.7.2](https://github.com/ant-design/pro-editor/compare/v0.7.1...v0.7.2)

<sup>Released on **2023-07-03**</sup>

#### 🐛 修复

- **sortable-list**: 兼容默认数据展示.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's fixed

- **sortable-list**: 兼容默认数据展示 ([b203c88](https://github.com/ant-design/pro-editor/commit/b203c88))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

### [Version&nbsp;0.7.1](https://github.com/ant-design/pro-editor/compare/v0.7.0...v0.7.1)

<sup>Released on **2023-07-03**</sup>

#### 🐛 修复

- 优化 Input 和 InputNumber 组件的受控变更逻辑.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's fixed

- 优化 Input 和 InputNumber 组件的受控变更逻辑, closes [#45](https://github.com/ant-design/pro-editor/issues/45) ([e903a6b](https://github.com/ant-design/pro-editor/commit/e903a6b))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version&nbsp;0.7.0](https://github.com/ant-design/pro-editor/compare/v0.6.0...v0.7.0)

<sup>Released on **2023-06-25**</sup>

#### ✨ 新特性

- **sortable-tree**: 支持禁用拖拽功能.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's improved

- **sortable-tree**: 支持禁用拖拽功能 ([cc53208](https://github.com/ant-design/pro-editor/commit/cc53208))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version&nbsp;0.6.0](https://github.com/ant-design/pro-editor/compare/v0.5.0...v0.6.0)

<sup>Released on **2023-06-20**</sup>

#### ✨ 新特性

- **pro-editor**: 支持撤销重做.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's improved

- **pro-editor**: 支持撤销重做 ([2e8c27a](https://github.com/ant-design/pro-editor/commit/2e8c27a))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version&nbsp;0.5.0](https://github.com/ant-design/pro-editor/compare/v0.4.2...v0.5.0)

<sup>Released on **2023-06-19**</sup>

#### ✨ 新特性

- **sortable-list**: 导出 SortableListDispatchPayload 类型定义.

#### 🐛 修复

- **awareness**: 修正类型导出问题, 兼容服务端渲染.
- **component-asset**: 修正 AssetSchema 类型.
- **excel-table**: 修正 Hansontable 在 server 端的兼容性问题, 修正 Hansontable 在 server 端的兼容性问题.
- **sortable-tree**: 修正 SortableTree 在 server 端的兼容性问题, 修正 SortableTree 在 server 端的兼容性问题.
- Fix Input ref props, 将 antd-style 设为 peer，修正 ThemeProvider 多实例问题.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's improved

- **sortable-list**: 导出 SortableListDispatchPayload 类型定义 ([21b51e6](https://github.com/ant-design/pro-editor/commit/21b51e6))

#### What's fixed

- **awareness**: 修正类型导出问题 ([2b24240](https://github.com/ant-design/pro-editor/commit/2b24240))
- **awareness**: 兼容服务端渲染 ([dfe8bd5](https://github.com/ant-design/pro-editor/commit/dfe8bd5))
- **component-asset**: 修正 AssetSchema 类型 ([005f857](https://github.com/ant-design/pro-editor/commit/005f857))
- **excel-table**: 修正 Hansontable 在 server 端的兼容性问题 ([c834bb4](https://github.com/ant-design/pro-editor/commit/c834bb4))
- **excel-table**: 修正 Hansontable 在 server 端的兼容性问题 ([2b95772](https://github.com/ant-design/pro-editor/commit/2b95772))
- **sortable-tree**: 修正 SortableTree 在 server 端的兼容性问题 ([04e2597](https://github.com/ant-design/pro-editor/commit/04e2597))
- **sortable-tree**: 修正 SortableTree 在 server 端的兼容性问题 ([8570903](https://github.com/ant-design/pro-editor/commit/8570903))
- Fix Input ref props ([ca1d539](https://github.com/ant-design/pro-editor/commit/ca1d539))
- 将 antd-style 设为 peer，修正 ThemeProvider 多实例问题 ([86719b5](https://github.com/ant-design/pro-editor/commit/86719b5))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version&nbsp;0.5.0-alpha.8](https://github.com/ant-design/pro-editor/compare/v0.5.0-alpha.7...v0.5.0-alpha.8)

<sup>Released on **2023-06-18**</sup>

#### 🐛 修复

- Highlight scroll error.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's fixed

- Highlight scroll error, closes [#37](https://github.com/ant-design/pro-editor/issues/37) ([a313ceb](https://github.com/ant-design/pro-editor/commit/a313ceb))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version&nbsp;0.5.0-alpha.7](https://github.com/ant-design/pro-editor/compare/v0.5.0-alpha.6...v0.5.0-alpha.7)

<sup>Released on **2023-06-18**</sup>

#### 🐛 修复

- **sortable-tree**: 修正 SortableTree 在 server 端的兼容性问题.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's fixed

- **sortable-tree**: 修正 SortableTree 在 server 端的兼容性问题 ([04e2597](https://github.com/ant-design/pro-editor/commit/04e2597))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version&nbsp;0.5.0-alpha.6](https://github.com/ant-design/pro-editor/compare/v0.5.0-alpha.5...v0.5.0-alpha.6)

<sup>Released on **2023-06-18**</sup>

#### 🐛 修复

- **sortable-tree**: 修正 SortableTree 在 server 端的兼容性问题.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's fixed

- **sortable-tree**: 修正 SortableTree 在 server 端的兼容性问题 ([8570903](https://github.com/ant-design/pro-editor/commit/8570903))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version&nbsp;0.5.0-alpha.5](https://github.com/ant-design/pro-editor/compare/v0.5.0-alpha.4...v0.5.0-alpha.5)

<sup>Released on **2023-06-18**</sup>

#### 🐛 修复

- **excel-table**: 修正 Hansontable 在 server 端的兼容性问题.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's fixed

- **excel-table**: 修正 Hansontable 在 server 端的兼容性问题 ([c834bb4](https://github.com/ant-design/pro-editor/commit/c834bb4))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version&nbsp;0.5.0-alpha.4](https://github.com/ant-design/pro-editor/compare/v0.5.0-alpha.3...v0.5.0-alpha.4)

<sup>Released on **2023-06-18**</sup>

#### 🐛 修复

- **awareness**: 修正类型导出问题.
- **excel-table**: 修正 Hansontable 在 server 端的兼容性问题.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's fixed

- **awareness**: 修正类型导出问题 ([2b24240](https://github.com/ant-design/pro-editor/commit/2b24240))
- **excel-table**: 修正 Hansontable 在 server 端的兼容性问题 ([2b95772](https://github.com/ant-design/pro-editor/commit/2b95772))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version&nbsp;0.5.0-alpha.3](https://github.com/ant-design/pro-editor/compare/v0.5.0-alpha.2...v0.5.0-alpha.3)

<sup>Released on **2023-06-18**</sup>

#### 🐛 修复

- **awareness**: 兼容服务端渲染.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's fixed

- **awareness**: 兼容服务端渲染 ([dfe8bd5](https://github.com/ant-design/pro-editor/commit/dfe8bd5))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version&nbsp;0.5.0-alpha.2](https://github.com/ant-design/pro-editor/compare/v0.5.0-alpha.1...v0.5.0-alpha.2)

<sup>Released on **2023-06-17**</sup>

#### 🐛 修复

- **component-asset**: 修正 AssetSchema 类型.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's fixed

- **component-asset**: 修正 AssetSchema 类型 ([005f857](https://github.com/ant-design/pro-editor/commit/005f857))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version&nbsp;0.5.0-alpha.1](https://github.com/ant-design/pro-editor/compare/v0.4.2-alpha.2...v0.5.0-alpha.1)

<sup>Released on **2023-06-16**</sup>

#### ✨ 新特性

- **sortable-list**: 导出 SortableListDispatchPayload 类型定义.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's improved

- **sortable-list**: 导出 SortableListDispatchPayload 类型定义 ([21b51e6](https://github.com/ant-design/pro-editor/commit/21b51e6))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

### [Version&nbsp;0.4.2](https://github.com/ant-design/pro-editor/compare/v0.4.1...v0.4.2)

<sup>Released on **2023-06-18**</sup>

#### 🐛 修复

- Highlight scroll error.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's fixed

- Highlight scroll error, closes [#37](https://github.com/ant-design/pro-editor/issues/37) ([a313ceb](https://github.com/ant-design/pro-editor/commit/a313ceb))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

### [Version&nbsp;0.4.2-alpha.2](https://github.com/ant-design/pro-editor/compare/v0.4.2-alpha.1...v0.4.2-alpha.2)

<sup>Released on **2023-06-16**</sup>

#### 🐛 修复

- Fix Input ref props.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's fixed

- Fix Input ref props ([ca1d539](https://github.com/ant-design/pro-editor/commit/ca1d539))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

### [Version&nbsp;0.4.2-alpha.1](https://github.com/ant-design/pro-editor/compare/v0.4.1...v0.4.2-alpha.1)

<sup>Released on **2023-06-16**</sup>

#### 🐛 修复

- 将 antd-style 设为 peer，修正 ThemeProvider 多实例问题.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's fixed

- 将 antd-style 设为 peer，修正 ThemeProvider 多实例问题 ([86719b5](https://github.com/ant-design/pro-editor/commit/86719b5))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

### [Version&nbsp;0.4.1](https://github.com/ant-design/pro-editor/compare/v0.4.0...v0.4.1)

<sup>Released on **2023-06-15**</sup>

#### 🐛 修复

- **use-proeditor**: 修正 togglePanelExpand 方法缺失的 bug.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's fixed

- **use-proeditor**: 修正 togglePanelExpand 方法缺失的 bug ([b126d67](https://github.com/ant-design/pro-editor/commit/b126d67))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version&nbsp;0.4.0](https://github.com/ant-design/pro-editor/compare/v0.3.0...v0.4.0)

<sup>Released on **2023-06-15**</sup>

#### ✨ 新特性

- **component-asset**: CreateUseAssetStore 方法支持导出 AssetProvider, 优化 createTestAssetStore ，便于下游测试, 添加 createTestAssetStore 方法，便于下游测试.
- **pro-editor**: 增加 updateCanvasInteraction 方法, 支持 getCanvasInteraction，并调整 store set、get 命名风格, 支持配置 ProEditorStore 在 devtools 中的名称.

#### 🐛 修复

- **component-asset**: 修正 CreateAssetStore 的类型，对齐到 ProEditorInstance, 修正类型.
- **pro-editor**: 修正与 assetStore 的数据同步问题, 调整 devtools api 名称.
- **sortable-tree**: 修正 ReactNodeProps 方法类型定义.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's improved

- **component-asset**: CreateUseAssetStore 方法支持导出 AssetProvider ([557ff3b](https://github.com/ant-design/pro-editor/commit/557ff3b))
- **component-asset**: 优化 createTestAssetStore ，便于下游测试 ([9d1f11f](https://github.com/ant-design/pro-editor/commit/9d1f11f))
- **component-asset**: 添加 createTestAssetStore 方法，便于下游测试 ([051615d](https://github.com/ant-design/pro-editor/commit/051615d))
- **pro-editor**: 增加 updateCanvasInteraction 方法 ([7a038c8](https://github.com/ant-design/pro-editor/commit/7a038c8))
- **pro-editor**: 支持 getCanvasInteraction，并调整 store set、get 命名风格 ([9c778fb](https://github.com/ant-design/pro-editor/commit/9c778fb))
- **pro-editor**: 支持配置 ProEditorStore 在 devtools 中的名称 ([e9d373d](https://github.com/ant-design/pro-editor/commit/e9d373d))

#### What's fixed

- **component-asset**: 修正 CreateAssetStore 的类型，对齐到 ProEditorInstance ([70008a8](https://github.com/ant-design/pro-editor/commit/70008a8))
- **component-asset**: 修正类型 ([a2f411d](https://github.com/ant-design/pro-editor/commit/a2f411d))
- **pro-editor**: 修正与 assetStore 的数据同步问题 ([fa98010](https://github.com/ant-design/pro-editor/commit/fa98010))
- **pro-editor**: 调整 devtools api 名称 ([4b4f509](https://github.com/ant-design/pro-editor/commit/4b4f509))
- **sortable-tree**: 修正 ReactNodeProps 方法类型定义 ([8dfe762](https://github.com/ant-design/pro-editor/commit/8dfe762))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version&nbsp;0.4.0-alpha.8](https://github.com/ant-design/pro-editor/compare/v0.4.0-alpha.7...v0.4.0-alpha.8)

<sup>Released on **2023-06-15**</sup>

#### ✨ 新特性

- **component-asset**: 优化 createTestAssetStore ，便于下游测试.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's improved

- **component-asset**: 优化 createTestAssetStore ，便于下游测试 ([9d1f11f](https://github.com/ant-design/pro-editor/commit/9d1f11f))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version&nbsp;0.4.0-alpha.7](https://github.com/ant-design/pro-editor/compare/v0.4.0-alpha.6...v0.4.0-alpha.7)

<sup>Released on **2023-06-15**</sup>

#### ✨ 新特性

- **component-asset**: 添加 createTestAssetStore 方法，便于下游测试.
- **pro-editor**: 支持 getCanvasInteraction，并调整 store set、get 命名风格.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's improved

- **component-asset**: 添加 createTestAssetStore 方法，便于下游测试 ([051615d](https://github.com/ant-design/pro-editor/commit/051615d))
- **pro-editor**: 支持 getCanvasInteraction，并调整 store set、get 命名风格 ([9c778fb](https://github.com/ant-design/pro-editor/commit/9c778fb))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version&nbsp;0.4.0-alpha.6](https://github.com/ant-design/pro-editor/compare/v0.4.0-alpha.5...v0.4.0-alpha.6)

<sup>Released on **2023-06-15**</sup>

#### 🐛 修复

- **component-asset**: 修正类型.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's fixed

- **component-asset**: 修正类型 ([a2f411d](https://github.com/ant-design/pro-editor/commit/a2f411d))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

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
