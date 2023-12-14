import { createInstance } from 'antd-style';
import { StudioStylish, StudioThemeToken } from './themes';

export const STUDIO_UI_PREFIX = 'studio';

export function getPrefixCls(suffixCls: string, customizePrefixCls?: string) {
  if (customizePrefixCls) return customizePrefixCls;

  return suffixCls ? `${STUDIO_UI_PREFIX}-${suffixCls}` : STUDIO_UI_PREFIX;
}

type ProEditorToken = {
  editorPrefix: string;
};
declare module 'antd-style' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface CustomToken extends StudioThemeToken {}

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface CustomStylish extends StudioStylish {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface CustomToken extends ProEditorToken {}
}

const { createStyles, ThemeProvider } = createInstance<ProEditorToken>({
  customToken: {
    editorPrefix: 'editor',
  },
});

export {
  createGlobalStyle,
  css,
  cx,
  injectGlobal,
  keyframes,
  useAntdToken as useToken,
  type AntdToken,
} from 'antd-style';
export * from './themes';
export { ThemeProvider, createStyles };
