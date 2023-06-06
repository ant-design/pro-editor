import type { ButtonProps, TooltipProps } from 'antd';
import { Button, Tooltip } from 'antd';
import type { CSSProperties, FC } from 'react';
import { ConfigProvider } from '../ConfigProvider';
import { getPrefixCls } from '../theme';
import { useStyles } from './style';

/**
 * @title 动作图标属性
 * @description 继承自 `Button` 组件所有属性，除了 `title` 和 `size`
 */
export interface ActionIconProps extends Omit<ButtonProps, 'title' | 'size'> {
  /**
   * @title 鼠标类型
   */
  cursor?: CSSProperties['cursor'];
  /**
   * @title 动作提示
   */
  title?: TooltipProps['title'];
  /**
   * @title 提示位置
   */
  placement?: TooltipProps['placement'];
  /**
   * @title 图标
   */
  icon: ButtonProps['icon'];
  /**
   * @title 点击回调
   */
  onClick?: ButtonProps['onClick'];
  /**
   * @title 图标尺寸
   */
  size?: 'default' | 'large' | number;
}

const ActionIcon: FC<ActionIconProps> = ({
  placement,
  title,
  icon,
  cursor,
  onClick,
  className,
  size,
  prefixCls: customPrefixCls,
  ...restProps
}) => {
  const prefixCls = getPrefixCls('actionicon', customPrefixCls);
  const { styles, theme: token, cx } = useStyles({ size, prefixCls });

  const Icon = (
    <Button
      icon={icon}
      className={cx(className, styles.container)}
      type={'text'}
      style={{ cursor }}
      size={'small'}
      {...restProps}
      onClick={onClick}
    />
  );

  return (
    <ConfigProvider
      componentToken={{
        Button: {
          colorText: token.colorTextTertiary,
          // TODO： Token 的提供不太合理，需要改造
          colorBgTextHover: token.colorFillSecondary,
          colorBgTextActive: token.colorFill,
        },
      }}
    >
      {!title ? (
        Icon
      ) : (
        <Tooltip
          arrow={false}
          overlayClassName={styles.tooltip}
          title={title}
          placement={placement}
        >
          {Icon}
        </Tooltip>
      )}
    </ConfigProvider>
  );
};
export default ActionIcon;
