import { createStyles } from '../theme';
import { darkThemeBg, lightThemeBg } from './theme';

export const useStyles = createStyles(({ css, cx, token }, { prefixCls, theme }) => {
  const prefix = `${prefixCls}`;

  return {
    container: cx(
      `${prefix}-container`,
      css`
        position: relative;
        margin: 0;
        border-radius: ${token.borderRadius}px;
        background-color: ${theme === 'dark' ? darkThemeBg : lightThemeBg};

        pre {
          margin: 0 !important;
          padding: 16px 24px !important;
          background: none !important;
        }

        code {
          background: transparent !important;
        }
      `,
    ),
    shiki: cx(
      `${prefix}-shiki`,
      css`
        .shiki {
          overflow-x: scroll;
          background: none !important;
        }
      `,
    ),
  };
});
