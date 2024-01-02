import ActionIcon from '@/ActionIcon';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { DropDownProps, Dropdown, Flex, FlexProps } from 'antd';
import { ReactNode } from 'react';
import { ThemeLayoutType } from '..';
import { useStyle } from './../style';

enum typeEnum {
  header = 'header',
  footer = 'footer',
}

type iconDropdownType = {
  icon?: ReactNode;
  dropdown?: DropDownProps;
  title?: ReactNode;
  render?: (props: iconDropdownType, defalutDom?: ReactNode) => JSX.Element;
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
  themeType?: ThemeLayoutType;
}

const HeaderAndFooter = (props: HeaderFooterSettings) => {
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
      render,
    },
    themeType,
    style = {},
    className,
  } = props || {};

  const { styles, cx } = useStyle({ themeType });

  if (hide) {
    return null;
  }
  if (render) {
    return render(props);
  }

  const IconDom = () => {
    if (iconConfig === false) return null;
    const { icon, dropdown, title, render } = iconConfig || {};

    if (!dropdown)
      return (
        <div className={styles.headerAndFooterIcon}>
          <ActionIcon icon={icon} />
          {title}
        </div>
      );

    const DefalutIconDom = (
      <>
        <Dropdown
          trigger={['click']}
          placement={type === typeEnum.header ? 'bottomLeft' : 'topLeft'}
          {...iconConfig.dropdown}
        >
          <ActionIcon icon={icon} />
        </Dropdown>
        {title}
      </>
    );

    if (render) {
      return render(iconConfig, DefalutIconDom);
    }

    return DefalutIconDom;
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
      <div className={styles.headerAndFooterIcon}>
        <IconDom />
      </div>
      {extra && <div className={styles.headerAndFooterExtra}>{extra}</div>}
    </Flex>
  );
};

export { HeaderAndFooter };
export type { HeaderFooterSettings, typeEnum };
