import { InputRef, InputProps as Props, Input as _Input } from 'antd';
import { forwardRef, useEffect, useRef, useState } from 'react';

import { ConfigProvider } from '../ConfigProvider';
import { createStyles } from '../theme';

const useStyles = createStyles(
  ({ stylish, css }) => css`
    ${stylish.controlContainer}
  `,
);
export interface InputProps extends Omit<Props, 'onChange' | 'value' | 'onAbort'> {
  /**
   * 输入框变化回调函数
   * @param value - 输入框的值
   */
  onChange?: (value: string) => void;
  /**
   * 输入框值变化前回调函数
   * @param value - 输入框的值
   */
  onValueChanging?: (value: string) => void;
  /**
   * 输入框的值
   */
  value?: string;
  defaultValue?: string;
}
export const Input = forwardRef<InputRef, InputProps>(
  (
    {
      className,
      defaultValue,
      onChange,
      value,
      onCompositionStart,
      onCompositionEnd,
      onBlur,
      onFocus,
      onValueChanging,
      ...props
    },
    ref,
  ) => {
    const { styles, cx } = useStyles();
    const compositionRef = useRef(false);

    const [input, setInput] = useState(value ?? defaultValue);
    const valueRef = useRef(defaultValue || value);

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
        <_Input
          {...props}
          ref={ref}
          className={cx(styles, className)}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            onValueChanging?.(e.target.value);
          }}
          onFocus={(event) => {
            onFocus?.(event);
          }}
          onBlur={(event) => {
            triggerUpdate();
            onBlur?.(event);
          }}
          onPressEnter={(e) => {
            if (compositionRef.current) return;
            triggerUpdate();
            props.onPressEnter?.(e);
          }}
          onCompositionStart={(e) => {
            compositionRef.current = true;
            onCompositionStart?.(e);
          }}
          onCompositionEnd={(e) => {
            compositionRef.current = false;
            onCompositionEnd?.(e);
          }}
        />
      </ConfigProvider>
    );
  },
);
