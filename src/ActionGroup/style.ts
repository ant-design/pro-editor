import { createStyles } from '../theme';

export const useStyle = createStyles(({ token, css, cx }, { prefixCls, type, direction }) => {
  const typeStylish = css`
    background-color: ${type === 'block' ? token.colorFillTertiary : token.colorFillQuaternary};
    border: 1px solid ${type === 'block' ? 'transparent' : token.colorBorder};
  `;

  return {
    content: cx(
      `${prefixCls}-content`,
      css`
        ${type !== 'pure' && typeStylish};
        width: fit-content;
        padding: ${token.padding / 8}px ${token.padding / 8}px;
        display: flex;
        flex-direction: ${direction};
        border-radius: ${token.borderRadius}px;
        align-items: center;
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
