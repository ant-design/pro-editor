export const THEME_DARK = 'dark';
export const THEME_LIGHT = 'light';
export const THEME_AUTO = 'auto';

// 主题类型
const tuple = <T extends string[]>(...args: T) => args;
const ThemeTypes = tuple(THEME_DARK, THEME_LIGHT, THEME_AUTO);
export type ThemeType = (typeof ThemeTypes)[number];
