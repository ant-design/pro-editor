import { createGlobalStyle } from '../../theme';

// 带改造，需要和 Studio 同步的
const STUDIO_UI_PREFIX = 'studio';

export const OverrideButton = createGlobalStyle`
  .${STUDIO_UI_PREFIX}-btn-solid {
    ${(p) => p.theme.stylish.defaultButton}
  }
`;
