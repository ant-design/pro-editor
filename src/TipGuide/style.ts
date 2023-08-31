import { createStyles } from '../theme';

export const useStyle = createStyles(({ css, cx }, prefixCls: string) => {
  console.log('prefixCls', prefixCls);

  return {
    container: cx(
      prefixCls,
      css`
        position: relative;
        width: fit-content;
      `,
    ),
    footer: cx(
      `${prefixCls}-footer`,
      css`
        width: 100%;
        display: flex;
        justify-content: end;
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
