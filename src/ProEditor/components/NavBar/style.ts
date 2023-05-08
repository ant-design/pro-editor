import { createStyles } from '../../../theme';

export const useStyle = createStyles(
  ({ token, css, cx }, prefixCls: string) => ({
    container: cx(
      prefixCls,
      css`
        background-color: ${token.colorBgContainer};
      `,
    ),
    logo: cx(
      `${prefixCls}-logo`,
      css`
        font-size: 16px;
      `,
    ),
    img: cx(
      `${prefixCls}-logo-img`,
      css`
        height: 24px;
      `,
    ),
  }),
);
