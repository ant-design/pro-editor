import type { SelectProps as Props } from 'antd';
import { Select as _Select } from 'antd';
import { createStyles } from 'antd-style';
import type { FC } from 'react';
import { ConfigProvider } from '../ConfigProvider';

const useStyles = createStyles(({ css, stylish, prefixCls }) => {
  const prefix = `${prefixCls}-select`;
  const scopes = `:not(.${prefix}-disabled):not(.${prefix}-customize-input)`;

  return css`
    &.${prefix} {
      &-multiple:not(&-customize-input) &.${prefix}-selector {
        ${stylish.controlContainer};
      }

      &${scopes} {
        &:hover {
          .${prefix}-selector {
            border-color: transparent;
            ${stylish.controlContainer};
          }
        }
      }

      &-focused${scopes} {
        &:hover {
          .${prefix}-selector {
            ${stylish.controlContainerFocused};
          }
        }

        .${prefix}-selector {
          ${stylish.controlContainerFocused};
        }
      }
    }

    .${prefix} {
      &-arrow {
        top: 13px;
        right: 8px;
        width: 10px;
        height: 10px;
        font-size: 10px;
      }
    }
  `;
});

export type SelectProps = Props;

export const Select: FC<SelectProps> = (props) => {
  const { styles, cx } = useStyles();
  return (
    <ConfigProvider>
      <_Select {...props} className={cx(styles, props.className)} />
    </ConfigProvider>
  );
};
