import { createStyles, css, cx } from '../../../theme';

export const useStyle = createStyles((_, prefixCls: string) => {
  return {
    header: cx(
      `${prefixCls}-header`,
      css`
        display: block;
        background-color: #24272e;
        padding-top: 20px;
        /* padding-left: 16px; */
        padding-bottom: 8px;
        font-size: 16px;
        color: white;
        display: flex;
        box-sizing: border-box;
      `,
    ),
    copyBtn: cx(
      `${prefixCls}-copy-btn`,
      css`
        color: #7f9aae;
        padding: 0;
        margin: 0;
        border: 0;
        background-color: #24272e;
        font-size: 16px;
        margin-left: 40px;
        cursor: pointer;
      `,
    ),
  };
});
