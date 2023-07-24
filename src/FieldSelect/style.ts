import { createStyles } from '../theme';

export const useStyle = createStyles(({ token, css, cx }, prefixCls: string) => {
  return {
    select: cx(
      `${prefixCls}`,
      css({
        width: '100%',
      }),
    ),
    extra: cx(
      `${prefixCls}-extra`,
      css({
        display: 'flex',
        alignItems: 'center',
        padding: `${token.paddingXXS}px ${token.paddingXS}px`,
      }),
    ),

    extraInput: cx(
      `${prefixCls}-extra-input`,
      css({
        marginRight: token.marginXXS,
      }),
    ),

    extraAction: cx(
      `${prefixCls}-extra-action`,
      css({
        flexShrink: 0,
      }),
    ),
  };
});
