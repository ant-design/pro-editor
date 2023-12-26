import { createStyles } from '../theme';

export const useStyles = createStyles(
  ({ token, css, cx, stylish, prefixCls }, { className, showPanel }) => {
    const prefix = `${prefixCls}-${token?.editorPrefix}-collapse-title`;

    return {
      container: cx(
        prefix,
        className,
        showPanel
          ? css`
              padding: 6px 8px;
              background: ${token.colorFillQuaternary};
              border-radius: 4px;
            `
          : '',
      ),

      header: cx(
        showPanel ? `${prefix}-expand` : `${prefix}-collapsed`,
        showPanel
          ? ''
          : css`
              padding: 6px 8px;
              user-select: none;
              border-radius: 4px;
              ${stylish.containerBgL2}
            `,
      ),

      title: cx(
        css`
          height: 24px;
        `,
        showPanel
          ? css`
              margin-left: -4px;
              padding: 4px;
              border-radius: 4px;
              user-select: none;
              ${stylish.containerBgHover}
            `
          : '',
      ),
    };
  },
);
