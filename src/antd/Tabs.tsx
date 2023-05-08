import type { TabsProps as Props } from 'antd';
import { Tabs as _Tabs } from 'antd';
import type { FC } from 'react';
import { ConfigProvider } from '../ConfigProvider';
import { createStyles } from '../theme';

const useStyles = createStyles(({ token, prefixCls, css, stylish }) => {
  const prefix = `.${prefixCls}-tabs`;

  return {
    cls: css`
      ${prefix}-tab + ${prefix}-tab {
        margin: 8px 4px !important;
        padding: 0 12px !important;
      }

      ${prefix}-tab {
        color: ${token.colorTextSecondary};
        transition: background-color 150ms ease-out;

        &:first-child {
          margin: 8px 4px 8px 0;
          padding: 4px 12px !important;
        }

        &:hover {
          color: ${token.colorText} !important;
          background: ${token.colorFillTertiary};
          border-radius: 4px;
        }
      }

      ${prefix}-nav {
        height: 46px;
        padding: 0 12px;
        padding-right: 8px !important;
      }

      // blur 效果
      position: relative;
      height: 100%;

      ${prefix}-nav {
        position: absolute !important;
        z-index: 10;
        width: 100%;

        ${stylish.backgroundBlur}
      }

      ${prefix}-content-holder {
        // 46px 是 tab 的高度 12px 是合理内部间距
        padding-top: ${46 + 8}px;
        overflow-y: auto;
      }
    `,
  };
});

export type TabsProps = Props;

export const Tabs: FC<TabsProps> = (props) => {
  const { styles, cx } = useStyles();

  return (
    <ConfigProvider>
      <_Tabs {...props} className={cx(props.className, styles.cls)} />
    </ConfigProvider>
  );
};
