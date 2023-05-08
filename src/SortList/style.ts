import { createStyles, cx, getStudioStylish } from '../theme';

export const useStyle = createStyles((props, prefixCls: string) => {
  const { token, css, prefixCls: antPrefix } = props;
  const common = getStudioStylish(props);

  return {
    btnAdd: cx(
      `${prefixCls}-btn-add`,
      css`
        &.${antPrefix}-btn {
          height: 24px;
          padding-block: 2px;
          margin-top: ${token.marginXXS}px;
        }
      `,
      common.defaultButton,
    ),
  };
});
