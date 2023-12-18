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
  title?: string;
};

interface HeaderFooterSettings {
  iconConfig?: iconDropdownType | false;
  extra?: ReactNode;
  flex?: FlexProps;
  hide?: boolean;
  render?: (props: HeaderFooterSettings) => ReactNode;
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
    iconConfig = {
      icon: <MenuUnfoldOutlined />,
      dropdown: undefined,
      title: '',
    },
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
        <div>
          {icon}
          {title}
        </div>
      );

    return (
      <Dropdown trigger={['click']} {...iconConfig.dropdown}>
        {iconConfig.icon}
      </Dropdown>
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
      )}
    >
      <IconDom />
      {children}
      <div>Extra</div>
    </Flex>
  );
};

export { HeaderAndFooter };
export type { HeaderFooterSettings, typeEnum };
