import { memo } from 'react';
import { ConfigProvider } from '../ConfigProvider';
import { HighlightBase, HighlightProps } from './defalut';
import { useStyles } from './style';
import FullFeatureWrapper from './wrapper';

const Highlight = memo<HighlightProps>((props: HighlightProps) => {
  const { prefixCls, type, theme, containerWrapper } = props;
  const { theme: token } = useStyles({
    prefixCls,
    type,
    theme,
  });

  return (
    <ConfigProvider
      componentToken={{
        Select: {
          colorBgTextHover: token.colorFillSecondary,
          colorBgTextActive: token.colorFill,
        },
        Button: {
          colorText: token.colorTextTertiary,
          colorBgTextHover: token.colorFillSecondary,
          colorBgTextActive: token.colorFill,
        },
      }}
    >
      {containerWrapper ? <FullFeatureWrapper {...props} /> : <HighlightBase {...props} />}
    </ConfigProvider>
  );
});

export * from './defalut';
export * from './wrapper';
export { Highlight };
