import { createStyles, css, cx } from '../../../theme';

export const useStyles = createStyles(({ prefixCls }) => {
  const prefix = `${prefixCls}-editor-stage`;

  return {
    container: cx(
      `${prefix}-container`,
      css`
        overflow: scroll;
      `,
    ),
  };
});
