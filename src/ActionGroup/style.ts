import { createStyles } from '../theme';

export const useStyle = createStyles(({ token, css, cx }, prefixCls) => {
  return {
    content: cx(
      `${prefixCls}-content`,
      css`
        width: fit-content;
        padding: ${token.padding / 4}px ${token.padding / 2}px;
      `,
    ),
    button: cx(
      `${prefixCls}-action-btn`,
      css`
        box-shadow: none;
        border: none;
        background-color: transparent;
        &:hover {
          color: ${token.colorIconHover} !important;
        }
      `,
    ),
  };
});
