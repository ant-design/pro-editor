import { createStyles } from '../../../theme';

export const useStyles = createStyles(({ css, cx }, prefixCls) => {
  const prefix = `${prefixCls}`;

  return {
    index: cx(
      `${prefix}-index`,
      css`
        box-sizing: border-box;
        width: 1rem;
        margin-right: 1.5rem;
        display: inline-block;
        color: rgba(115, 138, 148, 0.4);
        text-align: right;
        user-select: none;
      `,
    ),
    content: cx(
      `${prefix}-content`,
      css`
        width: 100%;
      `,
    ),
  };
});
