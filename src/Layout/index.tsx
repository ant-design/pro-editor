import { DraggablePanel } from '@ant-design/pro-editor';
import { FlexProps, TabsProps } from 'antd';
import { ReactNode } from 'react';
import { Flexbox } from 'react-layout-kit';
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

interface LayoutProps {
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

const getPannelProps = (
  index: number,
):
  | {
      placement: 'left' | 'right' | 'bottom';
      className?: string;
    }
  | false => {
  switch (['left', 'right', 'bottom', 'center'][index]) {
    case 'left':
      return {
        placement: 'left',
      };
    case 'right':
      return {
        placement: 'right',
      };
    case 'bottom':
      return {
        placement: 'bottom',
      };
    case 'center':
      return false;
    default:
      return false;
  }
};

const BasicLayout = (props: LayoutProps) => {
  const { header, footer, leftPannel, rightPannel, bottomPannel, centerPannel, type, ...rest } =
    props;

  const prefixCls = getPrefixCls('layout');
  const { styles, cx } = useStyle(prefixCls);

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
    const { placement } = pannelProps;
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
        <div className={cx(styles.pannel, className)}>{children}</div>
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

export { BasicLayout as Layout };
