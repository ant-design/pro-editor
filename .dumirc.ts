import { defineConfig } from 'dumi';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  outputPath: 'docs-dist',
  mfsu: false,
  favicons: ['https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg'],
  // @ts-ignore
  ssr: false,
  hash: true,
  ignoreMomentLocale: true,
  themeConfig: {
    socialLinks: {
      github: 'https://github.com/ant-design/pro-editor',
    },
    footer: 'Made with ❤️ by 蚂蚁集团 - AFX & 数字科技',
    logo: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
    name: '@ant-design/pro-editor',
  },
  extraBabelPlugins: ['antd-style'],
  locales: [
    { name: 'English', id: 'en-US' },
    { name: '简体中文', id: 'zh-CN' },
  ],
});
