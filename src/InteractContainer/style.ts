import { transparentize } from 'polished';
import { createStyles, injectGlobal } from '../theme';

export const useStyle = createStyles(({ token, prefixCls }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  injectGlobal`
    .${prefixCls}-${token.editorPrefix}-context-canvas {
      &-hover {
        position: relative;
        transition: opacity 0.5s ease-in !important;

        &::after {
          // 固定位置
          position: absolute;
          top: 0;
          left: 0;


          z-index: 100;

          // 保证和 父容器一样大小
          display: block;
          width: 100% !important;
          height: 100% !important;

          // 控制选中样式
          background: ${token.colorFillQuaternary} !important;
          border-radius: 4px !important;
          // 保证可见
          visibility: visible !important;
          cursor: pointer;
          content: '';
        }
      }

      &-click {
        position: relative;
        overflow: visible !important;

        &::after {
          // 固定位置
          position: absolute;
          top: 0;
          left: 0;

          z-index: 100;

          // 保证和 父容器一样大小
          display: block;
          width: 100% !important;
          height: 100% !important;

          // 控制选中样式
          background: ${transparentize(0.8, token.colorPrimary)} !important;
          border: 2px solid ${token.colorPrimary} !important;
          border-radius: 4px !important;
          box-shadow: ${token.boxShadowSecondary} !important;
          // 保证可见
          visibility: visible !important;
          cursor: pointer;
          content: '';
        }
      }
    }`;
  return {};
});
