import { createStyles, getStudioStylish } from '../theme';

export const useStyle = createStyles((props) => {
  const { token, css, cx, prefixCls } = props;
  const common = getStudioStylish(props);
  const prefix = `${prefixCls}-${token?.editorPrefix}-column-list`;
  return {
    content: cx(
      `${prefix}-content`,
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
      `${prefix}-header`,
      css`
        color: ${token.colorTextTertiary};
      `,
    ),
    btnAdd: cx(
      `${prefix}-btn-add`,
      css`
        height: 24px;
        padding-block: 2px;
        margin-top: ${token.marginXXS}px;
      `,
      common.defaultButton,
    ),
  };
});
