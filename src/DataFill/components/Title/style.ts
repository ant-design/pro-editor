import { createStyles, css, cx } from '../../../theme';

export const useStyle = createStyles(({ token }, prefixCls) => {
  return {
    demo: cx(
      `${prefixCls}-demo-data`,
      css({
        maxWidth: '120px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        color: token.colorTextQuaternary,
        fontSize: token.fontSizeSM,
      }),
    ),
  };
});
