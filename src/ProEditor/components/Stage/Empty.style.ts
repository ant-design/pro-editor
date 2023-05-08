import { createStyles, css, cx } from '../../../theme';

export const useStyle = createStyles(({ token }) => ({
  container: cx(
    css`
      height: 100%;
    `,
  ),
  default: cx(
    css`
      padding: ${token.paddingLG}px;

      color: ${token.colorTextTertiary};
    `,
  ),
}));
