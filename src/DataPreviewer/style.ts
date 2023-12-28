import { createStyles } from '../theme';

export const useStyle = createStyles(({ token, stylish, cx, css, prefixCls }) => {
  const prefix = `${prefixCls}-${token?.editorPrefix}-data-previewer`;
  return {
    container: cx(
      prefix,
      css`
        ${stylish.textInfo}
      `,
    ),
    empty: cx(
      `${prefix}-empty`,
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
      `${prefix}-json`,
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
