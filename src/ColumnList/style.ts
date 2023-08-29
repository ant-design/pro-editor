import { createStyles, getStudioStylish } from '../theme';

export const useStyle = createStyles((props, prefixCls) => {
  const { token, css, cx } = props;
  const common = getStudioStylish(props);
  return {
    content: cx(
      `${prefixCls}-content`,
      css`
        flex: 1;
        width: 100%;
        height: 24px;
        font-size: 12px;
        border-radius: 2px;
        min-width: 48px;
      `,
    ),
    header: cx(
      `${prefixCls}-header`,
      css`
        color: ${token.colorTextTertiary};
      `,
    ),
    btnAdd: cx(
      `${prefixCls}-btn-add`,
      css`
        height: 24px;
        padding-block: 2px;
        margin-top: ${token.marginXXS}px;
      `,
      common.defaultButton,
    ),
  };
});
