import { InputRef, InputProps as Props, Input as _Input } from 'antd';
import { forwardRef, useRef } from 'react';

import { ConfigProvider } from '../ConfigProvider';
import { createStyles } from '../theme';

export type InputProps = Props;

const useStyles = createStyles(
  ({ stylish, css }) => css`
    ${stylish.controlContainer}
  `,
);

export const Input = forwardRef<InputRef, InputProps>(
  ({ className, onCompositionStart, onCompositionEnd, ...props }, ref) => {
    const { styles, cx } = useStyles();
    const compositionRef = useRef(false);

    return (
      <ConfigProvider>
        <_Input
          {...props}
          ref={ref}
          className={cx(styles, className)}
          onPressEnter={(e) => {
            if (compositionRef.current) return;
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
