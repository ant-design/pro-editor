import { createStyles, css, cx } from '../../../theme';

export const useStyle = createStyles((_, prefixCls: string) => {
  return {
    codeBox: cx(
      `${prefixCls}-code-box`,
      css`
        max-width: 100%;
        overflow: scroll;
        display: flex;
        flex-direction: column;
        position: relative;
        z-index: 99;
        flex-grow: 1;
        flex-basis: 0;
      `,
    ),
  };
});
