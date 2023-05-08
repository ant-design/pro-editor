import { createStyles, injectGlobal } from '../../theme';

interface Props {
  prefixCls: string;
}
export const useStyles = createStyles(
  ({ token, cx, css }, { prefixCls }: Props) => {
    // 注入全局样式
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    injectGlobal`
        .htContextMenu {
          .htCore {
            color: ${token.colorTextSecondary};
            font-size: 12px;
            border-color: transparent !important;
            border-width: 1px !important;
            box-shadow: ${token.boxShadow};
          }
        }
      `;

    return {
      container: cx(
        `${prefixCls}-table`,
        css`
          .handsontable th:first-child,
          .handsontable th:nth-child(2),
          .handsontable td:first-of-type {
            border: none;
          }

          .handsontable {
            color: ${token.colorTextSecondary};
            font-size: 12px;

            .htCore {
              overflow: scroll;
              border-radius: 4px;
            }

            .handsontable th:last-child {
              border-right-color: ${token.colorFillTertiary};
            }

            th,
            td {
              background: none;
              border-top: none !important;
              border-right-color: ${token.colorFillTertiary};
              border-bottom: none;
              border-left-color: ${token.colorFillTertiary};
            }

            th,
            tr:first-child {
              color: ${token.colorText};
              background: ${token.colorFillTertiary};
              border-top: ${token.colorFillSecondary};
            }
            tr:nth-child(2n + 1) {
              background: ${token.colorFillTertiary};
            }
          }
        `,
      ),
    };
  },
);
