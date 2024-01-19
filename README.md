<div align="center">

<img height="160" src="https://gw.alipayobjects.com/zos/kitchen/wzToJwlSw%24/logo.svg">

<h1>ProEditor</h1>

The Ultimate Editor UI Framework and Components

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

English · [简体中文](./README.zh-CN.md) · [Changelog](./CHANGELOG.md) . [Report Bug][github-issues-link] · [Request Feature][github-issues-link]

![](https://gw.alipayobjects.com/zos/kitchen/2rXP4ZVHCo/pro-editor.webp)

</div>

<details>
<summary><kbd>Table of contents</kbd></summary>

#### TOC

- [📦 Installation](#-installation)
  - [Compile with Next.js](#compile-with-nextjs)
- [🔨 Usage](#-usage)
- [✨ Features](#-features)
  - [Empowering Features of ProEditor](#empowering-features-of-proeditor)
  - [Framework Architecture](#framework-architecture)
- [👀 Showcase](#-showcase)
- [🖥 Browser compatibility](#-browser-compatibility)
- [⌨️ Local Development](#️-local-development)
- [🤝 Contributing](#-contributing)
- [🛣️ Ecosystem](#️-ecosystem)

####

</details>

## 📦 Installation

> \[!IMPORTANT]\
> This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).

To install `@ant-design/pro-editor`, run the following command:

```bash
$ pnpm install @ant-design/pro-editor
```

### Compile with Next.js

> \[!NOTE]\
> By work correct with Next.js SSR, add `transpilePackages: ['@ant-design/pro-editor']` to `next.config.js`. For example:

```js
const nextConfig = {
  transpilePackages: ['@ant-design/pro-editor', 'leva', 'zustand'],
};
```

<br/>

## 🔨 Usage

```jsx
import { SmileOutlined } from '@ant-design/icons';
import { ActionIcon } from '@ant-design/pro-editor';

export default () => (
  <ActionIcon
    title={'Function button description'}
    icon={<SmileOutlined />}
    onClick={() => {
      alert('Trigger action');
    }}
  />
);
```

<br/>

## ✨ Features

> \[!NOTE]
>
> Front-end component libraries have revolutionized development, boosting efficiency by orders of magnitude and elevating user experience. Yet, as mature as libraries like Ant Design (antd) and ProComponents are, one might wonder if there's any room left for innovation.

[![](https://next.ossinsight.io/widgets/official/compose-activity-trends/thumbnail.png?repo_id=637603722&image_size=auto&color_scheme=dark)](https://next.ossinsight.io/widgets/official/compose-activity-trends?repo_id=637603722)

<br/>

### Empowering Features of ProEditor

> \[!NOTE]
>
> We envision ProEditor as the foundational library for editing components, akin to antd, enabling developers to easily create complex interactive components with an inherently superior user experience. This is the rationale behind the `ProEditor`.

**Our Principles for ProEditor:**

- 🖐️ **Intuitive Editing**: Supports natural user interactions like multi-selection, deselection, and keyboard shortcuts, ensuring a smooth editing experience.
- ✨ **Refined by Default**: Enhances Ant Design components to deliver a superior user experience with more polish and refinement.
- 🔧 **Open Flexibility**: Provides atomic-level capabilities, offering a wide range of components, hooks, and utility functions for extensive customization and flexibility.

<br/>

**UI Framework and Frontend Component Solutions in the Editor Field:**

> \[!TIP]
>
> ProEditor concentrates on expanding the limits of the feasible and augmenting the array of tools available to developers for the construction of sophisticated, interactive, and user-centric web applications. For instance:

- 📦 **DraggablePanel**: Allows for resizable and movable panels, enhancing the interactivity of the user interface.
- 📝 **ColumnList**: Offers a user-friendly sortable list that is manageable through column definitions, simplifying complex list interactions.
- 🎨 **FreeCanvas**: Provides a zoomable canvas similar to applications like Sketch or Figma, giving users a vast space for creative design.
- 🔍 **IconPicker**: An icon selection tool that is compatible with iconfont, making it easier to integrate a wide range of icons into the design.
- 👥 **Online Collaboration**: Incorporates multi-user capabilities using technologies like yjs and zustand store, enabling real-time collaborative editing and interaction.

<br/>

### Framework Architecture

ProEditor is structured to facilitate these principles effectively.

![][architecture]

<br/>

## 👀 Showcase

Let's showcase some of ProEditor's signature components:

|                    **DraggablePanel**                     |                      **ColumnList**                       |
| :-------------------------------------------------------: | :-------------------------------------------------------: |
|             For resizable and movable panels              | A user-friendly sortable list based on column definitions |
|                       ![][prevew-1]                       |                       ![][prevew-2]                       |
|                      **FreeCanvas**                       |                      **IconPicker**                       |
|    A limitless zoomable canvas akin to Sketch or Figma    |      An icon selection tool compatible with iconfont      |
|                       ![][prevew-3]                       |                       ![][prevew-4]                       |
|                 **Online Collaboration**                  |                                                           |
| Multi-user capabilities wrapped in yjs and zustand store. |                                                           |
|                       ![][prevew-5]                       |                                                           |

<br/>

## 🖥 Browser compatibility

> \[!NOTE]
>
> - Modern browsers and Internet Explorer 11 (with [polyfills](https://stackoverflow.com/questions/57020976/polyfills-in-2019-for-ie11))
> - [Electron](https://www.electronjs.org/)

| [![edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![electron_48x48](https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png)](http://godban.github.io/browsers-support-badges/) |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Edge                                                                                                                                              | last 2 versions                                                                                                                                         | last 2 versions                                                                                                                                         | last 2 versions                                                                                                                                         | last 2 versions                                                                                                                                                     |

<br/>

## ⌨️ Local Development

You can use Github Codespaces for online development:

[![][github-codespace-shield]][github-codespace-link]

Or clone it for local development:

```bash
$ git clone https://github.com/ant-design/pro-editor.git
$ cd pro-editor
$ pnpm install
$ pnpm dev
```

<br/>

## 🤝 Contributing

> \[!IMPORTANT]
>
> Join our collaborative ecosystem. Your contributions are the heartbeat of our project. Here's how you can be an integral part of our vibrant community:

- **Integrate and Innovate**: Incorporate Ant Design Pro, umi, and ProEditor into your projects. Your real-world usage and feedback are invaluable to us.
- **Voice Your Insights**: Encounter a glitch? Have a query? Your perspectives matter. Share them by submitting [issues][github-issues-link] and help us enhance the user experience.
- **Shape the Future**: Have code enhancements or feature ideas? We invite you to propose [pull requests][pr-welcome-link] and contribute directly to the evolution of our codebase.

Every contribution, big or small, is celebrated. Join us in our mission to refine and elevate the world of open-source enterprise UI components. 😃

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

## 🛣️ Ecosystem

- **[ProComponents](https://github.com/ant-design/pro-components)** - Designed for Enterprise-Level Application, Use Ant Design like a Pro!.
- **[ProEditor](https://github.com/ant-design/pro-editor)** - The Ultimate Editor UI Framework and Components.
- **[ProFlow](https://github.com/ant-design/pro-flow)** - A Flow Editor Framework base on React-Flow.
- **[ProChat](https://github.com/ant-design/pro-chat)** - Components Library for Quickly Building LLM Chat Interfaces.

<br/>

---

#### 📝 License

Copyright © 2023 - present [AFX][ant-design-link] & [Ant Digital](https://antdigital.com). <br/>
This project is [MIT](./LICENSE) licensed.

<!-- LINK GROUP -->

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
