import { defineConfig } from 'dumi';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  outputPath: 'docs-dist',
  mfsu: false,
  // apiParser: {},
  // resolve: {
  //   // 配置入口文件路径，API 解析将从这里开始
  //   entryFile: './src/index.ts',
  // },
  favicons: ['https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg'],
  // @ts-ignore
  ssr: false,
  hash: true,
  ignoreMomentLocale: true,
  codeSplitting: {
    jsStrategy: 'granularChunks',
  },
  themeConfig: {
    hero: {
      'zh-CN': {
        title: 'ProEditor',
        description: '🌟 轻量级编辑器 UI 框架',
        actions: [
          {
            text: '快速开始 →',
            link: '/guide/intro',
          },
          {
            text: 'Github',
            link: 'https://github.com/ant-design/pro-editor',
          },
        ],
      },
      'en-US': {
        title: 'ProEditor',
        description: '🌟 Lightweight Editor UI Framework',
        actions: [
          {
            text: 'Quick Start →',
            link: '/guide/intro',
          },
        ],
      },
    },
    socialLinks: {
      github: 'https://github.com/ant-design/pro-editor',
    },
    footer: 'Made with ❤️ by 蚂蚁集团 - AFX & 数字科技',
    features: [
      {
        image:
          'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/q48YQ5X4ytAAAAAAAAAAAAAAFl94AQBr',
        title: '简单易用',
        description: '在 Ant Design 上进行了自己的封装，更加易用',
      },
      {
        image: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        title: 'Ant Design',
        description: '与 Ant Design 设计体系一脉相承，无缝对接 antd 项目',
      },
      {
        image:
          'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/UKqDTIp55HYAAAAAAAAAAAAAFl94AQBr',
        title: '通用编辑器组件',
        description: '提供完备的编辑器组件，方便使用者定制自己的编辑器',
      },

      {
        image:
          'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/Y_NMQKxw7OgAAAAAAAAAAAAAFl94AQBr',
        title: '预设样式',
        description: '样式风格与 antd 一脉相承，无需魔改，浑然天成。默认好用的主题系统',
      },
      {
        image:
          'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/U3XjS5IA1tUAAAAAAAAAAAAAFl94AQBr',
        title: '预设行为',
        description: '更少的代码，更少的 Bug，更多的功能',
      },

      {
        image: 'https://gw.alipayobjects.com/zos/antfincdn/Eb8IHpb9jE/Typescript_logo_2020.svg',
        title: 'TypeScript',
        description: '使用 TypeScript 开发，提供完整的类型定义文件，无需频繁打开官网',
      },
    ],
    logo: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
    name: '@ant-design/pro-editor',
  },
});
