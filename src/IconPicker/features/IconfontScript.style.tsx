import { createStyles } from '../../theme';

export const useStyles = createStyles(({ token, css, prefixCls }) => ({
  add: css`
    border: none;
    cursor: pointer;
    margin-right: 0;
  `,
  tag: css`
    border: none;
    transition: none;
    cursor: pointer;
  `,
  checked: css`
    background: ${token.colorPrimary};
    color: ${token.colorTextLightSolid};
    .${prefixCls}-tag-close-icon {
      color: ${token.colorTextLightSolid};
    }
  `,
}));
