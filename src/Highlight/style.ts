import { createStyles } from '../theme';
import { darkThemeBg, lightThemeBg } from './theme';

export const useStyles = createStyles(({ css, cx }, { prefixCls, theme }) => {
  const prefix = `${prefixCls}`;

  return {
    container: cx(
      `${prefix}-container`,
      css`
        position: relative;
        margin: 0;
        background-color: ${theme === 'dark' ? darkThemeBg : lightThemeBg};

        pre {
          margin: 0 !important;
          padding: 0.5em !important;
          background: none !important;
        }

        code {
          background: transparent !important;
        }
      `,
    ),
  };
});
