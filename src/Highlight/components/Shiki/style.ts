import { createStyles } from '../../../theme';

export const useStyles = createStyles(({ css, cx, token }, { prefixCls, lineNumber }) => {
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
    shiki: cx(
      `${prefix}-shiki`,
      css`
        .shiki {
          overflow-x: scroll;
          background: none !important;
          ${lineNumber ? lineNumberStyle : ''}
        }
      `,
    ),
    loading: cx(
      css`
        display: flex;
        align-items: center;
        justify-content: center;

        height: 36px;
        padding: 0 8px;

        font-family: ${token.fontFamilyCode};
        color: ${token.colorTextTertiary};
      `,
    ),
  };
});
