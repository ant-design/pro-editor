import { ConfigProvider as AntdConfigProvider } from 'antd';
import { AntdToken, ThemeAppearance, useAntdToken, useThemeMode } from 'antd-style';
import type { OverrideToken } from 'antd/es/theme/interface';
import type { FC, ReactNode } from 'react';
import { ThemeProvider, createStudioAntdTheme, getStudioStylish, getStudioToken } from '../theme';

export const useStudioAntdTheme = (appearance: ThemeAppearance) => {
  const token = useAntdToken();
  const themeConfig = createStudioAntdTheme(appearance);

  const controlToken: Partial<AntdToken> = {
    colorBgContainer: token?.colorFillQuaternary,
    colorBorder: 'transparent',
    controlOutline: 'transparent',
  };

  themeConfig.components = {
    Input: controlToken,
    InputNumber: controlToken,
    Select: controlToken,
    Tree: {
      colorBgContainer: 'transparent',
    },
    TreeSelect: controlToken,
  };

  return themeConfig;
};

export interface ConfigProviderProps {
  componentToken?: OverrideToken;
  children: ReactNode;
}

export const ConfigProvider: FC<ConfigProviderProps> = ({ children, componentToken }) => {
  const { appearance, themeMode } = useThemeMode();
  const studioTheme = useStudioAntdTheme(appearance);
  studioTheme.components = { ...studioTheme.components, ...componentToken };

  return (
    <AntdConfigProvider theme={studioTheme}>
      <ThemeProvider
        appearance={appearance}
        themeMode={themeMode}
        // 以下都是自定义主题
        theme={createStudioAntdTheme}
        customToken={getStudioToken}
        customStylish={getStudioStylish}
      >
        {children}
      </ThemeProvider>
    </AntdConfigProvider>
  );
};

export const withProvider = (Component) => (props) => {
  return (
    <ConfigProvider>
      <Component {...props} />
    </ConfigProvider>
  );
};
