import { createStyles } from '@ant-design/pro-editor';

export const useStyle = createStyles(({ token, css, cx }, prefixCls) => {
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
