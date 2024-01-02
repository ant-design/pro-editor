import { createStyles, getStudioStylish } from '../theme';

export const useStyle = createStyles((props) => {
  const { token, css, cx, prefixCls } = props;
  const common = getStudioStylish(props);

  const antCls = prefixCls;

  return {
    btnAdd: cx(
      `${antCls}-btn-add`,
      css`
        height: 24px;
        padding-block: 2px;
        margin-top: ${token.marginXXS}px;
        margin-bottom: ${token.marginXXS}px;
      `,
      common.defaultButton,
    ),
  };
});
