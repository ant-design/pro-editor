import { createStyles } from '../../../theme';

export const useStyles = createStyles(({ token, css, cx, prefixCls }) => {
  const prefix = `${prefixCls}-${token.editorPrefix}-pro-builder-stage`;

  return {
    container: cx(
      `${prefix}-container`,
      css`
        overflow: scroll;
      `,
    ),
  };
});
