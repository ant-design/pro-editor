import { createStyles, css, cx } from '../theme';

export const useStyle = createStyles((_, prefixCls: string) => {
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
