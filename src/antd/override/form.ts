import { createGlobalStyle } from '../../theme';

// 带改造，需要和 Studio 同步的
const STUDIO_UI_PREFIX = 'studio';

export const OverrideForm = createGlobalStyle`
  .${STUDIO_UI_PREFIX}-form-item {
    margin-bottom: 20px;
  }
`;
