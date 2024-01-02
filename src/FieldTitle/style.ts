import { createStyles } from '../theme';

export const useStyle = createStyles(({ token, css, cx, prefixCls }) => {
  const prefix = `${prefixCls}-${token?.editorPrefix}-field-title`;
  return {
    container: cx(
      `${prefix}-container`,
      css({
        display: 'inline-flex',
        alignItems: 'center',
        fontSize: token.fontSize,
      }),
    ),
    title: cx(
      `${prefix}-title`,
      css({
        marginLeft: token.marginXXS,
      }),
    ),
    description: cx(
      `${prefix}-description`,
      css({
        marginLeft: token.marginXXS,
      }),
    ),
  };
});
