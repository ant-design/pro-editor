import { Flexbox, FlexboxProps } from 'react-layout-kit';
import { ConfigProvider } from '../ConfigProvider';
import { getPrefixCls } from '../theme';
import { HeaderAndFooter, HeaderFooterSettings } from './components/HeaderAndFooter';
import { PannelDefault, PannelSettings } from './components/PannelDefault';
import { useStyle } from './style';

interface LayoutProps extends FlexboxProps {
  header?: HeaderFooterSettings | false;
  footer?: HeaderFooterSettings | false;
  leftPannel?: PannelSettings | false;
  rightPannel?: PannelSettings | false;
  bottomPannel?: PannelSettings | false;
  centerPannel?: PannelSettings | false;
  type?: string;
}

const BasicLayout = (props: LayoutProps) => {
  const { header, footer, leftPannel, rightPannel, bottomPannel, centerPannel, type, ...rest } =
    props;

  const prefixCls = getPrefixCls('layout');
  const { styles } = useStyle(prefixCls);

  const [LeftPannelDom, RightPannelDom, BottomPannelDom, CenterPannelDom] = [
    leftPannel,
    rightPannel,
    bottomPannel,
    centerPannel,
  ].map((props, index) => {
    if (props === false) return null;
    return <PannelDefault key={'pannel' + index} {...props} index={index} />;
  });

  const [HeaderDom, FooterDom] = [header, footer].map((props, index) => {
    if (props === false) return null;
    return <HeaderAndFooter key={index} {...props} type={index === 0 ? 'header' : 'footer'} />;
  });

  return (
    <>
      <Flexbox className={styles.layout} {...rest}>
        {HeaderDom}
        <div className={styles.container}>
          {LeftPannelDom}
          {CenterPannelDom}
          {RightPannelDom}
        </div>
        {BottomPannelDom}
        {FooterDom}
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
