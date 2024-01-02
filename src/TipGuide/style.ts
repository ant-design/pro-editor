import { createStyles } from '../theme';

export const useStyle = createStyles(({ css, cx, prefixCls, token }) => {
  const prefix = `${prefixCls}-${token.editorPrefix}-tip-guide`;
  return {
    content: cx(`${prefix}-guide-content`),
    guide: cx(`${prefix}-guide`),
    container: cx(
      prefix,
      css`
        position: relative;
        width: fit-content;
      `,
    ),
    footer: cx(
      `${prefix}-footer`,
      css`
        width: 100%;
        display: flex;
        justify-content: end;
      `,
    ),
    tip: cx(
      `${prefix}-tip`,
      css`
        position: absolute;
        left: 50%;
        transform: translate(-50%);
      `,
    ),
  };
});
