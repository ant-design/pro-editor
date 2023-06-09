import { createStyles } from '../theme';

export const useStyles = createStyles(({ css, cx }, prefixCls) => {
  const prefix = `${prefixCls}`;

  return {
    container: cx(
      `${prefix}-container`,
      css`
        position: 'relative';
        margin: 0;
      `,
    ),
  };
});
