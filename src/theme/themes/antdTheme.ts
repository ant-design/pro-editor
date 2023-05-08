import { theme, ThemeConfig } from 'antd';
import { ThemeAppearance } from 'antd-style';
import { studioDarkAlgorithm } from './darkAlgorithm';

export const createStudioAntdTheme = (appearance: ThemeAppearance) => {
  const themeConfig: ThemeConfig = {
    algorithm: [theme.compactAlgorithm],
  };

  if (appearance === 'dark') {
    (themeConfig.algorithm as Array<any>).push(studioDarkAlgorithm);
  }

  return themeConfig;
};
