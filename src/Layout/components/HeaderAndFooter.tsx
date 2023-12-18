import ActionIcon from '@/ActionIcon';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { DropDownProps, Dropdown, Flex, FlexProps } from 'antd';
import { ReactNode } from 'react';
import { getPrefixCls } from '../../theme';
import { useStyle } from './../style';

enum typeEnum {
  header = 'header',
  footer = 'footer',
}

type iconDropdownType = {
  icon?: ReactNode;
  dropdown?: DropDownProps;
  title?: ReactNode;
};

interface HeaderFooterSettings {
  iconConfig?: iconDropdownType | false;
  extra?: ReactNode;
  flex?: FlexProps;
  hide?: boolean;
  render?: (props: HeaderFooterSettings) => JSX.Element;
  style?: React.CSSProperties;
  className?: string;
  children?: ReactNode;
  type?: typeEnum | string;
}

const HeaderAndFooter = (props: HeaderFooterSettings) => {
  const prefixCls = getPrefixCls('layout');

  const { styles, cx } = useStyle(prefixCls);
  const {
    children,
    render,
    hide = false,
    flex = {
      justify: 'space-between',
      align: 'center',
      className: '',
    },
    type = 'header',
    extra,
    iconConfig = {
      icon: <MenuUnfoldOutlined />,
      dropdown: undefined,
      title: '',
    },
    style = {},
    className,
  } = props || {};
  if (hide) {
    return null;
  }
  if (render) {
    return render(props);
  }

  const IconDom = () => {
    if (iconConfig === false) return null;
    const { icon, dropdown, title } = iconConfig || {};

    if (!dropdown)
      return (
        <div className={styles.headerAndFooterIcon}>
          <ActionIcon icon={icon} />
          {title}
        </div>
      );

    return (
      <div className={styles.headerAndFooterIcon}>
        <Dropdown
          trigger={['click']}
          placement={type === typeEnum.header ? 'bottomLeft' : 'topLeft'}
          {...iconConfig.dropdown}
        >
          <ActionIcon icon={icon} />
        </Dropdown>
        {title}
      </div>
    );
  };

  return (
    <Flex
      key={type === typeEnum.header ? 'editor-layout-header' : 'editor-layout-footer'}
      {...flex}
      className={cx(
        type === typeEnum.header ? styles.header : styles.footer,
        styles.flexContainer,
        flex?.className,
        className,
      )}
      style={style}
    >
      {/* 虽然是放在 flex 中，但实际上是 absoult 定位到最中间 */}
      <div className={styles.headerAndFooterCenterChildren}>{children}</div>
      <IconDom />
      {extra && <div className={styles.headerAndFooterExtra}>{extra}</div>}
    </Flex>
  );
};

export { HeaderAndFooter };
export type { HeaderFooterSettings, typeEnum };
