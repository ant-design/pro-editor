import { createStyles, css, cx } from '../../../theme';

export const useStyle = createStyles((_, prefixCls: string) => {
  return {
    wrap: cx(
      `${prefixCls}-wrap`,
      css`
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        background-color: #24272e;
        box-sizing: border-box;
      `,
    ),
    code: cx(
      `${prefixCls}-code`,
      css`
        width: 100%;
        height: 100%;
        background-color: #141619;
        border-radius: 6px;
        padding: 16px;
        overflow-y: scroll;
        position: relative;
        box-sizing: border-box;
      `,
    ),
    highlight: cx(
      `${prefixCls}-highlight`,
      css`
        width: 100%;
        height: 100%;
        font-size: 16px;
        .studio-highlight-dark {
          background: none !important;
        }
      `,
    ),
  };
});
