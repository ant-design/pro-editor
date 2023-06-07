import { GetAntdThemeConfig, ThemeAppearance, ThemeMode } from 'antd-style';
import { ThemeConfig } from 'antd/es/config-provider/context';
import type { FC, PropsWithChildren } from 'react';
import { STUDIO_UI_PREFIX } from '../theme';

import { OverrideAntdGlobalStyles } from '../antd/override';
import { createStudioAntdTheme, getStudioStylish, getStudioToken, ThemeProvider } from '../theme';

/**
 * @title 应用容器属性
 */
export interface AppContainerProps {
  /**
   * @title 主题外观
   */
  appearance?: ThemeAppearance;
  /**
   * @title 主题模式
   * @enum ['light', 'dark']
   * @enumNames ['亮色', '暗色']
   * @default 'light'
   */
  themeMode?: ThemeMode;
  /**
   * @title 主题配置
   * @description 可以传入一个对象或者函数来生成主题配置
   */
  theme?: ThemeConfig | GetAntdThemeConfig;
}

export const AppContainer: FC<PropsWithChildren<AppContainerProps>> = ({
  children,
  theme,
  appearance,
  themeMode,
}) => (
  <ThemeProvider
    prefixCls={STUDIO_UI_PREFIX}
    appearance={appearance}
    themeMode={themeMode}
    // 以下都是自定义主题
    theme={theme ?? createStudioAntdTheme}
    customToken={getStudioToken}
    customStylish={getStudioStylish}
  >
    <OverrideAntdGlobalStyles />
    {children}
  </ThemeProvider>
);
