import { createStyles, css, cx } from '../theme';

export const useStyle = createStyles(({ token }, prefixCls) => {
  return {
    container: cx(
      `${prefixCls}-container`,
      css`
        display: flex;
        width: 44px;
        height: ${token.controlHeightSM}px;
        padding: 4px;
        border: 1px solid ${token.colorBorder};
        border-radius: 4px;
        cursor: pointer;
      `,
    ),
    color: cx(
      `${prefixCls}-color`,
      css`
        border-radius: 2px;
        width: 100%;
        height: 100%;
      `,
    ),
    presets: css`
      margin-top: 16px;
    `,
    swatch: css`
      width: 24px;
      height: 24px;
      border: none;
      padding: 0;
      border-radius: 16px;
      cursor: pointer;
      outline: none;
    `,
  };
});
