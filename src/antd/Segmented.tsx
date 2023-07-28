import type { SegmentedProps as SProps } from 'antd';
import { Segmented as Tabs } from 'antd';
import type { ReactNode } from 'react';

import { ConfigProvider } from '../ConfigProvider';
import { createStyles } from '../theme';

const useStyles = createStyles(
  ({ token, css }) => css`
    padding: 4px;

    .studio-segmented-item {
      margin-right: 4px;
      color: ${token.colorTextTertiary};
      border-radius: 2px;

      &:hover {
        color: ${token.colorTextSecondary};
      }

      &:last-child {
        margin-right: 0;
      }
    }

    .studio-segmented-item-selected {
      color: ${token.colorText};

      &:hover {
        color: ${token.colorText};
      }
    }

    .studio-segmented-item-label {
      min-height: auto;
      padding: 2px 7px;
      line-height: unset;
    }
  `,
);

export interface SegmentedProps<T = string>
  extends Omit<SProps, 'value' | 'options' | 'onChange' | 'defaultValue'> {
  defaultValue?: T;
  value?: T;
  /**
   * 变更后的回调
   */
  onChange?: (tabKey: T) => void;
  /**
   * 选项值
   */
  options: { label: ReactNode; value: T; icon?: React.ReactNode }[];
}

export const Segmented: <T = string>(props: SegmentedProps<T>) => JSX.Element = (props) => {
  const { styles, cx } = useStyles();

  return (
    <ConfigProvider>
      <Tabs {...(props as any)} className={cx(props.className, styles)} />
    </ConfigProvider>
  );
};
