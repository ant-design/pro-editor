import { StudioStylish, StudioThemeToken } from './themes';

export const STUDIO_UI_PREFIX = 'studio';

export function getPrefixCls(suffixCls: string, customizePrefixCls?: string) {
  if (customizePrefixCls) return customizePrefixCls;

  return suffixCls ? `${STUDIO_UI_PREFIX}-${suffixCls}` : STUDIO_UI_PREFIX;
}

declare module 'antd-style' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface CustomToken extends StudioThemeToken {}

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface CustomStylish extends StudioStylish {}
}

export { default as styled } from '@emotion/styled';
export {
  ThemeProvider,
  createGlobalStyle,
  createStyles,
  css,
  cx,
  injectGlobal,
  keyframes,
  useAntdToken as useToken,
  type AntdToken,
  type GetAntdThemeConfig,
  type ThemeAppearance,
  type ThemeMode,
} from 'antd-style';
export * from './themes';
