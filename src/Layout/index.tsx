import { FlexboxProps } from 'react-layout-kit';
import { ConfigProvider } from '../ConfigProvider';
import { HeaderAndFooter, HeaderFooterSettings } from './components/HeaderAndFooter';
import { LayoutTypeContainer } from './components/LayoutTypeContainer';
import { PannelDefault, PannelSettings } from './components/PannelDefault';

export type LayoutTypeEnum =
  | 'Left&Right'
  | 'LeftFull'
  | 'RightFull'
  | 'Bottom'
  | string
  | null
  | undefined;

interface LayoutProps extends FlexboxProps {
  header?: HeaderFooterSettings | false;
  footer?: HeaderFooterSettings | false;
  leftPannel?: PannelSettings | false;
  rightPannel?: PannelSettings | false;
  bottomPannel?: PannelSettings | false;
  centerPannel?: PannelSettings | false;
  type?: LayoutTypeEnum;
}

const BasicLayout = (props: LayoutProps) => {
  const {
    header,
    footer,
    leftPannel,
    rightPannel,
    bottomPannel,
    centerPannel,
    type = 'Bottom',
    ...rest
  } = props;

  const pannels = [leftPannel, rightPannel, bottomPannel, centerPannel].map((props, index) => {
    if (props === false) return null;
    return <PannelDefault key={'pannel' + index} {...props} index={index} />;
  });

  const headerandfooter = [header, footer].map((props, index) => {
    if (props === false) return null;
    return <HeaderAndFooter key={index} {...props} type={index === 0 ? 'header' : 'footer'} />;
  });

  return (
    <LayoutTypeContainer
      pannels={pannels}
      headerandfooter={headerandfooter}
      type={type}
      {...rest}
    />
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
