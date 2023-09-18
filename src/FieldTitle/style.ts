import { createStyles } from '../theme';

export const useStyle = createStyles(({ token, css, cx }, { prefixCls }) => {
  return {
    container: cx(
      `${prefixCls}-container`,
      css({
        display: 'inline-flex',
        alignItems: 'center',
        fontSize: token.fontSize,
      }),
    ),
    title: cx(
      `${prefixCls}-title`,
      css({
        marginLeft: token.marginXXS,
      }),
    ),
    description: cx(
      `${prefixCls}-description`,
      css({
        marginLeft: token.marginXXS,
      }),
    ),
  };
});
