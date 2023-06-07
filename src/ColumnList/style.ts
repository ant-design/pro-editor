import { createStyles } from '../theme';

export const useStyle = createStyles(({ token, css, cx }, prefixCls) => {
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
  };
});
