/**
 *
 * @type {import("@lobehub/i18n-cli").Config}
 */
module.exports = {
  markdown: {
    entry: ['docs/**/**.md', 'src/**/**.md'],
    entryLocale: 'zh-CN',
    exclude: ['docs/index.zh-CN.md'],
    entryExtension: '.zh-CN.md',
    outputLocales: ['en-US'],
  },
  modelName: 'gpt-3.5-turbo-1106',
};
