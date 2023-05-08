import { createStyles } from '../../../theme';

export const useStyles = createStyles(({ token, stylish, css }) => {
  return {
    container: css`
      border-top: 1px solid ${token.colorBorder};
      display: flex;
      flex-direction: column;
    `,

    header: css`
      background: ${token.colorBgContainer};
      cursor: pointer;
    `,
    collapse: css`
      background: ${token.colorFillQuaternary};
      &:hover {
        background: ${token.colorFillTertiary};
      }
    `,
    headerTitle: css`
      ${stylish.containerBgHover}
      ${stylish.textInfo};

      padding: 2px 8px;

      color: ${token.colorTextSecondary};
      border-radius: ${token.borderRadius}px;
    `,
    code: css`
      background: ${token.colorFillQuaternary};
      height: 100%;
    `,
  };
});
