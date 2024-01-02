import { createStyles } from '../theme';

export const useStyles = createStyles(({ token, css, cx, prefixCls }, { size, className }) => {
  const prefix = `${prefixCls}-${token.editorPrefix}-icon`;
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

    &:active {
      scale: 0.8;
      color: ${token.colorText};
    }

    transition: color 600ms ${token.motionEaseOut}, scale 400ms ${token.motionEaseOut},
      background-color 100ms ${token.motionEaseOut};
  `;

  return {
    container: cx(prefix, button, sizeBoundary, className),
    tooltip: css`
      pointer-events: none;
    `,
  };
});
