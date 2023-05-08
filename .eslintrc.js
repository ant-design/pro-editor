const config = require('@umijs/lint/dist/config/eslint');

module.exports = {
  ...config,
  rules: {
    ...config.rules,
    // 下述规则为判断后可以保留的部分
    'array-callback-return': 'off',
    'no-useless-escape': 'off',
    'no-case-declarations': 'off',
    '@typescript-eslint/no-use-before-define': [2, { functions: false }],
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
  },
};
