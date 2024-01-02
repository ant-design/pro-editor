import { GetAntdThemeConfig, ThemeAppearance, ThemeMode } from 'antd-style';
import { ThemeConfig } from 'antd/es/config-provider/context';

import { FC, PropsWithChildren } from 'react';
import { OverrideAntdGlobalStyles } from '../antd/override';
import { ThemeProvider, createStudioAntdTheme, getStudioStylish, getStudioToken } from '../theme';

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

// 带改造，需要和 Studio 同步的
const STUDIO_UI_PREFIX = 'studio';

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
