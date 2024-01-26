import Color from 'color';
import { createStyles } from '../theme';
import { getThemeColor } from './theme/colors';

interface IHighlightStyleProps {
  type: 'pure' | 'block';
  theme: 'light' | 'dark' | 'auto';
}

export const useStyles = createStyles(
  ({ css, cx, token, prefixCls }, { theme, type }: IHighlightStyleProps) => {
    const prefix = `${prefixCls}-${token?.editorPrefix}-highlight`;

    const { colorFillTertiary, colorText, colorTextSecondary } = getThemeColor(theme === 'dark');

    const typeStylish = css`
      background-color: ${type === 'block' ? colorFillTertiary : 'transparent'};
    `;

    const lighterTypeStylish = css`
      background-color: ${type === 'block'
        ? Color(colorFillTertiary).alpha(0.9).hsl().string()
        : 'transparent'};
    `;

    return {
      wrapper: cx(
        `${prefix}-wrapper`,
        lighterTypeStylish,
        css`
          border-radius: ${token.borderRadius}px;
          .${prefix}-copy {
            background-color: transparent;
            position: inherit;
            width: 30px;
            padding-left: 6px;
          }
        `,
      ),
      expland: css`
        color: ${Color(colorText).alpha(0.8).hsl().string()};
      `,

      copy: css`
        color: ${Color(colorText).alpha(0.6).hsl().string()};
      `,
      header: cx(
        `${prefix}-header`,
        css`
          background-color: ${type === 'block' ? token.colorFillTertiary : 'transparent'};
          padding: 4px 8px;
          border-radius: ${token.borderRadius}px;
          width: auto !important; // override self width
        `,
        css`
          .${prefix}-btn {
            &:hover {
              color: ${colorTextSecondary} !important;
            }
          }
        `,
      ),
      container: cx(
        `${prefix}-container`,
        typeStylish,
        css`
          position: relative;
          margin: 0;
          border-radius: ${token.borderRadius}px;
          transition: background-color 100ms ${token.motionEaseOut};

          :not(:hover) {
            .${prefix}-copy {
              visibility: hidden;
              opacity: 0;
            }

            .${prefix}-tag {
              visibility: hidden;
              opacity: 0;
            }
          }

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
      trigger: css`
        min-width: 100px;
        display: flex;
        justify-content: center;
        span {
          font-family: ${token.fontFamilyCode} !important;
        }
      `,
      lang: cx(
        css`
          position: absolute;
          z-index: 2;
          right: 0;
          bottom: 8px;

          font-family: ${token.fontFamilyCode};
          color: ${token.colorTextSecondary};

          transition: opacity 0.1s;
        `,
      ),
      select: css`
        min-width: 100px;
        .${prefixCls}-btn {
          color: ${colorText};
        }
        .${prefixCls}-select-selector {
          padding-inline-end: 4px !important;
        }
        .${prefixCls}-select-selection-overflow-item-suffix {
          .${prefixCls}-select-selection-search {
            display: none;
          }
        }
      `,
    };
  },
);
