import { theme } from 'antd';
import type { MappingAlgorithm } from 'antd/es/theme/interface';

/**
 * studio 暗色模式下算法
 * @param seedToken
 * @param mapToken
 */
export const studioDarkAlgorithm: MappingAlgorithm = (seedToken, mapToken) => {
  const mergeToken = theme.darkAlgorithm(seedToken, mapToken);

  return {
    ...mergeToken,

    colorBgLayout: '#20252b',
    colorBgContainer: '#282c34',
    colorBgElevated: '#32363e',
  };
};
