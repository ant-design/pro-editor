import { createStyles } from '../theme';

export const useStyle = createStyles(({ css, cx, token, prefixCls }) => {
  const prefix = `${prefixCls}-${token.editorPrefix}`;
  return {
    icon: cx(
      `${prefix}`,
      css({
        fontSize: token.fontSizeLG,
      }),
    ),
  };
});
