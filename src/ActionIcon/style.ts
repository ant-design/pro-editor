import { createStyles, css, cx } from '../theme';

export const useStyles = createStyles(
  ({ token }, { size, className, prefixCls }) => {
    const sizeBoundary =
      typeof size === 'number'
        ? css`
            width: ${size}px !important;
            height: ${size}px !important;
          `
        : '';

    const button = css`
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        color: ${token.colorText} !important;
      }
    `;

    return {
      container: cx(prefixCls, button, sizeBoundary, className),
      tooltip: css`
        pointer-events: none;
      `,
    };
  },
);
