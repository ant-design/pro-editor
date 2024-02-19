/**
 * 代码格式化
 * @param configCode
 * @returns
 */
export const prettier = (configCode: string) => {
  let prettierCode = '';
  try {
    const prettier = require('prettier');
    const plugins = [require('prettier/parser-typescript')];

    prettierCode = prettier.format(configCode, {
      parser: 'typescript',
      plugins,
      // 以下参考 Bigfish 配置
      semi: true,
      singleQuote: true,
      printWidth: 100,
      trailingComma: 'all',
      proseWrap: 'never',
      endOfLine: 'lf',
    });
  } catch (err) {
    console.error('err', err);
    prettierCode = `代码格式化失败，格式化前为:\n ${configCode}`;
  }
  return prettierCode;
};
