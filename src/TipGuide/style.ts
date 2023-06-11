import { createStyles } from '../theme';

export const useStyle = createStyles(({ css, cx }, prefixCls: string) => {
  return {
    container: cx(
      prefixCls,
      css`
        position: relative;
        width: fit-content;
      `,
    ),
    tip: cx(
      `${prefixCls}-tip`,
      css`
        position: absolute;
        left: 50%;
        transform: translate(-50%);
      `,
    ),
  };
});
