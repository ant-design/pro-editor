import { FlexboxProps } from 'react-layout-kit';
import { withProvider } from '../ConfigProvider';
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

export type ThemeLayoutType = 'pure' | 'ghost' | 'block' | string;

interface LayoutProps extends FlexboxProps {
  header?: HeaderFooterSettings | false;
  footer?: HeaderFooterSettings | false;
  leftPannel?: PannelSettings | false;
  rightPannel?: PannelSettings | false;
  bottomPannel?: PannelSettings | false;
  centerPannel?: PannelSettings | false;
  type?: LayoutTypeEnum;
  themeType?: ThemeLayoutType;
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
    themeType = 'block',
    ...rest
  } = props;

  const pannels = [leftPannel, rightPannel, bottomPannel, centerPannel].map((props, index) => {
    if (props === false) return null;
    return (
      <PannelDefault
        key={'pannel' + index}
        {...props}
        index={index}
        themeType={props?.themeType || themeType}
      />
    );
  });

  const headerandfooter = [header, footer].map((props, index) => {
    if (props === false) return null;
    return (
      <HeaderAndFooter
        key={index}
        {...props}
        type={index === 0 ? 'header' : 'footer'}
        themeType={props?.themeType || themeType}
      />
    );
  });

  return (
    <LayoutTypeContainer
      pannels={pannels}
      headerandfooter={headerandfooter}
      themeType={themeType}
      type={type}
      {...rest}
    />
  );
};

const WrapperLayout: React.FC<LayoutProps> = withProvider(BasicLayout);

export { WrapperLayout as Layout };
