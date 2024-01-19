import { createStyles } from '../../../theme';

export const useStyle = createStyles(({ token, css, cx, prefixCls }) => {
  const prefix = `${prefixCls}-${token.editorPrefix}-pro-builder-navbar`;
  return {
    container: cx(
      prefix,
      css`
        background-color: ${token.colorBgContainer};
      `,
    ),
    logo: cx(
      `${prefix}-logo`,
      css`
        font-size: 16px;
      `,
    ),
    img: cx(
      `${prefix}-logo-img`,
      css`
        height: 24px;
      `,
    ),
  };
});
