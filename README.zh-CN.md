<div align="center">

<img height="160" src="https://gw.alipayobjects.com/zos/kitchen/wzToJwlSw%24/logo.svg">

<h1>ProEditor</h1>

编辑器领域 UI 框架与前端组件解决方案

[![][npm-release-shield]][npm-release-link]
[![][npm-downloads-shield]][npm-downloads-link]
[![][github-releasedate-shield]][github-releasedate-link]
[![][github-action-test-shield]][github-action-test-link]
[![][github-action-release-shield]][github-action-release-link]
[![][codecov-shield]][codecov-link] <br/>
[![][github-contributors-shield]][github-contributors-link]
[![][github-forks-shield]][github-forks-link]
[![][github-stars-shield]][github-stars-link]
[![][github-issues-shield]][github-issues-link]
[![][github-license-shield]][github-license-link] <br/>
[![][ant-design-shield]][ant-design-link]
[![][devops-dumi-shield]][devops-dumi-link]
[![][devops-father-shield]][devops-father-link]

[English](./README.md)・简体中文・[Changelog](./CHANGELOG.md) . [Report Bug][github-issues-link] · [Request Feature][github-issues-link]

![](https://gw.alipayobjects.com/zos/kitchen/2rXP4ZVHCo/pro-editor.webp)

</div>

<details>
<summary><kbd>目录</kbd></summary>

#### 目录

- [📦 安装](#-安装)
  - [使用 Next.js 进行编译](#使用-nextjs-进行编译)
- [🔨 使用](#-使用)
- [✨ 特性](#-特性)
  - [ProEditor 的强大特性](#proeditor-的强大特性)
  - [框架架构](#框架架构)
- [👀 展示](#-展示)
- [🖥 浏览器兼容性](#-浏览器兼容性)
- [⌨️ 本地开发](#️-本地开发)
- [🤝 贡献](#-贡献)
- [🛣️ 生态系统](#️-生态系统)

####

</details>

## 📦 安装

> \[!IMPORTANT]\
> 该包仅支持 [ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)。

要安装 `@ant-design/pro-editor`，请运行以下命令：

```bash
$ pnpm install @ant-design/pro-editor
```

### 使用 Next.js 进行编译

> \[!NOTE]\
> 为了正确使用 Next.js SSR，请在 `next.config.js` 中添加 `transpilePackages: ['@ant-design/pro-editor']`。例如：

```js
const nextConfig = {
  transpilePackages: ['@ant-design/pro-editor', 'leva', 'zustand'],
};
```

<br/>

## 🔨 使用

```jsx
import { SmileOutlined } from '@ant-design/icons';
import { ActionIcon } from '@ant-design/pro-editor';

export default () => (
  <ActionIcon
    title={'功能按钮描述'}
    icon={<SmileOutlined />}
    onClick={() => {
      alert('触发动作');
    }}
  />
);
```

<br/>

## ✨ 特性

> \[!NOTE]
>
> 前端组件库已经彻底改变了开发方式，极大地提高了效率，提升了用户体验。在各大组件库都趋于成熟的 2023 年，我们为什么要推出 ProEditor ？

[![](https://next.ossinsight.io/widgets/official/compose-activity-trends/thumbnail.png?repo_id=637603722&image_size=auto&color_scheme=dark)](https://next.ossinsight.io/widgets/official/compose-activity-trends?repo_id=637603722)

<br/>

### ProEditor 的强大功能

> \[!NOTE]
>
> 我们将 ProEditor 视为编辑组件的基础库，类似于 antd，使开发人员能够轻松创建具有内在卓越用户体验的复杂交互式组件。这就是 `ProEditor` 名称的理念所在。

**我们对 ProEditor 的原则:**

- 🖐️ **自然编辑**：支持用户最自然的交互，包括但不限于鼠标多选、反选、快捷键等。
- ✨ **默认精致**：在 antd 基础组件上更进一步，交互体验上达到默认精致。
- 🔧 **灵活开放**：所有能力均支持原子化输出，包括但不限于组件、hooks、工具函数等。

<br/>

**编辑器领域 UI 框架与前端组件解决方案:**

> \[!TIP]
>
> 推动了可能性的边界，并增强了开发人员用于创建复杂、交互式和用户友好的 Web 应用程序的工具包，例如：

- 📦 **DraggablePanel**：允许可调整大小和可移动的面板，增强用户界面的交互性。
- 📝 **ColumnList**：提供用户友好的可排序列表，通过列定义进行管理，简化了复杂的列表交互。
- 🎨 **FreeCanvas**：提供类似于 Sketch 或 Figma 的可缩放画布，为用户提供创意设计的广阔空间。
- 🔍 **IconPicker**：一个与 iconfont 兼容的图标选择工具，使集成各种图标到设计中更加容易。
- 👥 **在线协作**：利用 yjs 和 zustand store 等技术，融合多用户功能，实现实时协作编辑和交互。

<br/>

### 框架架构

ProEditor 的架构大致如下：

![][architecture]

<br/>

## 👀 展示

让我们展示一些 ProEditor 的标志性组件：

|             **DraggablePanel**             |         **ColumnList**         |
| :----------------------------------------: | :----------------------------: |
|          可调整大小和可移动的面板          | 基于列定义的用户友好可排序列表 |
|               ![][prevew-1]                |         ![][prevew-2]          |
|               **FreeCanvas**               |         **IconPicker**         |
|    无限缩放画布，类似于 Sketch 或 Figma    | 与 iconfont 兼容的图标选择工具 |
|               ![][prevew-3]                |         ![][prevew-4]          |
|                **在线协作**                |                                |
| 融合了 yjs 和 zustand store 的多用户功能。 |                                |
|               ![][prevew-5]                |                                |

<br/>

## 🖥 浏览器兼容性

> \[!NOTE]
>
> - 现代浏览器和 Internet Explorer 11（使用[polyfills](https://stackoverflow.com/questions/57020976/polyfills-in-2019-for-ie11)）
> - [Electron](https://www.electronjs.org/)

| [![edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![electron_48x48](https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png)](http://godban.github.io/browsers-support-badges/) |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Edge                                                                                                                                              | 最近 2 个版本                                                                                                                                           | 最近 2 个版本                                                                                                                                           | 最近 2 个版本                                                                                                                                           | 最近 2 个版本                                                                                                                                                       |

<br/>

## ⌨️ 本地开发

您可以使用 Github Codespaces 进行在线开发：

[![][github-codespace-shield]][github-codespace-link]

或者克隆它进行本地开发：

```bash
$ git clone https://github.com/ant-design/pro-editor.git
$ cd pro-editor
$ pnpm install
$ pnpm dev
```

<br/>

## 🤝 贡献

> \[!IMPORTANT]
>
> 加入我们的协作生态系统。您的贡献是我们项目的心脏。以下是您如何成为我们充满活力的社区的重要组成部分：

- **整合和创新**：将 Ant Design Pro、umi 和 ProEditor 整合到您的项目中。您的实际使用和反馈对我们至关重要。
- **发表您的见解**：遇到了问题？有疑问？您的观点很重要。通过提交[问题][github-issues-link]来分享它们，帮助我们提升用户体验。
- **塑造未来**：有代码增强或功能想法吗？我们邀请您提出[拉取请求][pr-welcome-link]，直接为我们的代码库发展做出贡献。

每一次贡献，无论大小，都值得庆祝。加入我们，共同致力于完善和提升开源企业 UI 组件的世界。 😃

[![][pr-welcome-shield]][pr-welcome-link]

<a href="https://github.com/ant-design/pro-editor/graphs/contributors" target="_blank">
  <table>
    <tr>
      <th colspan="2">
        <br><img src="https://contrib.rocks/image?repo=ant-design/pro-editor"><br><br>
      </th>
    </tr>
    <tr>
      <td>
        <img src="https://next.ossinsight.io/widgets/official/compose-org-active-contributors/thumbnail.png?activity=active&period=past_28_days&owner_id=12101536&repo_ids=637603722&image_size=2x3&color_scheme=dark">
      </td>
      <td rowspan="2">
        <img src="https://next.ossinsight.io/widgets/official/compose-org-participants-growth/thumbnail.png?activity=active&period=past_28_days&owner_id=12101536&repo_ids=637603722&image_size=4x7&color_scheme=dark">
      </td>
    </tr>
    <tr>
      <td>
        <img src="https://next.ossinsight.io/widgets/official/compose-org-active-contributors/thumbnail.png?activity=new&period=past_28_days&owner_id=12101536&repo_ids=637603722&image_size=2x3&color_scheme=dark">
      </td>
    </tr>
  </table>
</a>

<br/>

## 🛣️ 生态系统

- **[ProComponents](https://github.com/ant-design/pro-components)** - 专为企业级应用设计，像专业人士一样使用 Ant Design！
- **[ProEditor](https://github.com/ant-design/pro-editor)** - 编辑器领域 UI 框架与前端组件解决方案。
- **[ProFlow](https://github.com/ant-design/pro-flow)** - 基于 React-Flow 的流程编辑器框架。
- **[ProChat](https://github.com/ant-design/pro-chat)** - 用于快速构建 LLM 聊天界面的组件库。

<br/>

---

#### 📝 License

Copyright © 2023 - present [AFX][ant-design-link] & [Ant Digital](https://antdigital.com). <br/>
This project is [MIT](./LICENSE) licensed.

<!-- 链接组 -->

[ant-design-link]: https://ant.design
[ant-design-shield]: https://img.shields.io/badge/-Ant%20Design-1677FF?labelColor=black&logo=antdesign&style=flat-square
[architecture]: https://gw.alipayobjects.com/zos/kitchen/2F0sXx1uad/architecture.webp
[codecov-link]: https://codecov.io/gh/ant-design/pro-editor
[codecov-shield]: https://img.shields.io/codecov/c/github/ant-design/pro-editor?color=1677FF&labelColor=black&style=flat-square&logo=codecov&logoColor=white
[devops-dumi-link]: https://d.umijs.org/
[devops-dumi-shield]: https://img.shields.io/badge/docs%20by-dumi-blue?color=1677FF&labelColor=black&style=flat-square
[devops-father-link]: https://github.com/umijs/father
[devops-father-shield]: https://img.shields.io/badge/build%20with-father-028fe4.svg?color=1677FF&labelColor=black&style=flat-square
[github-action-release-link]: https://github.com/ant-design/pro-editor/actions/workflows/release.yml
[github-action-release-shield]: https://img.shields.io/github/actions/workflow/status/ant-design/pro-editor/release.yml?color=1677FF&label=release&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-action-test-link]: https://github.com/ant-design/pro-editor/actions/workflows/test.yml
[github-action-test-shield]: https://img.shields.io/github/actions/workflow/status/ant-design/pro-editor/test.yml?color=1677FF&label=test&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-codespace-link]: https://codespaces.new/ant-design/pro-editor
[github-codespace-shield]: https://github.com/codespaces/badge.svg
[github-contributors-link]: https://github.com/ant-design/pro-editor/graphs/contributors
[github-contributors-shield]: https://img.shields.io/github/contributors/ant-design/pro-editor?color=1677FF&labelColor=black&style=flat-square
[github-forks-link]: https://github.com/ant-design/pro-editor/network/members
[github-forks-shield]: https://img.shields.io/github/forks/ant-design/pro-editor?color=1677FF&labelColor=black&style=flat-square
[github-issues-link]: https://github.com/ant-design/pro-editor/issues
[github-issues-shield]: https://img.shields.io/github/issues/ant-design/pro-editor?color=1677FF&labelColor=black&style=flat-square
[github-license-link]: https://github.com/ant-design/pro-editor/blob/main/LICENSE
[github-license-shield]: https://img.shields.io/github/license/ant-design/pro-editor?color=1677FF&labelColor=black&style=flat-square
[github-releasedate-link]: https://github.com/ant-design/pro-editor/releases
[github-releasedate-shield]: https://img.shields.io/github/release-date/ant-design/pro-editor?color=1677FF&labelColor=black&style=flat-square
[github-stars-link]: https://github.com/ant-design/pro-editor/network/stargazers
[github-stars-shield]: https://img.shields.io/github/stars/ant-design/pro-editor?color=1677FF&labelColor=black&style=flat-square
[npm-downloads-link]: https://www.npmjs.com/package/@ant-design/pro-editor
[npm-downloads-shield]: https://img.shields.io/npm/dt/@ant-design/pro-editor?labelColor=black&style=flat-square&color=1677FF
[npm-release-link]: https://www.npmjs.com/package/@ant-design/pro-editor
[npm-release-shield]: https://img.shields.io/npm/v/@ant-design/pro-editor?color=1677FF&labelColor=black&logo=npm&logoColor=white&style=flat-square
[pr-welcome-link]: https://github.com/ant-design/pro-editor/pulls
[pr-welcome-shield]: https://img.shields.io/badge/%E2%9D%A4%EF%B8%8F%20PR%20WELCOME-%E2%86%92-1677FF?labelColor=black&style=for-the-badge
[prevew-1]: https://gw.alipayobjects.com/zos/kitchen/sytsa4%26R%26d/1.gif
[prevew-2]: https://gw.alipayobjects.com/zos/kitchen/2DHhgqlXns/2.gif
[prevew-3]: https://gw.alipayobjects.com/zos/kitchen/KKcuxwR0Pz/3.gif
[prevew-4]: https://gw.alipayobjects.com/zos/kitchen/huuRPs3Kmk/4.gif
[prevew-5]: https://gw.alipayobjects.com/zos/kitchen/SQaNFOJbK4/5.gif
