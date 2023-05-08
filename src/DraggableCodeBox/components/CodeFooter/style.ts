import { createStyles, css, cx } from '../../../theme';

export const useStyle = createStyles((_, prefixCls: string) => {
  return {
    footer: cx(
      `${prefixCls}-footer`,
      css`
        background-color: #24272e;
        padding-top: 10px;
        /* padding-left: 16px; */
        padding-bottom: 8px;
        font-size: 12px;
        display: flex;
        color: #7f9aae;
        box-sizing: border-box;
        .openBtn {
          margin-left: 16px;
          cursor: pointer;
          user-select: none;
        }
      `,
    ),
  };
});
