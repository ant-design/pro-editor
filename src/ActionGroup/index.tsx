import {
  DashOutlined,
  DeleteOutlined,
  FullscreenOutlined,
  RedoOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { ActionIcon, getPrefixCls } from '@ant-design/pro-editor';
import { Dropdown, DropdownProps } from 'antd';
import { useStyle } from './style';

type ActionIconGroupItem = {
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
   * @description 按钮点击事件的回掉
   */
  onClick?: () => void;
  /**
   * @description 用于展示按钮的提示文案
   */
  label?: string;
};

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
  items?: Array<ActionIconGroupItem>;
  /**
   * @description 生成 drowDownMenuList 内容的 config
   */
  dropdownMenu?: Array<ActionIconGroupItem | { type: 'divider' }>;
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
    config: Array<ActionIconGroupItem>,
    dropdownMenu?: Array<ActionIconGroupItem | { type: 'divider' }>,
  ) => JSX.Element;
  /**
   * @description 全屏按钮点击的回掉
   */
  onFullScreenClick?: () => void;
  /**
   * @description 撤销按钮点击的回掉
   */
  onUndoClick?: () => void;
  /**
   * @description 重做按钮点击的回掉
   */
  onRedoClick?: () => void;
  /**
   * @description 删除按钮点击的回掉
   */
  onDeleteClick?: () => void;
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
    items,
    onFullScreenClick,
    onUndoClick,
    onRedoClick,
    onDeleteClick,
    dropdownProps,
    dropdownMenuTrigger,
  } = props;
  const prefixCls = getPrefixCls('action-group');
  const { styles, cx } = useStyle({ prefixCls, direction, type });

  const config = items
    ? items
    : [
        { icon: <FullscreenOutlined />, onClick: onFullScreenClick },
        { icon: <UndoOutlined />, onClick: onUndoClick },
        { icon: <RedoOutlined />, onClick: onRedoClick },
        { icon: <DeleteOutlined />, onClick: onDeleteClick },
      ];

  const ActionDomList = () => {
    const defalutDom = (
      <>
        {config.map((item: ActionIconGroupItem, index) => {
          return (
            <ActionIcon
              key={`action-btn-${index}`}
              title={item?.label}
              size={size}
              onClick={() => {
                alert('触发动作');
              }}
              {...item}
            />
          );
        })}
      </>
    );
    if (render) {
      return render(config, dropdownMenu);
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
              if (item.type) return item;
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

export default ActionGroup;
