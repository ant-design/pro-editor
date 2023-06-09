import { createStyles } from '../../../theme';

export const useStyles = createStyles(({ css, cx }, prefixCls) => {
  const prefix = `${prefixCls}`;

  return {
    copy: cx(
      `${prefix}-copy`,
      css`
        position: absolute;
        top: 16px;
        right: 16px;
        display: flex;
        flex-direction: column;
        width: 16px;
        height: 16px;
        padding: 0;
        overflow: hidden;
        border: 0;
        outline: none;
        cursor: pointer;
        opacity: 0.6;
        transition: opacity 0.2s;

        &:hover {
          opacity: 0.8;
        }
      `,
    ),
    copyIcon: cx(
      `${prefix}-copy-icon`,
      css`
        width: 16px;
        height: 16px;
        font-size: 16px;

        @keyframes copy-button-trans {
          0% {
            margin-top: 0;
            opacity: 0.8;
          }
          10% {
            margin-top: -16px;
            opacity: 0.8;
          }
          90% {
            margin-top: -16px;
            opacity: 0.8;
          }
          100% {
            margin-top: 0;
            opacity: 0.8;
          }
        }

        &.scoll {
          animation: copy-button-trans 2s;
          animation-play-state: running;
        }
      `,
    ),
  };
});
