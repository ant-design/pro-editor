import { createStyles, css, cx } from '@ant-design/pro-editor';

export const useStyle = createStyles(({ token }, { prefixCls, checkable }) => {
  return {
    content: cx(
      `${prefixCls}-content`,
      css({
        display: 'flex',
        alignItems: 'center',
        fontSize: token.fontSize,
      }),
    ),
    title: cx(
      `${prefixCls}-title`,
      css({
        marginLeft: token.marginXXS,
      }),
    ),
    description: cx(
      `${prefixCls}-description`,
      css({
        marginLeft: token.marginXXS,
      }),
    ),
    extra: cx(
      `${prefixCls}-extra`,
      css({
        paddingLeft: checkable ? token.paddingLG : undefined,
      }),
    ),
  };
});
