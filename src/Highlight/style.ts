import { createStyles } from '../theme';
import { darkThemeBg, lightThemeBg } from './theme';

export const useStyles = createStyles(({ css, cx, token }, { prefixCls, theme, lineNumber }) => {
  const prefix = `${prefixCls}`;

  const lineNumberStyle = css`
    code {
      counter-reset: step;
      counter-increment: step 0;
    }

    code .line::before {
      content: counter(step);
      counter-increment: step;
      width: 1rem;
      margin-right: 1.5rem;
      display: inline-block;
      text-align: right;
      color: rgba(115, 138, 148, 0.4);
    }
  `;

  return {
    container: cx(
      `${prefix}-container`,
      lineNumber ? lineNumberStyle : '',
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
