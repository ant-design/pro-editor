import type { InputNumberProps as Props } from 'antd';
import { InputNumber as _InputNumber } from 'antd';
import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';

import { ConfigProvider } from '../ConfigProvider';
import { createStyles } from '../theme';

const useStyles = createStyles(
  ({ stylish, css, token, prefixCls }) =>
    css`
      ${stylish.controlContainer}

      .${prefixCls}-input-number-group-addon {
        padding: 0 4px;
        color: ${token.colorTextTertiary};
        background: ${token.colorFillQuaternary};
        border-color: transparent;
      }
    `,
);

export interface InputNumberProps extends Omit<Props, 'value' | 'defaultValue'> {
  /**
   * 输入框值变化前回调函数
   * @param value - 输入框的值
   */
  onValueChanging?: (value: number) => void;
  /**
   * 输入框的值
   */
  value?: number;
  defaultValue?: number;
}

export const InputNumber: FC<InputNumberProps> = ({
  className,
  value,
  onValueChanging,
  onChange,
  defaultValue,
  onFocus,
  onBlur,
  onPressEnter,
  ...rest
}) => {
  const { styles, cx } = useStyles();

  const [input, setInput] = useState<number>(defaultValue || value);
  const valueRef = useRef<number>(defaultValue);

  useEffect(() => {
    if (typeof value !== 'undefined') {
      setInput(value);
    }
  }, [value]);

  const triggerUpdate = () => {
    if (input !== valueRef.current) {
      onChange?.(input);
      valueRef.current = input;
    }
  };

  return (
    <ConfigProvider>
      <_InputNumber
        size={'middle'}
        {...rest}
        value={input}
        onFocus={(event) => {
          onFocus?.(event);
        }}
        onBlur={(event) => {
          triggerUpdate();
          onBlur?.(event);
        }}
        onChange={(v: number) => {
          setInput(v);
          onValueChanging?.(v);
        }}
        onPressEnter={(e) => {
          triggerUpdate();

          onPressEnter?.(e);
        }}
        className={cx(styles, className)}
      />
    </ConfigProvider>
  );
};
