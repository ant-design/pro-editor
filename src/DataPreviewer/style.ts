import { createStyles } from '../theme';

export const useStyle = createStyles(({ token, stylish, cx, css }, prefixCls: string) => {
  return {
    container: cx(
      prefixCls,
      css`
        ${stylish.textInfo}
      `,
    ),
    empty: cx(
      `${prefixCls}-empty`,
      css`
        padding: 8px;
        background: ${token.colorFillQuaternary};
        border-radius: 4px;
        .studio-empty-normal {
          margin: 12px 0;
        }
      `,
    ),
    json: cx(
      `${prefixCls}-json`,
      css`
        border-radius: 4px;

        .json-viewer-theme-dark {
          background: none !important;
        }
      `,
    ),
    table: css`
      .studio-table-cell {
        padding: 4px !important;
      }
    `,
  };
});
