import { DashOutlined } from '@ant-design/icons';
import { ActionIcon, ActionIconProps, ConfigProvider } from '@ant-design/pro-editor';
import { Divider, Dropdown, DropdownProps } from 'antd';
import { useStyle } from './style';

export type ActionIconGroupItemType =
  | (ActionIconProps & {
      /**
       * @description 展示的 icon
       */
      icon: React.ReactNode;
      /**
       * @description 样式
       * @ignore
       */
      style?: React.CSSProperties;
      /**
       * @description 每个按钮单独的key
       */
      key?: string;
      /**
       * @description 按钮点击事件的回调
       */
      onClick?: () => void;
      /**
       * @description 用于展示按钮的提示文案
       */
      label?: string;
    })
  | { type: 'divider' };

interface ActionGroupProps {
  /**
   * @description 自定义的classname
   * @ignore
   */
  className?: string;
  /**
   * @description 样式
   * @ignore
   */
  style?: React.CSSProperties;
  /**
   * @description 生成按钮的配置config
   */
  items?: Array<ActionIconGroupItemType>;
  /**
   * @description 生成 drowDownMenuList 内容的 config
   */
  dropdownMenu?: Array<ActionIconGroupItemType>;
  /**
   * @description 给 dropdownMenu 设置的自定义 Props，支持除了 Menu 外其余所有 antd dropdown Props 的设置
   */
  dropdownProps?: DropdownProps;
  /**
   * @description 用于自定义 dropdownMenu 下拉的触发 Dom，默认为 DashOutlined 的 Icon
   */
  dropdownMenuTrigger?: React.ReactNode;
  /**
   * @description 用于渲染自定义能力的render方法
   */
  render?: (
    config: Array<ActionIconGroupItemType>,
    dropdownMenu?: Array<ActionIconGroupItemType>,
  ) => JSX.Element;
  /**
   * @description 通用的 Click 触发
   */
  onClick?: (key?: string) => void;

  /**
   * @description The type of the group
   * @default "block"
   */
  type?: 'ghost' | 'block' | 'pure';
  /**
   * @description The direction of the icons
   * @default "row"
   */
  direction?: 'row' | 'column';
  /**
   * @title 图标尺寸
   */
  size?: 'default' | 'large' | number;
}

const ActionGroup = (props: ActionGroupProps) => {
  const {
    type = 'block',
    direction = 'row',
    size,
    className,
    style,
    render,
    dropdownMenu,
    items = [],
    onClick = () => {},
    dropdownProps,
    dropdownMenuTrigger,
  } = props;
  const { styles, cx } = useStyle({ direction, type });

  const ActionDomList = () => {
    const defalutDom = (
      <>
        {items.map((item, index) => {
          if (item?.type === 'divider')
            return (
              <Divider
                key={`action-divider-${index}`}
                type={direction === 'row' ? 'vertical' : 'horizontal'}
                style={{
                  margin: `${direction === 'row' ? '0 4px' : '4px 0'}`,
                }}
              />
            );
          return (
            <ActionIcon
              key={`action-btn-${index}`}
              title={item?.label}
              size={size}
              {...item}
              onClick={() => {
                if (item?.onClick) {
                  item?.onClick();
                }
                onClick(item?.key);
              }}
            />
          );
        })}
      </>
    );
    if (render) {
      return render(items, dropdownMenu);
    }
    return defalutDom;
  };

  return (
    <div className={cx(styles.content, className)} style={style}>
      <ActionDomList />
      {dropdownMenu && (
        <Dropdown
          trigger={['click']}
          {...dropdownProps}
          menu={{
            items: dropdownMenu.map((item: any) => {
              if (item?.type) return item;
              return {
                ...item,
                icon: item.icon,
              };
            }),
          }}
        >
          {dropdownMenuTrigger ? (
            dropdownMenuTrigger
          ) : (
            <ActionIcon icon={<DashOutlined />} key="more" size={size} />
          )}
        </Dropdown>
      )}
    </div>
  );
};

const WrapperActionGroup = (props: ActionGroupProps) => {
  return (
    <ConfigProvider>
      <ActionGroup {...props} />
    </ConfigProvider>
  );
};

export { WrapperActionGroup as ActionGroup };
