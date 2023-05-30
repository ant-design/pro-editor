import { InputProps as Props, Input as _Input } from 'antd';
import type { FC } from 'react';
import { useRef } from 'react';
import { ConfigProvider } from '../ConfigProvider';
import { createStyles } from '../theme';

export type InputProps = Props;

const useStyles = createStyles(
  ({ stylish, css }) => css`
    ${stylish.controlContainer}
  `,
);

export const Input: FC<InputProps> = ({ className, ...props }) => {
  const { styles, cx } = useStyles();
  const compositionRef = useRef(false);

  return (
    <ConfigProvider>
      <_Input
        onCompositionStart={() => (compositionRef.current = true)}
        onCompositionEnd={() => (compositionRef.current = false)}
        {...props}
        className={cx(styles, className)}
        onPressEnter={(e) => {
          if (compositionRef.current) return;
          props.onPressEnter?.(e);
        }}
      />
    </ConfigProvider>
  );
};
