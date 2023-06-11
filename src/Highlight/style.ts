import { createStyles } from '../theme';
import { darkThemeBg, lightThemeBg } from './theme';

interface IHighlightStyleProps {
  type: 'pure' | 'block';
  theme: 'light' | 'dark';
  prefixCls: string;
}

export const useStyles = createStyles(
  ({ css, cx, token }, { prefixCls, theme, type }: IHighlightStyleProps) => {
    const prefix = `${prefixCls}`;
    const backgroundColor = theme === 'dark' ? darkThemeBg : lightThemeBg;

    const typeStylish = css`
      background-color: ${type === 'block' ? backgroundColor : 'transparent'};
      border: 1px solid ${type === 'block' ? backgroundColor : 'transparent'};
    `;

    return {
      container: cx(
        `${prefix}-container`,
        typeStylish,
        css`
          position: relative;
          margin: 0;
          border-radius: ${token.borderRadius}px;
          transition: background-color 100ms ${token.motionEaseOut};

          pre {
            margin: 0 !important;
            padding: ${type === 'pure' ? 0 : `16px 24px`} !important;
            background: none !important;
          }

          code {
            background: transparent !important;
          }
        `,
      ),
    };
  },
);
