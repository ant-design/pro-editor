import { createStyles } from '../../../theme';

export const useStyle = createStyles(({ token, css, cx }) => ({
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
