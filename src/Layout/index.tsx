import { DraggablePanel } from '@ant-design/pro-editor';
import { FlexProps, TabsProps } from 'antd';
import { Size } from 're-resizable';
import { ReactNode } from 'react';
import { Flexbox, FlexboxProps } from 'react-layout-kit';
import { ConfigProvider } from '../ConfigProvider';
import { getPrefixCls } from '../theme';
import { useStyle } from './style';

interface HeaderFooterSettings {
  Icon?: ReactNode;
  extra?: ReactNode;
  flex?: FlexProps;
  hide?: boolean;
  render?: (props: HeaderFooterSettings) => ReactNode;
  children?: ReactNode;
}

interface LayoutProps extends FlexboxProps {
  header?: HeaderFooterSettings;
  footer?: HeaderFooterSettings;
  leftPannel?: PannelSettings;
  rightPannel?: PannelSettings;
  bottomPannel?: PannelSettings;
  centerPannel?: PannelSettings;
  type?: string;
}

interface PannelSettings {
  children: ReactNode | ReactNode[];
  direction?: 'horizontal' | 'vertical';
  tabs?: TabsProps;
  icon?: ReactNode;
  extra?: ReactNode;
  hide?: boolean;
  minWidth?: number;
  minHeight?: number;
  style?: React.CSSProperties;
  className?: string;
}

const BasicLayout = (props: LayoutProps) => {
  const { header, footer, leftPannel, rightPannel, bottomPannel, centerPannel, type, ...rest } =
    props;

  const prefixCls = getPrefixCls('layout');
  const { styles, cx } = useStyle(prefixCls);

  const getPannelProps = (
    index: number,
  ):
    | {
        placement: 'left' | 'right' | 'bottom';
        className?: string;
        defaultSize?: Partial<Size>;
      }
    | false => {
    switch (['left', 'right', 'bottom', 'center'][index]) {
      case 'left':
        return {
          placement: 'left',
          className: styles.leftPannel,
          defaultSize: {
            width: '200',
          },
        };
      case 'right':
        return {
          placement: 'right',
          className: styles.rightPannel,
          defaultSize: {
            width: '200',
          },
        };
      case 'bottom':
        return {
          placement: 'bottom',
          defaultSize: {
            height: '200',
          },
        };
      case 'center':
        return false;
      default:
        return false;
    }
  };

  const DraggablePanelRender = (props: PannelSettings, index: number) => {
    const {
      children = '',
      className,
      style,
      minHeight = 200,
      minWidth = 200,
      ...rest
    } = props || {};
    const pannelProps = getPannelProps(index);
    if (!pannelProps) {
      return (
        <div className={cx(styles.centerPannel)}>
          <div className={cx(styles.pannel, className)}>{children}</div>
        </div>
      );
    }
    const { placement, className: pannelClassName } = pannelProps;
    return (
      <DraggablePanel
        expandable={false}
        style={{ border: 'none', ...style }}
        placement={placement}
        minHeight={minHeight}
        minWidth={minWidth}
        {...pannelProps}
        {...rest}
      >
        <div className={cx(styles.pannel, pannelClassName, className)}>{children}</div>
      </DraggablePanel>
    );
  };

  const [LeftPannelDom, RightPannelDom, BottomPannelDom, CenterPannelDom] = [
    leftPannel,
    rightPannel,
    bottomPannel,
    centerPannel,
  ].map(DraggablePanelRender);

  const HeaderDom = (props: HeaderFooterSettings) => {
    const { children, render } = props || {};
    if (render) {
      return render(props);
    }
    return <div className={styles.header}>{children}</div>;
  };

  const FooterDom = (props: HeaderFooterSettings) => {
    const { children } = props || {};
    return <div className={styles.footer}>{children}</div>;
  };

  return (
    <>
      <Flexbox className={styles.layout} {...rest}>
        <HeaderDom />
        <div className={styles.container}>
          {LeftPannelDom}
          {CenterPannelDom}
          {RightPannelDom}
        </div>
        {BottomPannelDom}
        <FooterDom />
      </Flexbox>
    </>
  );
};

const WrapperLayout = (props: LayoutProps) => {
  return (
    <ConfigProvider>
      <BasicLayout {...props} />
    </ConfigProvider>
  );
};

export { WrapperLayout as Layout };
