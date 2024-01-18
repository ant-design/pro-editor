import { createStyles } from '../../theme';

export const useStyle = createStyles(({ token, css, cx, prefixCls }) => {
  const prefix = `${prefixCls}-${token.editorPrefix}-pro-builder`;
  return {
    app: css`
      height: 100%;
    `,
    main: cx(
      `${prefix}-main`,
      css`
        display: flex;
        flex-wrap: nowrap;
        height: 100%;
        position: relative;
        background-color: ${token.colorBgLayout};
      `,
    ),
    left: cx(
      `${prefix}-left`,
      css`
        flex-grow: 1;
      `,
    ),
  };
});
