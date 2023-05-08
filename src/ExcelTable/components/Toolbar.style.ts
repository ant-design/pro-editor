import { createStyles } from '../../theme';

interface Props {
  prefixCls: string;
}
export const useStyles = createStyles(
  ({ token, stylish, css, cx }, { prefixCls }: Props) => {
    return {
      input: cx(
        `${prefixCls}-input`,
        css`
          width: 90px;
          background: ${token.colorFillQuaternary};
          border-color: transparent;
          box-shadow: none;
          // TODO: 等后续 antd 提供自定义样式覆盖能力
          .studio-input-number-group-addon {
            padding: 0 4px;
            color: ${token.colorTextSecondary};
            background: ${token.colorFillQuaternary};
            border-color: transparent;
          }
        `,
      ),
      button: cx(`${prefixCls}-btn`, stylish.defaultButton),
    };
  },
);
