import { createStyles } from '../../../theme';

export const useStyles = createStyles(({ css, cx }, prefixCls) => {
  const prefix = `${prefixCls}-stage`;

  return {
    container: cx(
      `${prefix}-container`,
      css`
        overflow: scroll;
      `,
    ),
  };
});
