<p align="center">
  <a href="#">
    <img width="200" src="https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg">
  </a>
</p>

<h1 align="center">Ant Design ProEditor</h1>

<div align="center">

🌟 A Lightweight Editor UI Framework

![NPM version](https://img.shields.io/npm/v/@ant-design/pro-editor.svg?style=flat)
![NPM downloads](http://img.shields.io/npm/dm/@ant-design/pro-editor.svg?style=flat)
![Test CI](https://github.com/ant-design/pro-editor/actions/workflows/test.yml/badge.svg)
![Deploy CI](https://github.com/ant-design/pro-editor/actions/workflows/deploy.yml/badge.svg)

</div>

## 📦 Install

```bash
$ npm install @ant-design/pro-editor
```

```bash
yarn add @ant-design/pro-editor
```

## 🔨 Usage

```jsx
import { SmileOutlined } from '@ant-design/icons';
import { ActionIcon } from '@ant-design/pro-editor';

export default () => (
  <ActionIcon
    title={'功能按钮的说明'}
    icon={<SmileOutlined />}
    onClick={() => {
      alert('触发动作');
    }}
  />
);
```

## ⌨️ Development

```bash
$ git clone git@github.com:ant-design/pro-editor.git
$ cd pro-editor
$ npm install
$ npm start
```

Open your browser and visit http://localhost:8000

## 🤝 Contributing [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

- [Release Guide](https://github.com/ant-design/pro-editor/wiki/release)

## LICENSE

MIT
