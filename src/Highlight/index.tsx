import { useThemeMode } from 'antd-style';
import { memo } from 'react';
import { ConfigProvider } from '../ConfigProvider';
import { HighlightBase, HighlightProps } from './defalut';
import { useStyles } from './style';
import { THEME_AUTO } from './theme';
import FullFeatureWrapper from './wrapper';

const Highlight = memo<HighlightProps>((props: HighlightProps) => {
  const { type, theme: outTheme = THEME_AUTO, containerWrapper } = props;
  // 当为 auto 的时候，根据系统主题来判断
  const { appearance } = useThemeMode();
  const ProviderTheme = appearance === 'dark' ? 'dark' : 'light';
  const theme = outTheme === THEME_AUTO ? ProviderTheme : outTheme;
  const { theme: token } = useStyles({
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
      {containerWrapper ? (
        <FullFeatureWrapper theme={theme} {...props} />
      ) : (
        <HighlightBase theme={theme} {...props} />
      )}
    </ConfigProvider>
  );
});

export * from './defalut';
export * from './wrapper';
export { Highlight };
