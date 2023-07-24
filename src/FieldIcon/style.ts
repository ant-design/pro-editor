import { createStyles, css, cx } from '@ant-design/pro-editor';

export const useStyle = createStyles((_, prefixCls: string) => {
  const { token } = _;
  return {
    icon: cx(
      `${prefixCls}`,
      css({
        fontSize: token.fontSizeLG,
      }),
    ),
  };
});
