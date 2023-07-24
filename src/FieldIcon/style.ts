import { createStyles } from '../theme';

export const useStyle = createStyles(({ css, cx, token }, prefixCls: string) => {
  return {
    icon: cx(
      `${prefixCls}`,
      css({
        fontSize: token.fontSizeLG,
      }),
    ),
  };
});
