import { createStyles } from '../theme';

export const useStyle = createStyles(({ token, css, cx, prefixCls }) => {
  const prefix = `${prefixCls}-${token?.editorPrefix}-field-select`;
  return {
    select: cx(
      `${prefix}`,
      css({
        width: '100%',
      }),
    ),
    extra: cx(
      `${prefix}-extra`,
      css({
        display: 'flex',
        alignItems: 'center',
        padding: `${token.paddingXXS}px ${token.paddingXS}px`,
      }),
    ),

    extraInput: cx(
      `${prefix}-extra-input`,
      css({
        marginRight: token.marginXXS,
      }),
    ),

    extraAction: cx(
      `${prefix}-extra-action`,
      css({
        flexShrink: 0,
      }),
    ),
  };
});
