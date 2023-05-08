import { GetCustomToken } from 'antd-style';

export interface StudioThemeToken {
  focusedOutlineColor: string;
  colorTypeBoolean: string;
  colorTypeNumber: string;
  colorTypeString: string;
  colorTypeBoolArray: string;
  colorTypeNumberArray: string;
  colorTypeStringArray: string;
}

export const getStudioToken: GetCustomToken<StudioThemeToken> = () => ({
  focusedOutlineColor: '#4c9ffe',
  colorTypeBoolean: '#D8C152',
  colorTypeNumber: '#5295C4',
  colorTypeString: '#149E6D',
  colorTypeBoolArray: '#D8C152',
  colorTypeNumberArray: '#239BEF',
  colorTypeStringArray: '#62AE8D',
});

export const themeToken = getStudioToken({} as any);
