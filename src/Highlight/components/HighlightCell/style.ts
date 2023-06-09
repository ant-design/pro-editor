import { createStyles } from '../../../theme';

export const useStyles = createStyles(({ css, cx }, prefixCls) => {
  const prefix = `${prefixCls}`;

  return {
    lightThemeIndex: cx(
      `${prefix}-light-index`,
      css`
        border-right: 1px solid rgba(0, 0, 0, 0.05);
      `,
    ),
    darkThemeIndex: cx(
      `${prefix}-dark-index`,
      css`
        border-right: 1px solid rgba(255, 255, 255, 0.05);
      `,
    ),
    index: cx(
      `${prefix}-index`,
      css`
        box-sizing: border-box;
        width: 40px;
        min-width: 40px;
        padding-block: 2px;
        padding-inline: 8px;
        color: #aaa;
        text-align: right;
        background: rgba(255, 255, 255, 0.03);
        user-select: none;
      `,
    ),
    content: cx(
      `${prefix}-content`,
      css`
        padding: 2px 8px;
      `,
    ),
  };
});
