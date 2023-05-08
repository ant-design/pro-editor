import type { InputNumberProps as Props } from 'antd';
import { InputNumber as _InputNumber } from 'antd';
import type { FC } from 'react';

import { ConfigProvider } from '../ConfigProvider';
import { createStyles } from '../theme';

const useStyles = createStyles(
  ({ stylish, css, token }) =>
    css`
      ${stylish.controlContainer}

      .studio-input-number-group-addon {
        padding: 0 4px;
        color: ${token.colorTextTertiary};
        background: ${token.colorFillQuaternary};
        border-color: transparent;
      }
    `,
);

export type InputNumberProps = Props;

export const InputNumber: FC<InputNumberProps> = ({ className, ...props }) => {
  const { styles, cx } = useStyles();

  return (
    <ConfigProvider>
      <_InputNumber
        size={'small'}
        {...props}
        className={cx(styles, className)}
      />
    </ConfigProvider>
  );
};
